console.log("*/printing 1 to 10 number using for loop */");
let i=0;
 for(i=1;i<=10;i++){
    console.log(i);
 }
 console.log("*/printing  10 to 1 number using for loop */");

 for(i=10;i>=1;i--){
    console.log(i);

 }
 console.log("*/printing 1 to 10 number using for loop */");
 while(i<=10){
    console.log(i);
    i++;
 }
 console.log("*/printing alternate numbers  */");

 for(i=0;i<=10;i=i+2){
    console.log(i);
 }
 console.log("*/printing even numbers  */");

 for(i=0;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
    
 }
 console.log("*/printing odd numbers  */");

 for(i=0;i<=10;i++){
    if(i%2!=0){
        console.log(i);
    }
    
 }
 console.log("*/printing  numbers 1 to 100  is divisble by 7  */");

 for(i=0;i<=100;i++){
    if(i%7==0){
        console.log(i);
    }
 }
 console.log("*/printing fibancci series */");
 let n1=0;
 let n2=1;
 let n3=0;
 var count=10;
 console.log(n1,n2);
 for(let i=1;i<=count;i++)
 {
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
 }



