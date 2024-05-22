import{S as u,i as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(o){return o.map(t=>`
    <li class="gallery-item">
    <div class="gallery-list-container">
        <a class= "img-link" href="${t.largeImageURL}">
            <img src="${t.webformatURL}" 
            alt="${t.tags}"/>
        </a>
        </div>
        <div class= "text-img">
        <p> likes"${t.likes}" </p>      
        <p> views:"${t.views}"  </p>
        <p>  comments:"${t.comments}" </p>
        <p>   downloads:"${t.downloads}" </p>
        </div>
    </li>`).join("")}function f(o){const t="/api/",s="https://pixabay.com",n="44004812-c52c8438ab8e6871c63eadf8f",e=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}${t}?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const m="/goit-js-hw-11/assets/error-d5cf2823.svg",h=document.querySelector(".js-form"),c=document.querySelector(".js-gallery"),a=document.querySelector(".js-backdrop"),g=new u(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});h.addEventListener("submit",y);function y(o){o.preventDefault(),c.innerHTML="",w();const t=o.currentTarget.elements["search-query"].value.trim();f(t).then(s=>{if(s.hits.length===0)return p.error({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:m,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});c.innerHTML=d(s.hits),g.refresh()}).catch(console.log).finally(()=>{L(),o.target.reset()})}//!================================================================
const b={position:"absolute",lines:13,length:44,width:19,radius:46,scale:1.25,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#2bab81",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner"},l=new Spinner(b);function w(){l.spin(a),a.classList.remove("is-hidden")}function L(){l.stop(),a.classList.add("is-hidden")}//!================================================================
//# sourceMappingURL=commonHelpers.js.map
