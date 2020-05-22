//类的访问修饰符 
//public(公有属性，默认) private（私有属性） protected（收保护属性）

export {}  //确保跟其他示例没有成员冲突

class Person{
    public name:string     //公共属性，可以外部访问，默认是public，可不写（建议加上）
    private age:number     //私有属性，只能内部访问
    protected gender:boolean //受保护属性，外部访问不到，只允许在子类当中访问
    constructor(name:string,age:number){
        this.name =name,
        this.age = age,
        this.gender = true
    }

    sayHi(msg:string):void{   //没有返回值就定义void
        console.log(`I am ${this.name}, ${msg}`)
    }
}

class Student extends Person{
    constructor(name:string,age:number){
        super(name,age)
        console.log(this.gender)  //这里可以访问到
    }
}

const tom = new Person('tom',18)
console.log(tom.name)
// console.log(tom.age)  访问不到
// console.log(tom.gender)  访问不到

//构造函数的私有属性--------------------------------------------------
class Student2 extends Person{
    //构造函数默认也是public，如果是private,就不允许在外部实例化，也不允许被继承
    //只能添加一个静态方法，在静态方法中创建这个类型的实例
    private constructor(name:string,age:number){
        super(name,age)
        console.log(this.gender)  //这里可以访问到
    }
    static create(name:string,age:number){
        return new Student2(name,age)
    }
}

// const jack = new Student2('jack',15)    不允许

const jack = Student2.create('jack',18)
