function factorial(n){
    if(n===0||n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5))


function fabonacci(n){
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }else{
        return fabonacci(n-1)+fabonacci(n-2);
    }
}
console.log(fabonacci(9));