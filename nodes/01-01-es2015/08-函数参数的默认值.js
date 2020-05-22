function foo1(enable){
    enable = enable || true         //但是短路运算很多情况下是不适合判断默认参数的，例如 0 '' false null 
    console.log(enable);
}
foo1()         //true
foo1(false)    //true  这样就不正确
foo1(0)    //true  这样就不正确
foo1('')    //true  这样就不正确
foo1(null)    //true  这样就不正确


//以前的写法 
function foo2(enable){
    enable = enable===undefined ? true : enable;  
    console.log(enable);
}
foo2()         //true
foo2(false)    //false
foo2(0)    //0
foo2('')    //
foo2(null)    //null

//现在函数参数有了默认值，简化了原来的写法 
function foo(enable = true){
    console.log(enable);   //true
}
foo()         //true
foo(false)    //false
foo(0)    //0
foo('')    //
foo(null)    //null

//默认参数一定是在形参列表的最后
//错误写法---函数调用时会报错Unexpected token ,
// function foo3 (enable = true,value) {
//     console.log('foo invoked - enable: ')
//     console.log(enable)
// }

// foo3(,false)

  //正确写法
function foo4 (value,enable = true) {
    console.log('foo invoked - enable: ')
    console.log(enable)    //true
}

foo4(11)
