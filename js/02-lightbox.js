import { galleryItems } from './gallery-items.js';
// Change code below this line


 const gallery = document.querySelector('.gallery')



const galleryItem = galleryItems.map(item => {
    
    return (
        `<a class="gallery__item"
         href=${item.original}>
  <img class="gallery__image" src=${item.preview} 
  alt=${item.description} />
</a>`)
}).join("");

gallery.insertAdjacentHTML('beforeend', galleryItem);


const shower = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionsDelay: 250
 })


console.log(galleryItems);
