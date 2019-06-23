$(window).load(function(){
    $('#page-loader').addClass('hidden');
});

var pointList1=[
	[114.343664,30.354468],
	[114.343793,30.357430],
	[114.350659,30.356856],
	[114.351389,30.359041],
	[114.352547,30.360578],
	[114.353856,30.360189],
	[114.355358,30.359041],
	[114.356237,30.356115],
	[114.356022,30.354980],
	[114.356397,30.354388],
	[114.356108,30.354286],
	[114.355587,30.354346],
	[114.355459,30.354207],
	[114.355426,30.353814],
	[114.355255,30.353416],
	[114.355126,30.353397],
	[114.354858,30.353522],
	[114.354842,30.353513],
	[114.354531,30.353453],
	[114.354139,30.353684],
	[114.353908,30.353712],
	[114.353753,30.353591],
	[114.353501,30.353254],
	[114.353232,30.353217],
	[114.352868,30.353087],
	[114.352487,30.353221],
	[114.352320,30.353240],
	[114.352079,30.353096],
	[114.351709,30.353142],
	[114.351468,30.352800],
	[114.351201,30.352721],
	[114.351060,30.352638],
	[114.350872,30.351990],
	[114.350780,30.351956],
	[114.350552,30.352011],
	[114.350098,30.351893],
	[114.349920,30.351751],
	[114.349866,30.351617],
	[114.350043,30.351201],
	[114.350296,30.351027],
	[114.350634,30.350893],
	[114.350687,30.350796],
	[114.350607,30.350713],
	[114.350402,30.350645],
	[114.350112,30.350496],
	[114.349999,30.350353],
	[114.349864,30.350323],
	[114.349735,30.350332],
	[114.349721,30.350327],
	[114.349565,30.350267],
	[114.349571,30.349989],
	[114.349453,30.349786],
	[114.349439,30.349510],
	[114.349364,30.349441],
	[114.348758,30.349334],
	[114.348609,30.349228],
	[114.348550,30.349016],
	[114.348339,30.348921],
	[114.348110,30.348568],
	[114.348017,30.348120],
	[114.348101,30.347855],
	[114.347107,30.347137],
	[114.347044,30.346721],
	[114.346953,30.346679],
	[114.346642,30.346721],
	[114.346253,30.346405],
	[114.346058,30.346178],
	[114.346069,30.346164],
	[114.345919,30.345608],
	[114.345785,30.34559],
	[114.345377,30.345738],
	[114.345248,30.34571],
	[114.34483,30.345345],
	[114.344662,30.345356],
	[114.344442,30.345444],
	[114.344442,30.345444],
	[114.344276,30.345611],
	[114.344147,30.345601],
	[114.343879,30.345467],
	[114.343735,30.345486],
	[114.34366,30.345542],
	[114.343456,30.345556],
	[114.343241,30.345324],
	[114.343051,30.345201],
	[114.342901,30.345234],
	[114.342687,30.345469],
	[114.342554,30.345509],
	[114.342001,30.345416],
	[114.341531,30.345419],
	[114.34115,30.345294],
	[114.341064,30.345294],
	[114.34085,30.345179],
	[114.340637,30.345155],
	[114.340513,30.345067],
	[114.340379,30.34478],
	[114.340468,30.344672],
	[114.340634,30.344542],
	[114.340645,30.34444],
	[114.340591,30.344408],
	[114.339936,30.344597],
	[114.339668,30.344566],
	[114.339469,30.344469],
	[114.339383,30.344372],
	[114.339378,30.344229],
	[114.339519,30.343808],
	[114.339803,30.343595],
	[114.341235,30.342914],
	[114.341932,30.342794],
	[114.343297,30.342112],
	[114.343441,30.341931],
	[114.344064,30.341506],
	[114.343775,30.340599],
	[114.34382,30.339798],
	[114.34383,30.339465],
	[114.343964,30.33934],
	[114.344088,30.339298],
	[114.343859,30.338941],
	[114.343347,30.335083],
	[114.342957,30.334697],
	[114.342605,30.334578],
	[114.34223,30.334537],
	[114.340819,30.334749],
	[114.340487,30.33473],
	[114.339993,30.334818],
	[114.339867,30.335037],
	[114.339749,30.335125],
	[114.339213,30.335287],
	[114.338938,30.335529],
	[114.33882,30.335519],
	[114.337432,30.335767],
	[114.337223,30.33573],
	[114.337078,30.335633],
	[114.336917,30.335365],
	[114.336681,30.335147],
	[114.335595,30.334937],
	[114.335311,30.334687],
	[114.335161,30.334321],
	[114.335391,30.333554],
	[114.335128,30.332498],
	[114.3348,30.332056],
	[114.33458,30.331866],
	[114.334317,30.33175],
	[114.334033,30.331334],
	[114.333968,30.330935],
	[114.334247,30.33037],
	[114.334783,30.329791],
	[114.334831,30.329579],
	[114.334761,30.328972],
	[114.334815,30.32838],
	[114.334446,30.327534],
	[114.334065,30.327099],
	[114.334376,30.326506],
	[114.335527,30.326567],
	[114.335853,30.326676],
	[114.336782,30.326738],
	[114.337694,30.326618],
	[114.338118,30.32685],
	[114.338614,30.326741],
	[114.33935,30.326401],
	[114.340197,30.326313],
	[114.340344,30.32623],
	[114.340905,30.326142],
	[114.341624,30.325697],
	[114.341812,30.325405],
	[114.342536,30.325192],
	[114.342749,30.325],
	[114.343184,30.324917],
	[114.343361,30.324797],
	[114.343459,30.324634],
	[114.343598,30.324129],
	[114.343228,30.323721],
	[114.342906,30.323532],
	[114.342782,30.323259],
	[114.342564,30.323085],
	[114.342355,30.323076],
	[114.341837,30.323326],
	[114.341531,30.323303],
	[114.341313,30.323014],
	[114.341177,30.322673],
	[114.340796,30.322346],
	[114.340495,30.322351],
	[114.340206,30.322601],
	[114.340008,30.32257],
	[114.339627,30.322368],
	[114.338986,30.321875],
	[114.338423,30.321912],
	[114.337586,30.321666],
	[114.33726,30.321677],
	[114.336922,30.321894],
	[114.336321,30.321979],
	[114.335758,30.321771],
	[114.335194,30.32171],
	[114.334741,30.321514],
	[114.33429,30.32156],
	[114.333781,30.321824],
	[114.332946,30.321953],
	[114.332206,30.321976],
	[114.330865,30.322323],
	[114.330353,30.322562],
	[114.330117,30.322872],
	[114.329897,30.322882],
	[114.329258,30.322507],
	[114.32914,30.322368],
	[114.328613,30.322384],
	[114.325802,30.322315],
	[114.324874,30.322454],
	[114.324337,30.322463],
	[114.324388,30.325482],
	[114.324516,30.326408],
	[114.324256,30.326515],
	[114.323735,30.327019],
	[114.322587,30.327279],
	[114.322432,30.327246],
	[114.317339,30.328282],
	[114.316266,30.327624],
	[114.315005,30.327675],
	[114.313723,30.327569],
	[114.313316,30.327573],
	[114.313113,30.327509],
	[114.313027,30.327536],
	[114.312472,30.327529],
	[114.312226,30.32733],
	[114.312124,30.327337],
	[114.311958,30.327485],
	[114.311679,30.327439],
	[114.311548,30.32722],
	[114.310856,30.327071],
	[114.310752,30.327161],
	[114.310634,30.327189],
	[114.310365,30.327138],
	[114.310245,30.32705],
	[114.310197,30.32693],
	[114.310027,30.326814],
	[114.310102,30.326374],
	[114.309968,30.326286],
	[114.30923,30.326723],
	[114.309155,30.328219],
	[114.309031,30.328913],
	[114.309107,30.329177],
	[114.309231,30.329315],
	[114.309252,30.329602],
	[114.308983,30.329996],
	[114.309482,30.330951],
	[114.309401,30.331224],
	[114.308654,30.331856],
	[114.308483,30.332245],
	[114.307162,30.333037],
	[114.306925,30.33302],
	[114.306582,30.333103],
	[114.30613,30.333347],
	[114.305143,30.3335],
	[114.304859,30.333935],
	[114.304939,30.334454],
	[114.304789,30.335176],
	[114.304402,30.335297],
	[114.303316,30.335185],
	[114.303048,30.335347],
	[114.302828,30.335435],
	[114.302463,30.335079],
	[114.302195,30.33495],
	[114.301943,30.334635],
	[114.300055,30.334163],
	[114.29996,30.334368],
	[114.299687,30.335864],
	[114.300234,30.338309],
	[114.300743,30.339188],
	[114.300818,30.339605],
	[114.300765,30.340947],
	[114.296042,30.340578],
	[114.293352,30.340243],
	[114.292561,30.339853],
	[114.290738,30.338612],
	[114.289493,30.338172],
	[114.287444,30.338292],
	[114.285971,30.338978],
	[114.285483,30.339274],
	[114.284011,30.339283],
	[114.282681,30.339005],
	[114.281893,30.338602],
	[114.281471,30.338125],
	[114.278798,30.339439],
	[114.277381,30.339981],
	[114.27581,30.33924],
	[114.275288,30.339265],
	[114.27498,30.339184],
	[114.274577,30.339262],
	[114.273944,30.339702],
	[114.274132,30.339957],
	[114.273247,30.341105],
	[114.272893,30.341383],
	[114.272567,30.341834],
	[114.272481,30.342603],
	[114.271644,30.343918],
	[114.271505,30.344575],
	[114.271304,30.344862],
	[114.270221,30.345594],
	[114.269898,30.346409],
	[114.27002,30.346704],
	[114.270261,30.346866],
	[114.270449,30.34719],
	[114.270475,30.347351],
	[114.270819,30.34764],
	[114.271301,30.347837],
	[114.271838,30.347869],
	[114.272196,30.347979],
	[114.272325,30.347941],
	[114.272561,30.34783],
	[114.273393,30.347932],
	[114.274042,30.348252],
	[114.274546,30.34833],
	[114.275025,30.348585],
	[114.275279,30.349152],
	[114.275478,30.34933],
	[114.275564,30.349568],
	[114.275554,30.349884],
	[114.275732,30.350475],
	[114.275492,30.350886],
	[114.275492,30.350983],
	[114.275782,30.351154],
	[114.275734,30.352274],
	[114.275528,30.352479],
	[114.275147,30.35321],
	[114.275184,30.353674],
	[114.275056,30.354058],
	[114.274611,30.354525],
	[114.27424,30.354632],
	[114.274193,30.354744],
	[114.273565,30.354337],
	[114.273184,30.35429],
	[114.273452,30.354586],
	[114.273666,30.35529],
	[114.274246,30.356068],
	[114.274954,30.356676],
	[114.27571,30.357036],
	[114.275988,30.356967],
	[114.276584,30.356924],
	[114.276863,30.356822],
	[114.277035,30.356831],
	[114.277828,30.35712],
	[114.278291,30.357616],
	[114.278614,30.357658],
	[114.278866,30.357418],
	[114.279912,30.35743],
	[114.280312,30.357587],
	[114.280792,30.357651],
	[114.281044,30.357789],
	[114.281467,30.357695],
	[114.281797,30.357795],
	[114.282352,30.357482],
	[114.282864,30.35698],
	[114.284402,30.357752],
	[114.285624,30.358196],
	[114.285892,30.359583],
	[114.285909,30.360336],
	[114.286225,30.360901],
	[114.286973,30.361536],
	[114.287015,30.362606],
	[114.28743,30.362957],
	[114.287508,30.363752],
	[114.287834,30.364261],
	[114.288109,30.364909],
	[114.288032,30.365242],
	[114.288139,30.365422],
	[114.28852,30.365584],
	[114.289035,30.36626],
	[114.290373,30.366437],
	[114.29092,30.366882],
	[114.293009,30.367506],
	[114.294393,30.367908],
	[114.294972,30.368648],
	[114.295042,30.369545]
];
		
