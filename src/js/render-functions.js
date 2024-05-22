export function createMarkup(arr) {
  return arr
    .map((image) => {
      return `
    <li class="gallery-item">
        <a href="${image.urls.largeImageURL}">
            <img src="${image.urls.webformatURL}" 
            alt="${image.tags}"  title=""/>
        </a>
    </li>`;
    })
    .join("");
}

            // likes="${image.likes}" 
            // views ="${image.views}" 
            // comments="${image.comments}" 
            // downloads="${image.downloads}" 