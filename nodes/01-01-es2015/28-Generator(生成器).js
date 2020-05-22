//Generator(生成器)
//避免异步代码编程中回调嵌套过深，提供更好的异步编程解决方案
function * foo () {
    console.log('lbj');
    return 100
}
const result = foo();
console.log(result)    //Object [Generator] {}
console.log(result.next())  //lbj
                            //{ value: 100, done: true } 


//碰到yield就暂停执行（惰性执行，next一下就执行一下），
function * bar (){
    console.log(111)
    yield 100
    console.log(222)
    yield 200
    console.log(333)
    yield 300
}
const generator = bar();
console.log(generator.next())  //111
                               //{ value: 100, done: false }
console.log(generator.next())   //222
                                //{ value: 200, done: false }
console.log(generator.next())   //333
                                //{ value: 300, done: false }
console.log(generator.next())   //{ value: undefined, done: true }
