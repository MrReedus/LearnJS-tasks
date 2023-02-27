//*1**************************** */

// Преобразуйте объект в JSON, а затем обратно в обычный объект
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35,
};

const json = JSON.stringify(user);
const newObj = JSON.parse(json);

//*2**************************** */
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
// let room = {
//     number: 23
//   };

//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };

//   // цикличные ссылки
//   room.occupiedBy = meetup;
//   meetup.self = meetup;

//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     /* ваш код */
//   }));

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    if (key !== "" && value === meetup) {
      return undefined;
    } else {
      return value;
    }
  })
);
