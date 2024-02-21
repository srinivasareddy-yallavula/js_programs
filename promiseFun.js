const p1= Promise.resolve('like if you understood callback');
const p4= Promise.reject('rejected')
const p2=100;
const p3= new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'getting for more updates');
});
Promise.all([p1,p2,p3]).then((value)=>console.log(value));
Promise.race([p1,p2,p3]).then((value)=>console.log(value));
Promise.allSettled([p1,p2,p4,p3]).then((value)=>console.log(value));
Promise.any([p1,p4,p3,p2]).then((value)=>console.log(value));

// fetch('https://api.github.com/users').then((Response)=>Response.json()).then((result)=>console.log(result));