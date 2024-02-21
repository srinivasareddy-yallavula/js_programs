function creategreeting(greeting){
    return function(name){
        console.log(greeting+","+name+"!");
    };
}
var greetHello=creategreeting("hello");
greetHello("kmss");
var greets=creategreeting("hi");
greets("kmss")