"use strict";

var t_ring = $("#ring");//语音
var t_odg1a = $("#odg1a");//语音
var t_odg1b = $("#bgm");//背景
var t_odg1c = $("#odg1c");//名字
var canA1 = false;
var canA2 = false;
var canA3 = false;


var id = "";
var n = "";

var data = ["fls","wls","gls","gxy","lyh","hql","lyls","jh","ct","wxh","djy","lang","lwei","lchang","lj","ly","vv","qin","peng","lily","zz","tzc","wdx","wwt","wr","wyh","wwx","xx","joyce","xwl","wyj","sz","zwj","zm","zf","zxp"];
//方老师，王老师，高老师，小勇，老黄，李燕老师，金慧,老崔,老第,老董,李昂,老刘,刘畅，刘精 罗亦君 vv姐 覃爷 彭爷 lily 周折 谈则次 王鼎香 王文涛 无染 无一豪 王维希 小小 笑笑 文利老师  张文君 默默 周芳 祝小佩 王远君 嫂子

var data = [
	{id:"fls",n:"方老师"},
	{id:"wls",n:"王老师"},
	{id:"gls",n:"高老师"},
	{id:"gxy",n:"晓勇"},
	{id:"lyls",n:"李燕老师"},
	{id:"hql",n:"老黄"},
	{id:"jh",n:"金慧"},
	{id:"ct",n:"老崔"},
	{id:"wxh",n:"老弟"},
	{id:"djy",n:"老董"},
	{id:"lang",n:"李昂"},
	{id:"lwei",n:"老刘"},
	{id:"lchang",n:"刘畅"},
	{id:"lj",n:"刘菁"},
	{id:"lily",n:"Lily"},
	{id:"ly",n:"罗毅君"},
	{id:"vv",n:"VV姐"},
	{id:"qin",n:"覃爷"},
	{id:"peng",n:"彭爷"},
	{id:"zz",n:"周喆"},
	{id:"tzc",n:"谭则慈"},
	{id:"wdx",n:"王定祥"},
	{id:"wwt",n:"王文韬"},
	{id:"wr",n:"吴冉"},
	{id:"wyh",n:"吴亦豪"},
	{id:"wwx",n:"王唯希"},
	{id:"xx",n:"小小"},
	{id:"joyce",n:"笑笑"},
	{id:"xwl",n:"文莉老师"},
	{id:"zwj",n:"张文君"},
	{id:"zm",n:"默默"},
	{id:"zf",n:"周芳"},
	{id:"zxp",n:"祝晓佩"}
];



