import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(s){return s.map(t=>`
    <li class="gallery-item">
    <div class="gallery-list-container">
        <a class= "img-link" href="${t.largeImageURL}">
            <img class ="gallery-image" src="${t.webformatURL}" 
            alt="${t.tags}"/>
        </a>
        </div>
        <div class= "text-container-img">
        <p class = "text"> likes:
                  <span class="span-text">"${t.likes}"</span>  </p>      
        <p  class = "text"> views:
                  <span class="span-text">"${t.views}"</span>  </p>
        <p class = "text">  comments:
                 <span class="span-text">"${t.comments}"</span>  </p>
        <p class = "text">   downloads:
                 <span class="span-text">"${t.downloads}" </span></p>
        </div>
    </li>`).join("")}function m(s){const t="/api/",o="https://pixabay.com",n="44004812-c52c8438ab8e6871c63eadf8f",e=new URLSearchParams({key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}${t}?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const l="/goit-js-hw-11/assets/error-d5cf2823.svg",g=document.querySelector(".js-form"),p=document.querySelector(".js-gallery"),i=document.querySelector(".js-backdrop"),h=new u(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});g.addEventListener("submit",y);function y(s){s.preventDefault();const t=s.currentTarget.elements["search-query"].value.trim();if(t==="")return c.warning({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:l,message:"Enter all fields",backgroundColor:"red",position:"topRight"});p.innerHTML="",w(),m(t).then(o=>{if(o.hits.length===0)return c.error({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:l,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});p.innerHTML=d(o.hits),h.refresh()}).catch(console.log).finally(()=>{L(),s.target.reset()})}//!================================================================
const b={position:"absolute",lines:13,length:44,width:19,radius:46,scale:1.25,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#2bab81",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner"},f=new Spinner(b);function w(){f.spin(i),i.classList.remove("is-hidden")}function L(){f.stop(),i.classList.add("is-hidden")}//!================================================================
//# sourceMappingURL=commonHelpers.js.map
