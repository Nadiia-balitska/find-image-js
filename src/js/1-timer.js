import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector('.start-btn');
const inputEl = document.querySelector('[type="text"]');
const timerEl = document.querySelector('.timer');
const field = document.querySelector('.field');
let userSelectedDate;

let intervalId = null;
//!===================================================================
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
       return iziToast.show({
    message: "Please choose a date in the future" });
    }
 startBtn.removeAttribute('disabled');

 userSelectedDate = selectedDates[0];
        
  },
};

flatpickr('#datetime-picker', options);


 function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
    }
    
function  padStart(value) {
    return String(value).padStart(2, "0");
    }
//!===================================================================
startBtn.addEventListener('click', () => { 

    startBtn.setAttribute('disabled', '');
    inputEl.setAttribute('disabled', '');

  intervalId= setInterval(updateMarkup, 1000);
});
//!===================================================================
function updateMarkup() {

    const different = userSelectedDate - Date.now();
    console.log(different);
    if (different < 1000) {
        clearInterval(intervalId);
        iziToast.success({ message: 'congratulation' });
        inputEl.removeAttribute('disabled');
    }
    
    const { days, hours, minutes, seconds } = convertMs(different);
    timerEl.querySelector('[data-days]').textContent = padStart(days);
    timerEl.querySelector('[data-hours]').textContent = padStart(hours);
    timerEl.querySelector('[data-minutes]').textContent = padStart(minutes);
    timerEl.querySelector('[data-seconds]').textContent = padStart(seconds);
}




//!===================================================================





// inputEl.addEventListener('input', e => {
//     const currentDate = Date.now();
//     if (initTime <= currentDate) {
//         startBtn.classList.add('disabled');
//     startBtn.setAttribute('disabled', '');
        
//     iziToast.show({
//     message: "Please choose a date in the future"
// });
//     }

//     startBtn.removeAttribute('disabled');
//     // timer.start();
//     updateMarkup();
// })

//!===================================================================
// startBtn.addEventListener('click', () => {
//     startBtn.setAttribute('disabled', '');
    
//     timer.start();
// });

// inputEl.addEventListener('input', e => {
//     const currentDate = Date.now();
//     if (initTime <= currentDate) {
//         startBtn.classList.add('disabled');
//     startBtn.setAttribute('disabled', '');
        
//     iziToast.show({
//     message: "Please choose a date in the future"
// });
//     }

//     startBtn.removeAttribute('disabled');
//     // timer.start();
//     updateMarkup();
// })
//!===================================================================
// class Timer {
//     constructor(onTick, date) {
//         // this.isActive = false;
//         this.userSelectedDate = date;
//         this.tick = onTick;
//         this.intervalId = null;
//     }

//     start() {
//         if (this.isActive) return;
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const ms = this.userSelectedDate - Date.now();
//             const time = this.convertMs(ms);
//             this.updateMarkup(time);
//         }, 1000);

//         setTimeout(() => {
//             clearInterval(this.intervalId);
//         }, this.userSelectedDate = Date.now());
//     }

//  convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
//     }
    
//     padStart(value) {
//     return String(value).padStart(2, "0");
//     }
// }

// function tick({days, hours, mins, secs}) {
//     field.querySelector('[data-days]').textContent = padStart(days);
//     field.querySelector('[data-hours]').textContent = padStart(hours);
//     field.querySelector('[data-minutes]').textContent = padStart(mins);
//     field.querySelector('[data-seconds]').textContent = padStart(secs);

// }
     
// const date = new Date('2024-05-16 12:39');
// const timer = new Timer(tick, date);
//!===================================================================





