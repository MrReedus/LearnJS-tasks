//*1************************************************ */

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (salaries) => {
  let result = 0;
  for (let value of Object.values(salaries)) {
    result += value;
  }
  return result;
};

alert(sumSalaries(salaries)); // 650

//*2************************************************ */

// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

let user = {
  name: "John",
  age: 30,
};

const count = (obj) => Object.keys(obj).length;

alert(count(user)); // 2
