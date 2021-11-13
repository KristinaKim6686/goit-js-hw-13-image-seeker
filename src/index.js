import * as PNotify from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/BrightTheme.css";
import ImageApi from './js/imageApi';
import  galleryItemsMarkup from './templates/card.hbs';
import { throttle } from 'lodash';
import './styles.css';
import modal  from "./js/modal";



 const myStack = new PNotify.Stack({
  dir1: "up",
 });

const refs = {
    lastItem :document.querySelectorAll(".load-more__marker"),
    searchForm: document.querySelector('.search__form'),
    galleryContainer: document.querySelector('.gallery'),
    searchZone:document.querySelector('.search__zone')
}

const imageApi = new ImageApi();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  imageApi.query = e.currentTarget.elements.query.value.trim();
  if (!imageApi.query) return onError();
  clearContainer();
  imageApi.resetPage();
  fetchGallery();
  
}

 function fetchGallery() {
   imageApi.fetchImages().then(hits => {
     refs.galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup(hits))
     
     if (data.length <= 0) return onError();
     if (data.length <= 12) return;
   }
  )
    .then(modal())
  .catch (onError);
}

 function  onError() {
  return  PNotify.notice({
    text: "Please, enter a correct request!",
    title: 'ERROR!',
    stack: myStack,
     closer: false,
            sticker: false,
            hide: true,
            delay: 500,
            remove: true,
    modules: new Map([...PNotify.defaultModules, [PNotifyMobile, {}]]),
        });
}

document.addEventListener('scroll', throttle(() => {
  const documentRect = document.documentElement.getBoundingClientRect()
  // refs.searchZone.classList.add('hidden');
  if (documentRect.bottom < document.documentElement.clientHeight + 150) {
    onLoadMore();
  }
},500))

 function onLoadMore() {
  fetchGallery()
    scroll();
};


function clearContainer() {
   myStack.close(true);
  refs.galleryContainer.innerHTML = "";
 

}

function scroll() {  
  refs.lastItem.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
}
