// 箭头函数与 this
//箭头函数不会改变this指向
const person = {
    name : 'lbj',
    sayHi : function(){
        console.log(`${this.name} in function.`)   //lbj in function.
        console.log(this)    //指向person
    },
    sayHiArrow:()=>{
        console.log(`${this.name} in function.`)  //undefined in function.
        console.log(this)               //箭头函数内是没有this指向的，它里面的this是继承于上一级的上下文,指向window，node环境指向全局global
    },
    sayHiAsync:function(){
        setTimeout(function(){
            console.log(`${this.name} in fn.`)   //undefined in fn.
            console.log(this)    //指向window
            // setTimeout的完整写法其实是window.setTimeout，在js中window是可以省略不写的，对于这种普通的回调函数，它里面的this指向的是window，         
        },1000)
    },
    sayHiAsyncArrow:function(){
        setTimeout(()=>{
            console.log(`${this.name} in fn.`)  //lbj in fn.
            console.log(this)   //如果是箭头函数，那么这个setTimeout中的回调函数内是没有this指向的，这个this是来自于上一级sayHiAsyncArrow的上下文person环境
        },1000)
    },
    sayHiAsyncArrow2:()=>{
        setTimeout(()=>{
            console.log(`${this.name} in fn.`)   //undefined in fn.
            console.log(this)    //一直向上寻找，找到window(浏览器环境下)||global(node环境下)
        },1000)
    }
}
person.sayHi();
person.sayHiArrow();
person.sayHiAsync();
person.sayHiAsyncArrow();
person.sayHiAsyncArrow2();