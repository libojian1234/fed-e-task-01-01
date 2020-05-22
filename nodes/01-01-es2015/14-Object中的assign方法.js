//Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象(source1, source2)复制到目标对象（target）。它将返回目标对象（target）。
//如果多个源对象(source1, source2)中有相同的属性，后面的覆盖前面的
const source1 = {
  a: 123,
  b: 123
}

const source2 = {
  b: 789,
  d: 789
}

const target = {
  a: 456,
  c: 456
}

const result = Object.assign(target, source1, source2)

console.log(target)  //{ a: 123, c: 456, b: 789, d: 789 }
console.log(result === target)  //true result就是target
result.a = 'sdfs'       //改变值 后target和result同时改变
console.log(target)   //{ a: 'sdfs', c: 456, b: 789, d: 789 }
console.log(result)   //{ a: 'sdfs', c: 456, b: 789, d: 789 } 


//应用场景---------------------

function fn(obj){
    // obj.name = 'lbj'
    // console.log(obj);
    const result = Object.assign({},obj);  //构建了一个新的对象result，result的改变不会影响obj
    result.name = 'lbj';
    console.log(result);
}
const obj = {
    name: 'aaa'
}
fn(obj)         //{ name: 'lbj' }
console.log(obj)  //{ name: 'aaa' }