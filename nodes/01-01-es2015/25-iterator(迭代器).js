//Array ,Set,Map类型数据都有Symbol.iterator方法,执行Symbol.iterator方法后，
//会看到返回Array Iterator的一个对象该对象的原型中有个next方法，调用next方法会遍历arr
const arr = ['foo','bar','lbj']
const iteratorArr = arr[Symbol.iterator]()
console.log(iteratorArr)
console.log(iteratorArr.next())
console.log(iteratorArr.next())
console.log(iteratorArr.next())
console.log(iteratorArr.next())
//{ value: 'foo', done: false }
//{ value: 'bar', done: false }
//{ value: 'lbj', done: false }
//{ value: undefined, done: true }

//while 遍历
while (true) {
    const current = iteratorArr.next()
    if(current.done){
        break;  //迭代已经结束了，没必要继续了
    }
    console.log(current.value)
}
//foo
//bar
//lbj

const set = new Set(['foo','bar','lbj'])
const iteratorSet = set[Symbol.iterator]()
console.log(iteratorSet.next())
console.log(iteratorSet.next())
console.log(iteratorSet.next())
console.log(iteratorSet.next())
//{ value: 'foo', done: false }
//{ value: 'bar', done: false }
//{ value: 'lbj', done: false }
//{ value: undefined, done: true }


const map = new Map()
map.set('foo',123);
map.set('bar',234);
map.set({name:'lbj'},456);
const iteratorMap = map[Symbol.iterator]()
console.log(iteratorMap.next())
console.log(iteratorMap.next())
console.log(iteratorMap.next())
console.log(iteratorMap.next())
//{ value: [ 'foo', 123 ], done: false }
//{ value: [ 'bar', 234 ], done: false }
//{ value: [ { name: 'lbj' }, 456 ], done: false }
//{ value: undefined, done: true }
