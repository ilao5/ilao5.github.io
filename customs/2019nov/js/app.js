// https://www.bootcdn.cn/ScrollMagic/
// https://ihatetomatoes.net/simple-scrollmagic-tutorial/
// https://ihatetomatoes.net/scrollmagic-tutorial-fullscreen-slideshow/
// https://ihatetomatoes.net/svg-scrolling-animation-triggered-scrollmagic/
// https://ihatetomatoes.net/visual-guide-scrollmagic/
// https://www.cnblogs.com/w190/p/9904869.html
// https://www.w3cplus.com/css3/timelinemax-an-introduction-to-tweening.html
// https://www.w3cplus.com/css3/timelinemax-understanding-the-mechanics.html
// https://www.w3cplus.com/blog/tags/522.html
//http://scrollmagic.io/examples/advanced/svg_drawing.html
//http://haoqiao.me/2015/08/21/sprite-scrollmagic.html


$(document).ready(function(){


	




	/*=========================================================*/
	// 音乐音效
	/*=========================================================*/

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

	var sound_2kill = new Howl({
	  	src: [sound_path + '2kill.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.3, //
	});

	var sound_3kill = new Howl({
	  	src: [sound_path + '3kill.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.3, //
	});

	var sound_4kill = new Howl({
	  	src: [sound_path + '4kill.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.3, //
	});

	var sound_5kill = new Howl({
	  	src: [sound_path + '5kill.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.3, //
	});

	stopAudio();


	function stopAudio() 
	{

		sound_chuishao.stop();
		sound_1kill.stop();
		sound_2kill.stop();
		sound_3kill.stop();
		sound_4kill.stop();
		sound_5kill.stop();

	};

	





	/*=========================================================*/
	// Rem自适应
	/*=========================================================*/
	var design_width = 640;
	
	var docEl = document.documentElement;
	var fontsize = 0;

	var clientWidth;
	var clientHeight;

    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    console.log("resizeEvt : ",resizeEvt);
    
    recalc = function () 
    {
    	stopAudio();


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
            fontsize = 100;
            console.log("fontsize1 = ",docEl.style.fontSize);
        }
        else
        {
            docEl.style.fontSize = 100 * (clientWidth / design_width) + 'px';
            fontsize = 100 * (clientWidth / design_width);
            console.log("fontsize2 = ",docEl.style.fontSize);
        }
    };

    if (!document.addEventListener) return;

    window.addEventListener(resizeEvt, recalc, false);
    //document.addEventListener(resizeEvt, recalc, false);


    /*=========================================================*/
	// 窗口缩放自适应
	/*=========================================================*/
    recalc();


    var height_intro = $("#div-intro").height();
	console.log(">>>>>>height_intro = ",height_intro);

	var div = document.getElementById('div-intro');
    console.log(div.offsetHeight); // 224
    console.log(div.clientHeight); // 220

    var bbb = fontsize * div.offsetHeight;
    console.log("bbb = ",bbb);


    var height_20191210 = $("#info_20191210").height();
	console.log(">>>>>>height_20191210 = ",height_20191210);


	// var basic_top = $("#info_20191208").css("top");
	// console.log(">>>>>>basic_top = ",basic_top);

	// var a_index =  basic_top.indexOf("p");
	// console.log(">>>>>>a_index = ",a_index);

	// var number_basic_top = basic_top.slice(0,a_index);
	// console.log(">>>>>>number_basic_top = ",number_basic_top);


	// var basic_top = $("#info_20191208").offset().top;
	// console.log(">>>>>>basic_top = ",basic_top);
	// 
	
	var px_index;

	var basic_top = fontsize * 19;
	console.log(">>>>>>basic_top = ",basic_top);



	var height_20191208 = $("#info_20191208").height();
	console.log(">>>>>>height_20191208 = ",height_20191208);

	//var top_20191210 = (parseInt(number_basic_top) + height_20191208 + 10)+"px";
	var top_20191210 = (basic_top + height_20191208 + 50)+"px";
	console.log(">>>>>>height_20191210 = ",top_20191210);
	$("#info_20191210").css({"top":top_20191210});

	var info_20191210_top = $("#info_20191210").css("top");
	console.log(">>>>>>info_20191210_top = ",info_20191210_top);//8888.88px

	px_index = info_20191210_top.indexOf("p");
	var number_20191210_top = info_20191210_top.slice(0,px_index);
	console.log(">>>>>>number_20191210_top = ",number_20191210_top);

	var height_20191210 = $("#info_20191210").height();
	console.log(">>>>>>height_20191210 = ",height_20191210);
	var top_20191212 = (Number(number_20191210_top) + height_20191210 + 50)+"px";
	$("#info_20191212").css({"top":top_20191212});

	var info_20191212_top = $("#info_20191212").css("top");
	//console.log(">>>>>>info_20191212_top = ",info_20191212_top);//8888.88px













    /*=========================================================*/
	//Random Highlight Words
	/*=========================================================*/
    var eQuote = document.querySelector("#neat");

	var regex = /\ /;
	// save the original paragraph as array of words
	// regex = /[,.?!;:]/; /* Uncomment for sentences */
	var aQuote = eQuote.innerHTML.split(regex);

	// wrap each word with a span
	eQuote.innerHTML = "";
	for(var word in aQuote){
	  eQuote.innerHTML += "<span>" + aQuote[word] + "</span>";
	}
	// ...and save them for later
	var eWords = document.querySelectorAll("span");


	var repeat = setInterval(function() {
	  if(Math.random() > 0.85) fClearAllHighlights(eQuote);
	  fHighlightRandomWord(eWords);
	}, 275);

	function fHighlightRandomWord (e) {
	  var iRandom = Math.floor(Math.random() * e.length);
	  e[iRandom].classList.add("qhighlight");
	}

	function fClearAllHighlights (e) {
	  var nlHighlights = e.querySelectorAll(".qhighlight");
	  // convert the nodeList into an array
	  var aHighlights = Array.prototype.slice.call(nlHighlights);
	  // remove .highlight from the spans which have it
	  Array.prototype.map.call(aHighlights, function(){
	    arguments[0].classList.remove("qhighlight");
	  });
	}


	/*=========================================================*/
	//niceScroll
	/*=========================================================*/
	var lol = {
	    cursorcolor: "#cdd2d6",
	    cursorwidth: "4px",
	    cursorborder: "none"
  	};
	$(".messages").niceScroll(lol);


	/*=========================================================*/
	//inview
	/*=========================================================*/
    /*$('.img-20191212').css('opacity',0);
    $('.img-20191212').on('inview', function(event, isInView) {
	    if (isInView) {
	      $(this).addClass('fadeIn');
	      $(this).css('opacity',1);
	    } else {
	      $(this).removeClass('fadeIn');
	      $(this).css('opacity',0);
	    }
	});*/




    



	/*=========================================================*/
	// ScrollMagic Init
	/*=========================================================*/
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
	
	


	/*=========================================================*/
	//SCENE 引言
	/*=========================================================*/
	var scroll_duration1 = (fontsize * (15-12)) - 30 + 'px';
	
	var ele_quote = $(".quote");
	ele_quote.addClass('out');
	
	var intro_scene = new ScrollMagic.Scene({
		triggerElement: "#trigger_intro",
		// triggerHook: 0.65,
		duration: scroll_duration1
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


	/*=========================================================*/
	//SCENE 首例 jon snow
	/*=========================================================*/

	var scroll_duration2 = (fontsize * (19-15)) - 30 + 'px';

	var ele_jon = $("#jonsnow-box");
	ele_jon.addClass('out');

	var scene_20191201 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20191201",
		// triggerHook: 0.65,
		// duration:300
		duration: scroll_duration2
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



	/*=========================================================*/
	//SCENE 打脸1 1st blood
	/*=========================================================*/
	//var day_20191230 = document.getElementById("line_20191230");

	var ele_box_20191231 = $("#box-20191231-anim");
	ele_box_20191231.addClass('out');

	// build scene
	var lao5_scene20191231 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20191231",
		duration:"60%"
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
	


	/*=========================================================*/
	//SCENE 吹哨人 
	/*=========================================================*/

	//var day_20191230 = document.getElementById("line_20191230");

	// build scene
	var lao5_scene20200101 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20200101",
		duration:"30%"
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


	/*=========================================================*/
	//SCENE 打脸2 double kill
	/*=========================================================*/
	//var day_20191230 = document.getElementById("line_20191230");

	var ele_box_20200103 = $("#box-20200103-anim");
	ele_box_20200103.addClass('out');

	// build scene
	var lao5_scene20200103 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20200103",
		duration:"40%"
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	//.setClassToggle("#thewhistle","whistleActive")
	.on("enter", function () {
		console.log("enter trigger_20200103");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		ele_box_20200103.removeClass('out');
		sound_2kill.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave trigger_20200103");

		ele_box_20200103.addClass('out');

		if (sound_2kill.playing()) 
		{
			sound_2kill.stop();
		}
	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


	/*=========================================================*/
	//SCENE 打脸3 three kill
	/*=========================================================*/
	//var day_20191230 = document.getElementById("line_20191230");

	var ele_box_20200105 = $("#box-20200105-anim");
	ele_box_20200105.addClass('out');

	// build scene
	var lao5_scene20200105 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20200105",
		duration:"40%"
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	//.setClassToggle("#thewhistle","whistleActive")
	.on("enter", function () {
		console.log("enter trigger_20200105");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		ele_box_20200105.removeClass('out');
		sound_3kill.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave trigger_20200105");

		ele_box_20200105.addClass('out');

		if (sound_3kill.playing()) 
		{
			sound_3kill.stop();
		}
	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


	/*=========================================================*/
	//SCENE 打脸4 4 kill
	/*=========================================================*/
	//var day_20191230 = document.getElementById("line_20191230");

	var ele_box_20200111 = $("#box-20200111-anim");
	ele_box_20200111.addClass('out');

	// build scene
	var lao5_scene20200111 = new ScrollMagic.Scene({
		triggerElement: "#trigger_20200111",
		duration:"40%"
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	//.setClassToggle("#thewhistle","whistleActive")
	.on("enter", function () {
		console.log("enter trigger_20200111");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		ele_box_20200111.removeClass('out');
		sound_4kill.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave trigger_20200111");

		ele_box_20200111.addClass('out');

		if (sound_4kill.playing()) 
		{
			sound_4kill.stop();
		}
	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);



	///////////////////////////////////////////////////////////////
	//SCENE Nature
/*	

	var tmax_opts = {
	  delay: 0.5,
	  repeat: -1,
	  repeatDelay: 0.5,
	  yoyo: true
	};

	var tmax_tl           = new TimelineMax(tmax_opts),
	    polyland_shapes   = $('#svg_nature.landscape polygon'),
	    polyland_stagger  = 0.00475,
	    polyland_duration = 1.5;

	CSSPlugin.useSVGTransformAttr = true; // Thanks Jack Doyle@GreenSock for the tip!

	var polyland_staggerFrom = {
	  scale: 0,
	  opacity: 0,
	  transformOrigin: 'center center',
	  ease: Elastic.easeInOut
	  // force3D: true
	};

	var polyland_staggerTo = {
	  opacity: 1,
	  scale: 1,
	  ease: Elastic.easeInOut
	  // force3D: true
	};

	tmax_tl.staggerFromTo(polyland_shapes, polyland_duration, polyland_staggerFrom, polyland_staggerTo, polyland_stagger, 0);

	// tmax_tl.to({frame:0}, 1, {
	//     frame: animation.totalFrames-1,
	//     onUpdate:function(){
	//       animation.goToAndStop((Math.round(this.progress() * 300)), true)
	//     },
	//     ease: Linear.easeNone
	// });

	var ele_div_nature = $("#div_nature");
	// ele_div_nature.addClass('out');

	// build scene
	var lao5_scene_nature = new ScrollMagic.Scene({
		triggerElement: "#div_nature",
		triggerHook: 'onEnter', 
		// triggerOffset: 400, 
		//duration:"50%"
		duration:400
		// tweenChanges: true
	})
	// .setPin("#svg_nature")
	.setTween(tmax_tl)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	
*/

});