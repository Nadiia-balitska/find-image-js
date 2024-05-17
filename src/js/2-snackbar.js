import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import errorSvg from '../img/error.svg';
import successSvg from '../img/success.svg';

const inputEl = document.querySelector('[type="number"]');
const inputSolved = document.querySelector('[value="fulfilled]');
const inputRejected = document.querySelector('[value="rejected"]');
const btnEl = document.querySelector('[type="submit"]')
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const newForm = new FormData(form);
    const userDate = {
        delay: newForm.get('delay'),
        state: newForm.get('state'),
    };

    // const state = e.currentTarget.elements.state.trim();
    // const state = e.currentTarget.elements.state.trim();

    createPromise(userDate.delay, userDate.state)
        .then(() => {
            setTimeout(() => {
                return iziToast.success({
                    class: 'msg-scs',
                    title: 'OK',
                    titleColor: '#fff',
                    iconUrl: successSvg,
                    messageColor: '#fff',
                    message: `Fulfilled promise in ${userDate.delay}ms`,
                    backgroundColor: '#59a10d;',
                    timeout: 5000,
                    position: 'topRight' 
                    });
            }, userDate.delay);
            })
        .catch(() => {
            setTimeout(() => {
                return iziToast.error({
                    class: 'msg-err',
                    title: 'Error',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    iconUrl: errorSvg,
                    message: `Rejected promise in ${userDate.delay}ms`,
                    backgroundColor: 'red',
                    timeout: 5000,
                    position: 'topRight' 
                    })
            }, userDate.delay);
         })
})

function createPromise(delay, state) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') resolve()
            else reject()
        })
    }, delay)
    return promise;
}
