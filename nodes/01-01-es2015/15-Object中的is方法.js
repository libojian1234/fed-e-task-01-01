//Object.is

console.log(0==false)    //true
console.log(0===false)    //false
console.log(+0===-0)    //true
console.log(NaN===NaN)    //false
//解决了+0和-0、NaN和NaN的判断问题
console.log(Object.is(+0,-0))    //false
console.log(Object.is(NaN,NaN))    //true