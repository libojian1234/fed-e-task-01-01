//const 一般定义恒量，定义后不允许重新赋值
// const name = 'lbj'
// name = 'lll'    //报错  Assignment to constant variable.

//恒量要求声明的同时赋值
// const name;
// name = 'lbj'  //报错  Missing initializer in const declaration

//恒量只是要求内层指向不允许被修改，对于数据成员的修改是没有问题的
// const obj = {age:12}
// obj.name = 'lbj'
// obj.age = 22
// console.log(obj)  //{ age: 22, name: 'lbj' }
 