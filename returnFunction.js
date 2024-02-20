function greetingWishes(greetings)
{
    return function(name){
        console.log(`${greetings},${name}`)
    };

}
var sayHello=greetingWishes("hello");
var sayWelcome=greetingWishes("welcome");

sayHello("kmss");
sayWelcome("kmss");

console.log("--return function from another function--")
var isEven=function(x,y){
    let sum=x+y;
    console.log(sum);
}
function f1(){
    console.log("inside f1 function");
    return isEven;
}
function f2(){
    console.log("inside f2 function");
    return function(x,y){
        let sum=x+y;
        console.log(sum);
    };
}
var evenfun=f1();
var r1= evenfun(5,10);
console.log(r1);
var evenfunc=f2();
var r2= evenfunc(10,5);
console.log(r2);