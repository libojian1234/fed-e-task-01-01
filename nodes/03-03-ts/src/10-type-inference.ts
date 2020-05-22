//隐式类型推断

export {}  //确保跟其他示例没有成员冲突

let age = 18   //age会被推断为number，如果再跟它赋值字符串类型，语法会报错
// age = 'string'

let foo   //foo会被推断为any类型，再赋值可赋任意值

foo = 100
foo = 'string'

//建议尽量为每个变量添加明确的类型，不要定义any