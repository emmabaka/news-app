!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in a)return a[n].exports;if(n in t){var e=t[n];delete t[n];var r={id:n,exports:{}};return a[n]=r,e.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(n,e){t[n]=e},e.parcelRequired7c6=r);var c=r("8nrFW"),o=r("UL92Z"),i=r("jLIpX"),l=r("cs7FV");c=r("8nrFW");var s=r("iLqhe"),d=new(0,o.FavoriteStorage),u=(new(0,o.ReadStorage)).getNews();(0,l.oNmobileMenu)(),(0,i.searchInputAnimation)(),function(){var e=document.querySelector(".nav__link--current");e&&e.classList.remove("nav__link--current");var a=window.location.pathname,t=n(c)(document.querySelectorAll(".nav__list .nav__link"));"/read.html"!==a?"/favorite.html"!==a||t[1].classList.add("nav__link--current"):t[2].classList.add("nav__link--current")}();var v=n(c)(new Set(u.map((function(n){return n.readDate})))),f=document.querySelector(".accordion");f.innerHTML=v.map((function(n){return'<div class="accordion-container">\n        <div class="accordion-date"><span class="accordion-paragraph">'.concat(n,'</span><i class="down"></i>\n        <hr />\n            <div class="newsgallery">\n                <ul class="gallery__cards-list visually-hidden"></ul>\n            </div>\n        </div>\n      </div>')})).join("");document.getElementsByClassName("accordion-container");var p=document.querySelectorAll(".accordion-date");p.forEach((function(n){var e=n.innerText;u.map((function(a){var t=a.readDate,r=a.src,c=a.title,o=a.url,i=a.info,l=a.published_date,s=a.alt,u=a.section;if(t===e){var v="",f="";d.hasNews({url:o})?(f="Remove from favorite",v="favorite-button__activ"):(f="Add to favorite",v="add-to-favorite");var p='<li class="card-photo ">\n                            <div class="image-wrapper">\n                                <img class="photo" src="'.concat(r,'" alt="').concat(s,'" loading="lazy" />\n                            </div>\n                            <div class="card-category">').concat(u,'</div>\n                            <button type="button" class="').concat(v,'">').concat(f).concat('<span>\n                                <svg\n                                    class="item-news__block-icon active-news-icon"\n                                    width="16"\n                                    height="16"\n                                    viewBox="0 0 37 32"\n                                >\n                                    <path\n                                    style="stroke: var(--color1, #4440f7)"\n                                    stroke-linejoin="round"\n                                    stroke-linecap="round"\n                                    stroke-miterlimit="4"\n                                    stroke-width="2.2857"\n                                    d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"\n                                    ></path>\n                                </svg>\n                            </span>','</button>\n                            <h2 class="card-title">').concat(c,'</h2>\n                            <p class="card-info">').concat(i,'</p>\n                            <span class="card-date">').concat(l,'</span>\n                            <a href="').concat(o,'" class="card-url">Read more</a>\n                           \n                        </li>');n.querySelector(".gallery__cards-list").insertAdjacentHTML("beforeend",p)}}))})),document.querySelector(".accordion-date").classList.toggle("active"),document.querySelector(".gallery__cards-list").classList.toggle("visually-hidden");for(var g=0;g<p.length;g++)p[g].addEventListener("click",(function(n){n.target===this&&(this.classList.toggle("active"),this.querySelector(".gallery__cards-list").classList.toggle("visually-hidden"))}));f.addEventListener("click",s.onCardClick)}();
//# sourceMappingURL=read.021e9f22.js.map
