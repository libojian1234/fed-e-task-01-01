//枚举（Enum）

export {}  //确保跟其他示例没有成员冲突


// const PostStatus = {
//     Draft : 0,
//     Unpubliced : 1,
//     Public : 2
// }

// enum PostStatus {
//     Draft = 0,
//     Unpubliced = 1,
//     Public = 2
// }

// enum PostStatus {  //如果都不赋值，就是从0开始，依次加1， 
//     Draft,          //0,1,2
//     Unpubliced,
//     Public
// }

//加了const在生成的js文件里，枚举的属性会被移除掉
const enum PostStatus {  //如果都不赋值，就是从0开始，依次加1， 
    Draft,          //0,1,2
    Unpubliced,
    Public
}

// enum PostStatus {  //如果后面不赋值，就是根据第一个值依次加1
//     Draft = 3,      //3,4,5
//     Unpubliced,
//     Public
// }

// enum PostStatus {  //如果是字符串，那每个都要赋值
//     Draft = 'add',      //3,4,5
//     Unpubliced = 'bar',
//     Public = 'asd'
// }

const post = {
    title:'Hello TypeScript',
    content:'TypeScript is a typed superset of JavaScript',
    status: PostStatus.Draft
}