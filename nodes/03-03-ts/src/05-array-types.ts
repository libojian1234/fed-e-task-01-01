//数组类型

const arr1:Array<number> = [1,3,4,5]

const arr2:number[] = [12,3,4]

//-------------------------------------------------------

function sum (...args:number[]){
    //如果没有规定类型，就要在这里判断每个参数是不是number类型
    return args.reduce((prev,current)=>prev+current,0)
}
sum(1,2,3)