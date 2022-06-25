//      1) Дан массив с числами: -5,  10,  5, 55,  -1, 22,  -4 , 36, -45:
//         Оставьте в нем только отрицательные числа.

const numbers1 = [-5,10,5,55,-1,22,-4,36,-45];
const filteredNumbers = numbers1.filter(item => item < 0);
console.log(filteredNumbers);



//      2) Дан массив с числами. Сделайте из него массив,
//         состоящий из квадратов этих чисел.

const numbers2 = [2,3,4,5,6,7,8,9,10];
const mappedNumbers = numbers2.map(item => item * 2);
console.log(mappedNumbers);