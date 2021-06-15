

window.onload = function(){

    console.log('start');

                
    //地图及属性		
    var	map = new AMap.Map('container', {

        resizeEnable: true,
        rotateEnable:true,
        pitchEnable:true,

        zoom: 17,
        pitch:60,
        /* rotation:-15, */
        viewMode:'3D',//开启3D视图,默认为关闭
        buildingAnimation:true,//楼块出现是否带动画

        showLabel:false,
        //showBuildingBlock:true,
        
        expandZoomRange:true,
        zooms:[3,20],
        center: [114.401659,30.52048],
    

    });

    

    


    ///////////////////////////////////////////////////////////////////////////////
    //光源
    ///////////////////////////////////////////////////////////////////////////////
    map.AmbientLight = new AMap.Lights.AmbientLight([1, 1, 1], 0.5);
    map.DirectionLight = new AMap.Lights.DirectionLight([0, 0, 1], [1, 1, 1], 1);


    ///////////////////////////////////////////////////////////////////////////////
    //卫星图
    ///////////////////////////////////////////////////////////////////////////////
    var opacity = 0.8;
    var satellite = new AMap.TileLayer.Satellite({
        map: map,
        opacity: opacity
    });
    satellite.hide();



    //三个区域的Layer
    var area3Dlayer = new AMap.Object3DLayer();
    map.add(area3Dlayer);

    //楼块Layer
    var building3Dlayer = new AMap.Object3DLayer();
    map.add(building3Dlayer);

    //模型Layer
    var model3Dlayer = new AMap.Object3DLayer();
    map.add(model3Dlayer);


    ///////////////////////////////////////////////////////////////////////////////
    //三个区域
    ///////////////////////////////////////////////////////////////////////////////


    //北区
    var northBounds = pathObj.areas[0].path.map(function(path) {
        return new AMap.LngLat(path[0], path[1]);
    });

    var northAreaPrism = new AMap.Object3D.Prism({
        path:northBounds,
        height:200,
        color:'#0088ff66'
    });


    northAreaPrism.transparent = true;
    //area3Dlayer.add(northAreaPrism);


    var northText = new AMap.Text({
        text:  '中国地质大学</br>(北区)',
        verticalAlign: 'bottom',
        position: [114.399479,30.528462],
        height: 200,
        style: {
            'background-color': 'transparent',
            '-webkit-text-stroke': 'red',
            '-webkit-text-stroke-width': '0.5px',
            'text-align': 'center',
            'border': 'none',
            'color': 'white',
            'font-size': '24px',
            'font-weight': 600
        }
    });

    //northText.setMap(map);

    //西区
    var westBounds = pathObj.areas[1].path.map(function(path) {
        return new AMap.LngLat(path[0], path[1]);
    });

    var westAreaPrism = new AMap.Object3D.Prism({
        path:westBounds,
        height:200,
        color:'#0088ff66'
    });


    westAreaPrism.transparent = true;
    //area3Dlayer.add(westAreaPrism);


    var westText = new AMap.Text({
        text:  '中国地质大学</br>(西区)',
        verticalAlign: 'bottom',
        position: [114.398667,30.520763],
        height: 200,
        style: {
            'background-color': 'transparent',
            '-webkit-text-stroke': 'red',
            '-webkit-text-stroke-width': '0.5px',
            'text-align': 'center',
            'border': 'none',
            'color': 'white',
            'font-size': '24px',
            'font-weight': 600
        }
    });

    //westText.setMap(map);


    //东区
    var eastBounds = pathObj.areas[2].path.map(function(path) {
        return new AMap.LngLat(path[0], path[1]);
    });

    var eastAreaPrism = new AMap.Object3D.Prism({
        path:eastBounds,
        height:200,
        color:'#0088ff66'
    });


    eastAreaPrism.transparent = true;
    //area3Dlayer.add(eastAreaPrism);


    var eastText = new AMap.Text({
        text:  '中国地质大学</br>(东区)',
        verticalAlign: 'bottom',
        position: [114.404609,30.518994],
        height: 200,
        style: {
            'background-color': 'transparent',
            '-webkit-text-stroke': 'red',
            '-webkit-text-stroke-width': '0.5px',
            'text-align': 'center',
            'border': 'none',
            'color': 'white',
            'font-size': '24px',
            'font-weight': 600
        }
    });

    //eastText.setMap(map);



    ///////////////////////////////////////////////////////////////////////////////
    //楼块
    ///////////////////////////////////////////////////////////////////////////////
    // Object3D.Mesh 的 color 分别是[r, g, b, a]，每个分量只支持 [0 - 1] 区间，
    var color = [100 / 255, 150 / 255, 230 / 255, 0.9];
    var selectColor = [255 / 255, 245 / 255, 47 / 255, 0.9];

    var meshes = [];

    var paths = [
        [114.398947,30.521848],
        [114.397707,30.521866],
        [114.397719,30.522315],
        [114.398118,30.522294],

        [114.398115,30.522016],
        [114.398574,30.522012],
        [114.398575,30.522295],
        [114.398935,30.522302],
    ];

    var bounds = paths.map(function(path) {
        return new AMap.LngLat(path[0], path[1]);
    });


    // 创建 Object3D 对象
    var prism = new AMap.Object3D.Prism({
        path: bounds,
        height: 120,
        color: 'rgba(100, 150, 230, 0.7)' // 支持 #RRGGBB、rgb()、rgba() 格式数据
    });


    // 开启透明度支持
    prism.transparent = true;

    // 添加至 3D 图层
    building3Dlayer.add(prism);

    //var mesh = new AMap.Object3D.Mesh();
    meshes.push(prism);





    map.on('mousemove', function (ev) {
        var pixel = ev.pixel;
        var px = new AMap.Pixel(pixel.x, pixel.y);
        var obj = map.getObject3DByContainerPos(px, [building3Dlayer], false) || {};

        var object = obj.object;

        updateMesh(object);
    });

    function updateMesh(obj) {
        var mesh = meshes.find(function (mesh) {
            return mesh == obj;
        });

        // 重置 Mesh 颜色
        meshes.forEach(function (mesh) {
            updateMeshColor(mesh, color);
        });

        // 更新选中 Mesh 的 vertexColors
        if (mesh) {
            updateMeshColor(mesh, selectColor);
        }

    }


    function updateMeshColor(mesh, color) {
        var vertexColors = mesh.geometry.vertexColors;
        var len = vertexColors.length;
        for (var i = 0; i < len / 4; i++) {
            var r = color[0];
            var g = color[1];
            var b = color[2];
            var a = color[3];
            // 不能重新赋值，只允许修改内容
            vertexColors.splice(i * 4, 4, r, g, b, a);
        }

        mesh.needUpdate = true;
        mesh.reDraw();
    }


    


    ///////////////////////////////////////////////////////////////////////////////
    //信息窗口
    ///////////////////////////////////////////////////////////////////////////////
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,
        autoMove: true,
        closeWhenClickMap: true,
        offset : new AMap.Pixel(0,-50),
        content : ''
    });



    ///////////////////////////////////////////////////////////////////////////////
    //标记点
    ///////////////////////////////////////////////////////////////////////////////
    var targetPos;

    var spots = [];
    var zoomStyleMapping2 = {
            14:0,
            15:0,
            16:0,
            17:1,
            18:1,
            19:1,
            20:1    
    }
    for(var i=0;i<touristSpots.length;i+=1)
    {
        var marker = new AMap.ElasticMarker({
            extData:{id:i+1},
            position:touristSpots[i].position,
            zooms:[14,20],
            styles:[{
                    icon:{
                        img:touristSpots[i].smallIcon,
                        size:[16,16],//可见区域的大小
                        ancher:[8,16],//锚点
                        fitZoom:14,//最合适的级别
                        scaleFactor:2,//地图放大一级的缩放比例系数
                        maxScale:2,//最大放大比例
                        minScale:1//最小放大比例
                    },
                    label:{
                        content:touristSpots[i].name,
                        offset:[-35,0],
                        position:'TM',
                        minZoom:15
                    }
                },{
                    icon:{
                        img:touristSpots[i].bigIcon,
                        size:touristSpots[i].size,
                        ancher:touristSpots[i].ancher,
                        fitZoom:17.5,
                        scaleFactor:0.5,
                        maxScale:1,
                        minScale:0.125
                    },
                    label:{
                        content:touristSpots[i].name,
                        offset: touristSpots[i].offset,
                        position:'TM'
                    }
                }],
            zoomStyleMapping:zoomStyleMapping2
        });
        marker.buildingName =  touristSpots[i].name;

        marker.on('click',showInfoWindow);
        spots.push(marker);
    }
    map.add(spots);



    function showInfoWindow(e)
    {
        //console.log("showInfoWindow");
        //console.log("showInfoWindow e= ",e);
        //console.log("target.postion = ",e.target.getPosition());
        //console.log("target.label = ",e.target.getLabel());
        //console.log("str = ",e.target.getTitle());

        targetPos = e.target.getPosition();

        var obj = e.target.getLabel();
        //console.log("obj = ",obj);

        var jsonObj = JSON.stringify(obj);
        //console.log("jsonObj = ",jsonObj);

        var name = e.target.buildingName;
        //console.log("buildingName = ",name);


        infoWindow.setContent(
            '<div id="page-wrapper">' +
                '<h4>'+name+'</h4>' +
                '<div id="message-form">' +
                    '<button type="button" onclick="walkHere();">走路到这里</button>' +
                    '<button type="button" onclick="rideHere();">骑车到这里</button>' +
                    '<button type="button" onclick="driveHere();">开车到这里</button>' +
                '</div>' +
            '</div>'
        );

        infoWindow.open(map, e.target.getPosition());
    }


    ///////////////////////////////////////////////////////////////////////////////
    //线路规划
    ///////////////////////////////////////////////////////////////////////////////

    var routeList = [];


    var drivingOption = {
        policy:AMap.DrivingPolicy.LEAST_FEE,
    };
    var driving = new AMap.Driving({drivingOption});

    var ridingOption = {
        policy: 1  
    };
    var riding = new AMap.Riding(ridingOption);

    var walkingOption = {};
    var walking = new AMap.Walking(walkingOption);


    


    ///////////////////////////////////////////////////////////////////////////////
    //自己
    ///////////////////////////////////////////////////////////////////////////////
    var selfPos = [114.400955,30.517873];

    var selfMarker = new AMap.Marker({
        position: selfPos
    });
    selfMarker.setMap(map);
    selfMarker.setLabel({
        /* offset: new AMap.Pixel(20, 20),  //设置文本标注偏移量 */
        content: "我", //设置文本标注内容
        direction: 'top' //设置文本标注方位
    });

    walkHere = function()
    {
        infoWindow.close();
        clearRoute();
        //console.log("walkHere");

        walking.search(selfPos, targetPos,function(status, result) {
            if (status === 'complete') {
                console.log('绘制步行路线完成');

                if(result.routes && result.routes.length)
                {
                    drawRoute(result.routes[0],"walk");
                }
            } else {
                console.log('获取步行数据失败：' + result)
            }
        });
    }

    rideHere = function()
    {
        infoWindow.close();
        clearRoute();

        riding.search(selfPos, targetPos,function(status, result) {

            if (status === 'complete') {
                console.log('绘制骑行路线完成');

                if(result.routes && result.routes.length)
                {
                    drawRoute(result.routes[0],"ride");
                }
            } else {
                console.log('获取骑行数据失败：' + result)
            }
        });
    }

    driveHere = function()
    {
        infoWindow.close();
        clearRoute();
        
        driving.search(selfPos, targetPos,function(status, result) {
            // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
            if (status === 'complete') {
                console.log('绘制驾车路线完成');

                if(result.routes && result.routes.length)
                {
                    drawRoute(result.routes[0],"drive");
                }
            } else {
                console.log('获取驾车数据失败：' + result)
            }
        });
    }

    

    function drawRoute(route,type)
    {
        var path;
        if(type == "walk")
        {
            path = parseWalkRoute(route);
        }
        else if(type == "ride")
        {
            path = parseRideRoute(route);
        }
        else if(type == "drive")
        {
            path = parseDriveRoute(route);
        }
        

        var startMarker = new AMap.Marker({
            position:path[0],
            icon:'assets/img/start.png',
            map:map
        });

        routeList.push(startMarker);

        var endMarker = new AMap.Marker({
            position:path[path.length - 1],
            icon:'assets/img/end.png',
            map:map
        });

        routeList.push(endMarker);

        var routeLine = new AMap.Polyline({
            path: path,
            isOutline: true,
            outlineColor: '#ffeeee',
            borderWeight: 2,
            strokeWeight: 5,
            strokeOpacity: 0.9,
            strokeColor: '#0091ff',
            lineJoin: 'round'
        })

        routeList.push(routeLine);
        

        map.add(routeLine);

        // 调整视野达到最佳显示区域
        map.setFitView([ startMarker, endMarker, routeLine ]);     

    }


    function parseWalkRoute(route)
    {
        var path = [];

        for (var i = 0; i < route.steps.length; i++) 
        {
            var step = route.steps[i]

            for (var j = 0; j < step.path.length; j++) 
            {
              path.push(step.path[j])
            }
        }

        return path;
    }


    function parseRideRoute(route)
    {
        var path = [];

        for (var i = 0; i < route.rides.length; i++) 
        {
            var step = route.rides[i]

            for (var j = 0; j < step.path.length; j++) 
            {
              path.push(step.path[j])
            }
        }

        return path;
    }

    function parseDriveRoute(route)
    {
        var path = [];

        for(var i=0;i<route.steps.length;i++)
        {
            var step = route.steps[i];

            for(var j=0;j<step.path.length;j++)
            {
                path.push(step.path[j]);
            }
        }

        return path;
    }


    ///////////////////////////////////////////////////////////////////////////////
    //模型
    ///////////////////////////////////////////////////////////////////////////////

    var mesh = new AMap.Object3D.MeshAcceptLights();

    var loadModel = function () {

        var modelName = 'building';
        var scope = this;

        var objLoader = new THREE.OBJLoader2();

        var callbackOnLoad = function ( event ) {

            //var object3Dlayer = new AMap.Object3DLayer();
            var meshes = event.detail.loaderRootNode.children;

            for(var i=0;i<meshes.length;i++){
                var vecticesF3 = meshes[i].geometry.attributes.position;
                var vecticesNormal3 = meshes[i].geometry.attributes.normal;
                var vecticesUV2 = meshes[i].geometry.attributes.uv;
                
                var vectexCount =  vecticesF3.count;

                //mesh = new AMap.Object3D.MeshAcceptLights();

                var geometry = mesh.geometry;
            
                //底部一圈
                // debugger

                var c,opacity;

                var material = meshes[i].material[0]||meshes[i].material;
                // debugger
                if(material.map)
                mesh.textures.push('assets/model/1519.bmp');
                
                c = material.color;
                opacity = material.opacity;
                
                // debugger
                for(var j=0;j<vectexCount;j+=1){
                    var s = j*3;
                    geometry.vertices.push(vecticesF3.array[s],vecticesF3.array[s+2],-vecticesF3.array[s+1]);
                
                    if(vecticesNormal3) {
                        geometry.vertexNormals.push(vecticesNormal3.array[s],vecticesNormal3.array[s+2],-vecticesNormal3.array[s+1]);
                    }
                    if(vecticesUV2) {
                        geometry.vertexUVs.push(vecticesUV2.array[j*2],1-vecticesUV2.array[j*2+1]);
                    }
                    geometry.vertexColors.push(c.r,c.g,c.b,opacity);
                }
                // debugger
                mesh.DEPTH_TEST = material.depthTest;
                // mesh.backOrFront = 'both'
                mesh.transparent = opacity<1;
                mesh.scale(6,6,6);
                mesh.rotateZ(0);
                mesh.position(new AMap.LngLat(114.400625,30.519382));
                //object3Dlayer.add(mesh);
                //model3Dlayer.add(mesh);
            }

            //map.add(object3Dlayer);
        };

        var onLoadMtl = function ( materials ) {
            // for(var i=0;i<materials.length;i+=1){
            // 	materials[i].side=2;
            // }
            objLoader.setModelName( modelName );
            objLoader.setMaterials( materials );
            objLoader.load('assets/model/1519.obj', callbackOnLoad, null, null, null, false );
        };
        objLoader.loadMtl('assets/model/1519.mtl', null, onLoadMtl );
    }    



    map.on('click', showInfoClick);

    function showInfoClick(e){
        var text = '经纬度: ['+e.lnglat.getLng()+','+e.lnglat.getLat()+'] ';
        //document.querySelector("#text").innerText = text;

        clearRoute();
    }

    function clearRoute()
    {
        if(routeList && routeList.length > 0)
        {
            map.remove(routeList);
            routeList = [];
        }
    }



    ///////////////////////////////////////////////////////////////////////////////
    //dat.GUI
    ///////////////////////////////////////////////////////////////////////////////

    function toggleNorthArea(b)
    {
        //console.log("北区 = ",b);
        
        if(b)
        {
            area3Dlayer.add(northAreaPrism);
            northText.setMap(map);
        }
        else
        {
            area3Dlayer.remove(northAreaPrism);
            map.remove(northText);
        }
    }

    function toggleEastArea(b)
    {
        //console.log("东区 = ",b);
        
        if(b)
        {
            area3Dlayer.add(eastAreaPrism);
            eastText.setMap(map);
        }
        else
        {
            area3Dlayer.remove(eastAreaPrism);
            map.remove(eastText);
        }
    }

    function toggleWestArea(b)
    {
        //console.log("西区 = ",b);
        
        if(b)
        {
            area3Dlayer.add(westAreaPrism);
            westText.setMap(map);
        }
        else
        {
            area3Dlayer.remove(westAreaPrism);
            map.remove(westText);
        }
    }

    function toggleModelShow(b)
    {
        if(b)
        {
            model3Dlayer.add(mesh);
        }
        else
        {
            model3Dlayer.remove(mesh);
        }
    }


    function toggleSateShow(b)
    {
        if(b)
        {
            satellite.show();
        }
        else
        {
            satellite.hide();
        }
    }

    function setSatelliteOpacity(val)
    {
        satellite.setOpacity(val);
    }


    
    parameters = {
        showNorth:false,
        showEast:false,
        showWest:false,
        showModel:false,

        showSatallite:false,
        satelliteOpacity:0.8
    };

    var gui;
    function initGui() {
        //声明一个保存需求修改的相关数据的对象
        
        var datGui = new dat.GUI();

        //datGui.domElement.id = 'ccc';

        datGui.domElement.style.position = 'absolute';
        datGui.domElement.style.right = '0';
        datGui.domElement.style.top = '100px'; 


        var f1 = datGui.addFolder('区域显示');

        var north = f1.add(parameters,'showNorth').name('北区').listen().onChange(val=>{
            //console.log("val = ",val);
            toggleNorthArea(val);
        });

        var east = f1.add(parameters,'showEast').name('东区').listen().onChange(val=>{
            //console.log("val = ",val);
            toggleEastArea(val);
        });


        var west = f1.add(parameters,'showWest').name('西区').listen().onChange(val=>{
            //console.log("val = ",val);
            toggleWestArea(val);
        });

        f1.open();

        var f2 = datGui.addFolder('模型');
        var model = f2.add(parameters,'showModel').name('显示模型').listen().onChange(val=>{
            //console.log("val = ",val);
            toggleModelShow(val);
        });

        f2.open();

        var f3 = datGui.addFolder('图层');
        var sate = f3.add(parameters,'showSatallite').name('显示卫星图').listen().onChange(val=>{
            //console.log("val = ",val);
            toggleSateShow(val);
        });

        var sateOpacity = f3.add(parameters,'satelliteOpacity',0,1).name('卫星图透明度').listen().onChange(val=>{
            //console.log("透明度val = ",val.toFixed(2));
            setSatelliteOpacity(val.toFixed(2));
        });
        f3.open();

    }

    initGui();

    loadModel();
    


}

		
