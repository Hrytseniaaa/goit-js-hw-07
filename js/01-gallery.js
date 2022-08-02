import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {

 photo : document.querySelector('.gallery__image'),
 gallery : document.querySelector('.gallery'),

}    

refs.gallery.addEventListener("click", onPhotoReturnUrl)

function onPhotoReturnUrl(e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
    }
    console.log(e.target.dataset.source);

    
}





console.log(galleryItems);


// import * as basicLightbox from ''

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()