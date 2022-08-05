import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// змінні  
const refs = {

 
 gallery : document.querySelector('.gallery'),

}  
let instance = basicLightbox.create(`
    <img src='' width="800" height="600">
`) ;




// розмітка
const galleryItem = galleryItems.map(item => {
    return (` <div class="gallery__item">
  <a class="gallery__link" href= ${item.original} >
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`)
}).join("");

refs.gallery.insertAdjacentHTML('beforeend', galleryItem);

 



// functions

// відкриття і поернення лінку
function onPhotoReturnUrl(e) {
    e.preventDefault()


    if (e.target.nodeName !== 'IMG') {
        return
  }
  instance.element().querySelector('img').src = e.target.dataset.source;
    instance.show()
    
    console.log(e.target.dataset.source);
    

}

// closing with escape
const onModalClose = (e) => {
    console.log(e.target);
    if (e.key === 'Escape') {
        instance.close()
    }
}
 


// listeners
refs.gallery.addEventListener("click", onPhotoReturnUrl,)
refs.gallery.addEventListener('keydown', onModalClose)

