//Generator 配合 Promise 的异步方案

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

function * main() {
    try{
        const users = yield ajax('/api/users.json')
        console.log(users)

        const foo = yield ajax('/api/foo.json')
        console.log(foo)

        const urls = yield ajax('/api/urls.json')
        console.log(urls)
    }catch(e){
        console.log(e)
    }
}

function co (generator) {
    const g = generator()

    function handleResult(result) {
        if(result.done) return;       //done为false的时候，生成器结束
        result.value.then(data => {
            handleResult(g.next(data))
        },error => {
            g.throw(error)
        })
    }

    handleResult(g.next())
}

co(main)