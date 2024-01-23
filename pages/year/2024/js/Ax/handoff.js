// 点击切换不同功能
let t = 0;
$('.tab').click(() => {
	if (t == 0) {
		$('.tab').text('语音');
		t++;
	} else {
		$('.tab').text('文字');
		t--;
	}
})

// 判断用户选择的功能
$('.btn').on('click', () => {
	if (t == 0) {
		//writing(1000,0);
		writing2();
	} else {
		voice();
	}
})

// 监听发送事件
$(document).keyup(function(event) {
	if (event.keyCode == 13) { $(".btn").trigger("click");}
});

// 顶部栏 更多 切换事件
$('.header-b').click(() => {
	$('.masks').show();
	$('header ul').stop().animate({ right: '0rem' }, 500);
})
$('.masks').click(() => {
	$('.masks').hide();
	$('header ul').stop().animate({ right: '-30rem' }, 500);
})

// 清除数据功能
$('header ul li:nth-child(1)').click(() => {
	if (localStorage.getItem('tpData') === null) { return alert('暂无聊天记录！'); }
	var cf = confirm('您是否要清楚历史聊天记录！！！');
	if (cf == true) {
		$('.box li').remove();
		localStorage.setItem('verify', 1);
	}
})

// 恢复数据功能
$('header ul li:nth-child(2)').click(() => {
	if (localStorage.getItem('verify') == null) { return alert('暂未删除聊天记录'); }
	localStorage.removeItem('verify');
	$('.box li').remove();
	dataRecovery();
})

// 永久删除数据功能
$('header ul li:nth-child(3)').click(() => {
	var cf1 = confirm('您是否要永久清楚历史聊天记录！！！');
	if (cf1 == true) {
		var cf2 = confirm('永久清楚历史聊天记录无法恢复！！！');
		if (cf2 == true) {
			$('.box li').remove();
			localStorage.removeItem('verify');
			localStorage.removeItem('tpData');
			localStorage.removeItem('tpData1');
		}
	}
})

