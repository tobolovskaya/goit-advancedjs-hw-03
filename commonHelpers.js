import{S as p,i as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const m="45156920-6e611072a4f9c22ae400d324b",f="https://pixabay.com/api",h=async r=>{const o=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${f}/?${o.toString()}`;try{const e=await fetch(n);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){throw e}},l=document.querySelector(".gallery"),y=r=>new Promise((o,n)=>{const e=new Image;e.src=r,e.onload=()=>o(r),e.onerror=t=>n(t)}),g=async r=>{l.innerHTML="";const o=r.map(e=>y(e.webformatURL));await Promise.all(o),l.innerHTML=r.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}">
      <div class="info">
        <div>
          <p>Likes</p>
          <p>${e.likes}</p>
        </div>
        <div>
          <p>Views</p>
          <p>${e.views}</p>
        </div>
        <div>
          <p>Comments</p>
          <p>${e.comments}</p>
        </div>
        <div>
          <p>Downloads</p>
          <p>${e.downloads}</p>
        </div>
      </div>
    </a>
  `).join(""),new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom"}).refresh()},i=r=>{u.error({message:r,position:"topRight",color:"#EF4040",messageColor:"white",iconColor:"white",timeout:9999999})},c=document.querySelector(".search-form"),w=document.querySelector('.search-form input[name="search"]'),d=document.querySelector(".loader"),v=async r=>{r.preventDefault();const o=w.value.trim();if(!o){i("Please enter a search query.");return}d.style.display="flex";try{const n=await h(o);n.hits.length===0&&i("Sorry, there are no images matching your search query. Please try again!"),c.reset(),await g(n.hits)}catch{i("An error occurred while fetching images. Please try again later.")}finally{d.style.display="none",c.reset()}};c.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
