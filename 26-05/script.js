/*const whois = prompt('Кто пришел?','Админ');

if (whois === 'Админ'){
    const password = prompt('Пароль');

    if( password ==='Черный Влателин'){
        alert('Добро пожаловать')
    } else if(password === null){
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
} else if(whois === null){
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
}*/

// 1
let point = 0;
let answer = '';
answer = prompt('Столица Кыргызстана?');
if(answer === 'Бишкек'){
    point++;
} else{
    alert('Неверно');
}

answer = prompt('Самая большая страна по площади?');
if (answer === 'Россия'){
    point++;
} else{
    alert('Неверно');
}

alert('Вы набрали: ' + point + ' балл(a)');