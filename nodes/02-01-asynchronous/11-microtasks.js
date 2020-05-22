//微任务
console.log('global start')

//setTimeout 的回调是宏任务，进入回调队列排队
setTimeout(() => {
    console.log('setTimeout')
},0)

//promise 的回调是微任务，本轮用末尾直接执行
Promise.resolve()
    .then(() => {
        console.log('promise')
    })
    .then(() => {
        console.log('promise 2')
    })
    .then(() => {
        console.log('promise 3')
    })
    
console.log('global end')

//global start
//global end
//promise
//promise 2
//promise 3
//setTimeout

//----------------------------------------------
//Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log) 
//1     ??????????????????????????????