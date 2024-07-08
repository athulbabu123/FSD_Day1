var a = 10; //set the value to 10
console.log(a);
{
    var a = 20; //set the value to 20
    console.log(a);
}

console.log(a); //here also the value of a is 20 since var is used above

let b = 10;
console.log(b);
{
    let b = 20; //value of b is changed to 20 only in this block
    console.log(b);
}
console.log(b); //here the output will be 10 since the change only apply inside the