var pointMarkers1 = [
{
	id: 0,
	icon: 'images/flag_g.png',
	cont: "起点",
	position: [114.343664,30.354468]
},{
	id: 0.9,
	icon: 'images/m.png',
	cont: "<a href='images/0_9_big.jpg' data-lightbox='paint-group1' data-title='图1'><img src='images/0_9_thumb.jpg' class='thumb'></a>",
	position: [114.35521,30.353396]
},{
	id: 1,
	icon: 'images/m.png',
	cont: "<a href='images/1_big.jpg' data-lightbox='paint-group2' data-title='图2'><img src='images/1_thumb.jpg' class='thumb'></a>",
	position: [114.351834,30.353142]
},{
	id: 2,
	icon: 'images/m.png',
	cont: "<a href='images/2_big.jpg' data-lightbox='paint-group3' data-title='图3'><img src='images/2_thumb.jpg' class='thumb'></a>",
	position: [114.348121,30.348048]
},{
	id: 3,
	icon: 'images/m.png',
	cont: "<a href='images/3_big.jpg' data-lightbox='paint-group4' data-title='图4'><img src='images/3_thumb.jpg' class='thumb'></a>",
	position: [114.341021,30.343025]
},{
	id:4,
	icon: 'images/m.png',
	cont: "<a href='images/4_big.jpg' data-lightbox='paint-group5' data-title='图5'><img src='images/4_thumb.jpg' class='thumb'></a>",
	position: [114.343748,30.33827]
},{
	id:5,
	icon: 'images/m.png',
	cont: "<a href='images/5_big.jpg' data-lightbox='paint-group6' data-title='图6'><img src='images/5_thumb.jpg' class='thumb'></a>",
	position: [114.341053,30.334733]
},{
	id:5.1,
	icon: 'images/m.png',
	cont: "<a href='images/5_1_big.jpg' data-lightbox='paint-group7' data-title='图7'><img src='images/5_1_thumb.jpg' class='thumb'></a>",
	position: [114.334813,30.329598]
},{
	id:6,
	icon: 'images/m.png',
	cont: "<a href='images/6_big.jpg' data-lightbox='paint-group8' data-title='图8'><img src='images/6_thumb.jpg' class='thumb'></a>",
	position: [114.335739,30.326649]
},{
	id:7,
	icon: 'images/m.png',
	cont: "<a href='images/7_big.jpg' data-lightbox='paint-group9' data-title='图9'><img src='images/7_thumb.jpg' class='thumb'></a>",
	position: [114.3424,30.325264]
},{
	id:8,
	icon: 'images/m.png',
	cont: "<a href='images/8_big.jpg' data-lightbox='paint-group10' data-title='图10'><img src='images/8_thumb.jpg' class='thumb'></a>",
	position: [114.317369,30.328311]
},{
	id:9,
	icon: 'images/m.png',
	cont: "<a href='images/9_big.jpg' data-lightbox='paint-group11' data-title='图11'><img src='images/9_thumb.jpg' class='thumb'></a>",
	position: [114.324294,30.324454]
},{
	id:10,
	icon: 'images/m.png',
	cont: "<a href='images/10_big.jpg' data-lightbox='paint-group12' data-title='图12'><img src='images/10_thumb.jpg' class='thumb'></a>",
	position: [114.309205,30.327492]
},{
	icon: 'images/m.png',
	cont: "<a href='images/11_big.jpg' data-lightbox='paint-group13' data-title='图13'><img src='images/11_thumb.jpg' class='thumb'></a>",
	position: [114.288818,30.338167]
},{
	icon: 'images/m.png',
	cont: "<a href='images/12_big.jpg' data-lightbox='paint-group14' data-title='图14'><img src='images/12_thumb.jpg' class='thumb'></a>",
	position: [114.272398,30.342671]
},{
	icon: 'images/m.png',
	cont: "<a href='images/13_big.jpg' data-lightbox='paint-group15' data-title='图15'><img src='images/13_thumb.jpg' class='thumb'></a>",
	position: [114.275531,30.350925]
},{
	icon: 'images/m.png',
	cont: "<a href='images/14_big.jpg' data-lightbox='paint-group16' data-title='图16'><img src='images/14_thumb.jpg' class='thumb'></a>",
	position: [114.277342,30.356909]
},{
	icon: 'images/flag_r.png',
	cont: "终点",
	position: [114.295042,30.369545]
}];
	
