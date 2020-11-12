// document - вся html страница
// document.querySelector("") - подключает к тегу по селпектору на нашей старнице возвращает тег в виде объекта
// console.log(document.querySelector(".s"));

const sec = document.querySelector(".s"); // секундная стрелка
const min = document.querySelector(".m"); // минутная стрелка
const hour = document.querySelector(".h"); // часова стрелка

const hourNum = document.querySelector(".hours"); // цифр. час
const minNum = document.querySelector('.minutes'); // цифр. мин

function clock() {
    let time = new Date; // возвращает текущее время
    // .getSecond() - секунды в данныый момент времени
    // .getMinutes() - минуты в данный момент времени
    // console.log(time.getSeconds());
    // console.log(time.getMinutes());

    let secondDegree = time.getSeconds() * 6;

    let minDegree = time.getMinutes() * 6;

    let hourDegree = time.getHours() * 30;

    sec.style.transform = `rotate(${secondDegree}deg)`;
    min.style.transform = `rotate(${minDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;

    hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    setTimeout(function () {
        clock();
    }, 1000);
}


clock();



// рекурсия - функиця, вызывающая сама себя



/* let i = 0;

function rec() {
    console.log(i++);
    if (i < 5) {
        rec()
    }
}
rec() */


const tabLinks = document.querySelectorAll('.tabsItem'); // к ссылкам

const tabContent = document.querySelectorAll('.tabsContentItem'); // к таб панелям

/* 
for (let i = 0; i < tabLinks.length; i++) {
    console.log(tabContent[i]);
    console.log(tabLinks[i]);
    tabLinks[i].addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);

        // htmlelem.classList.add("класс") добавит
        // htmlelem.classList.remove("класс") удалит
        // htmlelem.classList.contains("класс") проверяет наличие класса
    })
} 
*/

for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function (e) {
        e.preventDefault();  // отменяет действие по умолчанию
        for (let x = 0; x < tabLinks.length; x++) {
            tabLinks[x].classList.remove("active");
            tabContent[x].classList.remove("active");
        }

        tabs(this, tabContent[i]);
    })
}

function tabs(list, tabs) {
    list.classList.add("active");
    tabs.classList.add("active");
}




const secIndicator = document.querySelector('.tabsLink__span');

const secBtn = document.querySelector('.stopwatch__btn');

const hourTimer = document.querySelector('.stopwatch__hours');

const minTimer = document.querySelector('.stopwatch__minutes');

const secTimer = document.querySelector('.stopwatch__seconds');

let start = false;

secBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (secBtn.innerHTML == "start") {
        secBtn.innerHTML = "STOP";
        secIndicator.classList.add("active");
        start = true;
        secundomer()
    } else if (secBtn.innerHTML == "STOP") {
        start = false;
        secIndicator.classList.remove("active");
        secIndicator.classList.add("active_clear");
        secBtn.innerHTML = "CLEAR";
    } else if (secBtn.innerHTML == "CLEAR") {
        secIndicator.classList.remove("active_clear");
        secBtn.innerHTML = "start";
        secTimer.innerHTML = 0;
        minTimer.innerHTML = 0;
        hourTimer.innerHTML = 0;
    }

})



function secundomer() {
    if (start == true) {
        secTimer.innerHTML++
        if (secTimer.innerHTML == 60) {
            secTimer.innerHTML = 0;
            minTimer.innerHTML++;
        } else if (minTimer.innerHTML == 60) {
            minTimer.innerHTML = 0;
            hourTimer.innerHTML++;
        }

        setTimeout(function () {
            secundomer()
        }, 1000)
    }
}

