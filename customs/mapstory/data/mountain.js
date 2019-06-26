var inmap = new inMap.Map({
    id: 'container-map',
    /*skin: "Blueness",*/
    center: [100.69340, 35.12077],
    zoom: {
        value: 5,
        show: true,
        max: 20,
        min: 3
    },
});

var img = "img/mountainsx32.png";
var img2 = "img/mark.png";


var overlay = new inMap.ImgOverlay({

	tooltip: {
        show: true,
        // formatter: function (params) {
        //     return params.count;
        // }
        formatter: "{name}"
    },

    style: {
        normal: {
            icon: img,
            width: 32,
            height: 32,
            offsets: {
                top: "-100%",
                left: "-50%",
            }
        },
        mouseOver: {
                
        },
        splitList: [
            { //山川
                start: 0,
                end: 999,
                icon: img,
            },
            {//江河湖海
                start: 1000,
                end: 1999,
                icon: img2,
            },
            {//亭台楼阁
                start: 2000,
                end: 2999,
                icon: img,
            },
            {//其他
                start: 3000,
                icon: img2,
            }
        ],
    },

    event: {
        onMouseClick: function (item) {
            //能获取当前点的信息
        },
        onMouseOver:function(item,event,overlay){
            console.log(item,event,overlay);
        },
        onState(state) {
            console.log(state);
        }
    },

    data: data       

});


var overlay1 = new inMap.PointOverlay({
        tooltip: {
            show: true,
            formatter: "{name}"
        },
        /*legend: {
            show: true,  
            //legned 回调
            formatter: function (val, index, item) {
                return val + "万";
            }
        },*/
        style: {
            normal: {
                backgroundColor: "rgba(255, 50, 50, 1)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,1)",
                size: 10,
                label: {
                    show: true,
                    color: "rgba(255,0,0,1)"
                }
            },
            mouseOver: {
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderColor: "rgba(255,50,50,1)",
                borderWidth: 4
            },
            selected: {
                backgroundColor: "rgba(184,0,0,1)",
                borderColor: "rgba(255,255,255,1)"
            },
            splitList: [{
                    //设置区间颜色
                    start: 0,
                    end: 2,
                    size: 3
                },
                {
                    start: 2,
                    end: 5,
                    size: 6
                },
                {
                    start: 5,
                    end: 7,
                    size: 9
                },
                {
                    start: 7,
                    size: 12
                }
            ]
        },
        event: {
            onMouseClick: function (item) {
                //能获取当前点的信息
            }
        },
        data: data
    });



var overlay2 = new inMap.LabelOverlay({
    tooltip: {
        show: true,
        formatter: "{name}",
        offsets: {
            top: 10,
            left: 12,
        }
    },
    style: {
        normal: {
            font: '14px Arial',
            color: 'rgba(255, 50, 50, 1)',
            shadowColor: 'rgba(255, 250, 50, 1)',
            shadowBlur: 10
        },
        mouseOver: {
            color: 'rgba(255, 50, 50, 1)',
        },
        selected: {
            color: 'rgba(184,0,0,1)'
        },
    },
    data: data,
    event: {
        onMouseClick: function (item, event) {
            console.log(item);
            //能获取当前点的信息
        }
    }
});



inmap.add(overlay);
/*inmap.add(overlay1);*/
inmap.add(overlay2);