 var names =["John","Mark","Jane"];
 var years= new Array(1990,1969,1949);

 //INITIALIZE NEW ARRAY 
 //The first element in arrays is the 0th index.
 console.log(names[0]);
 console.log(names[2]);
 // arrays are found with the keyword length length.
 console.log(names.length);

//mutate array data
 names[1]="Ben";
 //0: "John"
 //1: "Ben"
 //2: "Jane"
 //5: "Mary"
 //length: 6
 names[5]="Mary";
 console.log(names);

 //different data types
 var John = ["John" , "Smith", 1990,"Teacher", false];
 //to add the element to the last index in arrays
 John.push("blue");
 /*0: "John"
 1: "Smith"
 2: 1990
 3: "Teacher"
 4: false
 5: "blue" */

 console.log(John);
//to add the element to the first index in arrays
John.unshift("Mr.");

//aşagıdakileri arastır
 John.pop();
 John.pop();
 John.shift();
 console.log(John);


// //Returns -1 because there are no 23 elements ARAŞTIR
console.log(John.indexOf(23));

 var isDesigner = John.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer";
// John is NOT a designer ARASTIR
 console.log(isDesigner);
