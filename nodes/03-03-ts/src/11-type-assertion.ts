//类型断言

export {}  //确保跟其他示例没有成员冲突

//假定这个nums来自一个明确的接口
const nums = [100,200,300,400]

const res = nums.find(i=>i>0)

// const square = res*res   //这里的res会被推断为number或者undifined,所以语法上会报错

//这是我们断言res为number类型，可使用一下两种方法

const num1 = res as number   //num1就被断言为number，推荐使用as方法
const num2 = <number>res  //JSX中不能使用这种方法，会跟标签冲突

