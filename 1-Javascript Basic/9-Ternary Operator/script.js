var firstName="John";
var age=25;

age >=18
? console.log(firstName + " can get a driver's license")
: console.log(firstName + " age is not enough to get a license");


var drink = age >= 18 ? "Cola " : " Ayran" ;
console.log(drink);

var job = "teacher";

switch(job)
{
    case "teacher":
    case "instructor":
        console.log(firstName + " teacher kids how to code. ");
        break;
    case "driver":
        console.log(firstName + " drives an uber  is Lisbon.");
        break;
    case "designer":
        console.log(firstName + " design beautiful websites ");
        break;
    default:
        console.log(firstName + " does something else");
        
}


age=25;
switch(true)
{
    case age<13:
        console.log(firstName + " is a boy");
        break;
    case (age>13) && (age<20):
        console.log(firstName + " is a teenager.");
        break;
    case (age<=20) && (age<30):
        console.log(firstName + " is a young man ");
        break;
    default:
        console.log(firstName + " is a adult.");
        break;
    
}