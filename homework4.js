/*  ������� 1
���������� � ������� ����� for ������� ��������� 11 ����� � �������:
0 � ��� ����
1 � �������� �����
2 � ������ �����
3 � �������� �����
�
10 � ������ �����
 */

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log(`${i} � ��� ����`);
    } else if (i % 2 === 0) {
      console.log(`${i} � ������ �����`);
    } else {
      console.log(`${i} � �������� �����`);
    }
}

/* ������� 2 
��� ������ [1, 2, 3, 4, 5, 6, 7]
�������� �� ����� ������� ��������� [1, 2, 3, 6, 7] */

let array = [1, 2, 3, 4, 5, 6, 7];

array.splice(3, 2);
console.log(array);

/* ������� 3
��������� Math.random() ��� ���������� ������������ ����� �� 0 �� 9, � ������� ������ ��������� �� 5 ����� ���������
1. ���������� ����� ��������� ����� �������
2. ����� ����������� �����
3. ����� ���� �� � ���� ������� ����� 3
 */

let arrayNew = [];
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    arrayNew.push(randomNum);
}
console.log("��������������� ������:", arrayNew);

let sum = 0;
for (let i = 0; i < arrayNew.length; i++) {
   sum += arrayNew[i];    
}
console.log("����� ��������� �������:", sum);

let minNumber = Math.min(...arrayNew);
console.log("����������� �����:", minNumber);

if (arrayNew.includes(3)) {
    console.log('����� 3 ���� � �������');
} else {
    console.log('����� 3 ��� � ������� ');
}

/* ������� 4
���������� ������� ����� � ������� (��������� ���� for), ��� �������� �� �������, ������ � ����� ����� ������ ���� 20 �����, � �� 5:
 */

for (let row = 1; row <= 20; row++) {
    let pattern = '';
  
    for (let column = 1; column <= row; column++) {
      pattern += '* ';
    }
  
    console.log(pattern);
}