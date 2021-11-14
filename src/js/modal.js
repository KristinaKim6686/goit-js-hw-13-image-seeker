export default function carrouselle() {
    const dataSources = [];

    const refs = {
        modalLightbox: document.querySelector('.js-lightbox'),
        closeButton: document.querySelector('.lightbox__button'),
        galleryPreview: document.querySelector('.gallery'),
        lightboxOverlay: document.querySelector('.lightbox__overlay'),
        lightBoxImage: document.querySelector('.lightbox__image'),
    };

    refs.galleryPreview.addEventListener('click', onOpenModal);
    refs.closeButton.addEventListener('click', onCloseModal);
    refs.lightboxOverlay.addEventListener('click', onBackdropClick);

    
    function onOpenModal(event) {
        event.preventDefault();
        if (event.target.nodeName !== 'IMG') {
            return;
        }
        refs.modalLightbox.classList.add('is-open');

        refs.lightBoxImage.src = event.target.dataset.source;
        // console.log(refs.lightBoxImage.src);
    };

    function onCloseModal() {
        refs.modalLightbox.classList.remove('is-open');
        refs.modalLightbox.setAttribute('src', '');
        // refs.modalLightbox.removeAttribute('src');
    }
    
    function onBackdropClick(event) {
        if (event.currentTarget === event.target) {
            onCloseModal();
        }
    };

   
    document.addEventListener('keydown', e => {
        
        switch (event.code) {
            case 'Escape': {
                onCloseModal();
                break;
            }
            
            
        }
    });
    
    
}