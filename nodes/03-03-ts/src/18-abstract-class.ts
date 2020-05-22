//抽象类

export {}  //确保跟其他示例没有成员冲突

//abstract（被定义成抽象类后）,Animal这个类就不能实例化了，只能被继承
abstract class Animal {     
    eat(food:string):void{
        console.log(`呼噜呼噜的吃：${food}`)
    }
    abstract run(distance:number):void
}
class Dog extends Animal{
    run(distance: number): void {
        console.log('爬行',distance)
    }
}

const dog = new Dog()
dog.eat('骨头')
dog.run(122)