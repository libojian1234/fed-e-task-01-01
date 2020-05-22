# fed-e-task-01-01
第一个阶段笔记和作业
##### 1.请说出下列最终的执行结果，并解释为什么？
```javascript
var a = [];
for (var i=0;i<10;i++) {
	a[i] = function(){
		console.log(i)
	}
}
a[6]()
```
结果：输出10，因为var 定义的i是全局变量，调用a[6]时,for循环已经循环完了，i=10，
执行a[6],打印的就是i，此时i就是10。

##### 2.请说出下列最终的执行结果，并解释为什么？
```javascript
var tmp = 123;
if(true){
	console.log(tmp);
	let tmp;
}

```
结果：会报错，因为if中用let定义了块级变量tmp，它就不能读取全局定义的tmp，但是在定义之前打印tmp，变量不会提升，就会报错。

##### 3.结合ES6新语法，用最简单的方法找出数组中的最小值？
```javascript
var arr = [12,34,32,89,4]
console.log(Math.min(...arr))
```

##### 4.请详细说明var、let、const三种声明变量的方式之间的具体差别？
答：
1. var存在变量提升，可以先引用再声明，不会报错，只会是undefined，let和const必须先声明后引用，否则会报错
2. const一般定义常量，定义之后不能修改，但是定义了对象后，可更改对象中的属性或者方法
3. 尽量多用const

##### 5.请说出下列代码最终的执行结果，并解释为什么？
```javascript
var a = 10;
var obj = {
	a : 20,
	fn(){
		setTimeout(()=>{
			console.log(this.a)
		})
	}
}
obj.fn()
```
结果：输出20，箭头函数内是没有this指向的，它里面的this是继承于上一级的上下文，而这个setTimeout中的回调函数内是没有this指向的，这个this就来自于上一级fn的上下文obj环境，所以this.a就是20

##### 6.简述Symbol的用途？
答：
1. 定义两个不一样的常量
2. 为对象添加用不重复的键
3. 在不同的js中实现私有成员

##### 7.说说什么是浅拷贝，什么是深拷贝？
答：深拷贝的内存地址不同，b复制了a，它们其中一个值改变了，另一个不会跟着改变；浅拷贝的内存地址相同，2个值会同时改变。

##### 8.谈谈你是如何理解JS异步编程的，Event Loop是做什么的，什么是宏任务，什么是微任务？
答：JS是一个单线程应用，JS自上而下的执行，如果有代码阻塞，就会较长时间的等待，体验不好，就需要异步编程，不妨碍主进程的执行。
Event Loop：当主进程事件执行时，同步事件先执行，异步事件会放入消息队列中，当同步事件执行完毕后，就执行消息队列中的事件，这个过程不断循环，就叫事件循环（Event Loop）
宏任务:可以理解是每次执行栈执行的代码就是一个宏任务， 包括setTimeout、setInterval、setImmediate、 script中整体的代码、 I/O操作、 UI渲染等
微任务:可以理解是在当前 task 执行结束后立即执行的任务 包括Promise，process.nextTick，MutationObserver监听DOM的变化

##### 9.将下面异步代码使用Promise改进?
```javascript
setTimeout(function(){
	var a = 'hello'
	setTimeout(function(){
		var b = 'lagou'
		setTimeout(function(){
			var c = 'I love u'
			console.log(a+b+c)
		},10)
	},10)
},10)

function fn(str) {
    return new Promise(function(resolve,reject) {
		setTimeout(function(){
			resolve(str);
		},10)
    })
}
fn('hello').then(function(value){
	return fn(value+'lagou')
}).then(function(value){
	console.log(value+'I love u')
})
```

##### 10.请简述TypeScript和JavaScript的关系？
答：Typescript是JavaScript的超集，它规范了JavaScript的写法，使JavaScript开发变得容易和快捷，在TypeScript中可运行JavaScript的所有代码，TypeScript 加入一些新的概念

##### 11.请你谈谈TypeScript的优缺点？
答：
优点：TypeScript 增加了代码的可读性和可维护性，大型项目中会有更好的协作，不会导致冲突，有更强的生产力，减少其维护成本
缺点：有一定的学习成本，集成到构建流程需要一些工作量，可能和一些库结合的不是很完美，小型项目短期可能会增加一些开发成本