var lineArr = [];
var lineArr_cui = [];
var lineArr_qin = [];
var lineArr_wu = [];

var marker_dong;
var marker_cui;
var marker_qin;
var marker_wu;

var index_dong = 0;
var index_cui = 0;
var index_qin = 0;
var index_wu = 0;

var map;
map = new AMap.Map("container", {
    resizeEnable: true,
    center: [114.325918,30.343561],
    zoom: 18
});
map.setMapStyle("fresh");

map.plugin(["AMap.MapType"],function(){  //添加地图类型切换插件 
    //地图类型切换  
    var mapType= new AMap.MapType({defaultType:2,showRoad:false});  
    map.addControl(mapType);  
});

map.on("complete", completeEventHandler);


//构建自定义信息窗体
//function createInfoWindow(title, content) {
function createInfoWindow(content) {
    var info = document.createElement("div");
    info.className = "info";

    // 定义中部内容
    var middle = document.createElement("div");
    middle.className = "info-middle";
    middle.style.backgroundColor = 'white';
    middle.innerHTML = content;
    info.appendChild(middle);

    // 定义底部内容
    var bottom = document.createElement("div");
    bottom.className = "info-bottom";
    bottom.style.position = 'relative';
    bottom.style.top = '0px';
    bottom.style.margin = '0 auto';
    var sharp = document.createElement("img");
    sharp.src = "images/sharp1.png";
    bottom.appendChild(sharp);
    info.appendChild(bottom);
    return info;
}

