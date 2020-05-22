//泛型
//泛型是指我们定义的时候没有指定数据类型，等到使用的时候再来定义数据类型的一种特征

export {}  //确保跟其他示例没有成员冲突

function creatNumberArray(length:number,value:number):number[]{
    const arr = Array<number>(length).fill(value);
    return arr
}

function creatStringArray(length:number,value:string):string[]{
    const arr = Array<string>(length).fill(value);
    return arr
}

function creatArray<A>(length:number,value:A):A[]{
    const arr = Array<A>(length).fill(value);
    return arr
}

const res = creatArray<string>(3,'foo')


//这样就可以传递类型了