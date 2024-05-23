export function createMarkup(arr) {
  return arr
    .map((image) => {
      return `
    <li class="gallery-item">
    <div class="gallery-list-container">
        <a class= "img-link" href="${image.largeImageURL}">
            <img class ="gallery-image" src="${image.webformatURL}" 
            alt="${image.tags}"/>
        </a>
        </div>
        <div class= "text-container-img">
        <p class = "text"> likes:
                  <span class="span-text">"${image.likes}"</span>  </p>      
        <p  class = "text"> views:
                  <span class="span-text">"${image.views}"</span>  </p>
        <p class = "text">  comments:
                 <span class="span-text">"${image.comments}"</span>  </p>
        <p class = "text">   downloads:
                 <span class="span-text">"${image.downloads}" </span></p>
        </div>
    </li>`;
    })
    .join("");
}

            
           
         