const arr = [100,200,300]
const [,,bar] = arr
console.log(bar)  //300
const [,...rest] = arr
console.log(rest) //[200,300]
const [a,b,c,d] = arr
console.log(d)  //undefined

const [a1,b1,c1=123,d1=234] = arr
console.log(a1,b1,c1,d1)  //100 200 300 234

//---------------------
//切割字符串也可以用解构的方法
const path = '/foo/bar/baz'
const tmp = path.split('/')
const rootdir = tmp[1]
console.log(rootdir)  //foo

const [,rootdir1] = path.split('/')
console.log(rootdir1)  //foo