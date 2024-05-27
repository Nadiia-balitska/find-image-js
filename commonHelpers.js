import{S as v,i as c}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function g(s){return s.map(e=>`
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
    </li>`).join("")}axios.defaults.baseURL="https://pixabay.com/api/";function h(s,e){const a={params:{q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"44004812-c52c8438ab8e6871c63eadf8f"}};return axios.get("",a)}const f="/goit-js-hw-12/assets/error-d5cf2823.svg";//!================================================================
const w=document.querySelector(".js-form"),d=document.querySelector(".js-gallery"),p=document.querySelector(".js-backdrop"),o=document.querySelector(".js-gallery-btn"),m=new v(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});//!================================================================
w.addEventListener("submit",x);o.addEventListener("click",S);let n=1,i=null;async function x(s){s.preventDefault(),d.innerHTML="",n=1,b(),i=s.currentTarget.elements["search-query"].value.trim();try{const e=await h(i,n);if(i==="")return c.warning({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:f,message:"Enter all fields",backgroundColor:"red",position:"topRight"});if(e.data.hits.length===0)return o.classList.add("is-hidden"),c.error({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:f,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});d.innerHTML=g(e.data.hits),e.data.totalHits<15?o.classList.add("is-hidden"):o.classList.remove("is-hidden"),m.refresh()}catch(e){console.log(e)}finally{L(),s.target.reset()}}async function S(){n+=1,b();try{const s=await h(i,n);d.insertAdjacentHTML("beforeend",g(s.data.hits)),m.refresh();const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),Math.ceil(s.data.totalHits/15)===n&&(o.classList.add("is-hidden"),c.info({message:"We're sorry, but you've reached the end of search results."}))}catch(s){console.log(s)}finally{L()}}//!================================================================
const C={position:"absolute",lines:13,length:44,width:19,radius:46,scale:1.25,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#2bab81",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner"},y=new Spinner(C);function b(){y.spin(p),p.classList.remove("is-hidden")}function L(){y.stop(),p.classList.add("is-hidden")}//!================================================================
//# sourceMappingURL=commonHelpers.js.map
