//回调函数

function foo(callback) {
   setTimeout(() => {
       callback()
   }, 3000); 
}

foo(function(){
    console.log('这就是个回调函数')
    console.log('调用者定义这个函数，执行者执行这个函数')
    console.log('其实就是调用者告诉执行者异步任务结束后应该做什么')
})

//回调地狱，只是示例，不能运行

$.get('ulr1',function(data1){
    $.get('ulr2',function(data2){
        $.get('ulr3',function(data3){
            $.get('ulr4',function(data4){
                $.get('ulr5',function(data5){
    
                })
            })
        })
    })
})

//无限回调，代码很不友好，看着累，不能扁平化