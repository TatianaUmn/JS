/* Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
*/

let num1 = Number(prompt("Введите значение для переменной num1:"));
let num2 = Number(prompt("Введите значение для переменной num2:"));

if (num1 <= 1 && num2 >= 3) {
    console.log("Условие выполняется");
  } else {
    console.log("Условие не выполняется");
  }

/* Задание 2
Перепишите код к тернарному оператору
    let test = true;
    if (test === true) {
        console.log('+++');
    } else {
        console.log('---');
    }    */

let test = true;
let result = test === true ? '+++' : '---';
console.log(result);

/*Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/

let day = prompt("Введите число от 1 до 31:");

if (day >= 1 && day <= 10) {
  console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
  console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
  console.log("Третья декада");
} else {
  console.log("Некорректное число");
}

/* Задание 4
Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
*/

let number = prompt("Введите число:");

let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let ones = number % 10;

console.log("Количество сотен:", hundreds);
console.log("Количество десятков:", tens);
console.log("Количество единиц:", ones);