//关闭信息窗体
function closeInfoWindow() {
    map.clearInfoWindow();
}

////////////////////////////////////////老董//////////////////////////////////////////
AMap.event.addDomListener(document.getElementById('dong_start'), 'click', function() {

	if(marker_dong == null)
	{
		marker_dong = new AMap.Marker({
            map: map,
            position: [114.343664, 30.354468],
			icon: "images/dong.png",
			offset: new AMap.Pixel(-25, -25),
            autoRotation: false
        });
        
        
	}
		
	marker_dong.moveAlong(lineArr, 1500);
	
	var example_item;
	if(index_dong<=0)
	{
		example_item = {'img':'images/dong.png','info':'老董加入比赛。'};
	}
	else
	{
		example_item = {'img':'images/dong.png','info':'老董被秒'+index_dong+'次，现在老董满血满蓝，回归比赛！'};
	}
    $('body').barrager(example_item);

	index_dong++;

}, false);

AMap.event.addDomListener(document.getElementById('dong_stop'), 'click', function() {
    marker_dong.stopMove();
    map.remove(marker_dong);
    marker_dong = null;
    
    var example_item={'img':'images/dong.png','info':'老董被第'+index_dong+'次撕牌， OUT！'};
    $('body').barrager(example_item);
    
}, false);

