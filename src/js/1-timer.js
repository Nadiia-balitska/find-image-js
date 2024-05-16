import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const inputEl = document.querySelector('[type="text"]');
const timerEl = document.querySelector('.timer');
const field = document.querySelector('.field');
let userSelectedDate;
//!===================================================================
startBtn.addEventListener('click', () => {
    timer.start();
    startBtn.setAttribute('disabled', '');
});

inputEl.addEventListener('input', e => {
    const currentDate = Date.now();
    if (Date.now() <= currentDate) {
        startBtn.disabled = true;
    startBtn.setAttribute('disabled', '');
        
    iziToast.show({
    message: "Please choose a date in the future"
});
    }
    startBtn.disabled = false;
    timer.start();
})
//!===================================================================
class Timer {
    constructor(onTick, date) {
        this.isActive = false;
        this.initTime = date;
        this.tick = onTick;
        this.intervalId = null;
    }

    start() {
        if (this.isActive) return;
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const ms = this.initTime - Date.now();
            const time = this.convertMs(ms);
            this.tick(time);
        }, 1000);

        setTimeout(() => {
            clearInterval(this.intervalId);
        }, this.initTime = Date.now());
    }

 convertMs(ms) {
  // Number of milliseconds per unit of time
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
    
    padStart(value) {
    return String(value).padStart(2, "0");
    }
}

function tick({days, hours, mins, secs}) {
    field.querySelector('[data-days]').textContent = padStart(days);
    field.querySelector('[data-hours]').textContent = padStart(hours);
    field.querySelector('[data-minutes]').textContent = padStart(mins);
    field.querySelector('[data-seconds]').textContent = padStart(secs);

}
     

//!===================================================================
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates;
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const date = new Date('2024-05-16 12:39');
const timer = new Timer(tick, date);



//!===================================================================
// function updateMarkup() {
//     const currentDate = Date.now();
//     const { hours, minutes, seconds } = convertMs(currentDate);
 
//     timerEl.querySelector('[data-hours]').textContent = padStart(hours);
//     timerEl.querySelector('[data-minutes]').textContent = padStart(minutes);
//     timerEl.querySelector('[data-seconds]').textContent = padStart(seconds);
// }

// setInterval(updateMarkup, 1000);


//!===================================================================

