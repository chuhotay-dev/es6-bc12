/**
 * Khai báo biến
 * - Khai báo biến với let và const
 * - So sánh giữa let, const và var (hoisting)
 * + var: có hoisting, function scope
 * + let, const: không có hoisting, block scope
 * + const: bắt buộc phái gán value khi khai báo và không thể re-assign giá trị
 * - Nên dùng cái nào trong trường hợp nào?
 * + var: khi browser không hỗ trợ let, const (IE)
 * + let: khi cần re-assign giá trị
 * + const: khi không cần re-assign giá trị
 */

// var
// console.log(fullName); // work (undefined)
// fullName = 'Chu Ho Dong';
// console.log(fullName); // work (Chu Ho Dong)
// var fullName = 'Chu Ho Tay';
// var fullName = 'Chu Ho Nam';
// console.log(fullName);

// function showErrorWithVar() {
//     var isError = true;
//     var error = '';

//     if (isError) {
//         var error = 'Something went wrong!';
//         console.log(error);
//     }

//     console.log(error);
// }

// showErrorWithVar();

// let
// console.log(age); // toang (err: Cannot access 'age' before initialization)
// let age = 18;
// age = 19;
// console.log(age); // work (19)
// let age = 20; // toang (err: Identifier 'age' has already been declared)

// function showErrorWithLet() {
//     let isError = true;
//     let error = '';

//     if (isError) {
//         let error = 'Something went wrong!';
//         console.log(error);
//     }

//     console.log(error);
// }

// showErrorWithLet();

// const
// console.log(birthYear); // toang (không có hoisting)
// const birthYear; // toang (bắt buộc phải gán giá trị khi khái báo)
// const birthYear = 2000;
// birthYear = 2001; // toang (không thể gán lại giá trị mới khi khai báo bằng const)

// function showErrorWithConst() {
//     let isError = true;
//     const error = '';

//     if (isError) {
//         const error = 'Something went wrong!';
//         console.log(error);
//     }

//     console.log(error);
// }

// showErrorWithConst();

/**
 * Function
 * - Arrow function
 * - So sánh declaration .vs expression (normal function) .vs arrow function (cú pháp, con trỏ this)
 */

// Expression function
// const calcAgeNormal = function(birthYear) {
//     console.log(this);
//     return 2021 - birthYear;
// }

// calcAgeNormal();

// Arrow function
// - Không định nghĩa bối cảnh thưc thi (this) của riêng nó
// - Không quan tâm nó được thực thi trong ngữ cảnh nào, giá trị this của arrow func = this của outer function
// - Nếu nó không có outer function thì this = global object (window)
// - Không dùng arrow function để làm constructor func và làm method của object
// const calcAgeArrow = (birthYear) => {
//     console.log(this);
//     console.log(2021 - birthYear);
// }

// calcAgeArrow(2000);

// const calcAgeArrowShort = (birthYear) => 2021 - birthYear;

// const calcAgeOneParam = birthYear => 2021 - birthYear;

// const Student = () => {

// }

// var tay = new Student(); // (err: Student is not a constructor)

const student = {
  name: 'Tay',
  birthYear: 2000,

  calcAgeNormal: function () {
    console.log('calcAgeNormal', this);
    console.log(2021 - this.birthYear);

    //    const _this = this;

    //    const checkAgeNormal = function() {
    //        console.log('checkAgeNormal', this.birthYear);
    //        if (2021 - this.birthYear >= 18) {
    //            console.log('You are old enough');
    //        } else {
    //            console.log('You are not old enough');
    //        }
    //    }.bind(student)

        const checkAgeArrow = () => {
            console.log('checkAgeNormal', this.birthYear);
            if (2021 - this.birthYear >= 18) {
                console.log('You are old enough');
            } else {
                console.log('You are not old enough');
            }
            };

        checkAgeArrow();
  },

  // Không dùng arrow func làm phương thức của obj
  calcAgeArrow: () => {
    console.log(this);
    console.log(2021 - this.birthYear);
  },
};

// student.calcAgeNormal();
// student.calcAgeArrow();

/**
 * Default Parameter
 */
const withoutDefaultParam = (typeOfUser) => {
    if (typeOfUser === 'user') {
        console.log('Redirect to user page');
    } else {
        console.log('Redirect to admin page');
    }
}

// withoutDefaultParam('admin');

