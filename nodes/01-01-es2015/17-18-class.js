//class 关键字

class Person{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(`hi,my name is ${this.name}`);
    }
    leave(){
        console.log(`hi,I'll leaving`);
    }
    static create(name){    //添加一个实例化Person的static方法
        console.log(this);
        return new Person(name);
    }
}
console.log(new Person('lbj').leave());  //hi,I'll leaving
const lbj = Person.create('lbj');
lbj.say();  //hi,my name is lbj