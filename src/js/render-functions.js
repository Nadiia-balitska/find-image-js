export function createMarkup(arr) {
  return arr
    .map((image) => {
      return `
    <li class="gallery-item">
    <div class="gallery-list-container">
        <a class= "img-link" href="${image.largeImageURL}">
            <img src="${image.webformatURL}" 
            alt="${image.tags}"/>
        </a>
        </div>
        <div class= "text-img">
        <p> likes"${image.likes}" </p>      
        <p> views:"${image.views}"  </p>
        <p>  comments:"${image.comments}" </p>
        <p>   downloads:"${image.downloads}" </p>
        </div>
    </li>`;
    })
    .join("");
}

            
           
         