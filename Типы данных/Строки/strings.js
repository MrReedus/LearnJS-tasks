// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

function ucFirst(str) {
  if (!str) return str;
  let upChar = str[0].toUpperCase();
  let result = upChar + str.slice(1);
  return result;
}

//************************************************** */

// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  lowStr = str.toLowerCase();
  return lowStr.includes("viagra") || lowStr.includes("xxx");
}

//************************************************** */

//************************************************** */

// Усечение строки

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

const truncate = (str, maxlength) => (str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str);

//************************************************** */

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

const getNumValuе = (str) => +str.slice(1);
