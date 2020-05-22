//常用Promise静态方法

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

// Promise.resolve('foo')
//     .then(function(value){
//         console.log(value)    //foo
//     })

// new Promise(function(resolve,reject){
//     resolve('foo')
// }).then(function(value){
//         console.log(value)    //foo
//     })

//如果传入的是一个 Promise 对象，Promise.resolve 方法原样返回
// var promise = ajax('/api/foo.json')
// var promise2 = Promise.resolve(promise)
// console.log(promise === promise2)     //true

//如果传入的是带有一个跟 Promise 一样的 then 方法的对象
//Promise.resolve 会将这个对象作为 Promise 执行
// Promise.resolve({
//     then:function(onFulfilled,onRejected){
//         onFulfilled('foo')
//     }
// })
// .then(function(value){
//     console.log(value)    //foo 
// }) 

//Promise.reject 传入任何值，都会作为这个 Promise 失败的理由
// Promise.reject(new Error('rejected'))
//     .catch(function(error){
//         console.log(error)   //一个错误的对象
//     })
Promise.reject('anything')
    .catch(function(error){
        console.log(error)   //anything
    })