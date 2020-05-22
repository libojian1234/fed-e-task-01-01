//Promise 并行执行

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

//-------------------------------------------------------------------------------------

// ajax('/api/foo.json')
// ajax('/api/foo.json')

//-------------------------------------------------------------------------------------
// var promise = Promise.all([
//     ajax('/api/foo.json'),
//     ajax('/api/foo11.json')
// ])

// promise.then(function(value){        //上面2个请求都执行完（不报错）后，就会进入then方法
//     console.log(value)
// }).catch(function(error){            //只要有一个报错，就会进入catch
//     console.log(error)
// })

//--------------------------------------------------------------------------------------

// ajax('/api/urls.json')
//     .then(value => {
//         const urls = Object.values(value);
//         const tasks = urls.map(url => ajax(url))
//         return Promise.all(tasks)
//     })
//     .then(values => {
//         console.log(values)   //打印出来tasks的数组
//     })

//-----------------------------------------------------------------------------------------

//Promise.race 实现超时控制

const request = ajax('/api/foo.json')
const timeout = new Promise((resolve,reject) => {
    setTimeout(() => reject(new Error('timeout')),500)    // 当请求超过500ms时，会出现超时的情况，直接会进入catch中（只要执行了reject，就会进catch）
})                                                       

Promise.race([
    request,
    timeout
])
.then(value => {
    console.log(value)
})
.catch(error => {
    console.log(error)
})