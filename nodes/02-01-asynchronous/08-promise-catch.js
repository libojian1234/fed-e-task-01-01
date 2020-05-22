//Promise 异常处理

function ajax(url) {
    return new Promise(function(resolve,reject) {
        // foo()
        // throw new Error()
        var xhr = new XMLHttpRequest();
        xhr.open('GET',url)
        xhr.responseType = 'json'
        xhr.onload = function () {
            if(this.status === 200){
                resolve(this.response)
            }else{
                reject(new Error(this.statusTest))
            }
        }
        xhr.send()
    })
}

// ajax('/api/foo.json')
//     .then(function onFulfilled(value){
//         console.log('onFulfilled',value)
//     },function onRejected(error){
//         console.log('onRejected',error)
//     })

//使用catch注册失败回调是更常见的

// ajax('/api/foo.json')
//     .then(function onFulFilled(value){
//         console.log('onFulfilled',value)
//     })
//     .catch(function onRejected(error){
//         console.log('onRejected',error)
//     })

//catch(onRejected) 实际上就相当于then（undefined,onRejected)
// ajax('/api/foo11.json')
//     .then(function onFulFilled(value){
//         console.log('onFulfilled',value)
//     })
//     .then(undefined,function onRejected(error){
//         console.log('onRejected',error)
//     })

//同时注册的 onRejected 只是给当前 Promise对象注册的失败回调
//它只能捕获到当前 Promise 对象的异常
// ajax('/api/foo.json')
//     .then(function onFulFilled(value){
//         console.log('onFulfilled',value)
//         return ajax('/error-url')
//     },function onRejected(error){
//         console.log('onRejected',error)
//     })

//因为 Promise 链条上的任何一个异常都会被一直向后传递，直到被捕获
//分开注册的 onRejected 相当于给整个 Promise 链条注册失败回调
ajax('/api/foo.json')
    .then(function onFulFilled(value){
        console.log('onFulfilled',value)
        return ajax('/error-url')
    })
    // .catch(function onRejected(error){
    //     console.log('onRejected',error)
    // })

//全局捕获 Promise 异常，类似于 window.onerror---------------unhandledrejection不要写错了！！！！！！！！
window.addEventListener('unhandledrejection',event=>{
    const {reason,promise} = event
    console.log(reason,promise)
    //reason =>Promise失败的原因，一般是一个错误对象
    //promise =>出现异常的Promise对象
    event.preventDefault()
},false)
//Node.js中使用一下方式
// process.on('unhandledrejection',{reason,promise}=>{
//     console.log(reason,promise)
//     //reason =>Promise失败的原因，一般是一个错误对象
//     //promise =>出现异常的Promise对象
// },false)