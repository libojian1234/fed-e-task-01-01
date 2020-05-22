//Promise 常见误区

function ajax(url) {
    return new Promise(function (resolve,reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET',url)
        xhr.responseType = 'json';
        xhr.onload = function() {
            if(this.status === 200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}


//嵌套使用Promise是最常见的误区，这样使用的话还是回调地狱，没用解决问题代码的扁平化
ajax('/api/foo.json').then(function (res) {
    console.log(11111111)
    ajax('/api/foo.json').then(function (res) {
        console.log(222222)
        ajax('/api/foo.json').then(function (res) {
            console.log(33333333333)
            ajax('/api/foo.json').then(function (res) {
                console.log(44444444444)
            })
        })
    })
})
