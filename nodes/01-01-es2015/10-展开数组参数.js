//展开数组参数
// const arr = ['foo', 'bar', 'baz']
// console.log(...arr)   //foo bar baz
// console.log.apply(console,arr)  //以前使用apply方法获取arr的所有值
// const newArr = [...arr]  //浅复制
// console.log(newArr)   //[ 'foo', 'bar', 'baz' ]
// newArr[0] = 'lbj';
// console.log(arr,newArr)  //[ 'foo', 'bar', 'baz' ] [ 'lbj', 'bar', 'baz' ]

//-------------------------------

//验证对象和数组解构是浅复制
const arr = [{
                name:'aaa',
                age:12,
                info:{
                    active:false
                }
            },
            {
                name:'bbb',
                age:23,
                info:{
                    active:false
                }
            }]
const newArr = [...arr]   //对象中改变arr和newArr中其中一个的值会改变另外一个的值，对象不能做到深度复制
console.log(newArr)    // [ { name: 'aaa', age: 12, info: { active: false } },
                          //{ name: 'bbb', age: 23, info: { active: false } } ]
arr[0].age = 33
arr[0].active = true
console.log(arr)    //[ { name: 'aaa', age: 33, info: { active: false }, active: true },
                       //  { name: 'bbb', age: 23, info: { active: false } } ]
console.log(newArr)    //[ { name: 'aaa', age: 33, info: { active: false }, active: true },
                       //  { name: 'bbb', age: 23, info: { active: false } } ]