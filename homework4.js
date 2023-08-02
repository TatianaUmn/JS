/*  «адание 1
Ќеобходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 Ц это ноль
1 Ц нечетное число
2 Ц четное число
3 Ц нечетное число
Е
10 Ц четное число
 */

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log(`${i} Ц это ноль`);
    } else if (i % 2 === 0) {
      console.log(`${i} Ц четное число`);
    } else {
      console.log(`${i} Ц нечетное число`);
    }
}

/* «адание 2 
ƒан массив [1, 2, 3, 4, 5, 6, 7]
—делайте из этого массива следующий [1, 2, 3, 6, 7] */

let array = [1, 2, 3, 4, 5, 6, 7];

array.splice(3, 2);
console.log(array);

/* «адание 3
»спользу€ Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состо€щий из 5 таких элементов
1. –ассчитать сумму элементов этого массива
2. Ќайти минимальное число
3. Ќайти есть ли в этом массиве число 3
 */

let arrayNew = [];
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    arrayNew.push(randomNum);
}
console.log("—генерированный массив:", arrayNew);

let sum = 0;
for (let i = 0; i < arrayNew.length; i++) {
   sum += arrayNew[i];    
}
console.log("—умма элементов массива:", sum);

let minNumber = Math.min(...arrayNew);
console.log("ћинимальное число:", minNumber);

if (arrayNew.includes(3)) {
    console.log('„исло 3 есть в массиве');
} else {
    console.log('„исла 3 нет в массиве ');
}

/* задание 4
Ќеобходимо вывести горку в консоль (использу€ цикл for), как показано на рисунке, только у вашей горки должно быть 20 р€дов, а не 5:
 */

for (let row = 1; row <= 20; row++) {
    let pattern = '';
  
    for (let column = 1; column <= row; column++) {
      pattern += '* ';
    }
  
    console.log(pattern);
}