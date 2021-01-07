var john=
{
    firstName : "John",
    lastName : "Smith",
    birthYear:1990,
    family : ["Jane", "Mark" , "Bob" , "Emily"],
    job:"teacher",
    isMarried:false,
}

console.log(john.firstName);
console.log(john.family[2]);

var x = "birthYear ";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);


var jane=new Object ();
jane.name="Jane";
jane.birthYear=1958;
jane["lastname"]="Smith";
console.log(jane)