$((function() {
	
	console.log('>>========== ready');
	
	
	
	
	init();
	
	//t_ring.trigger("play");
	//t_ring.loop = true;
	
	function init() {
		
		console.log('>>========= init');
		
		getName();

		var n_path = "audio/" + id + ".mp3";
		console.log('>>n_path = ',n_path);
		
		t_odg1c.attr('src',n_path);
		
		$.ajax({
			url: "audio/Rec_016.mp3",
			success: function() {
				canA1 = true;
				console.log('>>>>canA1 = ',canA1);
				
				$.ajax({
					url: "audio/bg.mp3",
					success: function() {
						canA2 = true;
						console.log('>>canA2 = ',canA2);
						
						
						$.ajax({
							
							url: n_path,
							success: function() {
								canA3 = true;
								console.log('>>canA3 = ',canA3);
								
								audioReady();
							}
						})

					}
				})
			}
		})
		

	}
	
	function audioReady() {
		
		console.log('>>>>======= audioReady');
		
		if(canA1 == true && canA2 == true && canA3 == true){
	
			setTimeout(function(){
				$('.ring, .stText, .oglasiteSe').addClass('aktiven');
				$('.ringWrapp').addClass('aktiven');
				$('.loader').stop(true,true).fadeOut();
			}, 2000);
		
		}
		
	}
	
	function getName() {
		
		
		var param = GetUrlParam();
		console.log('>>param = ',param);
		
		if(param.id != null)
		{
			//n = param.n;
			
			//let result = data.findIndex(item => {
			//	return item.id == param.id;
			//});
			
			let result = data.find(item => {
				return item.id == param.id;
			});
			
			//if(result > -1)
			if(result != undefined)	
			{
				id = param.id;
				
				n = result.n;
				
				console.log('>>1.n = ',n);
			}
			else
			{
				id = "friend";
				n = "亲爱的朋友";
				console.log('>>2.n = ',n);
			}
		}
		else{
			id = "friend";
			n = "亲爱的朋友";
			console.log('>>3.n = ',n);
		}
		
		var str_name = "你好啊，" + n;
		
		$("#txt_name").text(str_name);
		
	}
	
	//获取url参数，准备get请求
	function GetUrlParam() {  
		var url = location.search; //获取url中"?"符后的字串  
		var theRequest = new Object();  
		if (url.indexOf("?") != -1) {  
			var str = url.substr(1);  
			var strs = str.split("&");  
			for(var i = 0; i < strs.length; i ++) {  
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
			}  
		}  
		return theRequest;  
	}
	
	
    $("body").on("click", ".ring", (function() {
		
        $(".ring").addClass("off");
        $(".stText").removeClass("aktiven");
        $("header, footer").addClass("inPlay");
		
        setTimeout((function() {
            $(".ringWrapp").fadeOut(350, (function() {
				$(".videoContainer").delay(1500).fadeIn(2000);
			}));
			
            setTimeout((function() {
				$(".posnZglas1").delay(300).fadeIn();
			}), 500);
			
            setTimeout((function() {
                $(".posnZglas").fadeOut()
            }), 3500)
        }), 650);
		
        

			
		t_odg1a.trigger("play");
	
		//t_odg1b.src = "audio/Rec_013.wav";
		
		//t_odg1b.trigger("play");
		//t_odg1b.prop("muted", false);
		//var e_odg1b = $("#odg1b");
		//e_odg1b.trigger("play");
		//e_odg1b.prop("muted", true);
		
		//t_odg1c.src = "audio/Rec_013.wav";

		
		
		t_odg1b.trigger("play");
		//t_odg1b.volume = 0.1;
		t_odg1b[0].volume = 0.3;
		
		//$("#bgm").volume = .3;
		//$("#bgm").trigger("play");
		
		//var bgm = document.getElementById("bgm");
		//bgm.volume = .3;
		//bgm.play();
		
		vprOdg1();
  
    }));
	
	
	function vprOdg1() {
	

	
		t_odg1a.on("timeupdate", (function() {
		
			//if(this.currentTime > 4 && this.currentTime < 4.4) {
			//	$(".vprasanjaWrapp1").addClass("aktiven");
			//}
		
			console.log("currentTime = ",this.currentTime);
		
		
		
			if(this.currentTime > 2.5 && this.currentTime < 2.8) {

				t_odg1c.trigger("play");
			}
			
			else if(this.currentTime > 4.5 && this.currentTime < 4.8) {
			
				$("#odg1a, #odg1b").prop("muted", true);
				
				t_odg1a.trigger("pause");
				
				$(".odgovoriWrapp1").addClass("aktiven").children().addClass("zaKlik");
			
				/*setTimeout((function() {
					
					//$(".timerWrapp").addClass("aktiven sec7 on");
					//odstevalnik(7),
					setTimeout((function() {
						//$(".timerWrapp.aktiven").length && randOdg();
						setTimeout((function() {
							$(".odgovoriWrapp1").removeClass("aktiven").children().removeClass("zaKlik");
						}), 3000);
						
						//$(".timerWrapp").removeClass("on");
					}), 4000);
				}), 350);*/
				
			
			}
			
			else if(this.currentTime > 6.5 && this.currentTime < 6.9){
				$(".vprasanjaWrapp1").addClass("aktiven");
			}
			else if(this.currentTime > 12.0 && this.currentTime < 12.3) {
				$(".vprasanjaWrapp1").removeClass("aktiven");
			}
			
			else if(this.currentTime > 12.5 && this.currentTime < 12.9){
				$(".vprasanjaWrapp2").addClass("aktiven");
			}
			else if(this.currentTime > 17.5 && this.currentTime < 17.9) {
				$(".vprasanjaWrapp2").removeClass("aktiven");
			}
			
			else if(this.currentTime > 18.5 && this.currentTime < 18.9){
				$(".vprasanjaWrapp3").addClass("aktiven");
			}
			else if(this.currentTime > 27.5 && this.currentTime < 27.9) {
				$(".vprasanjaWrapp3").removeClass("aktiven");
			}
			
			else if(this.currentTime > 30.0 && this.currentTime < 30.3){
				$(".vprasanjaWrapp4").addClass("aktiven");
			}
			else if(this.currentTime > 42.0 && this.currentTime < 42.3) {
				$(".vprasanjaWrapp4").removeClass("aktiven");
			}
			
			else if(this.currentTime > 43.5 && this.currentTime < 43.9){
				$(".vprasanjaWrapp5").addClass("aktiven");
			}
			else if(this.currentTime > 52.2 && this.currentTime < 52.5) {
				$(".vprasanjaWrapp5").removeClass("aktiven");
			}
			
			else if(this.currentTime > 54.5 && this.currentTime < 54.9){
				$(".vprasanjaWrapp6").addClass("aktiven");
			}
			else if(this.currentTime > 62.2 && this.currentTime < 62.5) {
				$(".vprasanjaWrapp6").removeClass("aktiven");
			}
			
			else if(this.currentTime > 65.5 && this.currentTime < 65.8) {
				$("#odg1a, #odg1b").prop("muted", true);
				
				t_odg1a.trigger("pause");
				
				$(".odgovoriWrapp2").addClass("aktiven").children().addClass("zaKlik");
			}
			
			else if(this.currentTime > 69.5 && this.currentTime < 69.8) {
				$("#odg1a, #odg1b").prop("muted", true);
				
				t_odg1a.trigger("pause");
				
				$(".odgovoriWrapp3").addClass("aktiven").children().addClass("zaKlik");
			}
		}));
	
		t_odg1a.on("ended", (function() {
			//toOprojektu()
		}));
	
		$("body").on("click", ".odgovoriWrapp1 .odg.zaKlik", (function() {
			$(".zaKlik").removeClass("zaKlik"),
			$(this).addClass("aktiven").siblings().addClass("pasiven");
			
			//$(".timerWrapp").removeClass("aktiven sec7");
			//$(".odstevalnikWrapp").removeClass("aktiven");
			$(".odgovoriWrapp1").removeClass("aktiven").children().removeClass("zaKlik");
			
			var t_item = $(this).data("odg");
			console.log("t_item = ",t_item);
			
			if(t_item == "#odg1a"){
				console.log("odg1a");
				t_odg1a.trigger("play");
				$(t_item).prop("muted", false);
			}
			else{
				//toAgainPage()
			}
			
		}));
	
	
		$("body").on("click", ".odgovoriWrapp2 .odg.zaKlik", (function() {
			$(".zaKlik").removeClass("zaKlik"),
			$(this).addClass("aktiven").siblings().addClass("pasiven");
			
			//$(".timerWrapp").removeClass("aktiven sec7");
			//$(".odstevalnikWrapp").removeClass("aktiven");
			$(".odgovoriWrapp2").removeClass("aktiven").children().removeClass("zaKlik");
			
			var t_item = $(this).data("odg");
			console.log("t_item = ",t_item);
			
			if(t_item == "#odg1a"){
				console.log("odg1a");
				t_odg1a.trigger("play");
				$(t_item).prop("muted", false);
			}
			else{
			}
			
		}));
	
		$("body").on("click", ".odgovoriWrapp3 .odg.zaKlik", (function() {
			$(".zaKlik").removeClass("zaKlik"),
			$(this).addClass("aktiven").siblings().addClass("pasiven");
			
			//$(".timerWrapp").removeClass("aktiven sec7");
			//$(".odstevalnikWrapp").removeClass("aktiven");
			$(".odgovoriWrapp3").removeClass("aktiven").children().removeClass("zaKlik");
			
			var t_item = $(this).data("odg");
			console.log("t_item = ",t_item);
			
			if(t_item == "#odg1a"){
				//toEndPage();
				//t_odg1a.trigger("play");
				//$(t_item).prop("muted", false);
			}

			
		}));
	
	
	}
	
	
	


}))



$(window).mousemove((function(t) {
    $(".cursor").css({
        left: t.pageX,
        top: t.pageY - $(document).scrollTop()
    })
}))




