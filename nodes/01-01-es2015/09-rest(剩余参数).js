//剩余参数rest -------用...来表示
function foo(first,...args){
    console.log(args);    //[ 2, 3, 4, 5 ]
    console.log(arguments)  //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
}
foo(1,2,3,4,5)