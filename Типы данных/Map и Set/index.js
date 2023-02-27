//*1****************************************************** */
// Фильтрация уникальных элементов массива
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

const unique = (arr) => [...new Set(arr)];

//*2****************************************************** */

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let sorted = word.toLowerCase().split("").sort().join("");
    obj[sorted] = word;
  }
  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

//*3****************************************************** */

//   Перебираемые ключи

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

keys.push("more");
