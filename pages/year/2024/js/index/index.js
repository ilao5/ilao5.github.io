// 预先渲染界面
$('body').append('<iframe class="ax" src="./Ax.html" frameborder="0"></iframe>');
$('body').append('<iframe class="gchat" src="./Gchat.html" frameborder="0"></iframe>');

// 点击打开相对于的界面
$('.ul li:nth-child(1)').click(() => { $('.gchat').css('z-index', '10'); })
$('.ul li:nth-child(2)').click(() => { $('.ax').css('z-index', '10'); })

// 顶部栏功能
$('.header-b img:nth-child(1)').click(() => { alert('此功能暂未开发。等待后续更新！！！'); })
$('.header-b img:nth-child(2)').click(() => { location.reload(); })

if (window.plus) {plusReady();} else {document.addEventListener('plusready', plusReady, false);}
document.addEventListener('plusready', function() {
	var first = null;
	plus.key.addEventListener('backbutton', function() {
		if (!first) {
			first = new Date().getTime();
			var urls = location.hash.split('/')[1]
			if (urls == "NewD" || urls == "StartScan") {
				plus.runtime.quit();
			} else {
				$('.ax, .gchat').css('z-index', -99);
			}
			setTimeout(function() {
				first = null;
			}, 500);
		} else {
			if (new Date().getTime() - first < 500) {
				plus.runtime.quit();
			}
		}
	});
});