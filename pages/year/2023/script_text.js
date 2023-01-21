'use strict';

(function (doc, win) {
	

	var docEl = doc.documentElement;
	var resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize';
	var recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		if(clientWidth>=750){
			docEl.style.fontSize = '100px';
		}else{
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		}
	};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	

	var app = {

		words: [
			'',
			'日月牵衣袖',
			'春秋抚眉头',
			'用一个冬天',
			'十里飞雪',
			'鹅毛咏絮',
			'来歇你舟车',
			'敬你半生风波苦',
			'敬你一路而来', 
			'移山趟水',
			'跨海挥川',
			'衣袂带霜',
			'始终胸襟坦荡荡!',
			'',
			'',
			'',
			'',
			'手掬星辰',
			'口衔柔波',
			'用一首清诗',
			'两袖词赋',
			'三章五文',
			'敬你年少写意傥风流',
			'敬你春风一杯酒',
			'世故几载',
			'大口吃愁',
			'快意飞马',
			'侠气纵横',
			'缘来不拒',
			'情走不留',
			'',
			'',
			'',
			'',
			'一杯清晨',
			'书声于口',
			'用一轮皎洁',
			'满地银霜',
			'浩瀚鲸空',
			'敬你闻鸡起',
			'夜半挑灯',
			'不梳几载', 
			'也有星辰青云梦一场',
			'愿你平生尽得意',      
			'',
			'',
			'',
			'',
			'最后',
			'虚构一个树深小窝',
			'柴门日照',
			'用一场火暖',
			'软橘猫',
			'及她脉脉柔情',
			'敬你眼窝深陷',
			'粲若天上星', 
			'溅起一次相逢',
			'终遇佳人话不休',
			'......',
			'',
			'',
			'',
			'',
			'某某某',
			'遥遥之愿',
			'诚与君念',
			'2023',
			'祝您',
			'身体健康',
			'财源广进',
			'万事如意'
		],

  		init: function () {

			app.fromName = new URL(window.location.href).searchParams.get('from');
			app.toName = new URL(window.location.href).searchParams.get('to');
			console.log("from = ",app.fromName);
			console.log("to = ",app.toName);

			app.words[63] = app.toName;
			app.words[67] = app.fromName + "祝您";

			app.charIndex = -1;

			app.zIndexTop = 999;
			app.zIndexBottom = 0;
			
			app.pageStart = document.getElementById('div-start');
			app.pageStart.style.zIndex = app.zIndexTop;

			app.pageShare = document.getElementById('div-share');
			app.pageShare.style.zIndex = app.zIndexBottom;

			app.pageDonate = document.getElementById('div-donate');
			app.pageDonate.style.zIndex = app.zIndexBottom;

			app.pageBtns = document.getElementById('div-btns');
			app.pageBtns.style.zIndex = app.zIndexBottom;


			app.btnStart = document.getElementById('btn-start');
			app.btnStart.addEventListener('click', app.onBtnStart);
			app.btnStart.innerHTML = "一条来自" + app.fromName + "的新年祝福";

			app.btnAgain = document.getElementById('btn-again');
			app.btnAgain.addEventListener('click', app.onBtnAgain);
			app.btnAgain.disabled = true;
			app.btnAgain.innerHTML = "祝福语播放中";
			//app.btnAgain.style.opacity = 0;

			app.btnShare = document.getElementById('btn-share');
			app.btnShare.addEventListener('click', app.onBtnShare);

			app.btnDonate = document.getElementById('btn-donate');
			app.btnDonate.addEventListener('click', app.onBtnDonate);

			app.btnCloseDonate = document.getElementById('btn-Close-Donate');
			app.btnCloseDonate.addEventListener('click', app.onBtnCloseDonate);

			app.btnGenQRCode = document.getElementById('btn-Gen-QRCode');
			app.btnGenQRCode.addEventListener('click', app.onBtnGenQRCode);

			app.btnReGenQRCode = document.getElementById('btn-ReGen-QRCode');
			app.btnReGenQRCode.addEventListener('click', app.onBtnCloseSharePage);

			app.qrOutput = document.getElementById('output');

			app.inputFrom = document.getElementById('input-from');
			app.inputTo = document.getElementById('input-to');

			app.popwindow = document.getElementById('popupwindow');
			
		},

		onBtnStart:function () {
			console.log('onBtnStart');
			//var divStart = document.getElementById('div-start');
			app.pageStart.classList.add('out');

			app.pageStart.style.zIndex = app.zIndexBottom;

			app.pageBtns.style.zIndex = app.zIndexTop;

			app.container = document.createElement('div');
			app.container.className = 'animation-container';
			document.body.appendChild(app.container);
			window.setInterval(app.add, 2000);

		},

		onBtnAgain:function () {
			console.log('onBtnAgain');
			app.charIndex = -1;
			app.btnAgain.disabled = true;
			app.btnAgain.innerHTML = "祝福语播放中";
			// app.popwindow.classList.toggle('away');
			// window.setTimeout(function(){
			// 	app.popwindow.classList.toggle('out');
			// },250);
		},

		onBtnShare:function () {
			console.log('onBtnShare');

			app.pageShare.classList.toggle('pop-up');
			app.pageShare.classList.toggle('away');
			window.setTimeout(function(){
				app.pageShare.classList.toggle('out');
			},250);

			app.pageShare.style.zIndex = app.zIndexTop;

			app.pageBtns.style.zIndex = app.zIndexBottom;
		},

		onBtnDonate:function () {
			console.log('onBtnDonate');

			app.pageDonate.classList.toggle('pop-up');
			app.pageDonate.classList.toggle('away');
			window.setTimeout(function(){
				app.pageDonate.classList.toggle('out');
			},260);

			app.pageDonate.style.zIndex = app.zIndexTop;
			app.pageBtns.style.zIndex = app.zIndexBottom;
		},

		onBtnCloseDonate:function () {
			console.log('onBtnCloseDonate');

			app.pageDonate.classList.toggle('pop-up');
			app.pageDonate.classList.toggle('away');
			window.setTimeout(function(){
				app.pageDonate.classList.toggle('out');
			},260);

			app.pageDonate.style.zIndex = app.zIndexBottom;
			app.pageBtns.style.zIndex = app.zIndexTop;
		},

		onBtnGenQRCode:function(){
			console.log('onBtnGenQRCode');


			let txtFrom = app.inputFrom.value;
			let txtTo = app.inputTo.value;

			console.log("txtFrom=",txtFrom);
			console.log("txtTo=",txtTo);

			if(txtFrom == "" || txtTo == "")
			{
				console.log("名字未填写");
				app.btnGenQRCode.innerHTML = "两个名字都要填写";
				window.setTimeout(function(){
					app.btnGenQRCode.innerHTML = "生成祝福二维码";
				},2000);
				return;
			}

			if(app.qrcode != undefined)
			{
				app.qrcode.clear();
			}
			else
			{
				app.qrcode = new QRCode(app.qrOutput,{
					colorDark:"#000000",
					colorLight:"#ffffff",
					correctLevel:QRCode.CorrectLevel.H
				});
	
				app.qrcode.clear();
			}


			let urlTxt = "https://www.ilao5.cn/pages/year/2023/index.html?from="+txtFrom+"&to="+txtTo;
			// let qrcode = new QRCode("output",{
			// 	colorDark:"#000000",
			// 	colorLight:"#ffffff",
			// 	correctLevel:QRCode.CorrectLevel.H
			// });

			app.qrcode.makeCode(urlTxt);
			app.qrOutput.style.opacity = 1;

		},

		onBtnCloseSharePage:function(){
			console.log('onBtnCloseSharePage');

			console.log('app.qrcode',app.qrcode);
			if(app.qrcode != undefined)
			{
				app.qrcode.clear();
			}
			
			app.inputFrom.value = '';
			app.inputTo.value = '';

			app.qrOutput.style.opacity = 0;

			app.pageShare.classList.toggle('pop-up');
			app.pageShare.classList.toggle('away');
			window.setTimeout(function(){
				app.pageShare.classList.toggle('out');
			},250);

			app.pageShare.style.zIndex = app.zIndexBottom;

			app.pageBtns.style.zIndex = app.zIndexTop;
			
				
		},

		add: function () {
			var element = document.createElement('span');
			app.container.appendChild(element);
			app.animate(element);
		},

		animate: function (element) {
			app.charIndex = app.charIndex + 1;
			if(app.charIndex>=app.words.length)
			{
				app.charIndex = app.words.length - 1;
				return;
			}
			//var character = app.words[Math.floor(Math.random() * app.words.length)];
			var character = app.words[app.charIndex];
			//var duration = Math.floor(Math.random() * 15) + 1;
			var duration = 16;
			var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
			//var size = 10 + (15 - duration);
			var size = 2.5;
			element.style.cssText = 'color: #c9a063;text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);right:'+offset+'vw; font-size:'+size+'rem;animation-duration:'+duration+'s';
			//element.style.cssText = 'color: #fee;text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
			
			element.innerHTML = character;
			window.setTimeout(app.remove, duration * 1000, element);
		},

		remove: function (element) {
			element.parentNode.removeChild(element);
			if(app.charIndex >= app.words.length-1)
			{
				//app.btnAgain.style.opacity = 1;
				app.btnAgain.disabled = false;
				app.btnAgain.innerHTML = "再一次祝福语";
			}
		},

	};

	
	doc.addEventListener('DOMContentLoaded', app.init);

})(document, window);