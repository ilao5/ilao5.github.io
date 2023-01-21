const MAX_STARS = 200;
const MIN_DENSITY = 0.2;
const MAX_DENSITY = 0.8;
const BOTTOM_ROAD_HEIGHT = 0.15;
const STAR_SCROLL_SPEED = 0.075;
const ROAD_TRAVEL_SPEED = 2;
const ROAD_HEIGHT = 50;
const HILLS_HEIGHT = 200;

const COLORS = {
  BLACK: "#000000",
  LESS_BLACK: "#101010",
  EVEN_LESS_BLACK: "#161823",
  DARK_BLUE: "#050D1E",
  BLUE: "#22324B",
  ORANGE: "orange",
  TRANS: "transparent" };


class Star {
  constructor(x, y, r, a) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.a = a;
  }
  render(context) {
    context.fillStyle = `rgba(255,255,255,${this.a})`;
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    context.fill();
  }
  animate(timestamp) {
    this.y += STAR_SCROLL_SPEED;
  }}


class StarField {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.stars = [];
    this.initialize(this.width, this.height);
  }
  cleanup() {
    this.stars.
    filter(star => star.y >= this.height).
    forEach(star => star.y -= this.height);
  }
  animate() {
    this.stars.forEach(star => star.animate());
    this.cleanup();
  }
  render(context) {
    
    this.drawMilkyWay(context);
    this.drawCityLights(context);
    this.stars.forEach(star => star.render(context));
  }

  drawBackground(context) {
    const gradient = context.createRadialGradient(
    0,
    0,
    this.width,
    this.width,
    this.height,
    0);

    gradient.addColorStop(0, COLORS.BLACK);
    gradient.addColorStop(0.25, COLORS.BLACK);
    gradient.addColorStop(1, COLORS.DARK_BLUE);
    context.fillStyle = gradient;
    context.fillRect(0, 0, this.width, this.height);
  }

  drawMilkyWay(context) {
    context.globalAlpha = 0.5;
    const gradient = context.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0.25, COLORS.TRANS);
    gradient.addColorStop(0.5, COLORS.BLUE);
    gradient.addColorStop(0.75, COLORS.TRANS);
    context.fillStyle = gradient;
    context.fillRect(0, 0, this.width, this.height);
    context.globalAlpha = 1;
  }

  drawCityLights(context) {
    context.globalAlpha = 0.5;
    const gradient = context.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0.25, COLORS.TRANS);
    gradient.addColorStop(0.65, COLORS.TRANS);
    gradient.addColorStop(1, COLORS.ORANGE);
    context.fillStyle = gradient;
    context.fillRect(0, 0, this.width, this.height);
    context.globalAlpha = 1;
  }

  initialize(width, height) {
    
    this.createStarStripe(0, width);
    
    this.createStarStripe(width / 4, width * 3 / 4);
    
    this.createStarStripe(width / 2 - 150, width / 2 + 150);
  }

  createStarStripe(min, max) {
    for (let i = 0; i < MAX_STARS; i++) {
      const x = Math.random() * (max - min) + min;
      const y = Math.random() * this.height;
      this.createStar(x, y);
    }
  }
  createStar(x, y) {
    const intensity = Math.random() * 100;
    const radius = Math.random() * 0.75 + 0.25;
    this.stars.push(new Star(x, y, radius, intensity));
  }}


class Road {
  constructor(canvas) {
    this.offset = 0;
    this.canvas = canvas;
  }
  render(context) {
 
    context.fillStyle = "black";
    context.fillRect(
    0,
    this.canvas.height - ROAD_HEIGHT,
    this.canvas.width,
    this.canvas.height);

    
    context.strokeStyle = "yellow";
    context.lineDashOffset = this.offset;
    context.beginPath();
    context.setLineDash([15, 30]);
    const linePos = this.canvas.height - ROAD_HEIGHT / 2;
    context.moveTo(0, linePos);
    context.lineTo(this.canvas.width, linePos);
    context.stroke();
    context.setLineDash([]);
    context.strokeStyle = "transparent";
  }
  animate(timestamp) {
    this.offset -= ROAD_TRAVEL_SPEED;
  }}


class Car {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = 54;
    this.height = 22;
    this.offset = 0;
    this.resize();
  }
  resize() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - ROAD_HEIGHT / 3 + this.offset;
  }
  render(context) {
    this.resize();
    context.beginPath();
    context.strokeStyle = "white";
    context.fillStyle = "#330000";
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + this.width, this.y);
    context.lineTo(this.x + this.width - 5, this.y - this.height);
    context.lineTo(this.x + this.width - 25, this.y - this.height);
    context.lineTo(this.x + 15, this.y - 12);
    context.lineTo(this.x + 5, this.y - 10);
    context.lineTo(this.x, this.y);
    context.fill();
  }
  animate(timestamp) {
    this.offset = Math.sin(timestamp * 2);
  }
}


const HILL_MARGIN = 800;
class Hills {
  constructor(canvas, color, distance) {
    this.canvas = canvas;
    this.pikes = [];
    this.color = color;
    this.distance = distance;
    this.initialize();
  }
  initialize() {
    const pikesNumber = Math.random() * 20 + 10;
    const distBetween = this.canvas.width / pikesNumber;
    for (let n = 0; n < pikesNumber; n++) {
      this.pikes.push({
        x: -HILL_MARGIN + n * distBetween,
        y: Math.random() * 25 * this.distance });

    }
  }
  render(context) {
    context.fillStyle = this.color;
    context.strokeStyle = "none";
    context.beginPath();
    const baseY = this.canvas.height - ROAD_HEIGHT;
    context.moveTo(-HILL_MARGIN, baseY);

    this.pikes.forEach(pike => {
      context.lineTo(pike.x, baseY - pike.y);
    });
    
    context.lineTo(this.canvas.width + HILL_MARGIN, baseY);
    context.lineTo(-HILL_MARGIN, baseY);
    context.closePath();
    context.fill();
  }
  animate(timestamp) {
    this.pikes.forEach(
    pike => pike.x += ROAD_TRAVEL_SPEED / this.distance);

    this.cleanup();
  }
  cleanup() {
    this.pikes.
    filter(pike => pike.x >= this.canvas.width + HILL_MARGIN).
    forEach(pike => {
      pike.x -= this.canvas.width + HILL_MARGIN * 2;
    });

    this.pikes.sort((a, b) => a.x - b.x);
  }}

class Scene {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.items = [
    new StarField(canvas),
    new Hills(canvas, COLORS.EVEN_LESS_BLACK, 6),
    new Hills(canvas, COLORS.LESS_BLACK, 2),
    new Road(canvas)
   
  ];

  }
  resize() {
   
    this.items[0] = new StarField(canvas);
  }
  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.items.forEach(item => item.render(this.context));
  }
  animate(timestamp) {
    this.items.forEach(item => item.animate(timestamp));
  }}


const canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const scene = new Scene(canvas),
resize = () => {
  console.log(`resize to ${canvas.width}:${canvas.height}`);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  scene.resize();
},
animate = t => {
  scene.animate(t);
  scene.render();
  requestAnimationFrame(animate);
},
initialize = () => {
  resize();
  animate();
};

window.addEventListener("resize", resize, false);
document.addEventListener("DOMContentLoaded", initialize);