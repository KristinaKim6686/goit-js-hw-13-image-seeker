import * as PNotify from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/BrightTheme.css";
import ImageApi from './templates/js/image-search';
import  galleryItemsMarkup from './templates/card.hbs';
import * as _ from 'lodash';
import './templates/styles.css'



 const myStack = new PNotify.Stack({
  dir1: "up",
});

const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const refs={
    searchForm: document.querySelector('.search__form'),
    galleryContainer: document.querySelector('.gallery'),

}

const imageApi = new ImageApi();

refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
    e.preventDefault();
    imageApi.query = e.currentTarget.elements.query.value;

    if (imageApi.query==='') {
        onError()
    }

    imageApi.resetPage();
    clearContainer();
    fetchGallery();
}

function fetchGallery() {
    imageApi.fetchImages().then(hits => {
        refs.galleryContainer.insertAdjacentHTML('beforeend',galleryItemsMarkup(hits))
    })
}

function onError() {
  return PNotify.notice({
          text: "Please, enter a correct request!",
          stack: myStack,
          modules: new Map([...PNotify.defaultModules, [PNotifyMobile, {}]]),
        });
}

document.addEventListener('scroll', () => {
  const documentRect=document.documentElement.getBoundingClientRect()
  console.log('bottom');
  if (documentRect.bottom < document.documentElement.clientHeight + 150) {
    onLoadMore()
  };
})

function onLoadMore() {
  fetchGallery()
    scroll();
};


function clearContainer() {
  refs.galleryContainer.innerHTML = "";
  myStack.close(true);
}

function scroll() {
  let lastLiItem = document.querySelectorAll(".list-item");

  lastLiItem[lastLiItem.length - (imageApi.perPage - 1)].scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
}

