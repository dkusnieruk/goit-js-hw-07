import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector(`.gallery`);
const addItem = document.createElement(`a`);
const addImage= document.createElement(`img`);


// getGallery.appendChild(addItem);
// addItem.appendChild(addImage);

const solutionTry = galleryItems.map((solutionOne)=>
`<a href =${solutionOne.original}
class="gallery__link"><img src =${solutionOne.preview}
class="gallery__image"
data-source=${solutionOne.original}
alt=${solutionOne.description}></a>`).join("");

getGallery.innerHTML =solutionTry;



console.log(getGallery);