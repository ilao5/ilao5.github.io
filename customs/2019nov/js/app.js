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

	//active_scroll(false);

	$('del').lettering('words');


	window.URL = window.URL || window.webkitURL;

	var manifest = [

		// {src: "img/jonsnow.png", id: "jonsnow"},
		// {src: "img/cnc-sprite.png", id: "cnc_sprite"},
		// {src: "img/chepai.png", id: "chepai"},
		// {src: "img/lianzix300.png", id: "lianzi"},
		// {src: "img/yanx200.png", id:"yan"},
		// {src: "img/yjx300.png", id:"yj"},
		// {src: "img/maozix300.png", id:"maozi"},
		// {src: "img/depose.jpg", id:"pic_depose"},

		// {src: "img/dalian1.jpg", id:"dalian1"},
		// {src: "img/dalian2.jpg", id:"dalian2"},
		// {src: "img/dalian3.jpg", id:"dalian3"},
		// {src: "img/dalian4.jpg", id:"dalian4"},

		// {src: "img/1t.png", id:"1t"},
		// {src: "img/2t.png", id:"2t"},
		// {src: "img/3t.png", id:"3t"},
		// {src: "img/4t.png", id:"4t"},
		// {src: "img/5t.png", id:"5t"},
		// {src: "img/6t.png", id:"6t"},
		// {src: "img/7t.png", id:"7t"},
		// {src: "img/8t.png", id:"8t"},
		// {src: "img/9t.png", id:"9t"},
		
		// {src: "img/lx.jpg", id:"lx"},
		// {src: "img/zgl.jpg", id:"zgl"},
		// {src: "img/dumu.jpg", id:"dumu"},

		// {src: "img/light/0100.jpg", id: "light_0100"},
		// {src: "img/light/0101.jpg", id: "light_0101"},
		// {src: "img/light/0102.jpg", id: "light_0102"},
		// {src: "img/light/0103.jpg", id: "light_0103"},
		// {src: "img/light/0104.jpg", id: "light_0104"},
		// {src: "img/light/0105.jpg", id: "light_0105"},
		// {src: "img/light/0106.jpg", id: "light_0106"},
		// {src: "img/light/0107.jpg", id: "light_0107"},
		// {src: "img/light/0108.jpg", id: "light_0108"},
		// {src: "img/light/0109.jpg", id: "light_0109"},
		// {src: "img/light/0110.jpg", id: "light_0110"},
		// {src: "img/light/0111.jpg", id: "light_0111"},
		// {src: "img/light/0112.jpg", id: "light_0112"},
		// {src: "img/light/0113.jpg", id: "light_0113"},
		// {src: "img/light/0114.jpg", id: "light_0114"},
		// {src: "img/light/0115.jpg", id: "light_0115"},
		// {src: "img/light/0116.jpg", id: "light_0116"},
		// {src: "img/light/0117.jpg", id: "light_0117"},
		// {src: "img/light/0118.jpg", id: "light_0118"},
		// {src: "img/light/0119.jpg", id: "light_0119"},
		// {src: "img/light/0120.jpg", id: "light_0120"},
		// {src: "img/light/0121.jpg", id: "light_0121"},
		// {src: "img/light/0122.jpg", id: "light_0122"},
		// {src: "img/light/0123.jpg", id: "light_0123"},
		// {src: "img/light/0124.jpg", id: "light_0124"},
		// {src: "img/light/0125.jpg", id: "light_0125"},
		// {src: "img/light/0126.jpg", id: "light_0126"},
		// {src: "img/light/0127.jpg", id: "light_0127"},
		// {src: "img/light/0128.jpg", id: "light_0128"},
		// {src: "img/light/0129.jpg", id: "light_0129"},
		// {src: "img/light/0130.jpg", id: "light_0130"},
		// {src: "img/light/0131.jpg", id: "light_0131"},
		// {src: "img/light/0132.jpg", id: "light_0132"},
		// {src: "img/light/0133.jpg", id: "light_0133"},
		// {src: "img/light/0134.jpg", id: "light_0134"},
		// {src: "img/light/0135.jpg", id: "light_0135"},
		// {src: "img/light/0136.jpg", id: "light_0136"},
		// {src: "img/light/0137.jpg", id: "light_0137"},

		// {src: "img/light/0100.jpg", id: "light_0100"},
		// {src: "https://s1.ax1x.com/2020/03/17/8U9Sjs.jpg", id: "light_0101"},
		// {src: "https://s1.ax1x.com/2020/03/17/8Upzcj.jpg", id: "light_0102"},
		// {src: "https://s1.ax1x.com/2020/03/17/8Upx3Q.jpg", id: "light_0103"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UpX4S.jpg", id: "light_0104"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJhcQ.jpg", id: "light_0105"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJf1g.jpg", id: "light_0106"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJgtf.jpg", id: "light_0107"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJ2h8.jpg", id: "light_0108"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJcAP.jpg", id: "light_0109"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJ4Xj.jpg", id: "light_0110"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJoBn.jpg", id: "light_0111"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJT7q.jpg", id: "light_0112"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJHA0.jpg", id: "light_0113"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJbNV.jpg", id: "light_0114"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJO9U.jpg", id: "light_0115"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJX3F.jpg", id: "light_0116"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UJzu9.jpg", id: "light_0117"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYpH1.jpg", id: "light_0118"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYPN6.jpg", id: "light_0119"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYEge.jpg", id: "light_0120"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYeud.jpg", id: "light_0121"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYmDA.jpg", id: "light_0122"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYnHI.jpg", id: "light_0123"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYKEt.jpg", id: "light_0124"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UY8gg.jpg", id: "light_0125"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYGvQ.jpg", id: "light_0126"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYtDs.jpg", id: "light_0127"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYNbn.jpg", id: "light_0128"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYaEq.jpg", id: "light_0129"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYdU0.jpg", id: "light_0130"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYw5V.jpg", id: "light_0131"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYBCT.jpg", id: "light_0132"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UYr2F.jpg", id: "light_0133"},
		// {src: "https://s1.ax1x.com/2020/03/17/8UY6KJ.jpg", id: "light_0134"},
		// {src: "https://s1.ax1x.com/2020/03/17/8ULTSI.jpg", id: "light_0135"},
		// {src: "https://s1.ax1x.com/2020/03/17/8ULH6P.jpg", id: "light_0136"},
		// {src: "https://s1.ax1x.com/2020/03/17/8ULO0S.jpg", id: "light_0137"},


		{src: "sound/jonsnow.mp3", id: "jonsnow"},
		{src: "sound/chuishao.mp3", id: "chuishao"},
		{src: "sound/1kill.mp3", id: "1kill"},
		{src: "sound/2kill.mp3", id: "2kill"},
		{src: "sound/3kill.mp3", id: "3kill"},
		{src: "sound/4kill.mp3", id: "4kill"},
		{src: "sound/zltz.mp3", id: "zltz"},
		{src: "sound/lightning.mp3", id: "lightning"},
		{src: "sound/rain.mp3", id: "rain"},
		{src: "sound/transformer.mp3", id: "transformer"},
		{src: "sound/xindian.mp3", id: "xindian"},
		{src: "sound/bi.mp3", id: "bi"},
		{src: "sound/thuglife.mp3", id: "thuglife"},
		{src: "sound/depose.mp3", id: "depose"},
		{src: "sound/snow.mp3", id: "snow"},
		{src: "sound/kenan.mp3", id: "kenan"},
		{src: "sound/zgl.mp3", id: "zgl"},
		{src: "sound/aoligei.mp3", id: "aoligei"},
		{src: "sound/bullet.mp3", id: "bullet"}


	];



	

	var design_width = 640;
	
	var docEl = document.documentElement;
	var fontsize = 0;

	var clientWidth;
	var clientHeight;

    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    //console.log("resizeEvt : ",resizeEvt);
	
	var preload;
	var loop_props = new createjs.PlayPropsConfig().set({loop: -1});//声音循环配置


	var height_intro_anim,
		height_20191201,
		height_20191201_anim,
		height_anchor_20191231,
		height_anchor_20200101,
		height_anchor_20200103,
		height_anchor_20200105,
		height_anchor_20200111,
		height_20200124,
		height_red_cross_anim,
		height_box_car_a0260w,
		top_20200203,
		top_lie_words,
		height_square_cabin_anim,
		top_20200206,
		top_motion_words,
		top_20200207,
		top_hero_liwenliang,
		height_anchor_20200213,
		height_20200215,
		top_but_words,
		top_end_words,
		top_thinking_words,
		top_zhihu_words,
		top_talking_words,
		top_question,
		pic_Width,
		pic_Height,
		height_friend_words_anim;


	// ScrollMagic Init
	var controller = new ScrollMagic.Controller();

	//DOM element
	// var $bar = document.querySelector('.progress-bar');
	var $bar = $('.progress-bar');
    var $counter = $('.count');

    var $loader_mask = $("#loader-mask");
    var $timeline_space = $("#space-timeline");
    var $topic_logo = $("#topic-logo");

    var $flyTxt = document.getElementsByClassName('fly-text')[0];


	function startPreload() {
        preload = new createjs.LoadQueue(false,'',true);//LoadQueue ( [preferXHR=true]  [basePath=""]  [crossOrigin=""]
        //第一个参数为true，代表通过xhr形式加载.
		//basePath  在加载资源时的，会把basePath加载url前面。这样加载同一个目录下的文件时，可以方便一点。 但是如果url是以协议（如”http://”）或者”../”这样路径开头时，不会添加basePath。
		//crossOrigin 设置为Anonymous的时候，则表示允许跨域


        //注意加载音频文件需要调用如下代码行
        preload.installPlugin(createjs.Sound);
        preload.on("fileload", handleFileLoad);
        preload.on("progress", handleFileProgress);
        preload.on("complete", loadComplete);
        preload.on("error", loadError);
        preload.loadManifest(manifest);

    }

     //处理单个文件加载
    function handleFileLoad(event) {
        console.log("文件类型: " + event.item.type);

        // if (event.item.id == "logo") {
        //     console.log("logo图片已成功加载");
        // }
    }

    //处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
    function loadError(evt) {
        console.log("加载出错！", evt.text);
    }

    //已加载完毕进度
    function handleFileProgress(event) {
        //progressText.text = "已加载 " + (preload.progress * 100 | 0) + " %";
        //stage.update();
        var loaded_progress = (preload.progress * 100 | 0);
        console.log("已加载:",loaded_progress);
        // $bar.style.width = loaded_progress + '%';
        $bar.css({'width':loaded_progress + '%'});
    	// $counter.innerHTML = Math.round(loaded_progress) + '%';
    	$counter.html(Math.round(loaded_progress) + '%');
    }

     //全度资源加载完毕
    function loadComplete(event) {
        console.log("已加载完毕全部资源");
        // bar.className += " done";
        // $bar.addClass('done');
        appStart();
    }


	function appStart(){

		$loader_mask.css({"display":'none'});
		$timeline_space.css({"opacity":1});
		$topic_logo.css({"position":'absolute'});

		//var tsss = preload.getResult('light_0137');
		//console.log('>>>tsss = ',tsss);
		//console.log('>>>tsss = ',tsss.src);

		recalc();

		layoutDom();

		scrollScene();
	}
    

	function recalc() {

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
	        clientHeight = document.documentElement.clientHeight;
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


    /*=========================================================*/
	// 计算位置
	/*=========================================================*/
    function layoutDom(){

    	
		var px_index;

		var height_citybg = $("#citybg").height();
		var top_intro = height_citybg;

		var top_intro_anim = top_intro + height_citybg * 0.5 - 80;
		$("#info_intro").css({"top":top_intro + "px"});
		$("#div-intro-anim").css({"top":top_intro_anim + "px"});

		// var height_intro_anim = $("#div-intro-anim").height();
		height_intro_anim = $("#div-intro-anim").height();
		var top_20191201 = top_intro + height_intro_anim;
		$("#info_20191201").css({"top":top_20191201+"px"});

		// var height_20191201 = $("#info_20191201").height();
		height_20191201 = $("#info_20191201").height()
		// var height_20191201_anim = $("#div-20191201-anim").height();
		height_20191201_anim = $("#div-20191201-anim").height();
		var top_20191201_anim = top_20191201 + height_20191201_anim * 0.5;
		$("#div-20191201-anim").css({"top":top_20191201_anim+"px"});

		var top_20191208 = top_20191201 + height_20191201 + height_20191201_anim + 50;
		$("#info_20191208").css({"top":top_20191208+"px"});

		var height_20191208 = $("#info_20191208").height();
		var top_20191210 = top_20191208 + height_20191208 + 50;
		$("#info_20191210").css({"top":top_20191210+"px"});

		var height_20191210 = $("#info_20191210").height();
		var top_20191212 = top_20191210 + height_20191210 + 50;
		$("#info_20191212").css({"top":top_20191212 + "px"});

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
		var top_20191226 = top_20191224 + height_20191224 + 50;
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


		var height_anchor_20191230_to_father = $("#anchor_20191230").position().top;//距离父节点距离
		var height_anchor_20191230 = $("#anchor_20191230").height();
		var top_anim_20191230 = top_20191230 + height_anchor_20191230_to_father + height_anchor_20191230 / 2;
		$("#div-20191230-anim1").css({"top":top_anim_20191230 + "px"});


		var height_20191230 = $("#info_20191230").height();
		var top_20191231 = top_20191230 + height_20191230 + 50;
		$("#info_20191231").css({"top":top_20191231 + "px"});

		var height_anchor_20191231_to_father = $("#anchor_20191231").position().top;//距离父节点距离
		// var height_anchor_20191231 = $("#anchor_20191231").height();
		height_anchor_20191231 = $("#anchor_20191231").height()
		var top_anim_20191231 = top_20191231 + height_anchor_20191231_to_father + height_anchor_20191231 / 2;
		$("#div-20191231-anim").css({"top":top_anim_20191231 + "px"});


		var height_20191231 = $("#info_20191231").height();
		var top_20200101 = top_20191231 + height_20191231 + 50;
		$("#info_20200101").css({"top":top_20200101 + "px"});


		var height_anchor_20200101_to_father = $("#anchor_20200101").position().top;//距离父节点距离
		// var height_anchor_20200101 = $("#anchor_20200101").height();
		height_anchor_20200101 = $("#anchor_20200101").height();
		var top_anim_20200101_whistle = top_20200101 + height_anchor_20200101_to_father + height_anchor_20200101 / 2;
		$("#div_whistle").css({"top":top_anim_20200101_whistle + "px"});


		var height_20200101 = $("#info_20200101").height();
		var top_20200102 = top_20200101 + height_20200101 + 50;
		$("#info_20200102").css({"top":top_20200102 + "px"});

		var height_20200102 = $("#info_20200102").height();
		var top_20200103 = top_20200102 + height_20200102 + 50;
		$("#info_20200103").css({"top":top_20200103 + "px"});


		var height_anchor_20200103_to_father = $("#anchor_20200103").position().top;//距离父节点距离
		// var height_anchor_20200103 = $("#anchor_20200103").height();
		height_anchor_20200103 = $("#anchor_20200103").height();
		var top_anim_20200103 = top_20200103 + height_anchor_20200103_to_father + height_anchor_20200103 / 2;
		$("#div-20200103-anim").css({"top":top_anim_20200103 + "px"});


		var height_20200103 = $("#info_20200103").height();
		var top_20200104 = top_20200103 + height_20200103 + 50;
		$("#info_20200104").css({"top":top_20200104 + "px"});

		var height_20200104 = $("#info_20200104").height();
		var top_20200105 = top_20200104 + height_20200104 + 50;
		$("#info_20200105").css({"top":top_20200105 + "px"});


		var height_anchor_20200105_to_father = $("#anchor_20200105").position().top;//距离父节点距离
		// var height_anchor_20200105 = $("#anchor_20200105").height();
		height_anchor_20200105 = $("#anchor_20200105").height();
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
		// var height_anchor_20200111 = $("#anchor_20200111").height();
		height_anchor_20200111 = $("#anchor_20200111").height();
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

		// var height_20200124 = $("#info_20200124").height();
		height_20200124 = $("#info_20200124").height();
		var top_20200125 = top_20200124 + height_20200124 + 50;
		$("#info_20200125").css({"top":top_20200125 + "px"});

		var height_20200125 = $("#info_20200125").height();
		var top_square_cabin_hospital = top_20200125 + height_20200125 + 50;
		$("#info_square_cabin").css({"top":top_square_cabin_hospital + "px"});
		$("#div-square-cabin-anim").css({"top":top_square_cabin_hospital + "px"});

		var height_info_square_cabin = $("#info_square_cabin").height();
		// var height_square_cabin_anim = $("#div-square-cabin-anim").height();
		height_square_cabin_anim = $("#div-square-cabin-anim").height();
		var top_20200126 = top_square_cabin_hospital + height_info_square_cabin + height_square_cabin_anim + 50;
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
		var top_red_cross = top_20200131 + height_20200131 + 50;
		$("#info_red_cross").css({"top":top_red_cross + "px"});
		$("#red-cross-anim").css({"top":top_red_cross + "px"});


		height_red_cross_anim = $("#red-cross-anim").height();
		var top_20200201 = top_red_cross + height_red_cross_anim + 50;
		$("#info_20200201").css({"top":top_20200201 + "px"});


		// var height_box_car_a0260w = $("#box-car-a0260w").height();
		height_box_car_a0260w = $("#box-car-a0260w").height();
		var height_20200201 = $("#info_20200201").height();
		var top_car_a0260w = top_20200201 + height_20200201 + 50;
		$("#info_car_a0260w").css({"top":top_car_a0260w + "px"});
		$("#div-car-a0260w-anim").css({"top":top_car_a0260w + "px"});

		var height_car_a0260w = $("#div-car-a0260w-anim").height();
		var top_20200202 = top_car_a0260w + height_car_a0260w + 50;
		$("#info_20200202").css({"top":top_20200202 + "px"});

		var height_20200202 = $("#info_20200202").height();
		// var top_lie_words = top_20200202 + height_20200202 + 50;
		top_lie_words = top_20200202 + height_20200202 + 50;
		$("#info_lie_words").css({"top":top_lie_words + "px"});
		$("#div-lie-words-anim").css({"top":top_lie_words + "px"});

		var height_lie_words_anim = $("#div-lie-words-anim").height();
		var padding_lie_words_anim = $("#div-lie-words-anim").css("padding-top");
		px_index = padding_lie_words_anim.indexOf("p");
		var number_padding_lie_words_anim = padding_lie_words_anim.slice(0,px_index);

		// var top_20200203 = top_lie_words + height_lie_words_anim + number_padding_lie_words_anim * 2;
		top_20200203 = top_lie_words + height_lie_words_anim + number_padding_lie_words_anim * 2;
		$("#info_20200203").css({"top":top_20200203 + "px"});
		
		var height_20200203 = $("#info_20200203").height();
		var top_20200204 = top_20200203 + height_20200203 + 50;
		$("#info_20200204").css({"top":top_20200204 + "px"});

		var height_20200204 = $("#info_20200204").height();
		var top_20200205 = top_20200204 + height_20200204 + 50;
		$("#info_20200205").css({"top":top_20200205 + "px"});

		var height_20200205 = $("#info_20200205").height();
		// var top_motion_words = top_20200205 + height_20200205 + 50;
		top_motion_words = top_20200205 + height_20200205 + 50;
		$("#info_motion_words").css({"top":top_motion_words + "px"});
		$("#div-motion-words-anim").css({"top":top_motion_words + "px"});

		var height_motion_words_anim = $("#div-motion-words-anim").height();
		var padding_motion_words_anim = $("#div-motion-words-anim").css("padding-top");
		px_index = padding_motion_words_anim.indexOf("p");
		var number_padding_motion_words_anim = padding_motion_words_anim.slice(0,px_index);

		// var top_20200206 = top_motion_words + height_motion_words_anim + number_padding_motion_words_anim * 2;
		top_20200206 = top_motion_words + height_motion_words_anim + number_padding_motion_words_anim * 2;
		$("#info_20200206").css({"top":top_20200206 + "px"});

		//李文亮
		var height_20200206 = $("#info_20200206").height();
		// var top_hero_liwenliang = top_20200206 + height_20200206 + 50;
		top_hero_liwenliang = top_20200206 + height_20200206 + 50;
		$("#info_liwenliang").css({"top":top_hero_liwenliang + "px"});
		$("#div-hero-liwenliang-anim").css({"top":top_hero_liwenliang + "px"});
		
		var height_hero_liwenliang = $("#div-hero-liwenliang-anim").height();
		// var top_20200207 = top_hero_liwenliang + height_hero_liwenliang + 50;
		top_20200207 = top_hero_liwenliang + height_hero_liwenliang + 50;
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
		// var height_anchor_20200213 = $("#anchor_20200213").height();
		height_anchor_20200213 = $("#anchor_20200213").height();
		var top_anim_20200213 = top_20200213 + height_anchor_20200213_to_father + height_anchor_20200213 / 2;
		$("#div-20200213-anim").css({"top":top_anim_20200213 + "px"});


		var height_20200213 = $("#info_20200213").height();
		var top_20200214 = top_20200213 + height_20200213 + 50;
		$("#info_20200214").css({"top":top_20200214 + "px"});

		
		var height_20200214 = $("#info_20200214").height();
		var top_20200215 = top_20200214 + height_20200214 + 50;
		$("#info_20200215").css({"top":top_20200215 + "px"});

		// var height_20200215 = $("#info_20200215").height();
		height_20200215 = $("#info_20200215").height();
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
		var top_20200226 = top_20200224 + height_20200224 + 50;
		$("#info_20200226").css({"top":top_20200226 + "px"});

		var height_20200226 = $("#info_20200226").height();
		var top_20200227 = top_20200226 + height_20200226 + 50;
		$("#info_20200227").css({"top":top_20200227 + "px"});

		var height_20200227 = $("#info_20200227").height();
		var top_20200229 = top_20200227 + height_20200227 + 50;
		$("#info_20200229").css({"top":top_20200229 + "px"});

		var height_20200229 = $("#info_20200229").height();
		var top_20200302 = top_20200229 + height_20200229 + 50;
		$("#info_20200302").css({"top":top_20200302 + "px"});

		var height_20200302 = $("#info_20200302").height();
		var top_20200303 = top_20200302 + height_20200302 + 50;
		$("#info_20200303").css({"top":top_20200303 + "px"});

		var height_20200303 = $("#info_20200303").height();
		var top_20200304 = top_20200303 + height_20200303 + 50;
		$("#info_20200304").css({"top":top_20200304 + "px"});

		var height_20200304 = $("#info_20200304").height();
		var top_20200305 = top_20200304 + height_20200304 + 50;
		$("#info_20200305").css({"top":top_20200305 + "px"});

		var height_20200305 = $("#info_20200305").height();
		var top_20200306 = top_20200305 + height_20200305 + 50;
		$("#info_20200306").css({"top":top_20200306 + "px"});

		var height_20200306 = $("#info_20200306").height();
		var top_20200307 = top_20200306 + height_20200306 + 50;
		$("#info_20200307").css({"top":top_20200307 + "px"});

		var height_20200307 = $("#info_20200307").height();
		var top_20200308 = top_20200307 + height_20200307 + 50;
		$("#info_20200308").css({"top":top_20200308 + "px"});

		var height_20200308 = $("#info_20200308").height();
		var top_20200309 = top_20200308 + height_20200308 + 50;
		$("#info_20200309").css({"top":top_20200309 + "px"});

		var height_20200309 = $("#info_20200309").height();
		var top_20200310 = top_20200309 + height_20200309 + 50;
		$("#info_20200310").css({"top":top_20200310 + "px"});

		var height_20200310 = $("#info_20200310").height();
		var top_20200311 = top_20200310 + height_20200310 + 50;
		$("#info_20200311").css({"top":top_20200311 + "px"});

		var height_20200311 = $("#info_20200311").height();
		var top_20200312 = top_20200311 + height_20200311 + 50;
		$("#info_20200312").css({"top":top_20200312 + "px"});


		var height_20200312 = $("#info_20200312").height();
		var top_to_be_continued = top_20200312 + height_20200312 + 50;
		$("#info_to_be_continued").css({"top":top_to_be_continued + "px"});
		$("#div-to-be-continued-anim").css({"top":top_to_be_continued + "px"});



		var height_to_be_continued = $("#div-to-be-continued-anim").height();
		var padding_to_be_continued_anim = $("#div-to-be-continued-anim").css("padding-top");
		px_index = padding_to_be_continued_anim.indexOf("p");
		var number_padding_to_be_continued_anim = padding_to_be_continued_anim.slice(0,px_index);
		// var top_end_words = top_to_be_continued + height_to_be_continued + number_padding_to_be_continued_anim * 2 + 50;
		top_end_words = top_to_be_continued + height_to_be_continued + number_padding_to_be_continued_anim * 2 + 50;
		$("#info_end_words").css({"top":top_end_words + "px"});
		$("#div-end-words-anim").css({"top":top_end_words + "px"});

		
		var height_end_words = $("#div-end-words-anim").height();
		var padding_end_words_anim = $("#div-end-words-anim").css("padding-top");
		px_index = padding_end_words_anim.indexOf("p");
		var number_padding_end_words_anim = padding_end_words_anim.slice(0,px_index);
		// var top_but_words = top_end_words + height_end_words + number_padding_end_words_anim * 2 + 50;
		top_but_words = top_end_words + height_end_words + number_padding_end_words_anim * 2 + 50;
		$("#info_but_words").css({"top":top_but_words + "px"});
		$("#div-but-words-anim").css({"top":top_but_words + "px"});

		var height_but_words_anim = $("#div-but-words-anim").height();
		// var top_zhihu_words = top_but_words + height_but_words_anim + 50;
		top_zhihu_words = top_but_words + height_but_words_anim + 50;
		$("#info_zhihu_words").css({"top":top_zhihu_words + "px"});
		$("#div-zhihu-words-anim").css({"top":top_zhihu_words + "px"});

		var height_zhihu_words_anim = $("#div-zhihu-words-anim").height();
		var padding_zhihu_words_anim = $("#div-zhihu-words-anim").css("padding-top");
		px_index = padding_zhihu_words_anim.indexOf("p");
		var number_padding_zhihu_words_anim = padding_zhihu_words_anim.slice(0,px_index);
		// var top_thinking_words = top_zhihu_words + height_zhihu_words_anim + number_padding_zhihu_words_anim * 2 + 50;
		top_thinking_words = top_zhihu_words + height_zhihu_words_anim + number_padding_zhihu_words_anim * 2 + 50;	
		$("#info_thinking_words").css({"top":top_thinking_words + "px"});
		$("#div-thinking-words-anim").css({"top":top_thinking_words + "px"});


		var height_thinking_words = $("#div-thinking-words-anim").height();
		// var top_question = top_thinking_words + height_thinking_words + 50;
		top_question = top_thinking_words + height_thinking_words + 50;

		var question_height = clientHeight * 0.8;
		$("#info_question").css({"top":top_question + "px"});
		$("#div-end-question-anim").css({"top":top_question + "px","height":question_height+"px","min-height":question_height+"px"});
		$("#neat").css({"height":question_height+"px"});

		//所以我们讨论
		var height_end_question_anim = $("#div-end-question-anim").height();
		// var top_talking_words = top_question + height_end_question_anim + 50;
		top_talking_words = top_question + height_end_question_anim + 50;
		$("#info_talking_words").css({"top":top_talking_words + "px"});
		$("#div-talking-words-anim").css({"top":top_talking_words + "px"});


		//wechat
		var height_talking_words_anim = $("#div-talking-words-anim").height();
		var top_wechat = top_talking_words + height_talking_words_anim + 50;
		$("#info_wechat").css({"top":top_wechat + "px"});
		$("#div-wechat-anim").css({"top":top_wechat + "px"});



		var height_wechat_anim = $("#div-wechat-anim").height();
		// console.log("????? top_wechat = ",top_wechat);
		// console.log("????? height_wechat_anim = ",height_wechat_anim);
		// var top_got_light = top_wechat + height_wechat_anim + 150;
		// $("#info_got_light").css({"top":top_got_light + "px"});
		// $("#div-got-light-anim").css({"top":top_got_light + "px"});

		// var pic_Height=0;
		/*if(clientWidth>720)
		{
			pic_Width = 720 * 0.8;
			pic_Height = 480 * 0.8;
			$("#div-got-light-anim img").css({"width":pic_Width+"px"});
			$("#div-got-light-anim img").css({"height":pic_Height+"px"});
			$("#div-got-light-anim img").css({"border":"solid 5px red"});
		}
		else
		{
			pic_Width = clientWidth;
		 	pic_Height = clientWidth * 480 / 720;
		 	$("#div-got-light-anim img").css({"width":clientWidth + "px"});
			$("#div-got-light-anim img").css({"height":pic_Height + "px"});
		}*/


		// var height_got_light = $("#div-got-light-anim").height();
		// var top_friend_words = top_got_light + height_got_light + 50;
		top_friend_words = top_wechat + height_wechat_anim + 150;
		$("#info_friend_words").css({"top":top_friend_words + "px"});
		$("#div-friend-words-anim").css({"top":top_friend_words + "px"});

		// var height_friend_words_anim = $("#div-friend-words-anim").height();
		height_friend_words_anim = $("#div-friend-words-anim").height();
		var top_end_flag = top_friend_words + height_friend_words_anim + 50;
		$("#info_end_flag").css({"top":top_end_flag + "px"});

		$(".section-timeline").css({"height":top_end_flag + "px"});

    }


    /*=========================================================*/
	// Scene
	/*=========================================================*/
    function scrollScene(){

    	/*=========================================================*/
		//SCENE 改颜色1
		/*=========================================================*/
		var scene_bg_color_1 = new ScrollMagic.Scene({
			triggerElement: "#mouse-scroll",
			triggerHook: 'onLeave',

		})
		.setClassToggle("#lao5body", "body-gray")
		.addIndicators()
		.addTo(controller);	


		/*=========================================================*/
		//SCENE 引言
		/*=========================================================*/
		var intro_duration = height_intro_anim * 0.7;
		
		var ele_quote = $(".quote1");
		ele_quote.addClass('out');
		
		var intro_scene = new ScrollMagic.Scene({
			triggerElement: "#info_intro",
			duration: intro_duration
		})
	    .on("enter", function () {
			ele_quote.removeClass('out');
		})
		.on("leave", function () {
			ele_quote.addClass('out');
		})
		.addIndicators() 
		.addTo(controller);
		intro_scene.offset(intro_duration * 0.3);


		/*=========================================================*/
		//SCENE 首例 jon snow
		/*=========================================================*/
		var jonsnow_duration = height_20191201 + height_20191201_anim;

		var ele_jon = $("#jonsnow-box");
		ele_jon.addClass('out');

		var scene_20191201 = new ScrollMagic.Scene({
			triggerElement: "#info_20191201",
			duration: jonsnow_duration
		})
	    .on("enter", function () {
			ele_jon.removeClass('out');
			playSound('jonsnow');
		})
		.on("leave", function () {
			ele_jon.addClass('out');
			stopSound();

		})
		.addIndicators()
		.addTo(controller);



		/*=========================================================*/
		//SCENE 打脸1 1st blood
		/*=========================================================*/
		var scene_20191231_duration = height_anchor_20191231;

		var ele_box_20191231 = $("#box-20191231-anim");
		ele_box_20191231.addClass('out');

		var scene_20191231 = new ScrollMagic.Scene({
			triggerElement: "#anchor_20191231",
			duration:scene_20191231_duration
		})
		.on("enter", function () {
			ele_box_20191231.removeClass('out');
			playSound('1kill');
		})
		.on("leave", function () {
			ele_box_20191231.addClass('out');
			stopSound();
		})
		.addIndicators()
		.addTo(controller);
		


		/*=========================================================*/
		//SCENE 吹哨人 
		/*=========================================================*/
		var scene_20200101_duration = height_anchor_20200101;

		var scene_20200101 = new ScrollMagic.Scene({
			triggerElement: "#anchor_20200101",
			duration:scene_20200101_duration
		})
		.setClassToggle("#thewhistle","whistleActive")
		.on("enter", function () {
			playSound('chuishao',true);
		})
		.on("leave", function () {
			stopSound();
		})
		.addIndicators()
		.addTo(controller);


		/*=========================================================*/
		//SCENE 打脸2 double kill
		/*=========================================================*/
		var scene_20200103_duration = height_anchor_20200103;

		var ele_box_20200103 = $("#box-20200103-anim");
		ele_box_20200103.addClass('out');

		var scene_20200103 = new ScrollMagic.Scene({
			triggerElement: "#anchor_20200103",
			duration:scene_20200103_duration
		})
		.on("enter", function () {

			ele_box_20200103.removeClass('out');
			playSound('2kill');
		})
		.on("leave", function () {
			ele_box_20200103.addClass('out');
			stopSound();
		})
		.addIndicators()
		.addTo(controller);


		/*=========================================================*/
		//SCENE 打脸3 three kill
		/*=========================================================*/
		var scene_20200105_duration = height_anchor_20200105;

		var ele_box_20200105 = $("#box-20200105-anim");
		ele_box_20200105.addClass('out');

		var scene_20200105 = new ScrollMagic.Scene({
			triggerElement: "#anchor_20200105",
			duration:scene_20200105_duration
		})
		.on("enter", function () {
			ele_box_20200105.removeClass('out');
			playSound('3kill');
		})
		.on("leave", function () {
			ele_box_20200105.addClass('out');
			stopSound();
		})
		.addIndicators()
		.addTo(controller);


		/*=========================================================*/
		//SCENE 打脸4 4 kill
		/*=========================================================*/
		var scene_20200111_duration = height_anchor_20200111;

		var ele_box_20200111 = $("#box-20200111-anim");
		ele_box_20200111.addClass('out');

		var scene_20200111 = new ScrollMagic.Scene({
			triggerElement: "#anchor_20200111",
			duration:scene_20200111_duration
		})
		.on("enter", function () {
			ele_box_20200111.removeClass('out');
			playSound('4kill');

		})
		.on("leave", function () {
			ele_box_20200111.addClass('out');
			stopSound();
		})
		.addIndicators()
		.addTo(controller);


		/*=========================================================*/
		//SCENE zltz
		/*=========================================================*/
		var scene_zltz_duration = 200;

		var scene_zltz = new ScrollMagic.Scene({
			triggerElement: "#zltz",
			duration:scene_zltz_duration
		})
		.on("enter", function () {
			playSound('zltz');
		})
		.on("leave", function () {
			stopSound();
		})
		.addIndicators()
		.addTo(controller);
		// scene_zltz.offset(-300);


		/*=========================================================*/
		//SCENE 雨
		/*=========================================================*/
		var scene_rain_duration = height_20200124;

		var scene_rain = new ScrollMagic.Scene({
			triggerElement: "#info_20200124",
			duration:scene_rain_duration
		})
		.on("enter", function () {
			playSound('rain',true);
			$('#rain-mask').fadeIn(1000);
			startRain();
			document.documentElement.addEventListener('click', startLightning);
		})
		.on("leave", function () {
			document.documentElement.removeEventListener('click', startLightning);
			stopSound();
			$('#rain-mask').fadeOut(1500,function(){
				clearRain();
			});
			
		})
		.addIndicators()
		.addTo(controller);


		
		/*=========================================================*/
		//SCENE 红十字
		/*=========================================================*/
		var scene_red_cross_duration = height_red_cross_anim;

		var scene_red_cross = new ScrollMagic.Scene({
			triggerElement: "#info_red_cross",
			duration:scene_red_cross_duration
		})
		.on("enter", function () {
			playSound('bi');
		})
		.on("leave", function () {
			stopSound();
		})
		.addIndicators()
		.addTo(controller);

		/*=========================================================*/
		//SCENE 鄂A0260W
		/*=========================================================*/

		var tweenAnimIn = new TimelineMax();
	    tweenAnimIn
		    .to('.hat', 1, { y: -600, autoAlpha: 0, ease: Power2.easeOut }, "-=1")
		    .to('.glass', 1, { y: -200, autoAlpha: 0, ease: Power2.easeOut }, "-=1")
		    .to('.cigaratte', 1, { x: 400, autoAlpha: 0, ease: Power2.easeOut }, "-=1")
		    .to('.necklace', 1, { y: 400, autoAlpha: 0, ease: Power2.easeOut }, "-=1")

	    var scrollOutAnim = new TimelineMax()
	        .add([
	            TweenMax.from('.hat', 1, { y: -600, autoAlpha: 0 }),//mao zi
	            TweenMax.from('.glass', 1, { y: -200, autoAlpha: 0 }),//yan jing
	            TweenMax.from('.cigaratte', 1, { x: 400, autoAlpha: 0 }),//yan
	            TweenMax.from('.necklace', 1, { y: 400, autoAlpha: 0 }),//lian zi
	        ]);

	    var scene_0260w_duration = height_box_car_a0260w + 300;
	    var scene_0260w = new ScrollMagic.Scene({
	        triggerElement: '#info_car_a0260w',
	        duration: scene_0260w_duration
	    })
	    .on("enter", function () {
			playSound('thuglife');
		})
		.on("leave", function () {
			stopSound();
		})
	    .setTween(scrollOutAnim)
	    .addIndicators()
	    .addTo(controller);

	    scene_0260w.offset(-150);



	    /*=========================================================*/
		//SCENE 引言2 说谎
		/*=========================================================*/
		var queto2_duration = top_20200203 - top_lie_words;

		var ele_quote2 = $(".quote2");
		ele_quote2.addClass('fade');
		ele_quote2.addClass('out');
		
		var scene_lie_words = new ScrollMagic.Scene({
			triggerElement: "#info_lie_words",
			duration:queto2_duration
		})
	    .on("enter", function () {
			ele_quote2.removeClass('out');
		})
		.on("leave", function () {
			ele_quote2.addClass('out');
		})
		.addIndicators()
		.addTo(controller);


		/*=========================================================*/
		//SCENE 方舱医院
		/*=========================================================*/
		var scene_square_cabin_duration = height_square_cabin_anim + 200;

		var tween_square_cabin = TweenMax.to("#square-cabin-animation", 1.0, {
			backgroundPosition: "0 100%", 
			ease: SteppedEase.config(31)
		});

		var scene_square_cabin = new ScrollMagic.Scene({
			triggerElement: "#info_square_cabin",
			duration: scene_square_cabin_duration
		})
		.on("enter", function () {
			playSound('transformer');
		})
		.on("leave", function () {
			stopSound();
		})
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
			playSound('xindian',true);
		})
		.on("leave", function () {
			stopSound();
		})
		.addIndicators()
		.addTo(controller);


		/*=========================================================*/
		//SCENE depose
		/*=========================================================*/
		var scene_depose_duration = height_anchor_20200213;

		var ele_img_20200213 = $(".img-20200213");

		var scene_depose = new ScrollMagic.Scene({
			triggerElement: "#anchor_20200213",
			duration:scene_depose_duration
		})
	    .on("enter", function () {
	    	ele_img_20200213.addClass('gray');
			playSound('depose');
		})
		.on("leave", function () {
			ele_img_20200213.removeClass('gray');
			stopSound();
		})
		.addIndicators()
		.addTo(controller);



		/*=========================================================*/
		//SCENE 雪
		/*=========================================================*/
		var scene_snow_duration = height_20200215;

		var scene_snow = new ScrollMagic.Scene({
			triggerElement: "#info_20200215",
			duration:scene_snow_duration
		})
		.on("enter", function () {
			$("#snow-mask").fadeIn(1000);
			$("#snow-mask").snowfall({flakeCount : 80});
			playSound('snow',true);
		})
		.on("leave", function () {
			$("#snow-mask").fadeOut(1500,function(){
				$("#snow-mask").snowfall('clear');
			});
			
			stopSound();
		})
		.addIndicators()
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
		var question_duration = (top_talking_words - top_question) * 0.9;
		
		var scene_question = new ScrollMagic.Scene({
			triggerElement: "#info_question",
			duration:question_duration
		})
	    .on("enter", function () {
	    	playSound('kenan');
			startQuestion();
		})
		.on("leave", function () {
			stopQuestion();
			stopSound();
		})
		.addIndicators()
		.addTo(controller);

		scene_question.offset(question_duration * 0.1);


		/*=========================================================*/
		//SCENE 星星之火
		/*=========================================================*/
		/*var images = [
			// "img/light/0100.jpg",
			// "img/light/0101.jpg",
			// "img/light/0102.jpg",
			// "img/light/0103.jpg",
			// "img/light/0104.jpg",
			// "img/light/0105.jpg",
			// "img/light/0106.jpg",
			// "img/light/0107.jpg",
			// "img/light/0108.jpg",
			// "img/light/0109.jpg",
			// "img/light/0110.jpg",
			// "img/light/0111.jpg",
			// "img/light/0112.jpg",
			// "img/light/0113.jpg",
			// "img/light/0114.jpg",
			// "img/light/0115.jpg",
			// "img/light/0116.jpg",
			// "img/light/0117.jpg",
			// "img/light/0118.jpg",
			// "img/light/0119.jpg",
			// "img/light/0120.jpg",
			// "img/light/0121.jpg",
			// "img/light/0122.jpg",
			// "img/light/0123.jpg",
			// "img/light/0124.jpg",
			// "img/light/0125.jpg",
			// "img/light/0126.jpg",
			// "img/light/0127.jpg",
			// "img/light/0128.jpg",
			// "img/light/0129.jpg",
			// "img/light/0130.jpg",
			// "img/light/0131.jpg",
			// "img/light/0132.jpg",
			// "img/light/0133.jpg",
			// "img/light/0134.jpg",
			// "img/light/0135.jpg",
			// "img/light/0136.jpg",
			// "img/light/0137.jpg"
			preload.getResult('light_0100'),
			preload.getResult('light_0101'),
			preload.getResult('light_0102'),
			preload.getResult('light_0103'),
			preload.getResult('light_0104'),
			preload.getResult('light_0105'),
			preload.getResult('light_0106'),
			preload.getResult('light_0107'),
			preload.getResult('light_0108'),
			preload.getResult('light_0109'),
			preload.getResult('light_0110'),
			preload.getResult('light_0111'),
			preload.getResult('light_0112'),
			preload.getResult('light_0113'),
			preload.getResult('light_0114'),
			preload.getResult('light_0115'),
			preload.getResult('light_0116'),
			preload.getResult('light_0117'),
			preload.getResult('light_0118'),
			preload.getResult('light_0119'),
			preload.getResult('light_0120'),
			preload.getResult('light_0121'),
			preload.getResult('light_0122'),
			preload.getResult('light_0123'),
			preload.getResult('light_0124'),
			preload.getResult('light_0125'),
			preload.getResult('light_0126'),
			preload.getResult('light_0127'),
			preload.getResult('light_0128'),
			preload.getResult('light_0129'),
			preload.getResult('light_0130'),
			preload.getResult('light_0131'),
			preload.getResult('light_0132'),
			preload.getResult('light_0133'),
			preload.getResult('light_0134'),
			preload.getResult('light_0135'),
			preload.getResult('light_0136'),
			preload.getResult('light_0137')
		];

		var obj = {curImg: 0};
		var reader = new FileReader();
		var tween = TweenMax.to(obj, 0.5,{
			curImg: images.length - 1,
			roundProps: "curImg",
			immediateRender: true,			
			ease: Linear.easeNone,

			onUpdate: function () {
			  	// $("#img-torch").attr("src", images[obj.curImg]);
 
			  	//$("#div-got-light-anim").empty();
			  	//$("#div-got-light-anim").append(images[obj.curImg]);

			  	$("#div-got-light-anim img").replaceWith(images[obj.curImg]);

			  	$("#div-got-light-anim img").css({"width":pic_Width+"px"});
				$("#div-got-light-anim img").css({"height":pic_Height+"px"});
			}
		});

		var got_light_duration = pic_Height + 100;

		var scene_got_light = new ScrollMagic.Scene({
			triggerElement: "#info_got_light",
			duration: got_light_duration
		})
		.on("enter", function () {
			playSound('nottoday');
		})
		.on("leave", function () {
			stopSound();
		})
		.setTween(tween)
		.addIndicators()
		.addTo(controller);

		scene_got_light.offset(-50);*/



		/*=========================================================*/
		//SCENE 结尾 改颜色
		/*=========================================================*/
		var scene_bg_color = new ScrollMagic.Scene({
			triggerElement: "#info_to_be_continued",
			triggerHook: 'onLeave',
		})
		.setClassToggle("#space-timeline", "body-black")
		.addIndicators()
		.addTo(controller);


		/*=========================================================*/
		//SCENE firefly
		/*=========================================================*/
		var firefly_duration = height_friend_words_anim * 0.7;

		var scene_firefly = new ScrollMagic.Scene({
			triggerElement: "#info_friend_words",
			duration: firefly_duration
		})
		.on("enter", function () {
			// $('#firefly-mask').css({'opacity':1});
			$('#firefly-mask').fadeIn(2000);
			startFirefly();
			toggleFlyText();
			
		})
		.on("leave", function () {
			// $('#firefly-mask').css({'opacity':0});
			$('#firefly-mask').fadeOut(1500,function(){
			    toggleFlyText();
				removeFirefly();
			});
			
			// $('.fly-text label').css({'opacity':0});
		})
		.addIndicators()
		.addTo(controller);

		scene_firefly.offset(firefly_duration * 0.3);


		/*=========================================================*/
		//SCENE zgl
		/*=========================================================*/
		var scene_zgl = new ScrollMagic.Scene({
			triggerElement: "#trigger-zgl",
			duration: 300
		})
		.on("enter", function () {
			playSound('zgl');
		})
		.on("leave", function () {
			stopSound();
		})

		.addIndicators()
		.addTo(controller);

		//scene_zgl.offset(-50);


		/*=========================================================*/
		//SCENE aoligei
		/*=========================================================*/
		var scene_aoligei = new ScrollMagic.Scene({
			triggerElement: "#trigger-aoligei",
			duration: 200
		})
		.on("enter", function () {
			playSound('aoligei');
		})
		.on("leave", function () {
			stopSound();
		})

		.addIndicators()
		.addTo(controller);

		//scene_aoligei.offset(-50);

		/*=========================================================*/
		//SCENE bullet
		/*=========================================================*/
		var scene_bullet = new ScrollMagic.Scene({
			triggerElement: "#trigger-bullet",
			duration: 300
		})
		.on("enter", function () {
			playSound('bullet');
		})
		.on("leave", function () {
			stopSound();
		})

		.addIndicators()
		.addTo(controller);
    }


    function active_scroll(b) {
    	window.onmousewheel = document.onmousewheel = function() {return b};
    }


    function playSound(id,haveProps){
    	haveProps = haveProps || 0;

    	if(haveProps)
    	{
    		createjs.Sound.play(id,loop_props);
    	}
    	else
    	{
    		createjs.Sound.play(id);
    	}
    	
    }


    function stopSound(){
    	createjs.Sound.stop();
    }


	startPreload();


	if (!document.addEventListener) return;

    window.addEventListener(resizeEvt, recalc, false);
    //document.addEventListener(resizeEvt, recalc, false);
    

    window.onbeforeunload = function(){
        document.documentElement.scrollTop = 0;  //ie下
        document.body.scrollTop = 0;  //非ie
    }

	


    /*=========================================================*/
	//随机弹出高亮文字
	/*=========================================================*/
    var eQuote = document.querySelector("#neat");

	var regex = /\ /;

	var aQuote = eQuote.innerHTML.split(regex);


	eQuote.innerHTML = "";
	for(var word in aQuote){
	  eQuote.innerHTML += "<span>" + aQuote[word] + "</span>";
	}

	var eWords = eQuote.querySelectorAll("span");

	

	function fHighlightRandomWord (e) {
	  var iRandom = Math.floor(Math.random() * e.length);
	  e[iRandom].classList.add("qhighlight");
	}

	function fClearAllHighlights (e) {
	  var nlHighlights = e.querySelectorAll(".qhighlight");

	  var aHighlights = Array.prototype.slice.call(nlHighlights);

	  Array.prototype.map.call(aHighlights, function(){
	    arguments[0].classList.remove("qhighlight");
	  });
	}

	var question_repeat;

	function startQuestion(){

		console.log("======== startQuestion ========");
		console.log("======== startQuestion ========");
		console.log("======== startQuestion ========");

	  	question_repeat = setInterval(function() {
		  	if(Math.random() > 0.85) fClearAllHighlights(eQuote);
		  	fHighlightRandomWord(eWords);
		}, 300);
	}

	function stopQuestion(){
		fClearAllHighlights(eQuote);
		clearInterval(question_repeat);
	}




	/*=========================================================*/
	// rain
	/*=========================================================*/
	var container_rain = document.getElementById('rain-mask');

	function randomRange( minNum, maxNum) {
	  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
	}

	function rain(fall){

		console.log("rain fall number = ",fall);

		for (var i = 0; i < fall; i++){

			var drop = document.createElement("div");
			var splash = document.createElement("div");

			var randomLeft = randomRange(0, 1600);
			    
			drop.classList.add("drop");
			drop.style.left = randomLeft + "px";
			drop.style.top = randomRange(-1000, 1400) + "px";

			if (i % 2 === 0){
			  splash.classList.add("splash");
			  splash.style.bottom = Math.floor(Math.random() * 100) + "px";
			  splash.style.left = randomLeft + "px";
			  splash.style.animation = "splashing " + randomRange(.2, .7) + "s linear infinite";
			  container_rain.appendChild(splash);
			} 


			 container_rain.appendChild(drop);

		}
	 }

	 function startRain(){	
	 	rain(100);
	 }

	 function clearRain(){
	 	var rainy = document.getElementsByClassName('drop');
		var splashes = document.getElementsByClassName("splash");
		while(rainy[0]) {
		    rainy[0].parentNode.removeChild(rainy[0]);
		}
		  while(splashes[0]) {
		  splashes[0].parentNode.removeChild(splashes[0]);
		}	
	 }

	//startRain();


	var innerFlash = 'rgb(255,0,255)';
	var outerFlash = 'rgb(255,55,255)';

    var d = document,x = [],y = [],xy = [],c = 0;
    function sortNumber(a,b) { return a - b;}
    function prcnt(a,b) {return parseInt(a * b / 100, 10);}
    var h, w, x = [],y = [],xy = [], initX = 0;


    var con = document.createElement('div');
    con.setAttribute('style', 'display:block;'
	    +'position:fixed;'
	    +'height:100%;width:100%;'
	    +'margin:auto;'
	    +'top:0;left:0;right:0;bottom:0;'
	    +'background-color: transparent;'
	    +'visibility:hidden;'
	    +'overflow:hidden;');
    container_rain.appendChild(con);

    var svgFilters = '<svg xmlns="http://www.w3.org/2000/svg">'
	    +'<defs>'
	    +'<filter id="scatter" width="2" height="2" y="-.5" x="-.5" color-interpolation-filters="sRGB">'
	    +'<feGaussianBlur stdDeviation="0.6" result="result1"/>'
	    +'<feBlend in2="result1" result="fbSourceGraphic" mode="multiply"/>'
	    +'<feTurbulence baseFrequency=".015" type="fractalNoise" numOctaves="6" result="result3"/>'
	    +'<feDisplacementMap in="fbSourceGraphic" xChannelSelector="R" yChannelSelector="G" scale="60" result="result2" in2="result3"/>'
	    +'<feMorphology radius="0" operator="dilate" result="result4"/>'
	    +'<feBlend mode="screen" in2="result2"/>'
	    +'</filter>'
	    +'<filter id="glow" color-interpolation-filters="sRGB">'
	    +'<feFlood flood-opacity="1" flood-color="'+innerFlash+'" result="flood"/>'
	    +'<feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>'
	    +'<feGaussianBlur in="composite1" stdDeviation="10" result="blur"/>'
	    +'<feOffset dx="0" dy="0" result="offset"/>'
	    +'<feComposite in="SourceGraphic" in2="offset" result="composite2"/>'
	    +'</filter>'
	    +'</defs>'
	    +'</svg>';
    container_rain.innerHTML += svgFilters;

    function gen() {
        h = window.innerHeight;
        w = window.innerWidth;
        var xMax = prcnt(16,w); 
        var yMin = prcnt(7,h);
        var yMax = prcnt(25,h);
        x = [];
        y = [];
        xy = [];
        var step = 0;
        var a = w/2;
        var b = w/1.5;
        var e = b/2;
        initX = a + Math.random() * b-e|0;
        for (var i = 0; i < 50; i++) {
            var g = 20 + Math.random() * yMax|0;
            step += g;
            y[i] = step|0;
            if (step > h){break}
        }
        y.push(0);
        y.sort(sortNumber);
        x[0] = initX;
        for (var i = 0; i < y.length; i++) {
            if ((y[i+1] - y[i] < yMin)) {
                x[i+1] = x[i] + Math.floor(Math.random() * 10-5);
            }
            else {
                x[i+1] = x[i] + Math.floor(Math.random() * xMax - (xMax/2));
            }
            xy[i] = x[i]+','+y[i]+' ';
        }
        return xy;
    }

    function run() {
        var t = Math.round(1 + Math.random() * 7)|0;
        var lightningSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="visibility:visible;-webkit-filter: drop-shadow( 0 0 20px '+outerFlash+' );">'
	        +'<g id="mainBolt" filter="url(#scatter)">'
	        +'<path d="M '+gen()+'" fill="none" stroke="#fff" stroke-width="'+t+'" filter="url(#glow)"/>'
	        +'</g>'
	        +'</svg>';
        con.innerHTML = lightningSvg;
        container_rain.appendChild(con);
    }

    function flash() {
       //document.body.style.backgroundImage = 'radial-gradient(ellipse farthest-corner at '+initX+'px top, #ffaaff 0%, #ee88ff 16%, #000 100%)';
       container_rain.style.backgroundImage = 'radial-gradient(ellipse farthest-corner at '+initX+'px top, #ffaaff 0%, #ee88ff 16%, #000 100%)';
       
       var r = 30 + Math.random() * 70|0;
       c++;
       setTimeout(function(){flkr();}, r);
    }

    function flkr() {
        //document.body.style.backgroundImage = 'radial-gradient(ellipse farthest-corner at '+initX+'px top, #000 0%, #000 100%)';

        container_rain.style.backgroundImage = 'radial-gradient(ellipse farthest-corner at '+initX+'px top, #000 0%, #000 100%)';
        
        var r = 16 + Math.random() * 30|0;
        if (c > 6) {
            clear();
        }  
        else {
           setTimeout(function(){flash();}, r); 
        }
    }

    function clear() {
        con.innerHTML = '';
        //document.body.style.backgroundImage = 'radial-gradient(ellipse farthest-corner at center top, #000 0%, #000 100%)';
    	//container_rain.style.backgroundImage = 'radial-gradient(ellipse farthest-corner at center top, #000 0%, #000 100%)';
    	container_rain.style.backgroundImage = '';

    	document.documentElement.addEventListener('click',startLightning);
    
    }

    function startLightning(){
    	c=0;
    	flash();
    	run();

    	// sound_lightning.play();
    	//stopSound();
    	playSound('lightning');

    	document.documentElement.addEventListener('click',startLightning);
    }





    



	/*=========================================================*/
	// firefly
	/*=========================================================*/
	var isFireFlyRun = false;
	var fireflies = 50;
	// var $container = $("#div-firefly");
	var $container = $("#firefly-mask");
	
	
	var $containerWidth = $container.width();
	var $containerHeight = $container.height();
	//var master = new TimelineMax();

	//startFirefly();
	//
	// $("body").click(function(){
 //    	var ul = document.getElementsByClassName('fly-text')[0];
 //    	console.log(">>>>FLY TEXT ul : ",ul);
 //  		ul.classList.toggle('fly-text-hidden');
	// });

    var flyTl;
    var fadeTl;
    
    function toggleFlyText(){ 
  		$flyTxt.classList.toggle('fly-text-hidden');
    }

    function removeFirefly(){
    	flyTl.clear();
    	fadeTl.clear();

    	$container.empty();
    }

	function startFirefly(){

		// if(isFireFlyRun)
		// {
		// 	return;
		// }

		for (var i = 0; i < fireflies; i++) {
		  var firefly = $('<div class="firefly"></div>');
		  TweenLite.set(firefly, {
		    x: Math.random() * $containerWidth,
		    y: Math.random() * $containerHeight
		    // opacity:0.25
		  });
		  $container.append(firefly);
		  flyTheFirefly(firefly);
		  isFireFlyRun = true;
		}
	}


	function flyTheFirefly(elm) {
	  flyTl = new TimelineMax();
	  fadeTl = new TimelineMax({
	    delay: Math.floor(Math.random() * 2) + 1,
	    repeatDelay: Math.floor(Math.random() * 6) + 1,
	    repeat: -1
	  });

	  fadeTl.to(
	    [elm],
	    0.25,
	    { opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2 },
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

	

});