////////////////////////////////////////老崔//////////////////////////////////////////
AMap.event.addDomListener(document.getElementById('cui_start'), 'click', function() {
	if(marker_cui == null)
	{
		marker_cui = new AMap.Marker({
            map: map,
            position: [114.343664, 30.354468],
			icon: "images/cui.png",
			offset: new AMap.Pixel(-25, -25),
            autoRotation: false
        });
	}
		
	marker_cui.moveAlong(lineArr_cui, 1600);
	
	var example_item;
	if(index_cui<=0)
	{
		example_item = {'img':'images/cui.png','info':'老崔加入比赛。'};
	}
	else
	{
		example_item = {'img':'images/cui.png','info':'老崔被秒'+index_cui+'次，现在，老崔满血满蓝，回归比赛！'};
	}
    $('body').barrager(example_item);

	index_cui++;

}, false);

AMap.event.addDomListener(document.getElementById('cui_stop'), 'click', function() {
    marker_cui.stopMove();
    map.remove(marker_cui);
    marker_cui = null;
    
    var example_item={'img':'images/cui.png','info':'老崔被第'+index_cui+'次撕牌， OUT！'};
    $('body').barrager(example_item);
}, false);


////////////////////////////////////////小覃//////////////////////////////////////////
AMap.event.addDomListener(document.getElementById('qin_start'), 'click', function() {
	if(marker_qin == null)
	{
		marker_qin = new AMap.Marker({
            map: map,
            position: [114.343664, 30.354468],
			icon: "images/qin.png",
			offset: new AMap.Pixel(-25, -25),
            autoRotation: false
        });
	}
		
	marker_qin.moveAlong(lineArr_qin, 1600);
	
	var example_item;
	if(index_qin<=0)
	{
		example_item = {'img':'images/qin.png','info':'小覃加入比赛。'};
	}
	else
	{
		example_item = {'img':'images/qin.png','info':'小覃被秒'+index_qin+'次，现在，小覃满血满蓝，回归比赛！'};
	}
    $('body').barrager(example_item);

	index_qin++;

}, false);

