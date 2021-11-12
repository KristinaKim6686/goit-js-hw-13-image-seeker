export default function carrouselle() {
    const dataSource = [];

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
        // const galleryItems = target.classList.contains('.gallery__item');
        // // const currentIndex = dataSource.indexOf(refs.galleryPreview.src)
        // const currentIndex = galleryItems.findIndex(
        //     (img) => img.original === lightBoxImage.src
        // );
        switch (event.code) {
            case 'Escape': {
                onCloseModal();
                break;
            }
            //     case 'ArrowRight': {
            //     rightClick(currentIndex)
            // }
            // case 'ArrowLeft': {
            //     leftClick(currentIndex);
            // }
            
        }
    });
    // function rightClick(currentIndex) {
    //     let nextIndex = currentIndex - 1;
    //     if (nextIndex === -1) {
    //         nextIndex=dataSource.length-1
    //     }
       
    // }
    function rightClick(currentIndex) {
        let nextIndex = currentIndex + 1;
        if (nextIndex === -1) {
            nextIndex += dataSource.length + 1;
        }
     refs.lightBoxImage.src = refs.galleryPreview[nextIndex].original;
    }
    function leftClick(currentIndex) {
  let nextIndex = currentIndex - 1;
  if (nextIndex === -1) {
    nextIndex = refs.galleryPreviewImage.length - 1;
  }
  refs.lightBoxImage.src = refs.galleryPreview[nextIndex].original;
};
}
