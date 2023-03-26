import { newsApi } from './js/api/news-api';
import { pagination, onChangePage } from './js/pagination';

// ===============filter-menu===================
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
import { loadWeather } from './js/weather';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';
import CalendarDates from 'calendar-dates';
import moment from 'moment';

const stateOfPopular = { status: true, pages: [], chunkSize: 8 };
const typeOfSearch = { searchStatus: false, categoriesStatus: false };
// newsApi.getCategories(); // Returns list of 50 categories
// newsApi.getMostPopularNews(); // Returns array of Most popular news
// newsApi.getNewsBySearchQuery(); // Returns array of articles by search word. Can get pages
// newsApi.getNewsByCategory(); // Returns array of articles by category. Can get pages

/* On page load */

import { renderMostPopMarkup } from './js/render/render_pop_news';

onLoad();

function onLoad() {
  newsApi.resetPage();
  let news = [];
  newsApi.getMostPopularNews().then(res => {
    for (let i = 0; i < res.length; i += 8) {
      const chunk = res.slice(i, i + 8);
      news.push(chunk);
    }
    console.log(news);
    newsApi.getTotalHits();
    renderMostPopMarkup(news[0]);
    loadWeather();
    stateOfPopular.pages = news;

    pagination.renderPagination(pagination.createPagination(3, 1));
  });
}

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
  const query = searchQuery.query.value.trim().toLowerCase();
  // console.log(query);
  if (!query) {
    return;
  }
  newsApi.resetPage();
  let news = [];
  newsApi.getNewsBySearchQuery(query).then(res => {
    news = res;
    console.log(news);
    stateOfPopular.status = false;
    typeOfSearch.categoriesStatus = false;
    typeOfSearch.searchStatus = true;
    pagination.renderPagination(
      pagination.createPagination(newsApi.getTotalHits(), 1)
    );

    renderMarkup(news);
  });
}

/* Search by category */

import { renderCategoryMarkup } from './js/render/render_category_news';

const newsNavigationEl = document.querySelector('.news-navigation');
newsNavigationEl.addEventListener('click', onCategoryBtnClick);

function onCategoryBtnClick(e) {
  // console.log(e.target);
  if (e.target.tagName.toLowerCase() !== 'button') {
    return;
  } else {
    // console.log('Click');
    const categoryBtn = e.target.closest('BUTTON');
    const category = categoryBtn.textContent.trim().toLowerCase();
    if (category === 'others') {
      return;
    }
    console.log(category);
    newsApi.resetPage();
    newsApi.setCategory(category);
    let news = [];
    newsApi.getNewsByCategory(1).then(res => {
      news = res;
      console.log(news);
      newsApi.getTotalHits();
      renderCategoryMarkup(news);
      loadWeather();
      console.log(newsApi.getTotalHits());

      stateOfPopular.status = false;
      typeOfSearch.categoriesStatus = true;
      typeOfSearch.searchStatus = false;
      pagination.renderPagination(
        pagination.createPagination(newsApi.getTotalHits(), 1)
      );
    });
  }
}

/* Pagination */

// pagination.renderPagination(pagination.createPagination(50, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    if (ev.target.nodeName === 'A') {
      onChangePage(ev.target);
      if (stateOfPopular.status) {
        renderMostPopMarkup(
          stateOfPopular.pages[pagination.getCurrentPage() - 1]
        );

        return;
      }
      if (typeOfSearch.searchStatus) {
        newsApi.setPage(pagination.getCurrentPage());
        const query = searchQuery.query.value.trim().toLowerCase();
        newsApi.getNewsBySearchQuery(query).then(res => {
          stateOfPopular.status = false;
          pagination.renderPagination(
            pagination.createPagination(
              newsApi.getTotalHits(),
              pagination.getCurrentPage()
            )
          );

          renderMarkup(res);
          return;
        });
      }
      if (typeOfSearch.categoriesStatus) {
        newsApi.getNewsByCategory(pagination.getCurrentPage()).then(res => {
          newsApi.getTotalHits();
          renderCategoryMarkup(res);
          loadWeather();
          console.log(newsApi.getTotalHits());
          pagination.renderPagination(
            pagination.createPagination(
              pagination.getTotalPage(),
              pagination.getCurrentPage()
            )
          );
        });
      }

      // let news = [];
      // newsApi.getNewsByCategory(pagination.getCurrentPage()).then(res => {
      //   news = res;
      // console.log(news);
      // });
    }
  });

// ===============filter===================

const filtrButtonsContainerRef = document.querySelector(
  'div.filtr-buttons-container'
);

filtrButtonsContainerRef.addEventListener('click', filtrBtnClickHandler);

document.addEventListener('click', closeOtherBtnsMenu);

// ===============date form filter===================

const dateForm = document.querySelector('.date-form');
const dateFormInput = document.querySelector('.date-form__input');
const dateFormButton = document.querySelector('.date-form__button');
const dateFormInputIcon = document.querySelector('.date-form__button-icon use');

const currentDate = moment().format('DD/MM/YYYY');
dateFormInput.value = currentDate;

var selectedDate;

dateForm.addEventListener('click', e => {
  e.stopPropagation();
});
dateFormButton.addEventListener('click', dateFilterOpenClose);

const airDateOption = {
  autoClose: true,
  firstDay: 1,
  position: 'bottom center',
  dateFormat: 'dd/MM/yyyy',
  locale: localeEn,
  buttons: ['today'],
  visible: true,
  onSelect: ({ date, formattedDate, datepicker }) => {
    selectedDate = formattedDate;
    console.log(formattedDate);
  },
  onShow: isFinished => {
    dateFormInputIcon.href.baseVal = '/symbol-defs.ec292798.svg#icon-arrow-up';
  },
  onHide: isFinished => {
    dateFormInputIcon.href.baseVal =
      '/symbol-defs.ec292798.svg#icon-arrow-down';
  },
};

const airDate = new AirDatepicker('.date-form__input', airDateOption);

function dateFilterOpenClose(e) {
  e.stopPropagation();
  if (airDate.visible) {
    airDate.hide();
  } else {
    airDate.show();
  }
}
