/* ������� 1
��� ������ numbers. ���������� � ������� ������� ��� �������� ������ ��� ������ 3. */

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
}

for (let key in numbers) {
    if (numbers[key] >= 3) {
      console.log(numbers[key]);
    }
  }

/* ������� 2
���������� �� �������, ������� ����� � ��������� post ������� ��������, � ������� �������� �����������, � �������.*/

const post = {
    author: "John", // ������� ���� �����
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
                rating: {
                likes: 10,
                dislikes: 2, // ������� ��� �����
            },
        },
        {
            userId: 5, // ������� ��� �����
            userName: "Jane",
            text: "lorem ipsum 2", // ������� ���� �����
                rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author); 
console.log(post.comments[0].rating.dislikes); // �����: 2
console.log(post.comments[1].userId); // �����: 5
console.log(post.comments[1].text); // �����: "lorem ipsum 2"

/* ������� 3
��� ������ products, ���������� ���� ������� �������� ��������� �� 15% ��������� ����� forEach. */

const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
];

products.forEach((product) => {
    product.price = product.price * 0.85; 
});
  
console.log(products);

/* ������� 4
1. ���������� ������� � ������� ������ ��������� � ������� ���� ���� ���� ���������� ��������� ����� filter. �������� ������ - ������ products.
2. ���������� ������������� ������ products ��������� ����� sort �� ����, ������� � ����� ���������, ���������� ����� ������� �����, ����� ���� ������� ��������������� ������ � �������.
 */

const productsNew = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg","2.jpg",],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg",],
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhotos = productsNew.filter((product) => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);

productsNew.sort((a, b) => a.price - b.price);
console.log(productsNew);


/*������� 5
���� 2 ������� 
��� ���������� ���������� 2 ���� �������, 
����� �������� ������� ������� ���� �������, � �������� ������� ������� � ����������. */


const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["�����������", "�������", "�����", "�������", "�������", "�������", "�����������"];

const merged = en.reduce((result, key, index) => {
    result[key] = ru[index];
    return result;
}, {});
  
console.log(merged);


