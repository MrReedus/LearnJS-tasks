//*1****************************************************/

// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

const camelize = (str) =>
  str
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join("");

//*2****************************************************/

// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => arr.filter((item) => item >= a && item <= b);
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3, 1
console.log(arr); // 5, 3, 8, 1

//*3****************************************************/

let arr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

filterRangeInPlace(arr, 1, 4);

console.log(arr); // 3, 1

//*4****************************************************/

//  Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
// alert( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr); // 8, 5, 2, 1, -10

//*5****************************************************/

// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

const copySorted = (arr) => arr.slice().sort();

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS

//*6****************************************************/

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами)
// и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      operator = split[1],
      b = +split[2];

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[operator](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

//*7*************************************************************/

// Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

console.log(names); // Вася, Петя, Маша

//*8*************************************************************/

//   Трансформировать в объекты
//   У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//   Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
//   Например:

//   let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//   let petya = { name: "Петя", surname: "Иванов", id: 2 };
//   let masha = { name: "Маша", surname: "Петрова", id: 3 };
//   let users = [ vasya, petya, masha ];
//   let usersMapped = /* ... ваш код ... */

//
//   usersMapped = [
//     { fullName: "Вася Пупкин", id: 1 },
//     { fullName: "Петя Иванов", id: 2 },
//     { fullName: "Маша Петрова", id: 3 }
//   ]

//   alert( usersMapped[0].id ) // 1
//   alert( usersMapped[0].fullName ) // Вася Пупкин
//   Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user) => ({
  fullName: user.name + " " + user.surname,
  id: user.id,
}));

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

//*9*************************************************************/

// Отсортировать пользователей по возрасту

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

const sortByAge = (users) => users.sort((a, b) => a.age - b.age);

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

//*10*************************************************************/

// Перемешайте массив
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
// let arr = [1, 2, 3];
// shuffle(arr);
// arr = [3, 2, 1]
// shuffle(arr);
// arr = [2, 1, 3]
// shuffle(arr);
// arr = [3, 1, 2]
// ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//*11*************************************************************/

// Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  let commonAge = users.reduce((age, user) => age + user.age, 0);
  let middleAge = commonAge / users.length;
  return middleAge;
}

console.log(getAverageAge(arr)); // 28

//*12***********************************************/

// Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  let resultArray = [];
  for (let item of arr) {
    if (!resultArray.includes(item)) {
      resultArray.push(item);
    }
  }

  return resultArray;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

alert(unique(strings)); // кришна, харе, :-O

//*13***********************************************/
// Создайте объект с ключами из массива
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

const groupById = (array) =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
