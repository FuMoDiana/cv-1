let html = document.querySelector('#html'); //通过选择器找到元素
let style = document.querySelector('#style');
let n = 0;
let string = `/*你好，我是一名画画爱好者
我想给你画一个太极~
看好哦~我要开始画了
* 首先准备一个方的div
*/
#div1{
    border: 1px solid red;
    width:300px;
    height:300px;
}
/*
然后把它变圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px gray;
    border:none;
}
/*
然后我们把它分成两半
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
然后我们设置两个伪元素让它变型
然后通过布局和背景色的设置，变出俩小球
*/
#div1::before{
    content:'';
    display:block;
    position:absolute;
    width:150px;
    height:150px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(8,8,8,1) 20%, rgba(4,4,4,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::after{
    content:'';
    display:block;
    position:absolute;
    width:200px;
    height:200px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(5,5,5,1) 20%, rgba(8,8,8,1) 20%, rgba(252,252,252,1) 20%, rgba(255,255,255,1) 100%);
}
`;
let str2 = '';


let step = (() => {
    setTimeout(() => {
        if (n + 1 > string.length) {
            //数组元素访问完毕，退出
            return;
        }
        //如果是回车，就添加一个回车元素，不照搬
        //如果不是回车，直接照搬原数组元素。保留缩进
        if (string[n] === '\n') {
            str2 += '<br>';
        } else if (string[n] === ' ') {
            str2 += '&nbsp';
        } else {
            str2 += string[n];
        }
        n += 1;
        html.innerHTML = str2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        step();
    }, 40);
});
//对比起setInterval函数，这种方法可以随时停止。
step();
