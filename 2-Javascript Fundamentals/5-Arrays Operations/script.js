const friends = ["Sema", "Mustafa", "Asel"];

//Add Elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("Deeplab");
console.log(friends);

//Remove Elements
friends.pop();
console.log(friends);
friends.unshift();
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf("Asel"));

console.log(friends.includes("Sema"));

if (friends.includes("Mustafa")) {
  console.log("Evet Doğrudur...");
}
