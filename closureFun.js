function Createcount(){
    let count=0;
    return function(){
        return ++count;
    }
}
var counter=Createcount();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());





function outer(){
    var value="hello";
    console.log("outer function executed");
    function inner(){
        console.log(value);
    }
    return inner;
}
var fun=outer();
console.log(fun())
