
var avatar = 'data:image/png;base64,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';
var fromName = new URL(window.location.href).searchParams.get('from');
var toName = new URL(window.location.href).searchParams.get('to');

if(fromName == null) fromName = "Lao5";
if(toName == null) toName = "我的朋友";

console.log("from = ",fromName);
console.log("to = ",toName);

var count = 10;
var words = [
			'王小波说',
			'那一天，我二十一岁',
			'在我一生的黄金时代',
			'我有好多奢望',
			'我想爱，想吃',
			'还想在一瞬间',
			'变成天上半明半暗的云',
			'后来我才知道',
			'生活就是个慢慢受槌的过程',
			'人一天天老下去',
			'奢望也一天天消失',
			'最后变得像挨了槌的牛一样',
			'可是我过二十一岁生日的时候',
			'没有预见到这一点',
			'我觉得自己会永远生猛下去',
			'什么都槌不了我',
			'......',
			'怎么说呢',
			'生活可能不像想象的那么好',
			'但是也不会像想象的那么糟',
			'20',
			'21',
			'所以，你看',
			'山赶着山',
			'山山漫漫结成关',
			'人赶着人',
			'人人草草尽走散',
			'27',
			'不过',
			'人就是这样',
			'坡坡难上坡坡上',
			'关关难过过关关',
			'湾湾难闯湾湾闯',
			'山川是我',
			'我是山川！',
			'回头一看',
			'山山错落',
			'人生起伏',
			'才发现',
			'我们已经走过了很长的路...',
			'40某某某',
			'此时此刻，新旧交替',
			'先敬时代洪流裹挟之下的我们',
			'滚石不苔！',
			'然后',
			'风雨送春归',
			'飞雪迎春到',
			'已是悬崖百丈冰',
			'犹有花枝俏',
			'俏也不争春',
			'只把春来报',
			'待到山花烂漫时',
			'他在丛中',
			'提示:请输入“笑”，点“发送”',
			'54'
			
		];
		
var words2 = [
	'0',
	'from',
	'2',
	'3',
	'4'
];
		
writing2 = () => {
	console.log("writing2");
	
	val = $('input').val();
	
	if(val == "笑")
	{
		$('.box').append(`<li class="li1"><a>${val}</a><img src=${avatar} style="height:3rem"></li>`);
		scroll(500, '.box');
		$('input').val('');
		
		$('input').attr("disabled",true); 
		
		writing3(2000,0);
	}
	
}

writing3 = (duration, counter) => {
	
	setTimeout(function () {
		if (counter + 1 > words2.length) {
			console.log('>>循环2完成');
			return true;
		} else {
		  
			if(counter == 0)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a><img src="img/10.jpeg" style="height:20rem"></a></li>`);
				scroll(500, '.box');
			}
			else if(counter == 1)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a>${fromName}，祝您</a></li>`);

				scroll(500, '.box');
			}
			else if(counter == 2)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a><img src="img/11.gif" style="height:20rem"></a></li>`);

				scroll(500, '.box');
			}
			
			else if(counter == 3)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a><img src="img/12.jpeg" style="height:20rem"></a></li>`);

				scroll(500, '.box');
			}
			else if(counter == 4)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a><img src="img/13.jpeg" style="height:20rem"></a></li>`);

				scroll(500, '.box');
			}
			else
			{
				let res = words2[counter];
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a>${res}</a></li>`);

				scroll(500, '.box');
			}
		}
		writing3(3000, counter + 1);
	}, duration);
}


writing = (duration, counter) => {
	
	setTimeout(function () {
		if (counter + 1 > words.length) {
			
			console.log('>>循环完成');
			$('input').attr("disabled",false); 
			return true;
		  
		} else {
		  
			if(counter == 20)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a><img src="img/4.jpeg" style="height:16rem"</a></li>`);

				scroll(500, '.box');
			}
			else if(counter == 21)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a><img src="img/5.jpeg" style="height:16rem"</a></li>`);

				scroll(500, '.box');
			}
			else if(counter == 27)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a><img src="img/6.jpeg" style="height:10rem"</a></li>`);

				scroll(500, '.box');
			}
			else if(counter == 40)
			{
				
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a>${toName}</a></li>`);

				scroll(500, '.box');
			}
			else if(counter == 54)
			{
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a><img src="img/loading.gif" style="height:6rem"></a></li>`);

				scroll(500, '.box');
			}
			else
			{
				let res = words[counter];
				$('.box').append(`<li class="li2"><img src=${avatar} style="height:3rem"><a>${res}</a></li>`);
				
				scroll(500, '.box');
			}
		}
		writing(3000, counter + 1);
	}, duration);

    
}

$('.btn').on('click', () => {
	
	writing2();
		
})


$('input').attr("disabled",true); 
writing(1000,0);