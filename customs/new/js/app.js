
var page1 = {
    template:'<div class="neu"><div class="stuidoname">{{text}}</div></div>',
    props:[],
    data(){
        return {
            name:'page1',
            text:'Lao5 Studio'
        }
    },
    methods:{
        show(){
            console.log('调用page1');
        }
    }
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
        page1
    }

})


/* https://codepen.io/andymerskin/pen/XNMWvQ?editors=1010
https://codepen.io/GreenSock/pen/BajexOQ
https://codepen.io/YoChen/pen/GRjrbjb
https://codepen.io/Rocksride/pen/dxJoVZ
https://codepen.io/HighFlyer/pen/dQWoMW?editors=1010
https://codepen.io/Amminexx/pen/yLLwvbp?editors=0010
https://codepen.io/ArtemFokin/pen/LYZGPqa */


//https://blog.csdn.net/weixin_38902950/article/details/84674199

//https://www.cnblogs.com/baihuaxiu/p/6654496.html#autoid-1-12-0