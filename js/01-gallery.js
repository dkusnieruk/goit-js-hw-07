import { galleryItems } from './gallery-items.js';

// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const addItem = document.createElement(`a`);
const addImage= document.createElement(`img`);




const pictures = galleryItems.map((picture)=> {
`<a href =${picture.original}
class="gallery__link"><img src =${picture.preview}
class="gallery__image"
data-source=${picture.original}
alt=${picture.description}></a>`});
console.log(pictures);

gallery.innerHTML =pictures;

gallery.addEventListener(`click`, (event)=>{
event.preventDefault();
console.log(event.target);
const basicPhotos = basicLightbox.create(`<img src ${event.target}>`);
basicPhotos.show();
});

