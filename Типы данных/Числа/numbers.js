// Сумма пользовательских чисел
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");
let result = num1 + num2;
alert(`Сумма: ${result}`);

//****************************************************** */

// Ввод числового значения

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {}

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") {
    return null;
  } else {
    return +num;
  }
}

alert(`Число: ${readNumber()}`);

//****************************************************** */

// Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1);
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function randomNum(min, max) {
  return min + Math.random() * (max - min);
}

//****************************************************** */

// Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
