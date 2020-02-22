
// init controller
var controller = new ScrollMagic.Controller();

var ele_scene1 = document.getElementById("scene1");

// build scene
var lao5_scene1 = new ScrollMagic.Scene({triggerElement: "#scene1",duration:550})
// trigger a velocity opaticy animation
//.setVelocity("#animate", {opacity: 0}, {duration: 400})
.setClassToggle("#thewhistle","whistleActive")
.on("enter", function () {
	// trigger animation by changing inline style.
	ele_scene1.style.backgroundColor = "#fff";
})
.on("leave", function () {
	// reset style
	ele_scene1.style.backgroundColor = "";
})
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


var ele_scene3 = document.getElementById("scene3");
var lao5_scene3 = new ScrollMagic.Scene({triggerElement: "#scene3",duration:550})
// trigger a velocity opaticy animation
//.setVelocity("#animate", {opacity: 0}, {duration: 400})

.on("enter", function () {
	// trigger animation by changing inline style.
	ele_scene3.style.backgroundColor = "#000";
})
.on("leave", function () {
	// reset style
	ele_scene3.style.backgroundColor = "";
})
.addIndicators() // add indicators (requires plugin)
.addTo(controller);



// var animateElem = document.getElementById("scene1");
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 100})
// 				.on("enter", function () {
// 					// trigger animation by changing inline style.
// 					animateElem.style.backgroundColor = "grey";
// 				})
// 				.on("leave", function () {
// 					// reset style
// 					animateElem.style.backgroundColor = "";
// 				})
// 				.addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
// 				.addTo(controller);

