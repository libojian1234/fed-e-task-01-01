// 带标签的模板字符串
//模板字符串的标签就是一个特殊的函数，使用这个标签就是调用这个函数
const name = 'lbj';
const gender = false;
function  fn(str,name,gender) {
    console.log(str)      //[ 'hey, ', ' is a ', '' ]  
                          //str为${} 分割后值的数组
    console.log(name,gender)  //'lbj' false
    const sex = gender ? 'man' : 'women';
    return str[0]+name+str[1]+sex+str[2];
}
const result = fn`hey, ${name} is a ${gender}`;
console.log(result)   //hey, lbj is a women