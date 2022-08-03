import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {

 photo : document.querySelector('.gallery__image'),
 gallery : document.querySelector('.gallery'),

}  


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

refs.gallery.addEventListener("click", onPhotoReturnUrl,)


let instance = null;

function onPhotoReturnUrl(e) {
    e.preventDefault()


    if (e.target.nodeName !== 'IMG') {
        return
    }   instance = basicLightbox.create(`
    <img src='${e.target.dataset.source}' width="800" height="600">
`) 
    instance.show()
    
    console.log(e.target.dataset.source);
    

}


const onModalClose = (e) => {
    console.log(e.target);
    if (e.key === 'Escape') {
        instance.close()
    }
}
 

refs.gallery.addEventListener('keydown', onModalClose)

  



console.log(galleryItems);
