/* ������� 1
�������� ������� ������� �������� ���������� ����� � ���, ���������� ������� � ������� ��������� 2^3 ������� + 3 ^ 3 �������
*/

function cubeSum(number) {
    let result = Math.pow(number, 3) + Math.pow(3, 3);
    console.log(result);
}
  
cubeSum(2);

/* ������� 2
������������ ������ � ���������� �����, ���� ��� �����, ���������� ������� ��� �������� ������ �������
������� �������, ������� ����������� 13% �� ������� ����� � ������� � ������� ����� "������ ���������� ����� �� ������� ������� ����� ��������"
*/

let num = Number(prompt('������� �����:'));

// let num = 12000;
if (Number.isNaN(num)){
    console.log('�������� ������ �� �����');
}else{calculateSalary(num)}


function calculateSalary(num){
    console.log(`������ ���������� ����� �� ������� ������� = ${num * 0.87} ���.`)
}


/* ������� 3
������������ � ���������� ������ 3 �����, ���������� ������� �������, ������� ���������� ������������ �������� ����� ���� �����
 */
  
let userInput1 = prompt("������� ������ �����:");
let userInput2 = prompt("������� ������ �����:");
let userInput3 = prompt("������� ������ �����:");

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
    console.log("�������� ������ �������");
} else {
    let maxNumber = findMaxNumber(number1, number2, number3);
    console.log("������������ ��������:", maxNumber);
}

  /* ������� 4
  ���������� ����������� ������ �������, ������ ������� ������ ��������� �� ��� ����� � ��������� ���� �� �������� (������ ������� ��������� ���� �� ���):
1. ��������
2. ��������
3. ���������
4. �������
���������� ������� ���, ����� ������� ������� �����, �������� ��������� console.log(sum(2, 6)); ������ ������� ����� 8 � ������� (sum - ������� �������� � ������ �������, ���� �������� ������� ����� ����������). ��������� ��������, ������� ���������� ������� �� �����, ������, �������� �������� �� ��������, ������� ������ ������� �� �������� ����� �������, ���� ������� 0, ���� ����� �����. �������� ������ ���������� ���������� �����, �������� �� NaN, Infinity ������ �� �����. */

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
      return "������� �� ���� ����������";
    }
}
  
console.log(sum(2, 6));
console.log(difference(4, 4));
console.log(multiply(3, 5));
console.log(divide(10, 0));
