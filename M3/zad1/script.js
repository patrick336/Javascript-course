//Zadanie pierwsze
const name = "John";
const sourname = "Smith";

console.log("\nZadanie pierwsze.. \n");
console.log(`${name} ${sourname}`);

//Zadanie drugie
console.log("\nZadanie drugie.. \n");
const multiply = (a, b = 1) => { return a * b };

console.log(multiply(2,5));
console.log(multiply(2));

//Zadanie trzecie
console.log("\nZadanie trzecie.. \n");
const average = (...args) => {
  // let result = 0;
  // args.forEach(arg => result += arg);
  // return result / args.length;

  //Dla ambitnych...
  if(args.length === 0) return 'Not given any number to calculate';
  let result = args.reduce((total, num) => total + num, 0);
  return result / args.length;
};

console.log(average()); // NaN
console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

//Zadanie czwarte
console.log("\nZadanie czwarte.. \n");

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//Zadanie piąte
console.log("\nZadanie piąte.. \n");

const strangeArray = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = strangeArray;

console.log(firstName);
console.log(lastName);
