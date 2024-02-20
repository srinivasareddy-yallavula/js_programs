var arr=[10,20,30,40];
//console.log(arr[0]);

for(var i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

console.log("--sum of all the elements in an arr--")
function sumOfArr(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
var arr=[2,3,4,5,6]
var result=sumOfArr(arr);
console.log(result);


console.log("--get even elements in an arr--")
function isEven(arr){
    let evenNumbersArray=[];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0){
            evenNumbersArray.push(arr[i]);
        }
    }
    return evenNumbersArray;
}
var arr=[2,3,4,5,7,7,8,9,9,0];
var result=isEven(arr);
console.log(result);

console.log("--duplicate values  in an arr--")
function duplpicate(arr){
    let duplicateArr=[];
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                y=arr[i];
                duplicateArr.push(y);
            }
        }
    }
    return duplicateArr;
}
    var arr=[1,3,5,4,2,2,4,1,9,11];
    var result=duplpicate(arr);
    console.log(result);

    console.log("--max element  in an arr--")

function maxElement(arr){
    let max=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
var arr=[1,3,5,4,2,2,4,1,9,11];
    var result=maxElement(arr);
    console.log(result);

    console.log("--count number of zeros in an arr--")
function numberOfZeros(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            count++;
        }
    }
    return count;
}
var arr=[2,3,4,5,0,6,0,1,3,6,8,0]
var result=numberOfZeros(arr);
console.log(result);