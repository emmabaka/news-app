var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("31u3U"),a=r("iJAZj"),s=r("8FnLx");const i=new(0,o.FavoriteStorage),l=new(0,o.ReadStorage),c=l.getNews();(0,s.oNmobileMenu)(),(0,a.searchInputAnimation)(),function(){const e=document.querySelector(".nav__link--current");e&&e.classList.remove("nav__link--current");const t=window.location.pathname,n=[...document.querySelectorAll(".nav__list .nav__link")];"/read.html"!==t?"/favorite.html"!==t||n[1].classList.add("nav__link--current"):n[2].classList.add("nav__link--current")}();const d=[...new Set(c.map((e=>e.readDate)))],u=document.querySelector(".accordion");u.innerHTML=d.map((e=>`<div class="accordion-container">\n        <div class="accordion-date">${e}\n        <hr />\n            <div class="newsgallery">\n                <ul class="gallery__cards-list visually-hidden"></ul>\n            </div>\n        </div>\n      </div>`)).join("");document.getElementsByClassName("accordion-container");const v=document.querySelectorAll(".accordion-date");v.forEach((e=>{const t=e.innerText;c.map((({readDate:n,src:r,title:o,url:a,info:s,published_date:c,alt:d,section:u})=>{if(n===t){const t='<span>\n                                <svg\n                                    class="item-news__block-icon active-news-icon"\n                                    width="16"\n                                    height="16"\n                                    viewBox="0 0 37 32"\n                                >\n                                    <path\n                                    style="stroke: var(--color1, #4440f7)"\n                                    stroke-linejoin="round"\n                                    stroke-linecap="round"\n                                    stroke-miterlimit="4"\n                                    stroke-width="2.2857"\n                                    d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"\n                                    ></path>\n                                </svg>\n                            </span>';let n="",v="",g="",f="";i.hasNews(a)?(v="Remove from favorite",n="favorite-button__activ"):(v="Add to favorite",n="add-to-favorite"),l.hasNews(a)?(g=" opacity",f='<span class="news__read-status">Already read</span>'):g="";const h=`<li class="card-photo${g}">\n                            <div class="image-wrapper">\n                                <img class="photo" src="${r}" alt="${d}" loading="lazy" />\n                            </div>\n                            <div class="card-category">${u}</div>\n                            <button type="button" class="${n}">${v}${t}</button>\n                            <h2 class="card-title">${o}</h2>\n                            <p class="card-info">${s}</p>\n                            <span class="card-date">${c}</span>\n                            <a href="${a}" class="card-url">Read more</a>\n                            ${f}\n                        </li>`;e.querySelector(".gallery__cards-list").insertAdjacentHTML("beforeend",h)}}))})),document.querySelector(".accordion-date").classList.toggle("active"),document.querySelector(".gallery__cards-list").classList.toggle("visually-hidden");for(let e=0;e<v.length;e++)v[e].addEventListener("click",(function(e){if(e.target!==this)return;this.classList.toggle("active");this.querySelector(".gallery__cards-list").classList.toggle("visually-hidden")}));u.addEventListener("click",(function(e){if("button"!==e.target.tagName.toLowerCase())return;{const t=e.target.closest("BUTTON"),n=t.closest("li"),r=n.querySelector(".card-title").textContent,o=n.querySelector("img").getAttribute("src"),a=n.querySelector("img").getAttribute("alt"),s=n.querySelector("p").textContent,l=n.querySelector("span").textContent,c=n.querySelector(".card-category").textContent,d=n.querySelector(".card-url").getAttribute("href"),u={src:o,title:r,url:d,info:s,published_date:l,alt:a,section:c};return i.hasNews(u.url)?(i.removeNews(u.url),t.classList.replace("favorite-button__activ","add-to-favorite"),t.innerHTML='Add to favorite <svg class=" active-news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>'):(i.addNews(u),t.classList.replace("add-to-favorite","favorite-button__activ"),t.innerHTML='Remove from favorite  <svg class="news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>'),u}}));
//# sourceMappingURL=read.dca139bb.js.map