//对象的解构
const obj = {name:'wwe',age:17};
const {name} = obj;
console.log(name);    //wwe
const {name:objName} = obj; //可以起别名
console.log(objName);  //obj
//应用案例1，简化console.log方法
const {log} = console
log('1111')      //1111

const {name:objName,asd:asdName="3545"}=obj;  //可以给默认值
console.log(objName) //wwe
console.log(asdName) //3545
