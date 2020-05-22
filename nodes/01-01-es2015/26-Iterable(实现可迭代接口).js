//实现可迭代接口(Iterable)
const obj = {               //最外层实现了可迭代接口（Iterable），此接口约定的是内部必须有一个返回的iterator方法
    [Symbol.iterator]:function(){
        return {             //这一层实现了迭代器接口（Iterator），此接口约定的是内部必须有一个用于迭代的next方法
            next:function(){
                return{        //这个对象叫迭代结果接口（IterationResult）,在各个接口是用来返回value和done
                    value:'lbj',  //value表示当前被迭代到的数据，它的值可以是任意类型
                    done:true   //done表示迭代是否结束，它的值必须是布尔型
                }
            }
        }
    }
}
for(const item of obj){
    console.log('循环体')  //如果obj中done的值为true，表示循环结束了，不会打印'循环体'
                          //如果obj中done的值位false，表示循环没有结束，会无限循环打印'循环体'
}

const objTwo = {
    store:['foo','bar','baz'],
    [Symbol.iterator]:function(){
        let index = 0;
        const self = this;
        return {             
            next:function(){
                const result = {
                    value:self.store[index],
                    done:index>=self.store.length
                }
                index++
                return result
            }
        }
    }
}

for(const item of objTwo){
    console.log('objTwo循环体',item);
}
//objTwo循环体 foo
//objTwo循环体 bar
//objTwo循环体 baz