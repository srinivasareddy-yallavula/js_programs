let a=10;
let b=20;
console.log(a+b);


let add=(c,d)=>c+d;
var r2=add(2,3);
console.log(r2)


for(let i=1;i<=10;i++){
    console.log(i);
}


let x=10;
while(x>0){
    x--;
    console.log(x);
}


function isEven(y){
    let  result=x%2!=0;
    return result;
}
var r1=isEven(7);
console.log(r1);


function sumofArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
var array=[2,3,4,5,6];
var sumarray=sumofArray(array);
console.log(sumarray);


function EvenArray(arr){
    let evenNumber=[];
    console.log(array);
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0){
            evenNumber.push(arr[i]);
        }
    }
    return evenNumber;
}
var array=[2,3,4,5,6,7,9,1,0];
var sumarray=EvenArray(array);
console.log(sumarray);


function OddArray(arr){
    let OddNumber=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0){
            OddNumber.push(arr[i]);
        }
    }
    return OddNumber;
}
var array=[2,3,4,5,6,7,9,1,0];
var sumarray=OddArray(array);
console.log(sumarray);


function duplicate(arr){
    let duplicatevalues=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            y=arr[i];
            duplicatevalues.push(y);
        }
    }
    }
    return duplicatevalues;
}
var array=[2,3,4,5,4,6,9,2,5,0,6,8,1,7,9,1,0];
var duplicatearray=duplicate(array);
console.log(duplicatearray);

let n=5;
let string="";
for(let i=0;i<=n;i++){
    for(let j=0;j<n-i;j++){
        string+="";
    }
    for(let k=0;k<i;k++){
        string+="*";
    }
    string+="\n";
}
console.log(string);