const withDefaultParam = (typeOfUser = 'user') => {
    if (typeOfUser === 'user') {
        console.log('Redirect to user page');
    } else {
        console.log('Redirect to admin page');
    }
}

// withDefaultParam();
// withDefaultParam('admin');

/**
 * Destructuring
 * - Destructure Array
 * - Destructure Object
 */

// Array
// Without Destructuring
// const students = ['Tay', 'Hoang', 'Huy'];
// const tay = students[0];
// const huy = students[2];
// console.log(tay, huy);

// With Destructuring
// const students = ['Tay', 'Hoang', 'Huy'];
// const [tay, hoang, huy] = students;
// const [tay, , huy] = students;
// console.log(tay, hoang, huy);

// Object
// Without Destructuring
// const _student = {
//     fullName: 'Chu Ho Tay',
//     age: 18,
//     class: 'BC12'
// }

// const fullName = _student.fullName;
// const age = _student['age'];
// console.log(fullName, age);

// With Destructuring
// const _student = {
//     fullName: 'Chu Ho Tay',
//     age: 18,
//     class: 'BC12'
// }

// const { fullName, class: className } = _student;

// console.log(fullName, className);

/**
 * Template String
 */

// const fullName = 'Huy Hoang';
// const str = 'My name is ' + fullName;
// const templateStr = `My name is ${fullName}`;


/**
 * Enhanced Object Literals (Shorthand syntax)
 */

// const age = 18;

// const person = {
//     fullName: 'Chu Ho Guom',
//     age, // age: age

//     calcAge() {
//         return 2021 - this.age;
//     }
// }

// console.log(person);

/**
 * Spread operator (...)
 * - Copy Array
 * - Copy Object
 * - Tham trị (các kiểu dữ liệu nguyên thuỷ), tham chiếu (array, object)?
 * - Merge array
 * - Thêm phần tử vào mảng
 * - Sử dụng array như danh sách các tham số của func
 */

// const person = ['Tay', 'Hoang', 'Huy'];
// console.log(person[0], person[1], person[2]);
// console.log(...person);
// console.log('Tay', 'Hoang', 'Huy');

// Copy array
// Tham chiếu (Array, Object)
// let nums1 = [1, 2, 3];
// let nums2 = nums1;

// nums2.push(4);

// console.log('nums2 ', nums2);
// console.log('nums1 ', nums1);

// let nums1 = [1, 2, 3];
// let nums2 = [0, ...nums1, 4, 5, 6];

// // nums2.push(4);
// console.log(nums1);
// console.log(nums2);

// Merge Array
// var nums1 = [1, 2, 3];
// var nums2 = [4, 5, 6];

// var nums3 = nums1.concat(nums2);
// console.log(nums3);

// var nums3 = [...nums1, ...nums2];
// console.log(nums3);

// Copy object
// var obj1 = {
//     a: 1,
//     b: 2,
// }

// var obj2 = {...obj1, c: 3, a: 2};
// // obj2.c = 3;
// console.log(obj1);
// console.log(obj2);

// const users = ['Tay', 'Hoang', 'Huy'];

// const showUsers = (user1, user2, user3) => console.log(user1, user2, user3);

// // showUsers(users[0], users[1], users[2]);
// showUsers(...users);

/**
 * Rest parameter
 */
// const calcSum = (num1, num2, num3) => console.log(num1 + num2 + num3);

// calcSum(1, 2, 3);

// const calcSum = (...nums) => {
//     let sum = 0;
//     nums.forEach(num => {
//        sum += num;
//     });
//     console.log(sum);
// }

// calcSum(1, 2, 3, 4, 5, 6, 7, 8, 9);

/**
 * Module
 * - import
 * - export
 */

// import { setLocalStorage, getLocalStorage } from './utils.js';

// setLocalStorage();
// getLocalStorage();

/**
 * Class: bản chất vẫn là 1 func
 */

// expression
// const Person = class {

// }

// declaration
// class Person {
//     constructor(_firstName, _lastName, _birthYear) {
//         this.firstName = _firstName;
//         this.lastName = _lastName;
//         this.birthYear = _birthYear;
//     }

//     calcAge() {
//         return 2021 - this.birthYear;
//     }
// }

// const tay = new Person('Chu', 'Tay', 2000);
// console.log(tay);

// console.log(tay.__proto__ === Person.prototype);


