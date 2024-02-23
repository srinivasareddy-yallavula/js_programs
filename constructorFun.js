function person(name,age,email,mobilenumber){
    this.name=name;
    this.age=age;
    this.email=email;
    this.mobilenumber=mobilenumber;
}
var personDetails=new person('kmss',12,'kmss@gmail.com',1234567890);
console.log(personDetails);


function* generateSequence(){
    yield 1;
    yield 2;
    yield 3;
}
var sequenceGenerator=generateSequence();
for(let value of sequenceGenerator){
    console.log(value);
}
var sequenceGenerator1=generateSequence();
console.log(sequenceGenerator1.next());