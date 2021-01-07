//Function Expression
const calcAge2 = function (birtYeah) {
  return 2037 - birtYeah;
};

//Arrow Function
const calcAge3 = (birtYeah) => 2037 - birtYeah;
const age3 = calcAge3(1990);
console.log(age3);

//Exercise

const yearsUntilRetirement = (birtYeah, firstName) => {
  const age = 2037 - birtYeah;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Zeki"));
console.log(yearsUntilRetirement(2020, "Asel"));
