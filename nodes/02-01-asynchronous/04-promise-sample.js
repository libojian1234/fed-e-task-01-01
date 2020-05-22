//Promise 基本示例

console.log('start')
const promise = new Promise(function (resolve,reject) {
    //这里用于“兑现” 承诺

    //resolve/reject 2选一，不能同时调用
    resolve(100);              //承诺达成，执行then

    // reject(new Error('promise rejected'))   //承诺失败，执行catch
})

promise.then(function(value){
    //即便没有异步操作，then方法中传入的回调函数仍然会被放入队列中，等待下一轮执行，--------------这个也叫微任务
    console.log('resolved',value)
},
function(error){
    console.log('rejected',error)
})

console.log('end')

//start
//end
//resolved 100