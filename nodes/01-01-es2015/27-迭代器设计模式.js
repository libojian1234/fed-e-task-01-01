//迭代器设计模式
//核心：对外提供统一遍历接口，让外部不用关心这个数据内部数据的结构是什么样的
//each 方法只适用于数组结构，迭代器方法适用于任何数据结构(这个不是很理解)
const todos = {
    life:['吃饭','睡觉','打豆豆'],
    learn:['语文','数学','英语'],
    work:'1123',
    each:function(callback){
        const all = [].concat(this.life,this.learn,this.work);
        for(const item of all){
            callback(item)
        }
    },
    [Symbol.iterator]:function(){
        const all = [...this.life,...this.learn,...this.work];
        let index = 0;
        return {
            next: function(){
                return {
                    value:all[index],
                    done:index++ >= all.length
                }
            }
        }
    }
}
//for循环代码，获取所有内容名称
// for(const item of todos.life){
//     console.log(item)
// }
// for(const item of todos.learn){
//     console.log(item)
// }
// for(const item of todos.work){
//     console.log(item)
// }

//添加each方法，获取所有内容
todos.each(function(item){
    console.log(item)
});
//吃饭
//睡觉
//打豆豆
//语文
//数学
//英语
//1
//1
//2
//3             ??????????????为什么1123会分开打印出来
//添加迭代器方法，获取所有内容
for(const item of todos){
    console.log(item);
}
//吃饭
//睡觉
//打豆豆
//语文
//数学
//英语
//1
//1
//2
//3
