//Async | Await 语法糖

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


async function  main() {             //就是把* 换成async ,yield 换成await
    try{
        const users = await ajax('/api/users.json')
        console.log(users)

        const foo = await ajax('/api/foo.json')
        console.log(foo)

        const urls = await ajax('/api/urls.json')
        console.log(urls)
    }catch(e){
        console.log(e)
    }
}

//co(main)  

const promise = main()

promise.then(() => {
    console.log('all completed')
})