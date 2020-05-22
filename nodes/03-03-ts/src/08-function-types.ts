//函数类型

export {}  //确保跟其他示例没有成员冲突

function fn(a:number,b:number):string{
    return 'func'
}
fn(100,200)

function fn1(a:number,b?:number):string{   //?表示可选参数，可不传
    return 'func'
}
fn1(100)

function fn2(a:number,b:number=10,c:string='bar'):string{   //如果有默认值，也可不传
    return 'func'                                   //默认参数要写在后面
}
fn2(100)


//fn3定义为string，参数定义为number
const fn3:(a: number, b: number) => string = function fn(a:number,b:number):string{
    return 'func'
}

