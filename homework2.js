/* ������� 1
������� ���������� num1, num2 ������� ������������ ������ � ����������
���������, ��� ���������� num1 ����� ��� ������ 1, � ���������� num2 ������ ��� ����� 3.
*/

let num1 = Number(prompt("������� �������� ��� ���������� num1:"));
let num2 = Number(prompt("������� �������� ��� ���������� num2:"));

if (num1 <= 1 && num2 >= 3) {
    console.log("������� �����������");
  } else {
    console.log("������� �� �����������");
  }

/* ������� 2
���������� ��� � ���������� ���������
    let test = true;
    if (test === true) {
        console.log('+++');
    } else {
        console.log('---');
    }    */

let test = true;
let result = test === true ? '+++' : '---';
console.log(result);

/*������� 3
� ���������� day ����� �����-�� ����� �� ��������� �� 1 �� 31. 
���������� � ����� ������ ������ �������� ��� ����� (� ������, ������ ��� ������).*/

let day = prompt("������� ����� �� 1 �� 31:");

if (day >= 1 && day <= 10) {
  console.log("������ ������");
} else if (day >= 11 && day <= 20) {
  console.log("������ ������");
} else if (day >= 21 && day <= 31) {
  console.log("������ ������");
} else {
  console.log("������������ �����");
}

/* ������� 4
���������� �� ������������ �������� �����.
���������� ������� ������� �����, � ������: ���������� �����, �������� � ������.
*/

let number = prompt("������� �����:");

let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let ones = number % 10;

console.log("���������� �����:", hundreds);
console.log("���������� ��������:", tens);
console.log("���������� ������:", ones);