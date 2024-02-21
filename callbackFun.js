function print(value){
    console.log(value);
}
function useCallBack(person){
    console.log(person);
}
var person = {name: "srinu"}
useCallBack(person.name)

var callback=print;
callback("kmss");





function fatchdata(callBack){
    setTimeout(function (){
        var data = {name: "kmss" , age:2}
        callBack(null,data);
    },1000);
}
function handleData(error,data)
{
    if(error){
        console.error("error:",error);
    }else{
        console.log("data:",data);
    }
}
fatchdata(handleData);






function greet(name){
    console.log("hello "+name+"!");
}
function processUserInput(CallBack){
    var name ="kmss";
    CallBack(name);
}
processUserInput(greet);







function step1(value,callback1){
    callback1(value+ 10,false);
}
function step2(value,callback1){
    callback1(value+ 10,false);
}
function step3(value,callback1){
    callback1(value+ 10,false);
}
step1(10,function(result1,error){
    if(!error){
        step2(result1,function(result2,error){
            if(!error){
                step3(result2,function(result3,error){
                    if(!error){
                        console.log("results:",result3)
                    }
                })
            }
        })
    }
});