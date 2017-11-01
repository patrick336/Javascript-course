"use strict";

//Zadanie pierwsze
var name = "John";
var sourname = "Smith";

console.log("\nZadanie pierwsze.. \n");
console.log(name + " " + sourname);

//Zadanie drugie
console.log("\nZadanie drugie.. \n");
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(2));

//Zadanie trzecie
console.log("\nZadanie trzecie.. \n");
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // let result = 0;
  // args.forEach(arg => result += arg);
  // return result / args.length;

  //Dla ambitnych...
  if (args.length === 0) return 'Not given any number to calculate';
  var result = args.reduce(function (total, num) {
    return total + num;
  }, 0);
  return result / args.length;
};

console.log(average()); // NaN
console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

//Zadanie czwarte
console.log("\nZadanie czwarte.. \n");

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//Zadanie piąte
console.log("\nZadanie piąte.. \n");

var strangeArray = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = strangeArray[2],
    lastName = strangeArray[4];


console.log(firstName);
console.log(lastName);
