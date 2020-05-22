console.log("global start")

setTimeout(() => {
    console.log("inner")
}, 1500);

setTimeout(() => {
    console.log("inner 2")
    setTimeout(() => {
        console.log("inner 3")
    }, 1000);
}, 1000);

console.log("global end")

//global start
//global end
//inner 2
//inner
//inner 3

//setTime会在消息队列中排队，各自计时，到时执行，不是顺序执行