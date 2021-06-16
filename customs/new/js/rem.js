(function (doc, win) {

    var docEl = doc.documentElement,

    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

    recalc = function () {

        var clientWidth = docEl.clientWidth;
        console.log("clientWidth = ",clientWidth);

        if (!clientWidth) return;

        //docEl.style.fontSize = 100 * (调试设备宽度 / 设计图宽度) + 'px';
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        //docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';

        console.log("fontSize : ",docEl.style.fontSize);

    };

    if (!doc.addEventListener) return;

    win.addEventListener(resizeEvt, recalc, false);

    doc.addEventListener('DOMContentLoaded', recalc, false);
    
})(document, window);

//https://www.jianshu.com/p/3163bc9f7e47
    