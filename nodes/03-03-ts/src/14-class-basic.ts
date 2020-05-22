//类（Class）

export {}  //确保跟其他示例没有成员冲突

class Person{
    // name:string = 'lbj'  //可以在这里定义初始值
    //age:number = 18
    name:string
    age:number
    constructor(name:string,age:number){
        this.name =name,
        this.age = age
    }

    sayHi(msg:string):void{   //没有返回值就定义void
        console.log(`I am ${this.name}, ${msg}`)
    }
}