'use strict'


// let myName;

// console.log(myName);

// myName = 'Yulia';
// console.log(myName);

// const objectA = {
//     a: 10,
//     b: true,
// };

// const copyOfA = objectA;

// console.log(objectA);
// console.log(copyOfA);

// copyOfA.a = 20;

// console.log(copyOfA);

// copyOfA.c = 'abc';
//  console.log(copyOfA);


// function a() {
//     console.log('Hey there')
// };

// a();

// const myCity = {
//     city: 'New York',
//     // popular: true,
//     // coutry: 'USA',
// };

// console.log(myCity.city);

// myCity.city = 'Las Vegas';
// console.log(myCity);

// myCity['popular'] = true;
// console.log(myCity);

// myCity.country = 'USA';
// console.log(myCity);

// delete myCity.country;
// console.log(myCity);

// const countryPropertyName = 'country';
// console.log(countryPropertyName);

// myCity[countryPropertyName] = 'USA';
// console.log(myCity);


// const myCity = {
//     city: 'New York',
//     info: {
//         isPopular: true,
//         country: 'USA',
//     }
// };

// console.log(myCity.info.isPopular);

// delete myCity.info['isPopular'];
// console.log(myCity);

// const name = 'Yulia';
// const postsQty = 23;

// const userProfile = {
//     name,
//     postsQty,
//     hasSignedAgreement: false,
// };

// console.log(userProfile);

// const myCity = {
//     city: 'New York',
//     cityGreeting() {
//         console.log('Greeting!!')
//     }
// };

// myCity.cityGreeting();

// const a = 10;
// let b = a;
// b = 30;
// console.log(b);

// const person = {
//     name: 'Yulia',
//     age: 28,
// };

// // const person2 = Object.assign({}, person);
// // const person2 = {...person};
// const person2 = JSON.parse(JSON.stringify(person));

// person2.age = 26;
// person2.isAdult = true;


// console.log(person.age);
// console.log(person2.age);

// let a = 5;
// let b = 3;

// function sum(a, b) {
//     const c = a + b
//     console.log(c)
// };

// sum(a, b);

// a = 8;
// b = 12;

// sum(a, b);

// let c;
// function myFn99(a, b) {
//     a = a + 1
//     c = a + b
//     return c
// };

// myFn99(10, 3);
// console.log(c);

// console.log(myFn);
// console.dir(myFn);

// const personOne = {
//     name: 'Yulia',
//     age: 27,
//     Vladik: {
//         age: 28,
//     },
// };

// function increasePersonAge(person) {
//     const updatedPerson = {...person};

//     updatedPerson.Vladik.age += 1;
    
//     return updatedPerson;  
// }

// const updatedPerson = increasePersonAge(personOne);

// console.log('personeOne age:', personOne.age);
// console.log('updatedPerson age:', updatedPerson.age);

// console.log('personeOne Vladik age:', personOne.Vladik.age);
// console.log('updatedPerson Vladik age:', updatedPerson.Vladik.age);

// function printMyName() {
//   console.log('Yulia');
// }

// console.log('start');

// setTimeout(printMyName, 3000);

// let a;
// let b;

// function myFn() {
//     let b;
//     a = true;
//     b = 10;
//     console.log(b);
// }

// myFn();

// console.log(a);
// console.log(b);

// function myFn() {
//     a = true;
//     console.log(a);
// }

// myFn();

// console.log(a);

// const bigObj = {
//     name: undefined,
//     setName: function () {
//         this.name = 'Якась срака';
//     },
// };

// console.log(bigObj.name);
// bigObj.setName();
// console.log(bigObj.name);


// const res = -1 && (function() { return false && '5' || 5})() || 'hello';
// console.log(res);

// 5 && (false || true) || 'hello' && {} || -1 || 0 && false;

// const hello = 'Hello';
// const world = 'World';

// const greeting = `${hello} ${world}`;
// console.log(greeting);

// const name = 'Yulia';
// const city = 'Lviv';

// const infoAboutMe = `
// my name is ${name} and I live in ${city}`;
// console.log(infoAboutMe);

// const myFunction = function(a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// myFunction(5, 3);

// setTimeout(() => {
//     console.log('Відкладене повідомлення')
// }, 1000);

// function multByFactor(value, multiplier = 3) {
//     return value * multiplier;
// }


// const multByFactor = function (value, multiplier = 1) {
//     return value * multiplier;
// }

// console.log(multByFactor(10));

// const multByFactor = (value, multiplier = 1) => {
//     return value * multiplier;
// }

// console.log(multByFactor(10));


// const newPost = (post, addedAt = Date()) => {
//     return {
//         ...post,
//         addedAt,
//     }
// };

