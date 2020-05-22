//Map 数据结构

// const obj = {};
// obj[true] = 'value';
// obj[123] = 'qwe';
// obj[{name:'asd'}] = 'zxc'
// console.log(Object.keys(obj))  //[ '123', 'true', '[object Object]' ]
// console.log(obj[{}])           //zxc
// console.log(obj['[object Object]'])  //zxc  //对象的键都转换成了字符串,相当于toString(),{}和'[object Object]'的值一样，无法区分

const m = new Map();           //Map的键就不存在被转换成字符串的情况
const tom = {name:'lbj'};
const jerry = {name:'mouse'}
m.set(tom,222)
m.set(jerry,1111)
console.log(m);   //Map { { name: 'lbj' } => 222 }
console.log(m.get(tom));  //222
console.log(m.has(tom))   //true 
console.log(m.get(jerry));  //1111
console.log(m.has(jerry))   //true 
// console.log(m.delete(tom))  //true
// m.clear()  
console.log(m)   //Map {}

m.forEach((value,key)=>{
    console.log(value,key)   //222 { name: 'lbj' }
})



//-------------------------------(暂时不懂，先放在这里)
// 弱引用版本 WeakMap
// 差异就是 Map 中会对所使用到的数据产生引用
// 即便这个数据在外面被消耗，但是由于 Map 引用了这个数据，所以依然不会回收
// 而 WeakMap 的特点就是不会产生引用，
// 一旦数据销毁，就可以被回收，所以不会产生内存泄漏问题。