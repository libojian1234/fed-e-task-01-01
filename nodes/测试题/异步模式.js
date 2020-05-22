console.log('global begin')

setTimeout(function timer1(){
    console.log('timer1 invoke')
},2800)

setTimeout(function timer2(){
    console.log('timer2 invoke')

    setTimeout(function inner(){
        console.log('inner invoke')
    },1000)
},1000)

console.log('global end')

//global begin
//global end
//timer2 invoke
//inner invoke
//timer1 invoke
//延时器在消息队列中排队执行，打印顺序跟延时器时间有关系