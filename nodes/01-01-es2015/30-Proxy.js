//Proxy 对象

// console.log(Number.isInteger(12)
// throw new TypeError('error')


//-----------------------------------------
// const person = {
//     name:'lbj',
//     age:23
// }
// const personProxy = new Proxy(person,{
//     //监视属性读取
//     get(target,property){
//         console.log(target,property);
//         // return target[property]
//         return 100
//     },
//     //监视属性设置
//     set(target,property,value){
//         if(property === 'age'){
//             if(!Number.isInteger(value)){
//                 throw new TypeError(`${value} is not an int`)
//             }
//         }
//         target[property] = value;
//     }
// })
// personProxy.age = 12
// console.log(personProxy.name)  

// personProxy.gender = true
// console.log(personProxy.xxx)

// //{ name: 'lbj', age: 12 } 'name'     这个是get方法中打印的 100为返回值
// //100
// //{ name: 'lbj', age: 12, gender: true } 'xxx'
// //100



//Proxy 对比 Object.defineProperty()-----------------------------------------

//优势1：proxy可以监视读写以外的操作---------------

// const person1 = {
//     name:'lbj',
//     age:34
// }
// const personProxy1 = new Proxy(person1,{
//     deleteProperty(target,property){
//         console.log('delete',property);
//         delete target[property]
//     }
// })
// delete personProxy1.age
// console.log(person1)
// //delete age
// //{ name: 'lbj' }


//优势2：proxy 可以很方便的监视数组操作--------------

const list = [];
const listProxy = new Proxy(list,{
    set(target,property,value){
        console.log('set',property,value);
        return true
    }
})
listProxy.push(100)
//set 0 123
//set length 1       ？？？？？？？？？？？？？？？？？(这个打印是什么意思)

//优势3：Proxy 不需要侵入对象

const person3 = {}
Object.defineProperty(person3,'age',{
    
    set(value){
        console.log('age被设置');
        person3._age = value;
    },
    get(){
        console.log('age被访问');
        return person3._age 
    }
    
})

person3.age = 15;
console.log(person3.age)  //15
console.log(person3)   // person对象  { _age: 15 }  question：这个person3监视有什么意义，为什么不直接是{age：15}

//Proxy 更合理
const person4 = {
    name:'lbj',
    age:20
}

const personProxy4 = new Proxy(person4,{
    get(target,property){
        console.log('get',property)
        return target[property]
    },
    set(target,property,value){
        console.log('set',property,value)
        target[property] = value
    }
})

personProxy4.name = 'ads'
personProxy4.xxx = 'ads'
console.log(personProxy4.name)
console.log(personProxy4.xxx)

//set name ads
//set xxx ads
//get name
//ads
//get xxx
//ads