import{S as L,i as c}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function m(s){return s.map(e=>`
    <li class="gallery-item">
    <div class="gallery-list-container">
        <a class= "img-link" href="${e.largeImageURL}">
            <img class ="gallery-image" src="${e.webformatURL}" 
            alt="${e.tags}"/>
        </a>
        </div>
        <div class= "text-container-img">
        <p class = "text"> likes:
                  <span class="span-text">"${e.likes}"</span>  </p>      
        <p  class = "text"> views:
                  <span class="span-text">"${e.views}"</span>  </p>
        <p class = "text">  comments:
                 <span class="span-text">"${e.comments}"</span>  </p>
        <p class = "text">   downloads:
                 <span class="span-text">"${e.downloads}" </span></p>
        </div>
    </li>`).join("")}axios.defaults.baseURL="https://pixabay.com/api";function g(s,e){const i={params:{q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"44004812-c52c8438ab8e6871c63eadf8f"}};return axios.get("",i)}const f="/goit-js-hw-12/assets/error-d5cf2823.svg";//!================================================================
const v=document.querySelector(".js-form"),d=document.querySelector(".js-gallery"),p=document.querySelector(".js-backdrop"),o=document.querySelector(".js-gallery-btn"),x=new L(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});//!================================================================
v.addEventListener("submit",w);o.addEventListener("click",S);let n=1,a=null;async function w(s){s.preventDefault(),d.innerHTML="",n=1,y(),a=s.currentTarget.elements["search-query"].value.trim();try{const e=await g(a,n);if(a==="")return c.warning({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:f,message:"Enter all fields",backgroundColor:"red",position:"topRight"});if(e.data.hits.length===0)return o.classList.add("is-hidden"),c.error({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:f,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});d.innerHTML=m(e.data.hits),e.data.totalHits<15?o.classList.add("is-hidden"):o.classList.remove("is-hidden"),x.refresh()}catch(e){console.log(e)}finally{b(),s.target.reset()}}async function S(){n+=1,y();try{const s=await g(a,n);if(d.insertAdjacentHTML("beforeend",m(s.data.hits)),s.data.totalHits===n)return o.classList.add("is-hidden"),c.message("We're sorry, but you've reached the end of search results.")}catch(s){console.log(s)}finally{b()}}//!================================================================
const j={position:"absolute",lines:13,length:44,width:19,radius:46,scale:1.25,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#2bab81",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner"},h=new Spinner(j);function y(){h.spin(p),p.classList.remove("is-hidden")}function b(){h.stop(),p.classList.add("is-hidden")}//!================================================================
//# sourceMappingURL=commonHelpers.js.map
