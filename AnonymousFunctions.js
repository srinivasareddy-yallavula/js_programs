console.log("/*callback function*/")
function anonymousFunction(callback){
    console.log("hello");
    callback();
}
function sayName(){
    console.log("kmss");
}
anonymousFunction(sayName);

console.log("/*anonymousFunction*/")
function processNumber(a){
    let number=[1,2,3,4,5,6,7,8,9]
    number.forEach(a);
}
processNumber(function(num){
    console.log(num*2);
});
console.log("/*Arrow function*/")
processNumber((numbers)=>{console.log(numbers);});
// processNumber((values)=>{console.log(values*2);});