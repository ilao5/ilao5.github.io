
THREE.OrbitControls = function ( object, domElement ) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the control orbits around
	// and where it pans with respect to.
	this.target = new THREE.Vector3();

	// center is old, deprecated; use "target" instead
	this.center = this.target;

	// This option actually enables dollying in and out; left as "zoom" for
	// backwards compatibility
	this.noZoom = false;
	this.zoomSpeed = 1.0;

	// Limits to how far you can dolly in and out
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// Set to true to disable this control
	this.noRotate = false;
	this.rotateSpeed = 1.0;

	// Set to true to disable this control
	this.noPan = false;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// Set to true to disable use of the keys
	this.noKeys = false;

	////////////
	// internals

	var scope = this;

	var EPS = 0.000001;

	var offset = new THREE.Vector3();
	
	var phiDelta = 0;
	var thetaDelta = 0;
	
	
	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();

	var _mx = 0, _my = 0;

	this.rotateLeft = function ( angle ) {

		if ( angle === undefined ) {
			angle = getAutoRotationAngle();
		}
		thetaDelta -= angle;
	};

	this.rotateUp = function ( angle ) {

		if ( angle === undefined ) {
			angle = getAutoRotationAngle();
		}
		phiDelta -= angle;
	};

	this.update = function (dtime) {

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
		
		var rx = (_mx / element.clientWidth ) * 2 - 1;
		var ry = (_my / element.clientHeight) * 2 - 1;
		
		scope.rotateLeft(rx * dtime * 0.003);
		scope.rotateUp(ry * dtime * 0.002);
		

		var position = this.object.position;

		offset.copy( position ).sub( this.target );
		
		var theta = Math.atan2( offset.x, offset.z );

		var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		if ( this.autoRotate ) {
			this.rotateLeft( getAutoRotationAngle() );
		}
		
		theta += thetaDelta;
		phi += phiDelta;

		phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = offset.length();
		radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );
		
		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		position.copy( this.target ).add( offset );
		this.object.lookAt( this.target );
		
		thetaDelta = 0;
		phiDelta = 0;
	};
	
	var _flag = false;


	this.reset = function () {

		this.target.copy( this.target0 );
		this.object.position.copy( this.position0 );

		this.update();

	};

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
	}

	function onMouseMove( event ) {

		_mx = event.clientX;
		_my = event.clientY;
		
		event.preventDefault();
	}

	this.domElement.addEventListener( 'mousemove', onMouseMove, false );
	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
};
THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );




THREE.DeviceOrientationControls = function ( object ) {

	var scope = this;

	this.object = object;
	this.object.rotation.reorder( "YXZ" );

	this.enabled = true;

	this.deviceOrientation = {};
	this.screenOrientation = 0;

	var onDeviceOrientationChangeEvent = function ( event ) {

		scope.deviceOrientation = event;

	};

	var onScreenOrientationChangeEvent = function () {

		scope.screenOrientation = window.orientation || 0;

	};

	// The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	var setObjectQuaternion = function () {

		var zee = new THREE.Vector3( 0, 0, 1 );

		var euler = new THREE.Euler();

		var q0 = new THREE.Quaternion();

		var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

		return function ( quaternion, alpha, beta, gamma, orient ) {

			euler.set( beta, alpha, - gamma, 'YXZ' );                       // 'ZXY' for the device, but 'YXZ' for us

			quaternion.setFromEuler( euler );                               // orient the device

			quaternion.multiply( q1 );                                      // camera looks out the back of the device, not the top

			quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) );    // adjust for screen orientation

		}

	}();

	this.connect = function() {

		onScreenOrientationChangeEvent(); // run once on load

		window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		scope.enabled = true;

	};

	this.disconnect = function() {

		window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		scope.enabled = false;

	};
	
	
	var _alpha  = 0;
	var _beta   = 0;
	var _gamma  = 0;
	
	this.speed = 16;
	
	this.update = function () {

		if ( scope.enabled === false ) return;

		var alpha  = scope.deviceOrientation.alpha ? scope.deviceOrientation.alpha  : 0; // Z
		var beta   = scope.deviceOrientation.beta  ? scope.deviceOrientation.beta   : 0; // X'
		var gamma  = scope.deviceOrientation.gamma ? scope.deviceOrientation.gamma  : 0; // Y''
		var orient = scope.screenOrientation       ? scope.screenOrientation        : 0; // O
		
		if (1 < this.speed)
		{
			alpha -= 360 * Math.ceil(Math.floor((alpha - _alpha) / 180) / 2);
			beta  -= 360 * Math.ceil(Math.floor((beta  - _beta ) / 180) / 2);
			gamma -= 360 * Math.ceil(Math.floor((gamma - _gamma) / 180) / 2);
			
			_alpha  += (alpha  - _alpha ) / this.speed;
			_beta   += (beta   - _beta  ) / this.speed;
			_gamma  += (gamma  - _gamma ) / this.speed;
		}
		else
		{
			_alpha = alpha;
			_beta  = beta;
			_gamma = gamma;
		}
		
		setObjectQuaternion( scope.object.quaternion, THREE.Math.degToRad(_alpha), THREE.Math.degToRad(_beta), THREE.Math.degToRad(_gamma), THREE.Math.degToRad(orient) );
	};

	this.connect();
};



THREE.StereoEffect = function ( renderer ) {

	var _stereo = new THREE.StereoCamera();
	_stereo.aspect = 0.5;

	this.setSize = function ( width, height ) {

		renderer.setSize( width, height );

	};

	this.render = function ( scene, camera ) {

		scene.updateMatrixWorld();

		if ( camera.parent === null ) camera.updateMatrixWorld();

		_stereo.update( camera );

		var size = renderer.getSize();

		renderer.setScissorTest( true );
		renderer.clear();

		renderer.setScissor( 0, 0, size.width / 2, size.height );
		renderer.setViewport( 0, 0, size.width / 2, size.height );
		renderer.render( scene, _stereo.cameraL );

		renderer.setScissor( size.width / 2, 0, size.width / 2, size.height );
		renderer.setViewport( size.width / 2, 0, size.width / 2, size.height );
		renderer.render( scene, _stereo.cameraR );

		renderer.setScissorTest( false );

	};

};

