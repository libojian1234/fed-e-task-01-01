//任意类型（弱类型）

export {}  //确保跟其他示例没有成员冲突

function stringify(value:any){
    return JSON.stringify(value)
}

stringify('string')
stringify(100)
stringify(true)
stringify(function(){})

let foo:any = 'aaa'
foo = 100
foo.bar()

//any类型不安全，不要轻易用这种类型（只有在兼容老代码的时候使用）