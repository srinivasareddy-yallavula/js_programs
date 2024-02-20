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