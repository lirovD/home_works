//   1
function hello() {
    console.log('Привет,JavaScript!');
}

hello();



//   2
function showSquare(num) {
    let square = 0;
    square = num * num * num;
    console.log(square);
}

showSquare(78);



//  3
function getName(name = 'гость') {
    console.log(`Привет, ${name}`);
}

getName('Василий');