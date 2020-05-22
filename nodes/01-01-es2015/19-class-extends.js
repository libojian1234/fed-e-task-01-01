//extends 继承

class Person{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(`hi,my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,number){
        super(name);  //调用super就是调用父类的构造h函数，super始终指向父类（Person）
        this.number = number;
    }
    hello(){
        super.say();
        console.log(`my number is ${this.number}`)
    }
}
const stu = new Student('tom',18)
stu.hello();  //hi,my name is tom(执行hello的时候，super.say()调用了父级Person的方法)
              //my number is 18