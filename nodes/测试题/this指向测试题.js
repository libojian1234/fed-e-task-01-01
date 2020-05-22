var num = 20;
const obj = {
    num : 10,
    func:(num)=>{
        this.num += 5;         
        console.log(this.num); 
        //浏览器环境下this指向全局对象，全局对象是window，this.num = 20，加5就是25; 
        //node环境下this指向全局对象，全局对象是{},this.num是undefined,undefined加5就是NaN
        num += 5;
        console.log(num);
        //var虽然有变量提升，但是只是声明，在它声明之前，形参已经声明过num，var声明就不会生效，num为40，加5就是45     
        var num = 30;
        return function(){
            this.num += 4;
            console.log(this.num);
            //浏览器环境下，obj.func执行后的返回值是个匿名函数，这个函数内的this跟它的执行体有关，这个函数的执行体依然是window，所以this.num是window下的num25，加4就是29; 
            //node环境下this指向全局对象，全局对象是{},this.num是undefined,undefined加4就是NaN 
            num += 10;
            console.log(num);
            //obj.func的返回值匿名函数内没有声明变量num，所以项它的父级作用域查找，此时父级作用域下的num被赋值为30，所以打印出来是40
        }
    }
}
obj.func(40)();
//浏览器环境: 25 45 29 40
//node环境: NaN 45 NaN 40