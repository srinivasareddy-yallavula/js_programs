var myModule=(function (){
    var num1=1;
    var num2=3;
    function myFun(){
        console.log(num1+num2);
    }
    return{
        num1:num1,
        num2:num2,
        myFun:myFun
    };
})();
myModule.myFun();