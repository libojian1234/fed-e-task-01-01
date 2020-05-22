//Set 数据结构

const s = new Set();
s.add(1).add(2).add(3).add(3)  //只会追加一个3进去
// s.add({age:1}).add({age:2}).add({age:3}).add({age:3}); //{age:3}会添加2个进去
console.log(s);    //Set { 1, 2, 3, { age: 1 }, { age: 2 }, { age: 3 }, { age: 3 } }
s.forEach(i=>console.log(i))
for(let i of s){
    console.log(i)       
}

console.log(s.size)   //s的长度

console.log(s.has(2))   //s中是否有2，返回值为布尔值

console.log(s.delete(2))   //删除s中的2，返回值为布尔值
console.log(s)    //Set { 1, 3 }

s.clear();       //清除s中的所有值
console.log(s)   //Set {}

//应用场景：数组去重--------------------------------------
const arr = [1,2,3,4,2,4];
const result = new Set(arr)   
const result2 = [...new Set(arr)]
const result3 = Array.from(new Set(arr))   //Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
console.log(result)   //Set { 1, 2, 3, 4 }
console.log(result2)  //[ 1, 2, 3, 4 ]
console.log(result3)  //[ 1, 2, 3, 4 ]