// const firstPost = {
//     id: 1,
//     author: 'Yulia',
// };

// console.log(newPost(firstPost));

// const fnWithError = () => {
//     throw new Error('Some error');
// }

// try {
//     fnWithError();  
// } catch (error) {
//     console.error(error);
//     console.log(error.message)
// }

// console.log('Continue');

// const myArray = [1, 2, 3]
// console.log(myArray);
 
// const myArray2 = new Array (1, 2, 3)
// console.log(myArray2);

// const myArray = [1, true, 'a']
// console.log(myArray);
// console.log(myArray[2]);
// console.log(myArray.length);

// const myArray = [1, 2, 3,];
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// const removedElement = myArray.pop();
// console.log(myArray);
// console.log(removedElement);

// myArray.unshift(true);
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// const removedElement = myArray.shift();
// console.log(myArray);
// console.log(removedElement);

// const res = myArray.forEach(el => console.log(el * 2));
// console.log(res);
// console.log(myArray);

// const newArray = myArray.map(el => el * 3);

// const newArray = myArray.map(function (el) {
//     return el * 3
// });

// console.log(newArray);
// console.log(myArray);

// const userProfile = {
//     name: 'Yulia',
//     commentsQty: 23,
//     hasSignedAgreement: false,
// }

// const { name, commentsQty } = userProfile;
// const { hasSignedAgreement } = userProfile;

// console.log(name);

// const fruits = ['Apple', 'Banana'];
// const [fruitOne, fruitTwo] = fruits

// console.log(fruitOne);

// const userInfo = ({ name, commentsQty }) => {
//     if (!commentsQty) {
//         return `User ${name} has no comments`;
//     }
//     return `User ${name} has ${commentsQty} comments`;
// }

// console.log(userInfo(userProfile));

// const age = 17;

// if (age >= 18) {
//     console.log('is adult');
// }  

// if (age >= 12 && age < 18) {
//     console.log('is teenager');
// } 

// if (age < 12 ){
//     console.log('is child');
// }

// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of the arguments is not a number';
//     }

//     if (a <= 0 || b <= 0) {
//         return 'Number are not positive';
//     }

//     return a + b;
// }

// console.log(sumPositiveNumbers(3, 8));


// const month = 2;

// switch (month) {
//     case 12:
//         console.log('December');
//         break
//     case 1:
//         console.log('January');
//         break
//     case 2:
//         console.log('Febuary');
//         break
//     default:
//         console.log('This is not a witner month');
// }


// const value = 11;

// value
//     ? console.log('True')
//     : console.log('false')

// let value = 11;
// console.log(value >= 0 ? value : -value);

// value = -5;
// const res = value >= 0 ? value : -value
// console.log(res);


// ЦИКЛИ


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const myArray = ['first', 'second', 'third'];

// myArray.forEach((element, index) => {
//     console.log(element,index)
// });


// let i = 4

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i)
//     i++
// } while (i < 5)


/*const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}

Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key]);
})

Object.values(myObject).forEach(value => {
    console.log(value)
})

// const myString = 'Hey';

// for (const letter of myString) {
//     console.log(letter);
// }*/


/**
 * // маємо такий масив: 
const arr = ['dupa', 1, false, '0', 100, -10, {}, '-1', 0]
// за допомогою методу масиву forEach, вивести в консоль елементи які є істиною (true)
 */

// const arr = ['dupa', 1, false, '0', 100, -10, {}, '-1', 0]

// arr.forEach((item) => {
//     if (item) {
//         console.log(`[${item}] as <${typeof item}>`);
//     }
// });


// маємо такий об'єкт:
// const obj = {
//   name: 'Yulia',
//   surname: 'Babiy',
//   age: 27,
// };
// // пройтись по полям объекта циклом і вивести в консоль всі значення які є типу "string"

// Object.keys(obj).forEach((key) => {
//     console.log(`[${key}] "${obj[key]}" <${typeof obj[key]}>`);
// });


// const arr = [-6, 8, 4, 15, -3, 10, -1, 5, 6];
// let sum = 0;
// let min = 0;
// let max = 0;
// let multi = 1;
// let positiveSum = 0;
// const negatives = [];

// arr.forEach(item => {
//     sum += item;  

//     if (min > item) {
//         min = item;
//     }

//     if (max < item) {
//         max = item;
//     }

//     if (item < 0) {
//         negatives.push(item);
//     }

//     if (item > 0) {
//         positiveSum += item;
//     }

//     multi *= item;
// });

// const negatives2 = arr.filter(item => item < 0);

// console.log('positiveSum:', positiveSum);
// console.log('min:', min);
// console.log('max:', max);
// console.log('sum:', sum);
// console.log('negatives:', negatives);
// console.log('negatives2:', negatives2);
// console.log('multi:', multi);



