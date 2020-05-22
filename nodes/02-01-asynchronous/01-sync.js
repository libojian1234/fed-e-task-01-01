//同步模式
console.log("global begin")

function bar(params) {
    console.log("bar task")
}

function foo() {
    console.log("foo task")
    bar()
}

foo()

console.log("global end")

//global begin
//foo task
//bar task
//global end

//同步模式会顺序一个个的执行