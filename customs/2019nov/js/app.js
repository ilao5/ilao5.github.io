$(document).ready(function(){

	var design_width = 640;
	//Rem自适应
	var docEl = document.documentElement;

	var clientWidth;
	var clientHeight;

    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    console.log("resizeEvt : ",resizeEvt);
    
    recalc = function () 
    {

    	clientWidth = docEl.clientWidth;
		clientHeight = docEl.clientHeight;

		if (/(Android)/i.test(navigator.userAgent))// 判断是否为Android手机
		{     
	        clientWidth = screen.width;
	        clientHeight = screen.height;
	    }
	    else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent))// 判断是否为苹果手机
	    {  
	        clientWidth = document.documentElement.clientWidth;
	        clientHeight=document.documentElement.clientHeight;
	    }

       
        console.log("clientWidth = ",clientWidth);

        if (!clientWidth) return;
        if(clientWidth >= design_width)
        {
            docEl.style.fontSize = '100px';
            console.log("fontsize1 = ",docEl.style.fontSize);
        }
        else
        {
            docEl.style.fontSize = 100 * (clientWidth / design_width) + 'px';
            console.log("fontsize2 = ",docEl.style.fontSize);
        }
    };

    if (!document.addEventListener) return;

    window.addEventListener(resizeEvt, recalc, false);
    //document.addEventListener(resizeEvt, recalc, false);

    recalc();



    //音乐音效

	var sound_path = 'sound/';

	// Howler.ctx = new AudioContext();
	// Howler.ctx.resume();

	/*var sound = new Howl({
	  	src: [
	  		sound_path + 'mengyan.mp3',
	  		sound_path + 'chuishao.mp3'
	  		
	  	],
	  	//src: ['_/sound/chuishao.mp3'],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.5, // 音量ntById( "state" ).innerText = "結束";
		onload: function() {
			// 載入後執行
			//document.getElementById( "state" ).innerText = "載入完成";
		},
		onplay: function() {
			// 播放後執行
			//document.getElementById( "state" ).innerText = "播放中";
		},
		onpause: function() {
			// 暫停後執行
			//document.getElementById( "state" ).innerText = "暫停";
		},
		onstop: function() {
			// 停止後執行
			//document.getElementById( "state" ).innerText = "停止";
		},
		onend: function() {
			// 結束後執行
			//document.getElementById( "state" ).innerText = "結束";
		}

	});*/


	//声音
	// var sound_mengyan = new Howl({
	//   	src: [sound_path + 'mengyan.mp3',],
	//   	preload: true, //预加载
	//  	autoplay: false, // 自動播放
	// 	loop: false, // 無限循環
	// 	volume: 0.5, //
	// });

	var sound_chuishao = new Howl({
	  	src: [sound_path + 'chuishao.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.5, //
	});

	var sound_1kill = new Howl({
	  	src: [sound_path + '1kill.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.3, //
	});



	//ScrollMagic Init
	var controller = new ScrollMagic.Controller();


	//SCENE
	
	/*var lao5_scene_virus = new ScrollMagic.Scene({triggerElement: "#line_virus",duration:400})

	.on("enter", function () {
		console.log("enter line_virus");
		$("#div-virus").snowfall({image:"_/img/assets/virusx128.png", flakeCount:10, minSpeed:0.1, minSize:40, maxSize:80,});
		sound_mengyan.play();
	})
	.on("leave", function () {

		console.log("leave line_virus");
		$("#div-virus").snowfall('clear');

		if (sound_mengyan.playing()) 
		{
			sound_mengyan.stop();
		}
	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);*/
	
	


	///////////////////////////////////////////////////////////////
	//SCENE 引言
	var ele_quote = $(".quote");
	ele_quote.addClass('out');

	var intro_scene = new ScrollMagic.Scene({
		triggerElement: "#trigger_intro",
		// triggerHook: 0.65,
		duration: "24%"
	})
	//.on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
    //.on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
    .on("enter", function () {
		console.log("enter trigger_intro");
		ele_quote.removeClass('out');
	})
	.on("leave", function () {
		console.log("leave trigger_intro");
		ele_quote.addClass('out');

	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


	///////////////////////////////////////////////////////////////
	//SCENE 首例
	var ele_jon = $("#jonsnow-box");
	ele_jon.addClass('out');

	var scene_20191201 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20191201",
		// triggerHook: 0.65,
		// duration:300
		duration: "24%"
	})
	//.on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
    //.on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
    .on("enter", function () {
		console.log("enter trigger_20191201");
		ele_jon.removeClass('out');
	})
	.on("leave", function () {
		console.log("leave trigger_20191201");
		ele_jon.addClass('out');

	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);



	///////////////////////////////////////////////////////////////
	//SCENE 吹哨人
	//var day_20191230 = document.getElementById("line_20191230");

	// build scene
	var lao5_scene20191230 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20191230",
		duration:"50%"
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	.setClassToggle("#thewhistle","whistleActive")
	.on("enter", function () {
		console.log("enter trigger_wishtle");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		sound_chuishao.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave trigger_wishtle");
		//sound.stop();
		if (sound_chuishao.playing()) 
		{
			sound_chuishao.stop();
		}
	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


	///////////////////////////////////////////////////////////////
	//SCENE 打脸1
	//var day_20191230 = document.getElementById("line_20191230");

	var ele_box_20191231 = $("#box-20191231-anim");
	ele_box_20191231.addClass('out');

	// build scene
	var lao5_scene20191231 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20191231",
		duration:"40%"
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	//.setClassToggle("#thewhistle","whistleActive")
	.on("enter", function () {
		console.log("enter trigger_20191231");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		ele_box_20191231.removeClass('out');
		sound_1kill.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave trigger_20191231");

		ele_box_20191231.addClass('out');

		if (sound_1kill.playing()) 
		{
			sound_1kill.stop();
		}
	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	


});