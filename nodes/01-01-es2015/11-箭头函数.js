//最简方式
const inc = n => n + 1

//----------------------------
const arr = [1,2,3,4,5,6]
console.log(arr.filter(function(i){
    return i%2
}))                                //[ 1, 3, 5 ]
//--------------------
const newArr = arr.filter(function(currentValue,index,arr){
    console.log(currentValue,index,arr)
    if(currentValue%2 == 1){
        return currentValue;
    }
})
console.log(newArr)     //[ 1, 3, 5 ]
//箭头函数简化写法------------------------
console.log(arr.filter(i=>i%2))    //[ 1, 3, 5 ]

//------------------------------
const arr1 = [{name:'a',active:false},{name:'b',active:true},{name:'c',active:false},{name:'d',active:true},{name:'e',active:false},{name:'g',active:false}]
const newArr1 = arr1.filter(function(currentValue,index,arr){
    // console.log(currentValue,index,arr)
    if(currentValue.active){
        return currentValue;
    }
})
console.log(newArr1)    //[ { name: 'b', active: true }, { name: 'd', active: true } ]

//箭头函数简化写法--------------
const arr2 = [{name:'a',active:false},{name:'b',active:true},{name:'c',active:false},{name:'d',active:true},{name:'e',active:false},{name:'g',active:false}]
console.log(arr2.filter(i=>i.active))    //[ { name: 'b', active: true }, { name: 'd', active: true } ]