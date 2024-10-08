// const user = new Object();

const user = {};

user.id = "123xyz";
user.email = "user@gmail.com";
user.isLoggedIn = false;
user.name = "David";

// console.log(user);

const regularUser = {
  email: "user@outlook.com",
  fullname: {
    userfullname: {
      firstName: "Asif",
      lastName: "Khan",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstName); //? if something exists

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj = { obj1, obj2 };

// const obj = Object.assign({},obj1,obj2,obj3) //{} optional param, target object. this method returns target object

const obj = { ...obj1, ...obj2, ...obj3 }; //recommended
// console.log(obj);

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "a@gmail.com",
  },
];

// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("name"));

const obje = {
  name: "Asif",
  greet: function () {
    setTimeout(() => {
      console.log(this.name); // Arrow function ka `this`, `greet` method ka `this` hi hota hai
    }, 1000);
  },
};
// obje.greet(); // Yeh "Asif" show karega

const course = {
  courseName: "JavaScript",
  coursePrice: 1199,
  courseInstructr: "Asif",
};

// course.courseInstructr

const { courseInstructr: instructor, courseName, coursePrice: price } = course; //de-structure

console.log(instructor, courseName, price);


// {
//  "courseName":"JavaScript",
//  "coursePrice":"free",
//  "instructor":"Asif"

// } This is JSON

// [
//   {},
//   {},
//   {}
// ]


