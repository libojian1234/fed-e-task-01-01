//可选成员、只读成员、动态成员

export {}  //确保跟其他示例没有成员冲突

//------------------------------------
interface Post{
    title:string
    content:string
    subtitle?:string    //用 ? 表示可选成员
    readonly summary:string  //用 readonly 表示只读成员
}
const hello:Post = {
    title:"Hell TypeScript",
    content:"A JavaScript superset",
    summary:"A JavaScript"
}

//hello.summary = 'other'   //不允许跟只读成员重新赋值

//---------------------------------------------

interface Cache{
    [key:string]:string     //动态成员，第一个string表示键只能是string类型，第二个string表示值只能是string类型
}

const cache:Cache = {}

cache.foo = 'value1'
cache.bar = 'value2'
// cache.zxc = 123   这个就会报错