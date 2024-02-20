// function add(x,y){
//     return x + y;
// }

// var add = function (x, y){
//     return x  + y;
// }


var add = (x, y) => x + y;

var result = add(5,6);
console.log(result);

console.log("--funxtion to add two numbers--")
function add(x,y){
    var r1=x+y;
    return r1;   
}
var result=add(5,4);
console.log(result);

console.log("--given number is even or odd--")
function isEven(x){
var result= x%2==0;
return result;
}
var result=isEven(4);
console.log(result);

console.log("--multiple with 2--")
function multiplyWith2(arr){
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i]*2;
    }
    return arr;
}
var arr = [2,3,4,5,6];
var result=multiplyWith2(arr);
console.log(result);

console.log("--max element between two numbers--")
function max(x,y){
    let max=x;
    if(x<y){
        max=y;
    }
    return max;
}
var result=max(3,4);
console.log(result);

console.log("--printing 1 to 10 numbers without using loop--")
function withOutLoop(i)
{
  
    if(i<=10){
        console.log(i);
        withOutLoop(i+1);
    }
}
withOutLoop(1);



