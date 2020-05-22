//模板字符串

//反引号包裹
const str = `my name is lbj`

// //允许换行(用力与html标签目标的拼写)
const str2 = `my name is lbj,
              my age is 18`

//可以通过${} 插入表达式，表达式的执行结果将会输出到相应位置
const name1 = 'tom'
const str3 = `hi,my name is ${name1}-----${1+3}----${Math.random()}`
console.log(str3)   //hi,my name is tom-----4----0.222728930349672
