//接口

export {}  //确保跟其他示例没有成员冲突

interface Post {      //interface定义Post接口
    title:string
    content:string
}

function printPost(post:Post){
    console.log(post.title);
    console.log(post.content)
}

printPost({
    title:'hello TypeScript',
    content:'A javascript superset'
})

//接口就是用来约束对象的结构，一个对象去实现一个接口，就必须拥有这个接口中约束的所有成员
