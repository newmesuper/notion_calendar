let display = document.querySelector('.display'),
    prevBtn = document.querySelector('.left'),
    nxtBtn = document.querySelector('.right'),
    days = document.querySelector('.days'),
    selected = document.querySelector('.selected');

let dateToday = new Date();
let year = dateToday.getFullYear();
let month = dateToday.getMonth();

function displayCalendar(){
    let year = dateToday.getFullYear();
    let month = dateToday.getMonth();
    const firstDay = new Date (year, month, 1);
    const firstDayIdx = firstDay.getDay();
    const lastDay = new Date (year, month +1, 0);
    const numberOfDays = lastDay.getDate();


    let formattedDate = dateToday.toLocaleString('en-US', {
        year : 'numeric',
        month : 'long',
        timeZone : 'Asia/Seoul'
    })
    display.innerHTML = formattedDate; // 이미 포맷팅한 문자열 사용


    
    for (let x = 1; x < firstDayIdx; x++) {
        let div = document.createElement ('div');
        div.innerHTML += '';
        days.appendChild(div);
    }

    for  (let i = 1; i < numberOfDays; i++) {
        let div = document.createElement ('div');
        let currentDate = new Date(year, month, i);
        div.dataset.date = currentDate.toDateString();
        div.innerText += i;
        days.appendChild(div);

    if(
        currentDate.getFullYear() === new Date().getFullYear() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getDate() === new Date().getDate()    
    ){
        div.classList.add('today')
    }
    }
}

displayCalendar()
displaySelected()

function displaySelected () {
    const daysEL = document.querySelectorAll('.days div');
    daysEL.forEach(day => {
        day.addEventListener('click', (e) => {
        const selectedDate = e.target.dataset.date;
        // selected.innerText = `선택일 : ${selectedDate}`;
        })
        
    });
}
    prevBtn.addEventListener('click', () =>{
        days.innerHTML = '';
        // selected.innerHTML ='';
        if (month<0){
            month = 11;
            year = year -1;
        }
        month = month -1;
        dateToday.setMonth(month);
        displayCalendar();
        displaySelected();
    });

     nxtBtn.addEventListener('click', () =>{
        days.innerHTML = '';
        // selected.innerHTML ='';
        if (month>11){
            month = 0;
            year = year +1;
        }
        month = month +1;
        dateToday.setMonth(month);
        displayCalendar();
        displaySelected();
    });
