// while

// let count = 1;

// while (count <= 10) {
//   // console.log(`Value of count is ${count}`);
//   count += 2;
//   // count-- loop will run infinite times with this condition
// }

// let myArr = ["Apple", "Mangeo", "Orange", "Kandy", "Dates"];
// let val = 0;

// while (val < myArr.length) {
//   console.log(`Element of array is ${myArr[val]}`);
//   val++;
// }

// let score = 12;

// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10 );

const numbers = [1, 2, 3, 4, 5];
const moreNumbers = numbers.map((number) => number * 2); 
console.log(moreNumbers)

for (let i = 0; i < numbers.length; i++) {
  moreNumbers.push(numbers[i] * 2);
}

console.log(moreNumbers);


