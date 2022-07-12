//      1
const smile = document.querySelector('#smile');
function changeImage() {
    let user = prompt('Как вас зовут?');
    if (user){
        alert(`Приветствую, ${user}`);
        smile.src = './images/smileEmoji.jpg';
    }
}
smile.addEventListener('click', changeImage)

//      2
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let showTime = document.querySelector('#showTime');

let sec = 0;
let interval;

function beginCounter() {
    function count(){
        sec++;
        showTime.innerHTML = sec;
    }
    interval = setInterval(count, 1000);
}

function stopCounter() {
    clearInterval(interval);
}


startBtn.addEventListener('click', beginCounter);
stopBtn.addEventListener('click', stopCounter);