AMap.event.addDomListener(document.getElementById('qin_stop'), 'click', function() {
    marker_qin.stopMove();
    map.remove(marker_qin);
    marker_qin = null;
    
    var example_item={'img':'images/qin.png','info':'小覃被第'+index_qin+'次撕牌， OUT！'};
    $('body').barrager(example_item);
}, false);

////////////////////////////////////////老伍//////////////////////////////////////////
AMap.event.addDomListener(document.getElementById('wu_start'), 'click', function() {
	if(marker_wu == null)
	{
		marker_wu = new AMap.Marker({
            map: map,
            position: [114.343664, 30.354468],
            //icon: "http://webapi.amap.com/images/car.png",
			icon: "images/wu.png",
            //offset: new AMap.Pixel(-26, -13),
			offset: new AMap.Pixel(-25, -25),
            autoRotation: false
        });
	}
		
	marker_wu.moveAlong(lineArr_wu, 1600);
	
	var example_item;
	if(index_wu<=0)
	{
		example_item = {'img':'images/wu.png','info':'老伍，加入比赛。'};
	}
	else
	{
		example_item = {'img':'images/wu.png','info':'老伍被秒'+index_qin+'次，现在，老伍满血满蓝，回归比赛！'};
	}
    $('body').barrager(example_item);

	index_wu++;

}, false);

AMap.event.addDomListener(document.getElementById('wu_stop'), 'click', function() {
    marker_wu.stopMove();
    //marker_wu.remove();
    map.remove(marker_wu);
    marker_wu = null;
    
    var example_item={'img':'images/wu.png','info':'老伍被第'+index_wu+'次撕牌， OUT！'};
    $('body').barrager(example_item);
}, false);

function markerClick(e) {

    var index = parseInt(e.target.content);
    console.log("index = " + index);
    
    var item = pointMarkers1[index];
    
    var acontent = [];
    acontent.push(item.cont);
    var ainfoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(acontent.join("<br/>")),
        offset: new AMap.Pixel(0, -45)
    });
	
	
	//ainfoWindow.open(map, new AMap.LngLat(aMarker.position[0], aMarker.position[1]));
		ainfoWindow.open(map, e.target.getPosition());
   };

	for (var i = 0; i <pointMarkers1.length ; i++) {
		var amk = new AMap.Marker({
			map: map,
			icon : pointMarkers1[i].icon,
			size: new AMap.Size(36,36),
			position: [pointMarkers1[i].position[0], pointMarkers1[i].position[1]],
			offset: new AMap.Pixel(-18, -36)
		});
		amk.content = i;
        amk.on('click', markerClick);
    //amk.emit('click', {target: amk});
}


// 地图图块加载完毕后执行函数
function completeEventHandler() {

    var lngX; 
	var latY;

	for(var i = 0;i<pointList1.length;i++)
	{
		lngX = pointList1[i][0];
		//console.log("lngX = " + lngX);
		latY = pointList1[i][1];
		
		var lngLat = new AMap.LngLat(lngX,latY);
		
		lineArr.push(lngLat);
		lineArr_cui.push(lngLat);
		lineArr_qin.push(lngLat);
		lineArr_wu.push(lngLat);
		
		/*lineArr.push(new AMap.LngLat(lngX,latY));
		lineArr_cui.push(new AMap.LngLat(lngX,latY));
		lineArr_qin.push(new AMap.LngLat(lngX,latY));
		lineArr_wu.push(new AMap.LngLat(lngX,latY));*/
	}
	
	
    // 绘制轨迹
    var polyline = new AMap.Polyline({
        map: map,
        path: lineArr,
        strokeColor: "#00A",  //线颜色
        strokeOpacity: 1,     //线透明度
        strokeWeight: 3,      //线宽
        strokeStyle: "solid"  //线样式
    });
	
    map.setFitView();
}

//为地图注册click事件获取鼠标点击出的经纬度坐标
var clickEventListener = map.on('click', function(e) {
	
	closeInfoWindow();
    //document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
});