var plan
// 获取数据事件
const chat = () => {
	$.get('http://www.liulongbin.top:3006/api/cmtlist', {}, (res) => {
		let rows = [];
		$.each(res.data, (i, item) => { rows.push(item.content); });
		let arr = stockpile('data2', 'storeData2', 'tpData2', rows);
		result = Array.from(new Set(arr));
		result.reverse();
		$('.box1 li').remove();
		for (var i = 0; i < result.length; i++) {
			$('.box1').append(`<li class="li2"><img src=${tp} style="height:5rem"><a>${result[i]}</a></li>`);
		}
		plan = result.length;
		localStorage.setItem('plan', plan)
	})
}

// 发送数据请求事件
const send = () => {
	let val = $('input').val();
	$.post('http://www.liulongbin.top:3006/api/addcmt', { username: 'Ax', content: val }, (res) => { chat(); })
	scroll(500, '.box1');
	$('input').val('');
}

// 点击发送按钮
$('.btn').click(() => { send(); })

// 绑定发送按钮
$(document).keyup(function(event) { if (event.keyCode == 13) { $(".btn").trigger("click");} });

// 实时渲染数据
chat();
setInterval(() => {
	chat();
	if(localStorage.getItem('plan') > localStorage.getItem('plan1')){ scroll(500, '.box1'); }
	localStorage.setItem('plan1', plan)
}, 1000)

$('.header-b').click(() => {
	var cf = confirm('您是否要清理缓存！！！');
	if (cf == true) {
		$('.box li').remove();
		localStorage.removeItem('data2');
		localStorage.removeItem('tpData2');
		localStorage.removeItem('storeData2');
	}
})