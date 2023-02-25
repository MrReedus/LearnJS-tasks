// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  sum() {
    return this.int1 + this.int2;
  },

  mul() {
    return this.int1 * this.int2;
  },

  read() {
    this.int1 = +prompt("Введите первое число", 0);
    this.int2 = +prompt("Введите второе число", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//*****************************************************/

//*   Цепь вызовов

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();

//*****************************************************/
