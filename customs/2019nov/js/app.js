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


	var sound_jonsnow = new Howl({
	  	src: [sound_path + 'jonsnow.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 1, //
	});

	var sound_chuishao = new Howl({
	  	src: [sound_path + 'chuishao.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: true, // 無限循環
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

	var sound_transformer = new Howl({
	  	src: [sound_path + 'transformer.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.3, //
	});

	var sound_xindian = new Howl({
	  	src: [sound_path + 'xindian.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: true, // 無限循環
		volume: 0.3, //
	});

	var sound_thuglife = new Howl({
	  	src: [sound_path + 'thuglife.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.3, //
	});

	var sound_depose = new Howl({
	  	src: [sound_path + 'depose.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.2, //
	});

	var sound_snow = new Howl({
	  	src: [sound_path + 'snow.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: true, // 無限循環
		volume: 0.3, //
	});

	var sound_nottoday = new Howl({
	  	src: [sound_path + 'nottoday.mp3',],
	  	preload: true, //预加载
	 	autoplay: false, // 自動播放
		loop: false, // 無限循環
		volume: 0.3, //
	});

	//Howler.ctx = new AudioContext();
	//Howler.ctx.resume();
	

	stopAudio();


	function stopAudio() 
	{
		sound_jonsnow.stop();
		sound_chuishao.stop();
		sound_1kill.stop();
		sound_2kill.stop();
		sound_3kill.stop();
		sound_4kill.stop();
		sound_5kill.stop();
		sound_transformer.stop();
		sound_xindian.stop();
		sound_thuglife.stop();
		sound_snow.stop();
		sound_depose.stop();
		sound_nottoday.stop();
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
		console.log(">>clientWidth = ",clientWidth);

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

	var basic_top = (fontsize * 19);
	console.log("1>>>>>>basic_top = ",basic_top);



	var height_20191208 = $("#info_20191208").height();
	console.log("2>>>>>>height_20191208 = ",height_20191208);

	//var top_20191210 = (parseInt(number_basic_top) + height_20191208 + 10)+"px";
	var top_20191210 = basic_top + height_20191208 + 50;
	//var top_20191210 = ()+"px";
	console.log(">>>>>>top_20191210 = ",top_20191210);
	$("#info_20191210").css({"top":top_20191210+"px"});

	//var info_20191210_top = $("#info_20191210").css("top");
	//console.log(">>>>>>info_20191210_top = ",info_20191210_top);//8888.88px

	//px_index = info_20191210_top.indexOf("p");
	//var number_20191210_top = info_20191210_top.slice(0,px_index);
	//console.log(">>>>>>number_20191210_top = ",number_20191210_top);

	var height_20191210 = $("#info_20191210").height();
	console.log("3>>>>>>height_20191210 = ",height_20191210);

	var top_20191212 = top_20191210 + height_20191210 + 50;
	console.log("4>>>>>>top_20191212 = ",top_20191212);

	$("#info_20191212").css({"top":top_20191212 + "px"});

	//var info_20191212_top = $("#info_20191212").css("top");
	//console.log("5>>>>>>info_20191212_top = ",info_20191212_top);//8888.88px


	var height_20191212 = $("#info_20191212").height();
	var top_20191213 = top_20191212 + height_20191212 + 50;
	$("#info_20191213").css({"top":top_20191213 + "px"});


	var height_20191213 = $("#info_20191213").height();
	var top_20191215 = top_20191213 + height_20191213 + 50;
	$("#info_20191215").css({"top":top_20191215 + "px"});

	var height_20191215 = $("#info_20191215").height();
	var top_20191216 = top_20191215 + height_20191215 + 50;
	$("#info_20191216").css({"top":top_20191216 + "px"});

	var height_20191216 = $("#info_20191216").height();
	var top_20191217 = top_20191216 + height_20191216 + 50;
	$("#info_20191217").css({"top":top_20191217 + "px"});

	var height_20191217 = $("#info_20191217").height();
	var top_20191218 = top_20191217 + height_20191217 + 50;
	$("#info_20191218").css({"top":top_20191218 + "px"});

	var height_20191218 = $("#info_20191218").height();
	var top_20191219 = top_20191218 + height_20191218 + 50;
	$("#info_20191219").css({"top":top_20191219 + "px"});


	var height_20191219 = $("#info_20191219").height();
	var top_anim_20191219 = top_20191219 + height_20191219 / 2;
	$("#div-20191219-anim").css({"top":top_anim_20191219 + "px"});

	var top_20191220 = top_20191219 + height_20191219 + 50;
	$("#info_20191220").css({"top":top_20191220 + "px"});

	var height_20191220 = $("#info_20191220").height();
	var top_20191221 = top_20191220 + height_20191220 + 50;
	$("#info_20191221").css({"top":top_20191221 + "px"});

	var height_20191221 = $("#info_20191221").height();
	var top_20191222 = top_20191221 + height_20191221 + 50;
	$("#info_20191222").css({"top":top_20191222 + "px"});

	var height_20191222 = $("#info_20191222").height();
	var top_20191223 = top_20191222 + height_20191222 + 50;
	$("#info_20191223").css({"top":top_20191223 + "px"});

	var height_20191223 = $("#info_20191223").height();
	var top_20191224 = top_20191223 + height_20191223 + 50;
	$("#info_20191224").css({"top":top_20191224 + "px"});

	var height_20191224 = $("#info_20191224").height();
	var top_20191225 = top_20191224 + height_20191224 + 50;
	$("#info_20191225").css({"top":top_20191225 + "px"});

	var height_20191225 = $("#info_20191225").height();
	var top_20191226 = top_20191225 + height_20191225 + 50;
	$("#info_20191226").css({"top":top_20191226 + "px"});

	var height_20191226 = $("#info_20191226").height();
	var top_20191227 = top_20191226 + height_20191226 + 50;
	$("#info_20191227").css({"top":top_20191227 + "px"});

	var height_20191227 = $("#info_20191227").height();
	var top_20191228 = top_20191227 + height_20191227 + 50;
	$("#info_20191228").css({"top":top_20191228 + "px"});

	var height_20191228 = $("#info_20191228").height();
	var top_20191229 = top_20191228 + height_20191228 + 50;
	$("#info_20191229").css({"top":top_20191229 + "px"});

	var height_20191229 = $("#info_20191229").height();
	var top_20191230 = top_20191229 + height_20191229 + 50;
	$("#info_20191230").css({"top":top_20191230 + "px"});
	console.log(">>>>>top_20191230 = ",top_20191230);

	

	var height_anchor_20191230_to_father = $("#anchor_20191230").position().top;//距离父节点距离
	//console.log(">>>>>height_anchor_20191230_to_father = ",height_anchor_20191230_to_father);

	var height_anchor_20191230 = $("#anchor_20191230").height();
	var top_anim_20191230 = top_20191230 + height_anchor_20191230_to_father + height_anchor_20191230 / 2;
	$("#div-20191230-anim1").css({"top":top_anim_20191230 + "px"});


	var height_20191230 = $("#info_20191230").height();
	var top_20191231 = top_20191230 + height_20191230 + 50;
	$("#info_20191231").css({"top":top_20191231 + "px"});
	console.log(">>>>>top_20191231 = ",top_20191231);

	var height_anchor_20191231_to_father = $("#anchor_20191231").position().top;//距离父节点距离
	var height_anchor_20191231 = $("#anchor_20191231").height();
	var top_anim_20191231 = top_20191231 + height_anchor_20191231_to_father + height_anchor_20191231 / 2;
	$("#div-20191231-anim").css({"top":top_anim_20191231 + "px"});



	var height_20191231 = $("#info_20191231").height();
	var top_20200101 = top_20191231 + height_20191231 + 50;
	$("#info_20200101").css({"top":top_20200101 + "px"});


	var height_anchor_20200101_to_father = $("#anchor_20200101").position().top;//距离父节点距离
	var height_anchor_20200101 = $("#anchor_20200101").height();
	var top_anim_20200101_whistle = top_20200101 + height_anchor_20200101_to_father + height_anchor_20200101 / 2;
	$("#div_whistle").css({"top":top_anim_20200101_whistle + "px"});



	var height_20200101 = $("#info_20200101").height();
	var top_20200102 = top_20200101 + height_20200101 + 50;
	$("#info_20200102").css({"top":top_20200102 + "px"});

	var height_20200102 = $("#info_20200102").height();
	var top_20200103 = top_20200102 + height_20200102 + 50;
	$("#info_20200103").css({"top":top_20200103 + "px"});


	var height_anchor_20200103_to_father = $("#anchor_20200103").position().top;//距离父节点距离
	var height_anchor_20200103 = $("#anchor_20200103").height();
	var top_anim_20200103 = top_20200103 + height_anchor_20200103_to_father + height_anchor_20200103 / 2;
	$("#div-20200103-anim").css({"top":top_anim_20200103 + "px"});



	var height_20200103 = $("#info_20200103").height();
	var top_20200104 = top_20200103 + height_20200103 + 50;
	$("#info_20200104").css({"top":top_20200104 + "px"});

	var height_20200104 = $("#info_20200104").height();
	var top_20200105 = top_20200104 + height_20200104 + 50;
	$("#info_20200105").css({"top":top_20200105 + "px"});


	var height_anchor_20200105_to_father = $("#anchor_20200105").position().top;//距离父节点距离
	var height_anchor_20200105 = $("#anchor_20200105").height();
	var top_anim_20200105 = top_20200105 + height_anchor_20200105_to_father + height_anchor_20200105 / 2;
	$("#div-20200105-anim").css({"top":top_anim_20200105 + "px"});


	var height_20200105 = $("#info_20200105").height();
	var top_20200106 = top_20200105 + height_20200105 + 50;
	$("#info_20200106").css({"top":top_20200106 + "px"});

	var height_20200106 = $("#info_20200106").height();
	var top_20200107 = top_20200106 + height_20200106 + 50;
	$("#info_20200107").css({"top":top_20200107 + "px"});

	var height_20200107 = $("#info_20200107").height();
	var top_20200108 = top_20200107 + height_20200107 + 50;
	$("#info_20200108").css({"top":top_20200108 + "px"});

	var height_20200108 = $("#info_20200108").height();
	var top_20200109 = top_20200108 + height_20200108 + 50;
	$("#info_20200109").css({"top":top_20200109 + "px"});

	var height_20200109 = $("#info_20200109").height();
	var top_20200110 = top_20200109 + height_20200109 + 50;
	$("#info_20200110").css({"top":top_20200110 + "px"});

	var height_20200110 = $("#info_20200110").height();
	var top_20200111 = top_20200110 + height_20200110 + 50;
	$("#info_20200111").css({"top":top_20200111 + "px"});

	//4 kill
	var height_anchor_20200111_to_father = $("#anchor_20200111").position().top;//距离父节点距离
	var height_anchor_20200111 = $("#anchor_20200111").height();
	var top_anim_20200111 = top_20200111 + height_anchor_20200111_to_father + height_anchor_20200111 / 2;
	$("#div-20200111-anim").css({"top":top_anim_20200111 + "px"});


	var height_20200111 = $("#info_20200111").height();
	var top_20200112 = top_20200111 + height_20200111 + 50;
	$("#info_20200112").css({"top":top_20200112 + "px"});

	var height_20200112 = $("#info_20200112").height();
	var top_20200113 = top_20200112 + height_20200112 + 50;
	$("#info_20200113").css({"top":top_20200113 + "px"});

	var height_20200113 = $("#info_20200113").height();
	var top_20200114 = top_20200113 + height_20200113 + 50;
	$("#info_20200114").css({"top":top_20200114 + "px"});

	var height_20200114 = $("#info_20200114").height();
	var top_20200115 = top_20200114 + height_20200114 + 50;
	$("#info_20200115").css({"top":top_20200115 + "px"});

	var height_20200115 = $("#info_20200115").height();
	var top_20200116 = top_20200115 + height_20200115 + 50;
	$("#info_20200116").css({"top":top_20200116 + "px"});

	var height_20200116 = $("#info_20200116").height();
	var top_20200117 = top_20200116 + height_20200116 + 50;
	$("#info_20200117").css({"top":top_20200117 + "px"});

	var height_20200117 = $("#info_20200117").height();
	var top_20200118 = top_20200117 + height_20200117 + 50;
	$("#info_20200118").css({"top":top_20200118 + "px"});

	var height_20200118 = $("#info_20200118").height();
	var top_20200119 = top_20200118 + height_20200118 + 50;
	$("#info_20200119").css({"top":top_20200119 + "px"});

	var height_20200119 = $("#info_20200119").height();
	var top_20200120 = top_20200119 + height_20200119 + 50;
	$("#info_20200120").css({"top":top_20200120 + "px"});

	var height_20200120 = $("#info_20200120").height();
	var top_20200121 = top_20200120 + height_20200120 + 50;
	$("#info_20200121").css({"top":top_20200121 + "px"});

	var height_20200121 = $("#info_20200121").height();
	var top_20200122 = top_20200121 + height_20200121 + 50;
	$("#info_20200122").css({"top":top_20200122 + "px"});

	var height_20200122 = $("#info_20200122").height();
	var top_20200123 = top_20200122 + height_20200122 + 50;
	$("#info_20200123").css({"top":top_20200123 + "px"});

	var height_20200123 = $("#info_20200123").height();
	var top_20200124 = top_20200123 + height_20200123 + 50;
	$("#info_20200124").css({"top":top_20200124 + "px"});

	var height_20200124 = $("#info_20200124").height();
	var top_20200125 = top_20200124 + height_20200124 + 50;
	$("#info_20200125").css({"top":top_20200125 + "px"});

	var height_20200125 = $("#info_20200125").height();
	var top_20200126 = top_20200125 + height_20200125 + 50;
	$("#info_20200126").css({"top":top_20200126 + "px"});

	var height_20200126 = $("#info_20200126").height();
	var top_20200127 = top_20200126 + height_20200126 + 50;
	$("#info_20200127").css({"top":top_20200127 + "px"});

	var height_20200127 = $("#info_20200127").height();
	var top_20200128 = top_20200127 + height_20200127 + 50;
	$("#info_20200128").css({"top":top_20200128 + "px"});

	var height_20200128 = $("#info_20200128").height();
	var top_20200129 = top_20200128 + height_20200128 + 50;
	$("#info_20200129").css({"top":top_20200129 + "px"});

	var height_20200129 = $("#info_20200129").height();
	var top_20200130 = top_20200129 + height_20200129 + 50;
	$("#info_20200130").css({"top":top_20200130 + "px"});

	var height_20200130 = $("#info_20200130").height();
	var top_20200131 = top_20200130 + height_20200130 + 50;
	$("#info_20200131").css({"top":top_20200131 + "px"});

	var height_20200131 = $("#info_20200131").height();
	var top_20200201 = top_20200131 + height_20200131 + 50;
	$("#info_20200201").css({"top":top_20200201 + "px"});


	var height_box_car_a0260w = $("#box-car-a0260w").height();

	var height_20200201 = $("#info_20200201").height();
	var top_car_a0260w = top_20200201 + height_20200201 + 50;
	$("#info_car_a0260w").css({"top":top_car_a0260w + "px"});
	$("#div-car-a0260w-anim").css({"top":top_car_a0260w + "px"});



	var height_car_a0260w = $("#div-car-a0260w-anim").height();
	var top_20200202 = top_car_a0260w + height_car_a0260w + 50;
	$("#info_20200202").css({"top":top_20200202 + "px"});



	var height_20200202 = $("#info_20200202").height();
	var top_lie_words = top_20200202 + height_20200202 + 50;
	$("#info_lie_words").css({"top":top_lie_words + "px"});
	$("#div-lie-words-anim").css({"top":top_lie_words + "px"});



	var height_lie_words_anim = $("#div-lie-words-anim").height();
	console.log("=====height_lie_words_anim = ",height_lie_words_anim);

	var padding_lie_words_anim = $("#div-lie-words-anim").css("padding-top");
	px_index = padding_lie_words_anim.indexOf("p");
	var number_padding_lie_words_anim = padding_lie_words_anim.slice(0,px_index);

	console.log("=====number_padding_lie_words_anim = ",number_padding_lie_words_anim);

	var top_20200203 = top_lie_words + height_lie_words_anim + number_padding_lie_words_anim * 2;
	$("#info_20200203").css({"top":top_20200203 + "px"});
	


	var height_20200203 = $("#info_20200203").height();

	//方舱医院
	//var height_anchor_20200203_to_father = $("#anchor_20200203").position().top;//距离父节点距离
	//var height_anchor_20200203 = $("#anchor_20200203").height();
	//
	//var height_20200203_anim = $("#div-20200203-anim").height();
	// var top_anim_20200203 = top_20200203 + height_20200203 + (height_20200203_anim / 2)  + 20;
	//var top_anim_20200203 = top_20200203 + height_20200203;
	//$("#div-20200203-anim").css({"top":top_anim_20200203 + "px"});
	//
	
	var top_square_cabin_hospital = top_20200203 + height_20200203 + 50;
	$("#info_square_cabin").css({"top":top_square_cabin_hospital + "px"});
	$("#div-square-cabin-anim").css({"top":top_square_cabin_hospital + "px"});


	var height_info_square_cabin = $("#info_square_cabin").height();
	var height_square_cabin_anim = $("#div-square-cabin-anim").height();
	var top_20200204 = top_square_cabin_hospital + height_info_square_cabin + height_square_cabin_anim + 50;
	$("#info_20200204").css({"top":top_20200204 + "px"});

	var height_20200204 = $("#info_20200204").height();
	var top_20200205 = top_20200204 + height_20200204 + 50;
	$("#info_20200205").css({"top":top_20200205 + "px"});

	var height_20200205 = $("#info_20200205").height();
	var top_motion_words = top_20200205 + height_20200205 + 50;
	$("#info_motion_words").css({"top":top_motion_words + "px"});
	$("#div-motion-words-anim").css({"top":top_motion_words + "px"});


	var height_motion_words_anim = $("#div-motion-words-anim").height();
	var padding_motion_words_anim = $("#div-motion-words-anim").css("padding-top");
	px_index = padding_motion_words_anim.indexOf("p");
	var number_padding_motion_words_anim = padding_motion_words_anim.slice(0,px_index);

	var top_20200206 = top_motion_words + height_motion_words_anim + number_padding_motion_words_anim * 2;
	$("#info_20200206").css({"top":top_20200206 + "px"});


	//李文亮
	var height_20200206 = $("#info_20200206").height();
	var top_hero_liwenliang = top_20200206 + height_20200206 + 50;
	$("#info_liwenliang").css({"top":top_hero_liwenliang + "px"});
	$("#div-hero-liwenliang-anim").css({"top":top_hero_liwenliang + "px"});
	


	var height_hero_liwenliang = $("#div-hero-liwenliang-anim").height();
	// var top_20200207 = top_20200206 + height_20200206 + 50;
	var top_20200207 = top_hero_liwenliang + height_hero_liwenliang + 50;
	$("#info_20200207").css({"top":top_20200207 + "px"});

	
	

	var height_20200207 = $("#info_20200207").height();
	var top_20200208 = top_20200207 + height_20200207 + 50;
	$("#info_20200208").css({"top":top_20200208 + "px"});

	var height_20200208 = $("#info_20200208").height();
	var top_20200209 = top_20200208 + height_20200208 + 50;
	$("#info_20200209").css({"top":top_20200209 + "px"});

	var height_20200209 = $("#info_20200209").height();
	var top_20200210 = top_20200209 + height_20200209 + 50;
	$("#info_20200210").css({"top":top_20200210 + "px"});

	var height_20200210 = $("#info_20200210").height();
	var top_20200211 = top_20200210 + height_20200210 + 50;
	$("#info_20200211").css({"top":top_20200211 + "px"});

	var height_20200211 = $("#info_20200211").height();
	var top_20200212 = top_20200211 + height_20200211 + 50;
	$("#info_20200212").css({"top":top_20200212 + "px"});

	var height_20200212 = $("#info_20200212").height();
	var top_20200213 = top_20200212 + height_20200212 + 50;
	$("#info_20200213").css({"top":top_20200213 + "px"});

	//免职
	var height_anchor_20200213_to_father = $("#anchor_20200213").position().top;//距离父节点距离
	var height_anchor_20200213 = $("#anchor_20200213").height();
	var top_anim_20200213 = top_20200213 + height_anchor_20200213_to_father + height_anchor_20200213 / 2;
	$("#div-20200213-anim").css({"top":top_anim_20200213 + "px"});


	var height_20200213 = $("#info_20200213").height();
	var top_20200214 = top_20200213 + height_20200213 + 50;
	$("#info_20200214").css({"top":top_20200214 + "px"});

	
	var height_20200214 = $("#info_20200214").height();
	var top_20200215 = top_20200214 + height_20200214 + 50;
	$("#info_20200215").css({"top":top_20200215 + "px"});

	var height_20200215 = $("#info_20200215").height();
	var top_20200216 = top_20200215 + height_20200215 + 50;
	$("#info_20200216").css({"top":top_20200216 + "px"});

	var height_20200216 = $("#info_20200216").height();
	var top_20200217 = top_20200216 + height_20200216 + 50;
	$("#info_20200217").css({"top":top_20200217 + "px"});

	var height_20200217 = $("#info_20200217").height();
	var top_20200218 = top_20200217 + height_20200217 + 50;
	$("#info_20200218").css({"top":top_20200218 + "px"});

	var height_20200218 = $("#info_20200218").height();
	var top_20200219 = top_20200218 + height_20200218 + 50;
	$("#info_20200219").css({"top":top_20200219 + "px"});

	var height_20200219 = $("#info_20200219").height();
	var top_20200220 = top_20200219 + height_20200219 + 50;
	$("#info_20200220").css({"top":top_20200220 + "px"});

	var height_20200220 = $("#info_20200220").height();
	var top_20200221 = top_20200220 + height_20200220 + 50;
	$("#info_20200221").css({"top":top_20200221 + "px"});

	var height_20200221 = $("#info_20200221").height();
	var top_20200222 = top_20200221 + height_20200221 + 50;
	$("#info_20200222").css({"top":top_20200222 + "px"});

	var height_20200222 = $("#info_20200222").height();
	var top_20200223 = top_20200222 + height_20200222 + 50;
	$("#info_20200223").css({"top":top_20200223 + "px"});

	var height_20200223 = $("#info_20200223").height();
	var top_20200224 = top_20200223 + height_20200223 + 50;
	$("#info_20200224").css({"top":top_20200224 + "px"});

	var height_20200224 = $("#info_20200224").height();
	var top_to_be_continued = top_20200224 + height_20200224 + 50;
	$("#info_to_be_continued").css({"top":top_to_be_continued + "px"});
	$("#div-to-be-continued-anim").css({"top":top_to_be_continued + "px"});



	var height_to_be_continued = $("#div-to-be-continued-anim").height();
	var padding_to_be_continued_anim = $("#div-to-be-continued-anim").css("padding-top");
	px_index = padding_to_be_continued_anim.indexOf("p");
	var number_padding_to_be_continued_anim = padding_to_be_continued_anim.slice(0,px_index);
	var top_end_words = top_to_be_continued + height_to_be_continued + number_padding_to_be_continued_anim * 2 + 50;
	$("#info_end_words").css({"top":top_end_words + "px"});
	$("#div-end-words-anim").css({"top":top_end_words + "px"});

	
	var height_end_words = $("#div-end-words-anim").height();
	var padding_end_words_anim = $("#div-end-words-anim").css("padding-top");
	px_index = padding_end_words_anim.indexOf("p");
	var number_padding_end_words_anim = padding_end_words_anim.slice(0,px_index);
	var top_but_words = top_end_words + height_end_words + number_padding_end_words_anim * 2 + 50;
	$("#info_but_words").css({"top":top_but_words + "px"});
	$("#div-but-words-anim").css({"top":top_but_words + "px"});

	var height_but_words_anim = $("#div-but-words-anim").height();
	var top_zhihu_words = top_but_words + height_but_words_anim + 50;
	$("#info_zhihu_words").css({"top":top_zhihu_words + "px"});
	$("#div-zhihu-words-anim").css({"top":top_zhihu_words + "px"});

	var height_zhihu_words_anim = $("#div-zhihu-words-anim").height();
	var padding_zhihu_words_anim = $("#div-zhihu-words-anim").css("padding-top");
	px_index = padding_zhihu_words_anim.indexOf("p");
	var number_padding_zhihu_words_anim = padding_zhihu_words_anim.slice(0,px_index);
	var top_thinking_words = top_zhihu_words + height_zhihu_words_anim + number_padding_zhihu_words_anim * 2 + 50;
	$("#info_thinking_words").css({"top":top_thinking_words + "px"});
	$("#div-thinking-words-anim").css({"top":top_thinking_words + "px"});


	var height_thinking_words = $("#div-thinking-words-anim").height();
	var top_question = top_thinking_words + height_thinking_words + 50;

	var question_height = clientHeight * 0.8;
	$("#info_question").css({"top":top_question + "px"});
	$("#div-end-question-anim").css({"top":top_question + "px","height":question_height+"px","min-height":question_height+"px"});


	//所以我们讨论
	var height_end_question_anim = $("#div-end-question-anim").height();
	var top_talking_words = top_question + height_end_question_anim + 50;
	$("#info_talking_words").css({"top":top_talking_words + "px"});
	$("#div-talking-words-anim").css({"top":top_talking_words + "px"});


	//wechat
	var height_talking_words_anim = $("#div-talking-words-anim").height();
	var top_wechat = top_talking_words + height_talking_words_anim + 50;
	$("#info_wechat").css({"top":top_wechat + "px"});
	$("#div-wechat-anim").css({"top":top_wechat + "px"});



	var height_wechat_anim = $("#div-wechat-anim").height();
	console.log("????? top_wechat = ",top_wechat);
	console.log("????? height_wechat_anim = ",height_wechat_anim);
	var top_got_light = top_wechat + height_wechat_anim + 50;
	$("#info_got_light").css({"top":top_got_light + "px"});
	$("#div-got-light-anim").css({"top":top_got_light + "px"});

	console.log("????? top_got_light = ",top_got_light);

	var d = document.querySelector('#div-wechat-anim');
	var offsetheight_wechat_anim = d.offsetHeight;
	console.log("????? d.offsetHeight = ",offsetheight_wechat_anim);

	var outerHeight_wechat_anim1 = $("#div-wechat-anim").outerHeight();
	var outerHeight_wechat_anim2 = $("#div-wechat-anim").outerHeight(true);
	console.log("????? outerHeight_wechat_anim1 = ",outerHeight_wechat_anim1);
	console.log("????? outerHeight_wechat_anim2 = ",outerHeight_wechat_anim2);


	var height_last_to_father = $("#last-word").position().top;
	console.log("????? height_last_to_father = ",height_last_to_father);

	var outerHeight_last_word0 = $("#last-word").height();
	var outerHeight_last_word1 = $("#last-word").outerHeight();
	var outerHeight_last_word2 = $("#last-word").outerHeight(true);
	console.log("????? outerHeight_last_word0 = ",outerHeight_last_word0);
	console.log("????? outerHeight_last_word1 = ",outerHeight_last_word1);
	console.log("????? outerHeight_last_word2 = ",outerHeight_last_word2);


	var total = 0;
	$(".chat-thread li").each(function(){
		total = total + $(this).outerHeight(true);
    });
	console.log("????? total = ",total);


	var pic_Height = clientWidth * 480 / 720;
	$("#img-torch").css({"width":clientWidth + "px"});
	$("#img-torch").css({"height":pic_Height + "px"});


	var height_got_light = $("#div-got-light-anim").height();
	var top_friend_words = top_got_light + height_got_light + 50;
	$("#info_friend_words").css({"top":top_friend_words + "px"});
	$("#div-friend-words-anim").css({"top":top_friend_words + "px"});

	// var height_got_light_anim = $("#div-got-light-anim").height();
	// var top_got_light = top_got_light + height_got_light_anim + 50;
	// $("#info_but_words").css({"top":top_but_words + "px"});
	// $("#div-but-words-anim").css({"top":top_but_words + "px"});


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


	// var repeat = setInterval(function() {
	//   if(Math.random() > 0.95) 
	//   {
	//   		fClearAllHighlights(eQuote);
	//   }
	//   fHighlightRandomWord(eWords);
	// }, 200);

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






	var isFireFlyRun = false;
	var fireflies = 25;
	// var $container = $("#firefly-mask");
	// var $container = $("#div-friend-words-anim");
	var $container = $("#div-firefly");
	
	
	var $containerWidth = $container.width();
	var $containerHeight = $container.height();
	//var master = new TimelineMax();

	//startFirefly();

	function startFirefly(){

		if(isFireFlyRun)
		{
			return;
		}

		for (var i = 0; i < fireflies; i++) {
		  var firefly = $('<div class="firefly"></div>');
		  TweenLite.set(firefly, {
		    x: Math.random() * $containerWidth,
		    y: Math.random() * $containerHeight
		  });
		  $container.append(firefly);
		  flyTheFirefly(firefly);
		  isFireFlyRun = true;
		}
	}


	function flyTheFirefly(elm) {
	  var flyTl = new TimelineMax();
	  var fadeTl = new TimelineMax({
	    delay: Math.floor(Math.random() * 2) + 1,
	    repeatDelay: Math.floor(Math.random() * 6) + 1,
	    repeat: -1
	  });

	  fadeTl.to(
	    [elm],
	    0.25,
	    { opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true },
	    Math.floor(Math.random() * 6) + 1
	  );
	  
	  flyTl
	    .set(elm, {scale: Math.random() * 0.75 + 0.5})
	    .to(elm, Math.random() * 100 + 100, {
	    bezier: {
	      values: [
	        {
	          x: Math.random() * $containerWidth,
	          y: Math.random() * $containerHeight
	        },
	        {
	          x: Math.random() * $containerWidth,
	          y: Math.random() * $containerHeight
	        }
	      ]
	    },
	    onComplete: flyTheFirefly,
	    onCompleteParams: [elm]
	  });
	}

    



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
	
	var ele_quote = $(".quote1");
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
		sound_jonsnow.play();
	})
	.on("leave", function () {
		console.log("leave trigger_20191201");
		ele_jon.addClass('out');
		if (sound_jonsnow.playing()) 
		{
			sound_jonsnow.stop();
		}

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
		triggerElement: "#anchor_20191231",
		duration:height_anchor_20191231
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	.on("enter", function () {
		console.log("enter anchor_20191231");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		ele_box_20191231.removeClass('out');
		sound_1kill.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave anchor_20191231");

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
		triggerElement: "#anchor_20200101",
		duration:height_anchor_20200101
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
		triggerElement: "#anchor_20200103",
		duration:height_anchor_20200103
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	//.setClassToggle("#thewhistle","whistleActive")
	.on("enter", function () {
		console.log("enter anchor_20200103");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		ele_box_20200103.removeClass('out');
		sound_2kill.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave anchor_20200103");

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
		triggerElement: "#anchor_20200105",
		duration:height_anchor_20200105
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	//.setClassToggle("#thewhistle","whistleActive")
	.on("enter", function () {
		console.log("enter anchor_20200105");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		ele_box_20200105.removeClass('out');
		sound_3kill.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave anchor_20200105");

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
		triggerElement: "#anchor_20200111",
		duration:height_anchor_20200111
	})
	// trigger a velocity opaticy animation
	//.setVelocity("#animate", {opacity: 0}, {duration: 400})
	//.setClassToggle("#thewhistle","whistleActive")
	.on("enter", function () {
		console.log("enter anchor_20200111");
		// trigger animation by changing inline style.
		//day_20191230.style.backgroundColor = "#fff";
		ele_box_20200111.removeClass('out');
		sound_4kill.play();
	})
	.on("leave", function () {
		// reset style
		//day_20191230.style.backgroundColor = "";
		console.log("leave anchor_20200111");

		ele_box_20200111.addClass('out');

		if (sound_4kill.playing()) 
		{
			sound_4kill.stop();
		}
	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


	/*=========================================================*/
	//SCENE 鄂A0260W
	/*=========================================================*/

	var tweenAnimIn = new TimelineMax();
    tweenAnimIn
    	// .set('.car-plate', { autoAlpha: 0 })
	    .to('.hat', 1, { y: -600, autoAlpha: 0, ease: Power2.easeOut }, "-=1")
	    .to('.glass', 1, { y: -200, autoAlpha: 0, ease: Power2.easeOut }, "-=1")
	    .to('.cigaratte', 1, { x: 400, autoAlpha: 0, ease: Power2.easeOut }, "-=1")
	    .to('.necklace', 1, { y: 400, autoAlpha: 0, ease: Power2.easeOut }, "-=1")

    var scrollOutAnim = new TimelineMax()
        .add([
        	// TweenMax.to('.car-plate', 1, { autoAlpha: 1 }),
            TweenMax.from('.hat', 1, { y: -600, autoAlpha: 0 }),//mao zi
            TweenMax.from('.glass', 1, { y: -200, autoAlpha: 0 }),//yan jing
            TweenMax.from('.cigaratte', 1, { x: 400, autoAlpha: 0 }),//yan
            TweenMax.from('.necklace', 1, { y: 400, autoAlpha: 0 }),//lian zi
           

        ]);

    // buid scene
    var scene_0260w = new ScrollMagic.Scene({
        triggerElement: '#info_car_a0260w',
        // triggerHook:'onleave'
        // triggerHook: 0,
        duration: height_box_car_a0260w
        //duration:200
    })
    .on("enter", function () {
    	sound_thuglife.play();
		
	})
	.on("leave", function () {
		if (sound_thuglife.playing()) 
		{
			sound_thuglife.stop();
		}
	})
    .setTween(scrollOutAnim)
    // .setPin('#box-car-a0260w')
    .addIndicators()
    .addTo(controller);

    scene_0260w.offset(-100);



    /*=========================================================*/
	//SCENE 引言2 说谎
	/*=========================================================*/
	
	var queto2_duration = top_20200203 - top_lie_words;
	var ele_quote2 = $(".quote2");
	ele_quote2.addClass('fade');
	ele_quote2.addClass('out');
	
	var scene_lie_words = new ScrollMagic.Scene({
		triggerElement: "#info_lie_words",
		// triggerHook: 0.65,
		// duration: height_lie_words_anim
		duration:queto2_duration
	})
	//.on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
    //.on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
    .on("enter", function () {
		console.log("enter info_lie_words");
		ele_quote2.removeClass('out');
	})
	.on("leave", function () {
		console.log("leave info_lie_words");
		ele_quote2.addClass('out');

	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);





	/*=========================================================*/
	//SCENE 方舱医院
	/*=========================================================*/
	

	var tween_square_cabin = TweenMax.to("#square-cabin-animation", 1.0, {
		backgroundPosition: "0 100%", 
		ease: SteppedEase.config(31)
	});

	// build scene
	var square_cabin_duration = top_20200204 - top_square_cabin_hospital + 100;
	var scene_square_cabin = new ScrollMagic.Scene({
		triggerElement: "#info_square_cabin",
		duration: square_cabin_duration
	})
	.on("enter", function () {
		console.log("enter info_square_cabin");
		sound_transformer.play();
	})
	.on("leave", function () {
		console.log("leave info_square_cabin");
		if (sound_transformer.playing()) 
		{
			sound_transformer.stop();
		}

	})

	// .triggerHook(0)
	// .triggerHook("onCenter")
	// .setPin("#js-pinned")
	// .setPin("#box-square-cabin-anim")
	// .setPin("#anchor_20200203")
	.setTween(tween_square_cabin)
	.addIndicators()
	.addTo(controller);

	scene_square_cabin.offset(-100);


	/*=========================================================*/
	//SCENE 引言3 说谎
	/*=========================================================*/
	
	var queto3_duration = top_20200206 - top_motion_words;
	var ele_quote3 = $(".quote3");
	ele_quote3.addClass('fade');
	ele_quote3.addClass('out');
	
	var scene_lie_words = new ScrollMagic.Scene({
		triggerElement: "#info_motion_words",
		duration:queto3_duration
	})
    .on("enter", function () {
		ele_quote3.removeClass('out');
	})
	.on("leave", function () {
		ele_quote3.addClass('out');

	})
	.addIndicators()
	.addTo(controller);


	/*=========================================================*/
	//SCENE lwl
	/*=========================================================*/
	
	var lwl_duration = top_20200207 - top_hero_liwenliang;

	
	var scene_lwl = new ScrollMagic.Scene({
		triggerElement: "#info_liwenliang",
		duration:lwl_duration
	})
    .on("enter", function () {

		sound_xindian.play();

	})
	.on("leave", function () {

		if (sound_xindian.playing()) 
		{
			sound_xindian.stop();
		}

	})
	.addIndicators()
	.addTo(controller);


	/*=========================================================*/
	//SCENE depose
	/*=========================================================*/
	var ele_img_20200213 = $(".img-20200213");

	var scene_depose = new ScrollMagic.Scene({
		triggerElement: "#anchor_20200213",
		duration:height_anchor_20200213
	})
    .on("enter", function () {

    	ele_img_20200213.addClass('gray');
		sound_depose.play();

	})
	.on("leave", function () {

		ele_img_20200213.removeClass('gray');
		if (sound_depose.playing()) 
		{
			sound_depose.stop();
		}

	})
	.addIndicators()
	.addTo(controller);



	/*=========================================================*/
	//SCENE 雪
	/*=========================================================*/
	
	var scene_snow = new ScrollMagic.Scene({triggerElement: "#info_20200215",duration:height_20200215})

	.on("enter", function () {
		console.log("enter info_20200215");
		//$(document).snowfall({image:"_/img/assets/virusx128.png", flakeCount:10, minSpeed:0.1, minSize:40, maxSize:80,});
		$("#snow-mask").snowfall({flakeCount : 100});

		sound_snow.play();
	})
	.on("leave", function () {

		console.log("leave info_20200215");
		$("#snow-mask").snowfall('clear');

		if (sound_snow.playing()) 
		{
			sound_snow.stop();
		}


	})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


	/*=========================================================*/
	//SCENE 引言4 结束语 希望
	/*=========================================================*/
	
	var quote_end_words_duration = top_but_words - top_end_words;
	var quote_end_words = $(".quote-end-words");
	quote_end_words.addClass('fade');
	quote_end_words.addClass('out');
	
	var scene_lie_words = new ScrollMagic.Scene({
		triggerElement: "#info_end_words",
		duration:quote_end_words_duration
	})
    .on("enter", function () {
		quote_end_words.removeClass('out');
	})
	.on("leave", function () {
		quote_end_words.addClass('out');

	})
	.addIndicators()
	.addTo(controller);


	/*=========================================================*/
	//SCENE 引言5 知乎
	/*=========================================================*/
	
	var quote_zhihu_duration = top_thinking_words - top_zhihu_words;
	var quote_zhihu_words = $(".quote-zhihu-words");
	quote_zhihu_words.addClass('fade');
	quote_zhihu_words.addClass('out');
	
	var scene_zhihu_words = new ScrollMagic.Scene({
		triggerElement: "#info_zhihu_words",
		duration:quote_zhihu_duration
	})
    .on("enter", function () {
		quote_zhihu_words.removeClass('out');
	})
	.on("leave", function () {
		quote_zhihu_words.addClass('out');

	})
	.addIndicators()
	.addTo(controller);


	/*=========================================================*/
	//SCENE 问题
	/*=========================================================*/
	var repeat;
	var question_duration = top_talking_words - top_question;
	
	var scene_question = new ScrollMagic.Scene({
		triggerElement: "#info_question",
		// triggerHook: 'onLeave',
		duration:question_duration
	})
    .on("enter", function () {

    	fHighlightRandomWord(eWords);

    	repeat = setInterval(function() {
		  	if(Math.random() > 0.95) 
		  	{
		  		fClearAllHighlights(eQuote);
		  	}
		  	fHighlightRandomWord(eWords);
		}, 200);
		
	})
	.on("leave", function () {
		
		fHighlightRandomWord(eWords);
		clearInterval(repeat);
	})
	.addIndicators()
	.addTo(controller);


	



	/*=========================================================*/
	//SCENE 星星之火
	/*=========================================================*/
	var images = [
		"img/light/0100.jpg",
		"img/light/0101.jpg",
		"img/light/0102.jpg",
		"img/light/0103.jpg",
		"img/light/0104.jpg",
		"img/light/0105.jpg",
		"img/light/0106.jpg",
		"img/light/0107.jpg",
		"img/light/0108.jpg",
		"img/light/0109.jpg",
		"img/light/0110.jpg",
		"img/light/0111.jpg",
		"img/light/0112.jpg",
		"img/light/0113.jpg",
		"img/light/0114.jpg",
		"img/light/0115.jpg",
		"img/light/0116.jpg",
		"img/light/0117.jpg",
		"img/light/0118.jpg",
		"img/light/0119.jpg",
		"img/light/0120.jpg",
		"img/light/0121.jpg",
		"img/light/0122.jpg",
		"img/light/0123.jpg",
		"img/light/0124.jpg",
		"img/light/0125.jpg",
		"img/light/0126.jpg",
		"img/light/0127.jpg",
		"img/light/0128.jpg",
		"img/light/0129.jpg",
		"img/light/0130.jpg",
		"img/light/0131.jpg",
		"img/light/0132.jpg",
		"img/light/0133.jpg",
		"img/light/0134.jpg",
		"img/light/0135.jpg",
		"img/light/0136.jpg",
		"img/light/0137.jpg"
	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			// repeat: 3,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#img-torch").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	var got_light_duration = pic_Height + 100;
	// build scene
	var scene_got_light = new ScrollMagic.Scene({
		triggerElement: "#info_got_light",
		 duration: got_light_duration
	})
	.on("enter", function () {

    	sound_nottoday.play();
    	startFirefly();
		
	})
	.on("leave", function () {
		
		if (sound_nottoday.playing()) 
		{
			sound_nottoday.stop();
		}
	})
	.setTween(tween)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	scene_got_light.offset(-50);



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