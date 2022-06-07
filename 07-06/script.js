//  1
const arr1 = [5, 9, 3, -7, -11, 8, 2, 8, -5, 54, 12];
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] > 0 && arr1[i] < 10) {

        console.log(arr1[i]);
    }
}



//  2
const arr2 = [1, 2, 5, 6, 88, 5];
let result = 0;
for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
}

console.log(result);



//  3
const arr3 = [5, 9, 2, 8, 4, 10, 12, 16, 34, 18];
let sumSquare = 0;
for(let i = 0; i < arr3.length;i++){
    sumSquare += arr3[i] * arr3[i]
}

console.log(sumSquare);