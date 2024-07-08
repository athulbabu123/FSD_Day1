function add(a,b){
    let c = a+b;
    console.log(c);
}

// add(2,3);
// add(4,6);

let sum = (a,b) =>{  //another method of defining function
    let c = a+b;
    console.log(c);
}

// sum(2,3);

const fullname = (firstname,lastname)=>{ //we can use const since the process inside the function will not change
    //let name = firstname+" " +lastname;
    let name = `${firstname} ${lastname}` 
    console.log(name);
}

fullname("Athul","Babu");