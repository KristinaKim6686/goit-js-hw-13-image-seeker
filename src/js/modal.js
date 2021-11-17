// import * as basicLightbox from 'basiclightbox';
import SimpleLightbox from "simplelightbox";
export default function carrouselle() {

    // const basicLightbox = require('basiclightbox');
    



    const refs = {
        modalLightbox: document.querySelector('.js-lightbox'),
        closeButton: document.querySelector('.lightbox__button'),
        galleryPreview: document.querySelector('.gallery'),
        lightboxOverlay: document.querySelector('.lightbox__overlay'),
        lightBoxImage: document.querySelector('.lightbox__image'),
    };

    refs.galleryPreview.addEventListener('click', onOpenModal);
    refs.closeButton.addEventListener('click', onCloseModal);
    // refs.lightboxOverlay.addEventListener('click', onBackdropClick);

    
    function onOpenModal(event) {
        event.preventDefault();
        if (event.target.nodeName !== 'IMG') {
            return;
        }
        let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	
});

        
//         const instance = basicLightbox.create(`
//     <div class="modal">
//        <img width="1200" height="800" src="${refs.lightBoxImage.src}">
//     </div>
// `)
//         instance.show();
//         refs.lightBoxImage.src = event.target.dataset.source;
        
    };
    function onCloseModal() {
        // instance.close()
    }

    
}