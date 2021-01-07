function typeCalculator(bill)
{
    var percentage;
    if(bill<50)
    {
        percent=0.2;
    }
    else if(bill>=50 && bill<200)
    {
       percent=0.15;
    }
    else
     {
         percent=0.1;
     }
     return bill*percent;

 

}

console.log(typeCalculator(20));

 var bills=[124,49,268];
 var tips = [
     typeCalculator(bills[0]),
     typeCalculator(bills[1]),
     typeCalculator(bills[2]),
 ];

 var finalValue=[bills[0]+tips[0],
                bills[1]+tips[1],
                bills[2]+tips[2]];
 console.log(tips,finalValue);