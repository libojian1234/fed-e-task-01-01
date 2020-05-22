//let 声明的成员只会在所声明的块中生效


//let 修复了变量提升问题
// console.log(aa);  //undefined
// var aa = 1234443334523436;
//---------------------------------------
// console.log(bb);  //报错  bb is not defined
// let bb = 123423545; 


//内部循环结束后i=3，会直接给到外部的i赋值--------------------------------------
// for (var i = 0; i < 3; i++) {
//     for (var i = 0; i < 3; i++) {
//         console.log(i);
//     }
//     console.log('内部循环i='+i);
// }
//0
//1
//2
//内部循环i=0

//用let就不会存在i赋值给外部循环的情况，这两个i相互不影响--------------------------------------
// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//         console.log(i);
//     }
//     console.log('内部循环i='+i);
// }
//0
//1
//2
//内部循环i=0
//0
//1
//2
//内部循环i=1
//0
//1
//2
//内部循环i=2

//for循环的代码相当于下面if的代码 --- 
// for (let i = 0; i < 3; i++) {
//   let i = 'foo'
//   console.log(i)
// }
// //foo
// //foo
// //foo
// //----------------
// let i = 0
// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }
// i++
// console.log(i)
// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }
// i++
// console.log(i)
// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }
// i++
// console.log(i)
//1
//foo
//2
//foo
//3
//-------------

//let 应用场景：循环绑定事件，事件处理函数中获取正确的索引
// var elements = [{},{},{}]
// for(var i=0;i<elements.length;i++){
//     elements[i].onclick = function (){
//         console.log(i); 
//     }
// }
// elements[0].onclick()   //3
// elements[1].onclick()   //3
// elements[2].onclick()   //3
//为了解决上面索引不对的问题，原来都用闭包来解决
// var elements = [{},{},{}]
// for(var i=0;i<elements.length;i++){
//     elements[i].onclick = (function (i){
//         return function(){
//             console.log(i);
//         } 
//     })(i)
// }
// elements[0].onclick()   //0
// elements[1].onclick()   //1
// elements[2].onclick()   //2
//但是现在有了let，就不存在索引错误这种问题了
var elements = [{},{},{}]
for(let i=0;i<elements.length;i++){
    elements[i].onclick = function (){
        console.log(i); 
    }
}
elements[0].onclick()   //0
elements[1].onclick()   //1
elements[2].onclick()   //2

