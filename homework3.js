/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

function cubeSum(number) {
    let result = Math.pow(number, 3) + Math.pow(3, 3);
    console.log(result);
}
  
cubeSum(2);

/* Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

let num = Number(prompt('Введите число:'));

// let num = 12000;
if (Number.isNaN(num)){
    console.log('Значение задано не верно');
}else{calculateSalary(num)}


function calculateSalary(num){
    console.log(`Размер заработной платы за вычетом налогов = ${num * 0.87} руб.`)
}


/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
 */
  
let userInput1 = prompt("Введите первое число:");
let userInput2 = prompt("Введите второе число:");
let userInput3 = prompt("Введите третье число:");

  /* let userInput1 = 123;
  let userInput2 = 1;
  let userInput3 = 25; */
  
let number1 = parseFloat(userInput1);
let number2 = parseFloat(userInput2);
let number3 = parseFloat(userInput3);

function findMaxNumber(num1, num2, num3) {
    let maxNumber = Math.max(num1, num2, num3);
    return maxNumber;
}
  
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    console.log("Значения заданы неверно");
} else {
    let maxNumber = findMaxNumber(number1, number2, number3);
    console.log("Максимальное значение:", maxNumber);
}

  /* Задание 4
  Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

function sum(a, b) {
    return a + b;
}
  
function difference(a, b) {
    if (a > b) {
      return a - b;
    } else if (a < b) {
      return b - a;
    } else {
      return 0;
    }
}
  
function multiply(a, b) {
    return a * b;
}
  
function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Деление на ноль невозможно";
    }
}
  
console.log(sum(2, 6));
console.log(difference(4, 4));
console.log(multiply(3, 5));
console.log(divide(10, 0));
