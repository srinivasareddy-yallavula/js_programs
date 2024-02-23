//learge number in array
var arr=[2,5,7,8,94,34,,5,6,7,8,88]
var largest=0;
for(let i=0;i<=largest;i++){
    if(arr[i]>largest)
    {
        largest=arr[i];
    }
}
console.log(largest);

//least number in array
var arr=[2,5,7,8,94,34,,5,6,7,8,88]
var min=arr[0];
for(let i=0;i<arr.length;i++){
    if(min>arr[i])
    {
        min=arr[i];
    }
}
console.log(min);

var arr=[2,5,7,8,94,34,,5,6,7,8,88]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            console.log(arr[i])
        }
    }
    
}
