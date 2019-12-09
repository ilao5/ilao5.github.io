/**
 * Initialize the viewer
 */
var PSV = new PhotoSphereViewer({
  // main configuration
  panorama: rootURL + '/assets/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
  container: 'photosphere',
  loading_img: rootURL + '/assets/photosphere-logo.gif',
  time_anim: false,
  caption: 'Bryce Canyon National Park <b>&copy; Mark Doliner</b>',
  default_fov: 70,
  default_lat: 0.3,
  mousewheel: false,
  touchmove_two_fingers: true,
  size: {
    height: 500
  },

  // list of markers
  markers: [
    {
      // image marker that opens the panel when clicked
      id: 'image',
      longitude: 0.2,
      latitude: -0.13770,
      image: rootURL + '/assets/pin-blue.png',
      width: 32,
      height: 32,
      anchor: 'bottom center',
      tooltip: 'A image marker. <b>Click me!</b>',
      content: document.getElementById('lorem-content').innerHTML
    },
    {
      // html marker with custom style
      id: 'text',
      longitude: 0,
      latitude: 0,
      html: 'HTML <b>marker</b> &hearts;',
      anchor: 'bottom right',
      scale: [0.5, 1.5],
      style: {
        maxWidth: '100px',
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Helvetica, sans-serif',
        textAlign: 'center'
      },
      tooltip: {
        content: 'An HTML marker',
        position: 'right'
      }
    },
    {
      // polygon marker
      id: 'polygon',
      polygon_px: [
        [3184, 794], [3268, 841], [3367, 1194],
        [3327, 1307], [3065, 1221], [3097, 847]
      ],
      svgStyle: {
        fill: 'rgba(200, 0, 0, 0.2)',
        stroke: 'rgba(200, 0, 50, 0.8)',
        strokeWidth: '2px'
      },
      tooltip: {
        content: 'A dynamic polygon marker',
        position: 'right bottom'
      }
    },
    {
      // polyline marker
      id: 'polyline',
      polyline_rad: [
        [5.924, 0.064], [5.859, -0.061], [5.710, -0.132],
        [5.410, -0.287], [4.329, -0.490], [3.838, -0.370], [3.725, -0.241]
      ],
      svgStyle: {
        stroke: 'rgba(140, 190, 10, 0.8)',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '10px'
      },
      tooltip: 'A dynamic polyline marker'
    },
    {
      // circle marker
      id: 'circle',
      circle: 20,
      x: 2500,
      y: 1000,
      tooltip: 'A circle marker'
    }
  ]
});

/**
 * Create a new marker when the user clicks somewhere
 */
PSV.on('click', function(e) {
  PSV.addMarker({
    id: '#' + Math.random(),
    longitude: e.longitude,
    latitude: e.latitude,
    image: rootURL + '/assets/pin-red.png',
    width: 32,
    height: 32,
    anchor: 'bottom center',
    tooltip: 'Generated pin',
    data: {
      generated: true
    }
  });
});

/**
 * Delete a generated marker when the user clicks on it
 */
PSV.on('select-marker', function(marker) {
  if (marker.data && marker.data.generated) {
    PSV.removeMarker(marker);
  }
});
