import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".feedback-form"),n="feedback-form-state",s={email:"",message:""};//!==================================================================
r.addEventListener("input",e=>{const t=e.target.value.trim();console.log(t),s[e.target.name]=t,o(n,s)});r.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),a=e.currentTarget.elements.message.value.trim();if(!t||!a)return alert("email or message is empty");s[e.target.name]="",r.reset()});//!==================================================================
function o(e,t){try{const a=JSON.stringify(t);localStorage.setItem(e,a)}catch(a){console.log(a.message)}}function m(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}//!==================================================================
function l(){const e=m(n)||{};r.elements.email.value=e.email||"",r.elements.message.value=e.message||""}l();//!==================================================================
//# sourceMappingURL=commonHelpers2.js.map
