//对象字面量
const bar = 'qwe';
obj = {
    name:'er',
    //bar:bar, //传统写法
    bar,   //属性名与变量名相同时，可以省略:bar
    fn(){   //方法可以省略function
        console.log(this.name); //er
        console.log(this)    //this指向obj
    },
    // Math.random():123,//不允许
    [1+7]:'add'
}
obj.fn()