//Symbol 补充

// console.log(
//     Symbol()===Symbol(),                    //false
//     Symbol('foo') === Symbol('foo'),        //false
//     Symbol.for('foo') === Symbol.for('foo') //true  使用给定的key搜索现有的symbol，如果找到则返回该symbol。否则将使用给定的key在全局symbol注册表中创建一个新的symbol。
// )

//内置Symbol常量-----------------------
// console.log(Symbol.iterator)  //Symbol(Symbol.iterator)  一个返回一个对象默认迭代器的方法。被 for...of 使用。
// console.log(Symbol.hasInstance) //Symbol(Symbol.hasInstance)  一个确定一个构造器对象识别的对象是否为它的实例的方法。被 instanceof 使用。

const obj = {
    name : 'lbj',
    [Symbol.toStringTag] : 'lbj',
    age:12
}
const obj2 = {
    name : 'asd',
    [Symbol.toStringTag] : 'asd'
}
console.log(obj.toString());  //[object lbj]
console.log(obj2.toString());  //[object asd]
console.log(obj === obj2);   //false

for(var key in obj){
    console.log(key)     //name 
                         //age 
}
console.log(Object.keys(obj))  //[ 'name', 'age' ]
console.log(JSON.stringify(obj)) //{"name":"lbj","age":12}
console.log(Object.getOwnPropertySymbols(obj))   //[ Symbol(Symbol.toStringTag) ]