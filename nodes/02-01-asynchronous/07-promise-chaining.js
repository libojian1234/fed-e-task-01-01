//Promise 链式调用

function ajax(url) {
    return new Promise(function(resolve,reject) {
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

var promise = ajax('/api/foo.json')    //得到的是一个Promise对象

var promise2 = promise.then(
    function onFulfilled(value) {
        console.log('onFullfied',value)
    },
    function onRejected(error) {
        console.log('onRejected',error)
    }
)
console.log(promise2)   //调用then方法后，得到的也是一个Promise对象，但是这两个对象不相等
console.log(promise === promise2)    //false

ajax('/api/foo.json')
    .then(function(value){
        console.log(1111)
        console.log(value)
        return ajax('/api/foo.json')
    })  //返回一个Promise对象
    .then(function(value){
        console.log(2222)
        console.log(value)
        return ajax('/api/foo.json')
    })  //返回一个Promise对象
    .then(function(value){
        console.log(3333)
        console.log(value)
        return ajax('/api/foo.json')
    })  //返回一个Promise对象
    .then(function(value){
        console.log(4444)
        console.log(value)
        return ajax('/api/foo.json')
    })  //返回一个Promise对象