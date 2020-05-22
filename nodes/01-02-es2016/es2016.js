//es2016

//Array.prototype.includes-----
const arr = ['foo','bar',1,NaN,false]
//indexOf方法不能检测NaN
console.log(arr.indexOf('foo'))  //0
console.log(arr.indexOf(NaN))  //-1
console.log(arr.indexOf(false))  //4
console.log(arr.indexOf('werwer'))  //-1
//includes可以检测NAN
console.log(arr.includes('foo'))  //true
console.log(arr.includes(NaN))  //true
console.log(arr.includes(false))  //true
console.log(arr.includes('dhdj'))  //false


//指数运算符---------------------
console.log(Math.pow(2,10))   //1024
console.log(2 ** 10)      //1024