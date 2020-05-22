//类与接口

export {}  //确保跟其他示例没有成员冲突

//------------------------------------------------------
interface EatAndRun{
    eat(food:string):void
    run(distance:number):void
}

class Person implements EatAndRun {
    eat(food:string):void{
        console.log(`优雅的进餐：${food}`)
    }
    run(distance:number):void{
        console.log(`直立行走：${distance}`)
    }
}
class Animal implements EatAndRun {
    eat(food:string):void{
        console.log(`呼噜呼噜的吃：${food}`)
    }
    run(distance:number):void{
        console.log(`爬行：${distance}`)
    }
}

//------------------------------------------------------
//尽量每个接口定义一个方法
interface Eat{
    eat(food:string):void
}
interface Run{
    run(distance:number):void
}

class Person1 implements Eat,Run {   //多接口用逗号分开
    eat(food:string):void{
        console.log(`优雅的进餐：${food}`)
    }
    run(distance:number):void{
        console.log(`直立行走：${distance}`)
    }
}
class Animal1 implements Eat,Run {
    eat(food:string):void{
        console.log(`呼噜呼噜的吃：${food}`)
    }
    run(distance:number):void{
        console.log(`爬行：${distance}`)
    }
}