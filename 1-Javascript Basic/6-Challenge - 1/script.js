var massZeki = 80 ;
var heightZeki =1.75;

var massMustafa = 92;
var heightMustafa=1.50;

var BMIZeki = massZeki / (heightZeki*heightZeki);
var BMIMustafa=massMustafa / (heightMustafa*heightMustafa);
console.log(BMIZeki , BMIMustafa);

var mustafaHigherBMI =BMIMustafa> BMIZeki;
console.log(" Is Mustafa's BMI Higher then Zeki ? " +  mustafaHigherBMI );