
var page1 = {
    template:'<div class="neu"><div class="stuidoname">{{text}}</div></div>',
    props:[],
    data(){
        return {
            name:'page1',
            text:'Test'
        }
    },
    methods:{
        show(){
            console.log('调用page1');
        }
    }
}

var page2 ={
    template:   '<div class="page2">'+
                    '<div class="page2-grid">'+

                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+

                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+

                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+

                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+

                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+
                        '<div class="grid-item"></div>'+

                        
                    '</div>'+
                '</div>',
    props:[],
}



var app = new Vue({
    
    el:"#app",

    data:{
        message:'Hello World'
    },

    mounted(){

        gsap.registerPlugin(Draggable, ScrollTrigger);

        const wrapper = document.getElementById("wrapper");
        const carousel = document.getElementById("carousel");

        Draggable.create(carousel, {
            bounds: wrapper,
            type: "x",
            edgeResistance: 0.8,
            dragResistance: 0.4,
            overshootTolerance: 0,
            inertia: true
        });
    },

    methods:{

        getElement(){

            console.log("mydiv.text = ", this.$refs.mydiv.innerText);
            console.log("page1.name = ", this.$refs.myPage1.name);

            this.$refs.myPage1.show();
        }
    },

    components: {
        page1,
        page2
    }

})

// rags-to-riches
// limerence 
//muah
//endlessly
//Deja-vu
//iinii旖旎
//Cul-de-sa
//afflatus
//Nirvana 
//cozy

// https://www.zhihu.com/question/268323709
// https://www.jianshu.com/p/54ac2a881129
// https://blog.csdn.net/screaming_color/article/details/51586964
// https://www.cnblogs.com/chakson/p/4972286.html
// https://www.cnblogs.com/wangsongbai/p/10215141.html
// https://www.cnblogs.com/tcxq/p/10938413.html
// https://segmentfault.com/a/1190000011358507
// https://www.jianshu.com/p/5818ff8c31b8
// https://css-tricks.com/centering-css-complete-guide/





/* https://codepen.io/andymerskin/pen/XNMWvQ?editors=1010
https://codepen.io/GreenSock/pen/BajexOQ
https://codepen.io/YoChen/pen/GRjrbjb
https://codepen.io/Rocksride/pen/dxJoVZ
https://codepen.io/HighFlyer/pen/dQWoMW?editors=1010
https://codepen.io/Amminexx/pen/yLLwvbp?editors=0010
https://codepen.io/ArtemFokin/pen/LYZGPqa */


//https://blog.csdn.net/weixin_38902950/article/details/84674199

//https://www.cnblogs.com/baihuaxiu/p/6654496.html#autoid-1-12-0