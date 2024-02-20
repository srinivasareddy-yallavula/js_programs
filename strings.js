function countWords(str){
    return str.split(" ").length;
}
var result=countWords("hi welcome to kmss and i am the srinu");
console.log(result);

console.log("--compareStr--")
function compareStr(Str1,Str2){
    if(Str1.match(Str2)){
        return true;
    }else{
        return false;
    }
    }
    var result=compareStr("codingKrishna","srinu");
    console.log(result);
