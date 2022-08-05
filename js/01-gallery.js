import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// змінні  
const refs = {

 photo : document.querySelector('.gallery__image'),
 gallery : document.querySelector('.gallery'),

}  
let instance = null;




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

  const originalPhotoLink = e.target.dataset.source

    if (e.target.nodeName !== 'IMG') {
        return
    }   instance = basicLightbox.create(`
    <img src='${originalPhotoLink}' width="800" height="600">
`) 
    instance.show()
    
    console.log(originalPhotoLink);
    

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

