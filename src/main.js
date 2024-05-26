import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions.js";
import { getPhotos } from "./js/pixabay-api.js"

import errorSvg from "./img/error.svg";

//!================================================================
const formEl = document.querySelector(".js-form");
const listEl = document.querySelector(".js-gallery");
const target = document.querySelector(".js-backdrop");
const loadMoreBtn = document.querySelector(".js-gallery-btn");


const lightbox = new SimpleLightbox('.js-gallery a', {
   captions: true,
    captionsData: 'alt', 
    captionDelay: 250  
});
//!================================================================

formEl.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onClick);
let page = 1;
let searchQuery = null;

async function onSubmit(e) {
  e.preventDefault();
  listEl.innerHTML = "";
  page = 1;

  showSpinner();
  searchQuery = e.currentTarget.elements["search-query"].value.trim();
  try {
    const response = await getPhotos(searchQuery, page);
    // iziToast.message(`we found ${response.data.totalHits} photos`);
    if (searchQuery === '') {
      return iziToast.warning({
        title: 'Error',
        titleColor: '#fff',
        messageColor: '#fff',
        iconUrl: errorSvg,
        message: "Enter all fields",
        backgroundColor: 'red',
        position: "topRight"
      });
        
    }
    if (response.data.hits.length === 0) {
      loadMoreBtn.classList.add("is-hidden");
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
    
    listEl.innerHTML = createMarkup(response.data.hits);
    response.data.totalHits < 15 ? loadMoreBtn.classList.add("is-hidden"): loadMoreBtn.classList.remove("is-hidden");
    
     lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    stopSpinner();
    e.target.reset();
  }
  }

async function onClick() {
  page += 1;
  showSpinner();
  try {
    const response = await getPhotos(searchQuery, page);
    
    listEl.insertAdjacentHTML('beforeend', createMarkup(response.data.hits));

    let elem = document.querySelector(".gallery-item");
    let rect = elem.getBoundingClientRect();
  //   window.scrollBy(2, {
  // top: rect,
  // behavior: "smooth",
  //   });
    // window.scrollBy(2, -rect);

    window.scrollBy(rect);

    if (response.data.totalHits === page) {
      loadMoreBtn.classList.add('is-hidden');
      return iziToast.message("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.log(error);
  } finally {
    stopSpinner();
  }
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
