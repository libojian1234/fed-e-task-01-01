console.log('AAAA')
setTimeout(()=>console.log('BBBB'),1000)
const start = new Date();
while(new Date() - start < 3000){}
console.log('CCCC')
setTimeout(() => console.log('DDDD'), 0);

new Promise((resolve,reject)=>{
    console.log('EEEE')
    foo.bar(100)
})
.then(()=>console.log('FFFF'))
.then(()=>console.log('GGGG'))
.catch(()=>console.log('HHHH'))

console.log('IIII')

//浏览器环境下执行，node下报错
//AAAA
//CCCC
//EEEE
//IIII
//HHHH
//BBBB
//DDDD

//A 同步执行 打印 A 
//B 入宏队列 marco[B]
//C while 阻塞3秒 然后打印 C
//D 入宏队列 marco[B,D]
//E promise 的声明部分是同步的 打印 E
//F G H then和catch 入微队列
//I 同步执行 打印 I
//先轮询微队列，foo.bar 没定义，执行 catch 打印H
//轮询宏队列 [B,D] B在前面 1000已经等待完了 打印 B 再打印 D 