//Object类型
//ts中Object类型泛指非原始类型（数组、函数、对象）

export {} //确保跟其他示例没有成员冲突

const foo: object = function(){}    //[]  //{}   //123 报错

// const obj: { foo: number,bar:string} = {foo:123,bar:"sdf",asd:"134"}     前面定义了什么，后面要一直，不能多不能少，否则报错