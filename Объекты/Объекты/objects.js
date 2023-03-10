//* Привет, object
//* важность: 5
// *Напишите код, выполнив задание из каждого пункта отдельной строкой:

//* Создайте пустой объект user.
//* Добавьте свойство name со значением John.
//* Добавьте свойство surname со значением Smith.
//* Измените значение свойства name на Pete.
//* Удалите свойство name из объекта.

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

//*****************************************************/

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

//*****************************************************/

//* У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let result = 0;
for (let key in salaries) {
  result += salaries[key];
}

//*****************************************************/

//* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    typeof obj[key] === "number" ? (obj[key] *= 2) : obj[key];
  }
}
