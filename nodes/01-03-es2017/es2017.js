//es2017
const obj = {
    foo:'value1',
    bar:'value2'
}

//Object.values------------------(值的数组)
//Object.keys--------------------（数的数组）
console.log(Object.keys(obj))    //[ 'foo', 'bar' ]
console.log(Object.values(obj))   //[ 'value1', 'value2' ]

//Object.entries-----------(obj对象中键值对组成的数组)
console.log(Object.entries(obj))  //[ [ 'foo', 'value1' ], [ 'bar', 'value2' ] ]
for(const [key,value] of Object.entries(obj)){
    console.log(key,value)    //foo value1
                              //bar value2
}
//可以转换成Map类型的的对象
console.log(new Map(Object.entries(obj)))  //Map { 'foo' => 'value1', 'bar' => 'value2' }



//Object.getOwnPropertyDescriptors------------------------
const p1 = {
    firstName:'li',
    lastName:'jian',
    get fullname(){
        return this.firstName+' '+this.lastName
    }
}
console.log(p1.fullname)   //li jian
const p2 = Object.assign({},p1);  //assign方法只是将fullname当成一个普通的属性去复制了
p2.firstName = 'lilili';    
console.log(p2.fullname)   //li jian  

//getOwnPropertyDescriptors可以复制get、set方法(主要是配合es5的set、get去使用)
const descriptors = Object.getOwnPropertyDescriptors(p1)
console.log(descriptors)
const p3 = Object.defineProperties({},descriptors);
p3.firstName = 'lilili'
console.log(p3.fullname)

//String.prototype.padStart | String.prototype.padEnd
//用给定的字符串去填充开始或结束位置的空余位，直到达到给定的长度为止
const books = {
    html:5,
    css:16,
    javascript:128
}
for(const [name,count] of Object.entries(books)){
    console.log(name,count)
    //html 5
    //css 16
    //javascript 128
}
for(const [name,count] of Object.entries(books)){
    console.log(`${name.padEnd(16,'-')}|${count.toString().padStart(5,'0')}`)
    //html------------|00005   补齐后面16位，和前面5位
    //css-------------|00016
    //javascript------|00128
}




//在函数参数中添加尾逗号
const arr = [
    100,
    200,
    300,    //新建一行不会在上一行加逗号，就不会修改上一行
]


//Async|Await