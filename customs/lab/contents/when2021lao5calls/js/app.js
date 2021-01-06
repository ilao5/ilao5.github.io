"use strict";

var t_odg1a = $("#odg1a");
var t_odg1b = $("#odg1b");
var t_odg1c = $("#odg1c");


$((function() {
	
	
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

		t_odg1c.attr('src','audio/lyh.mp3');
		
		
		var mus = document.getElementById("mus");
		mus.volume = .5;
		mus.play();
		
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
}
))

function init() {
    startp();
    //anim();
	
	
	$.ajax({
        url: "audio/Rec_016.mp3",
        success: function() {
            canA1 = true;
			
			
        }
    })
	console.log('>>canA1 = ',canA1);
	
	$.ajax({
		url: "audio/Unresolved Sadness_CUTED_compress-v2.mp3",
		success: function() {
			canA2 = true;
		}
	})
	console.log('>>canA2 = ',canA2);
	
}

window.addEventListener("load", (function() {
		init();
	}
))



function startp() {}