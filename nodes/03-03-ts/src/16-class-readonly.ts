//类的只读属性

export {}  //确保跟其他示例没有成员冲突

class Person{
    // name:string = 'lbj'  //可以在这里定义初始值
    //age:number = 18
    name:string
    private readonly age:number  
    //readonly只能跟在private之后，有了readonly，只能在声明的时候等号初始化和构造函数中初始化二选一
    constructor(name:string,age:number){
        this.name =name,
        this.age = age
    }

    sayHi(msg:string):void{   //没有返回值就定义void
        console.log(`I am ${this.name}, ${msg}`)
    }
}