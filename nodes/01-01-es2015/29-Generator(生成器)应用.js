//Generator(生成器)应用
//案例1：发号器
function * foo(){
    let id = 1;
    while(true){
        yield id++
    }
}
const idMarker = foo();
console.log(idMarker.next().value)   //1
console.log(idMarker.next().value)   //2
console.log(idMarker.next().value)   //3
console.log(idMarker.next().value)   //4
console.log(idMarker.next().value)   //5
console.log(idMarker.next().value)   //6


//案例2 
const todos = {
    life:['吃饭','睡觉','打豆豆'],
    learn:['语文','数学','英语'],
    work:'1123',
    [Symbol.iterator]:function * (){
        const all = [...this.life,...this.learn,...this.work];
        for(const item of all){
            yield item
        }
    }
}
for(const item of todos){
    console.log(item);
}