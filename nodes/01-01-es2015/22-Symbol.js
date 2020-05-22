//Symbol 数据类型

const s = Symbol();
console.log(s);  //Symbol()
console.log(typeof s); //symbol
//两个 Symbol 永远不会相等
const s1 = Symbol();
console.log(s==s1)  //false

console.log(Symbol('foo'))  //Symbol(foo)


//-----------------------------
// 使用 Symbol 为对象添加用不重复的键 
const obj = {}
obj[Symbol()] = '123'
obj[Symbol()] = '234'
console.log(obj)    //{ [Symbol()]: '123', [Symbol()]: '234' }

//------------------------------
const lbj = Symbol();
const person = {
    [lbj]:'qwe',
    say(){
        console.log(this[lbj])
    }
}
person.say();   //qwe
console.log(person[lbj])  //qwe

//------------------------
//案例：Symbol 模拟实现私有成员

//a.js----------------------
const name = Symbol();
const person1 = {
    [name]:'lbj',
    say(){
        console.log(this[name])
    }
}
//只对外暴露person1

//b.js------------------------
//由于无法创建出一样的Symbol值，
//所以无法直接访问到person1中的私有成员
console.log(person1[Symbol()])
person1.say()