//for of循环

const arr = [1,2,3,4]
// for(const item of arr){
//     console.log(item)   
// }

//----------------------------------------------------
//forEach不能break出循环，必须使用 some 或者 every 方法
// arr.forEach(item=>{
//     console.log(item)   
// })

//for...of可以break出循环
// for(const item of arr){   
//     console.log(item);
//     if(item>1){
//         break
//     }
// }
//----------------------------------------------------

//遍历Set与遍历数组相同
// const s = new Set(['foo','bar'])
// for(const item of s){
//     console.log(item)   //foo
//                         //bar
// }

//遍历Map可以配合数组结构语法，直接获取键值

// const m = new Map()
// m.set('foo','111')
// m.set('bar','121331')
// for(const item of m){
//     console.log(item)  //[ 'foo', '111' ]
//                         //[ 'bar', '121331' ]
// }
// for(const [key,value] of m){
//     console.log(key,value)  //foo 111
//                             //bar 121331
// }

//--------------------------------

//普通对象不能被直接for...of遍历
const obj = {
    foo:123,
    bar:111
}
for(const item of obj){    //obj is not iterable
    console.log(item)
}
