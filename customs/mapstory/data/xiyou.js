var inmap = new inMap.Map({
    id: 'container-map',
    skin: "Blueness",
    center: [90.39092, 36.02266],
    zoom: {
        value: 5,
        show: true,
        max: 20,
        min: 1
    },
});


var overlay = new inMap.MoveLineOverlay({

	style: {
    	point: { //散点配置
            tooltip: {
                show: true,
                formatter: "{name}"
            },
            style: {
                normal: {
                    backgroundColor: 'rgba(200, 200, 50, 1)',
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,1)",
                    size: 6,
                    label: {
                        show: true,
                        color: 'rgba(255,255,255,1)'

                    },
                },
                mouseOver: {
                    backgroundColor: 'rgba(200, 200, 200, 1)',
                    borderColor: "rgba(255,255,255,1)",
                    borderWidth: 4,
                },
                selected: {
                    backgroundColor: 'rgba(184,0,0,1)',
                    borderColor: "rgba(255,255,255,1)"
                },
            },
            event: {
                onMouseClick: function (item) {}
            }
    	},
        line: { //线的配置
            style: {
                normal: {
                    borderColor: 'rgba(200, 200, 50, 1)',
                    borderWidth: 1,
                    // shadowColor: 'rgba(255, 250, 50, 1)',
                    // shadowBlur: 20,
                    lineOrCurive: "curve"
                }
            }
        },
        lineAnimation: {
            style: {
                size: 2,
                //移动点颜色
                fillColor: '#fff',
                //移动点阴影颜色
                shadowColor: '#fff',
                //移动点阴影大小
                shadowBlur: 2,
                lineOrCurve: 'curve',
            }

        },
	},

	data: data,

});

inmap.add(overlay);