import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery= document.querySelector(`.gallery`);
console.log(gallery);

const setGallery = galleryItems.forEach((element)=>{
  const listItem = document.createElement(`li`);
  const listLink = document.createElement(`a`);
  const listImage= document.createElement(`img`);

  listLink.setAttribute(`href`, `${element.original}`);
  listLink.setAttribute(`class`, `gallery__item`);
  
  listImage.setAttribute(`alt`, `${element.description}`);
  listImage.setAttribute(`src`, `${element.preview}`);
  listImage.setAttribute(`class`, `gallery__image`);

gallery.append(listItem);
listItem.append(listLink);
listLink.append(listImage);
});



console.log(galleryItems);
