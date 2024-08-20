import{i as d,S as f}from"./assets/vendor-403a0c46.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const u="45522161-5a4b1fd5e13efcf8857e5e3e0",h=e=>fetch(`https://pixabay.com/api/?key=${u}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(`Error: ${r.status}`);return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),r}),c=document.querySelector(".gallery");let n;const g=e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                class="gallery-image"
                src="${e.webformatURL}"
                data-source="${e.largeImageURL}"
                alt="${e.tags}"
                />
            </a>
            <div class="info">
                <p class="text-info">Likes: <span class="number-info">${e.likes}</span></p>
                <p class="text-info">Views: <span class="number-info">${e.views}</span></p>
                <p class="text-info">Comments: <span class="number-info">${e.comments}</span></p>
                <p class="text-info">Downloads: <span class="number-info">${e.downloads}</span></p>
            </div>
        </li>`,p=e=>{if(c.innerHTML="",e.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const r=e.map(g).join("");c.innerHTML=r,n||(n=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8})),n.refresh()},i=document.querySelector(".search-form"),m=document.querySelector(".loader"),y=()=>{m.classList.remove("hidden")},L=()=>{m.classList.add("hidden")},b=e=>{e.preventDefault();const r=i.elements.user_query.value.trim();r&&(y(),h(r).then(o=>{p(o.hits)}).catch(o=>{console.error("Error fetching images:",o),iziToast.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L(),i.reset()}))};i.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
