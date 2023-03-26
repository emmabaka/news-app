import { newsApi } from './js/api/news-api';
import { pagination, onChangePage } from './js/pagination';

// ===============filtr-menu===================
import { filtrBtnClickHandler } from './js/filter-categories';
import { closeOtherBtnsMenu } from './js/filter-categories';
import { categoriesList } from './js/filter-categories';

// =====================search form=================
import { searchInputAnimation } from './js/search-input-animation';

// ==================mobile menu open===================
import { oNmobileMenu } from './js/mobile-menu';

// ==================================================

import { renderMarkup } from './js/rendermarkup';
import { monitorAuthState } from './js/ui/ui';
// import { auth } from './js/ui/firebase';
import './js/modal';
import { onThemeChange } from './js/switcher';
import { getPosition } from './js/weather';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
// import CalendarDates from 'calendar-dates';

// newsApi.getCategories(); // Returns list of 50 categories
// newsApi.getMostPopularNews(); // Returns array of Most popular news
// newsApi.getNewsBySearchQuery(); // Returns array of articles by search word. Can get pages
// newsApi.getNewsByCategory(); // Returns array of articles by category. Can get pages

// burger menu

oNmobileMenu();
searchInputAnimation();

/* Firebase auth*/

monitorAuthState();

/* Search by word */

const searchQuery = document.querySelector('.search-form');
searchQuery.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(e) {
  e.preventDefault();
  const query = searchQuery.query.value.trim();
  console.log(query);
  if (!query) {
    return;
  }
  newsApi.resetPage();
  let news = [];
  newsApi.getNewsBySearchQuery(query).then(res => {
    news = res;
    console.log(news);
    newsApi.getTotalHits();
    renderMarkup(news);
  });
}

/* Pagination */

pagination.renderPagination(pagination.createPagination(50, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    if (ev.target.nodeName === 'BUTTON') {
      onChangePage(ev.target);
      let news = [];
      newsApi.getNewsByCategory(pagination.genCurrentPage()).then(res => {
        news = res;
        // console.log(news);
        newsApi.getTotalHits();
      });
    }
  });

// ===============filter===================

const filtrButtonsContainerRef = document.querySelector(
  'div.filtr-buttons-container'
);

filtrButtonsContainerRef.addEventListener('click', filtrBtnClickHandler);

document.addEventListener('click', closeOtherBtnsMenu);

// ===============date form filter===================

const dateForm = document.querySelector('.date-form__input');
const dateFormButton = document.querySelector('.date-form__input');

dateForm.addEventListener('click', dateFilterOpen);

function dateFilterOpen() {
  new AirDatepicker('.date-form__input', {
    autoClose: true,
    position: 'bottom center',
    dateFormat: 'dd/MM/yyyy',
  });
}

// const calendarDates = new CalendarDates();

// const main = async () => {
//   for (const meta of await calendarDates.getDates(new Date())) {
//     console.log(meta);
//   }

//   for (const meta of await calendarDates.getMatrix(new Date())) {
//     console.log(meta);
//   }
// };

// main();
