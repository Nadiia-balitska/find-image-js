import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions.js";
import { getPhotos } from "./js/pixabay-api.js";

import errorSvg from "./img/error.svg";


const formEl = document.querySelector(".js-form");
const listEl = document.querySelector(".js-gallery");
const target = document.querySelector(".js-backdrop");


const lightbox = new SimpleLightbox('.js-gallery a', {
   captions: true,
    captionsData: 'alt', 
    captionDelay: 250  
});


formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    listEl.innerHTML = "";

  showSpinner();
  
  const searchQuery = e.currentTarget.elements["search-query"].value.trim();

 getPhotos(searchQuery)
        .then((res) => {
            if (res.hits.length === 0) {
                return iziToast.error({
                    title: 'Error',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    iconUrl: errorSvg,
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    backgroundColor: 'red',
                    position: "topRight"
                });
            }

listEl.innerHTML = createMarkup(res.hits);

 lightbox.refresh();


        })
        .catch(console.log)
        .finally(() => {
            stopSpinner();
            e.target.reset();
        });
}


//!================================================================
const opts = {
  position: "absolute", // Element positioning
  lines: 13, // The number of lines to draw
  length: 44, // The length of each line
  width: 19, // The line thickness
  radius: 46, // The radius of the inner circle
  scale: 1.25, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: "spinner-line-fade-quick", // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: "#2bab81", // CSS color or array of colors
  fadeColor: "transparent", // CSS color or array of colors
  top: "50%", // Top position relative to parent
  left: "50%", // Left position relative to parent
  shadow: "0 0 1px transparent", // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: "spinner", // The CSS class to assign to the spinner
};
const spinner = new Spinner(opts);

function showSpinner() {
  spinner.spin(target);
  target.classList.remove("is-hidden");
}

function stopSpinner() {
  spinner.stop();
  target.classList.add("is-hidden");
}
//!================================================================
