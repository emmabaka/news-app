const e=new class{getNews(){const e=localStorage.getItem(this.KEY);return e?JSON.parse(e):[]}addNews(e){const t=this.getNews();this.hasNews(e)||(t.push(e),localStorage.setItem(this.KEY,JSON.stringify(t)))}hasNews(e){return this.getNews().some((({url:t})=>t===e.url))}removeNews(e){const t=this.getNews();t.forEach(((s,o)=>{s.url===e.url&&t.splice(o,1)})),localStorage.setItem(this.KEY,JSON.stringify(t))}constructor(){this.KEY="FAVORITE_NEWS"}},t=new class{getNews(){const e=localStorage.getItem(this.KEY);return e?JSON.parse(e):[]}addNews(e){const t=this.getNews();this.hasNews(e)||(t.push(e),localStorage.setItem(this.KEY,JSON.stringify(t)))}hasNews(e){return this.getNews().some((({url:t})=>t===e.url))}constructor(){this.KEY="READ_NEWS"}},s=t.getNews(),o=[...new Set(s.map((e=>e.readDate)))],r=document.querySelector(".accordion");r.innerHTML=o.map((e=>`<div class="container">\n        <div class="accordion-date">${e}\n        <hr />\n            <div class="newsgallery">\n                <ul class="gallery__cards-list visually-hidden"></ul>\n            </div>\n        </div>\n      </div>`)).join("");const n=document.getElementsByClassName("container"),a=document.querySelectorAll(".accordion-date");a.forEach((t=>{const o=t.innerText;console.log(`Checking for ${o}`),s.map((({readDate:s,src:r,title:n,url:a,info:i,published_date:l,alt:c,section:d})=>{if(s===o){const s='<span>\n                                <svg\n                                    class="item-news__block-icon active-news-icon"\n                                    width="16"\n                                    height="16"\n                                    viewBox="0 0 37 32"\n                                >\n                                    <path\n                                    style="stroke: var(--color1, #4440f7)"\n                                    stroke-linejoin="round"\n                                    stroke-linecap="round"\n                                    stroke-miterlimit="4"\n                                    stroke-width="2.2857"\n                                    d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"\n                                    ></path>\n                                </svg>\n                            </span>';let o="",u="";e.hasNews({url:a})?(u="Remove from favorite",o="favorite-button__activ"):(u="Add to favorite",o="add-to-favorite");const g=`<li class="card-photo">\n                            <div class="image-wrapper">\n                                <img class="photo" src="${r}" alt="${c}" loading="lazy" />\n                            </div>\n                            <div class="card-category">${d}</div>\n                            <button type="button" class="${o}">Add to favorite${s}</button>\n                            <h2 class="card-title">${n}</h2>\n                            <p class="card-info">${i}</p>\n                            <span class="card-date">${l}</span>\n                            <a href="${a}" class="card-url">Read more</a>\n                        </li>`;t.querySelector(".gallery__cards-list").insertAdjacentHTML("beforeend",g)}}))})),document.querySelector(".container").classList.toggle("active"),document.querySelector(".gallery__cards-list").classList.toggle("visually-hidden");for(let e=0;e<n.length;e++)n[e].addEventListener("click",(function(){this.classList.toggle("active");this.querySelector(".gallery__cards-list").classList.toggle("visually-hidden")}));r.addEventListener("click",(function(t){if("button"!==t.target.tagName.toLowerCase())return;{console.log("Click");const s=t.target.closest("BUTTON");console.log(s);const o=s.closest("li"),r=o.querySelector(".card-title").textContent,n=o.querySelector("img").getAttribute("src"),a=o.querySelector("img").getAttribute("alt"),i=o.querySelector("p").textContent,l=o.querySelector("span").textContent,c=o.querySelector(".card-category").textContent,d=o.querySelector(".card-url").getAttribute("href"),u={src:n,title:r,url:d,info:i,published_date:l,alt:a,section:c};return console.log(u),e.hasNews(u)?(e.removeNews(u),s.classList.replace("favorite-button__activ","add-to-favorite"),s.innerHTML='Add to favorite <svg class=" active-news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>'):(e.addNews(u),s.classList.replace("add-to-favorite","favorite-button__activ"),s.innerHTML='Remove from favorite  <svg class="news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>'),u}}));
//# sourceMappingURL=read.a6fa85f4.js.map