/**
 * КЛАСИ
//  * */
// class Comment {
//     constructor(text) {
//         this.text = text;
//         this.votesQty = 0;
//     }

//     upvote() {
//         this.votesQty += 1;
//     }

//     static mergeComments(first, second) {
//         return `${first} ${second}`;
//     }
// }

// Comment.mergeComments('First comment.', 'Second comment.');

// const firstComment = new Comment('First comment');
// const secondComment = new Comment('Second comment');
// const thirdComment = new Comment('Third comment');
// const myComment = new Comment ('Awesome comment')

// console.log(firstComment);
// console.log(secondComment);
// console.log(thirdComment);

// firstComment instanceof Comment;

// firstComment.upvote()
// console.log(firstComment.votesQty);

// secondComment.upvote();
// console.log(secondComment);

// thirdComment.upvote();
// console.log(thirdComment);



// console.log(firstComment.hasOwnProperty('text'));
// console.log(firstComment.hasOwnProperty('votesQty'));
// console.log(firstComment.hasOwnProperty('upvote'));
// console.log(firstComment.hasOwnProperty('hasOwnProperty'));



// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((el, acc) => acc += el, 0)
//     }    
// }    

// const myArray = new NumbersArray(2, 6, 4)

// console.log(myArray.sum())


/* !!!!!! розібратися з методом reduce */


// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => total + amount);

// console.log(sum);

// const average = euros.reduce((total, amount, index, array) =>
// {
//     total += amount;
//     if (index === array.length-1) {
//         return total/array.length;
//     } else {
//         return total;
//     }
// });

// console.log(average);




/*** ПРОМІСИ */

// const myPromise = new Promise((resolve, reject) => {
//     // виконання асинхронних дій
//     // в середині цієї функції потрібно в результаті 
//     // викликати одну з функцій resolve, or reject
// });

// myPromise
//     .then(value => {
//         // дії успішного проміса
//     });
//     .catch(error => {
//         // дії в результаті відхилення проміса
//     });

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//         return response.json();
//     })
//     .then(json => console.log(json))
//     .catch(error => console.error(error));

// getDataByURL = async (url) => {
//     const response = await fetch(url);
    
//     if (response.json) {
//         return await response.json();
//     } else {
//         console.error(response);
//     }
// }

// async function someFunc() {
//     const data = await getDataByURL('https://jsonplaceholder.typicode.com/todos')

    // displayData(data);
    // someOtherFunction();
// }

// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         return fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))
//     });
// }

// getData('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.massage))



// ASYNC/AWAIT


// const getData = async (url) => {
//     const res = await fetch (url);
//     const json = await res.json();
//     return json;
// }

// const url = ('https://jsonplaceholder.typicode.com/todos');

// try {
//     const data = await getData(url);
//     console.log(data);
// } catch (error) {
//     console.log(error.message);
// }


// const asyncFn = async () => {
//     return 'Success!'
// }

// asyncFn ()
//     // .then(value => console.log(value))


// const asyncFn1 = async () => {
//     throw new Error('There was an error!')
// }

// asyncFn1()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message))

// const asyncFn1 = async () => {
//     await <Promise>
// }

// asyncFn1()

// const timerPromise = () =>
//     new Promise((resolve, reject) => 
//         setTimeout(() => resolve(), 2000))

// const asyncFn = async () => {
//     console.log('Timer start')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('Time ended', endTime - startTime)
// }

// asyncFn()







// const obj = {
//     name: 'puk',
//     surname: 'srak',
//     age: 80,
// };



// function toString (o) {
//     let res = '';

//     Object.keys(o).forEach(key => {
//         res += key + ' ';
//     });

//     console.log(`"${res}"`);
// }

// toString(obj);

// const arr = [2, -5, 87, 93];
// let sum = 1;


// const mult = arr.reduce((index, item) => index * item);

// console.log(mult);


// arr.forEach(item => {
//     sum *= item;
// });

// console.log(sum);


const objArr = [
    {
        name: 'Vasia',
        age: 18
    },
    {
        name: 'srachyna',
        age: 28
    },
    {
        name: 'Oleh',
        age: 22
    }
];



function calcAgeSum (arr) {
    let sum = 0;

    arr.forEach(({ age }) => {
        sum += age;
    });

    console.log('Total age:', sum);
}

calcAgeSum(objArr);



function calcSymbolName (arr) {
    let sum = 0;

    arr.forEach(obj => {
        if (obj.name.length > 4) {
            sum += obj.name.length;
        }
    })

    console.log('Total name length:', sum);
}

calcSymbolName(objArr);

