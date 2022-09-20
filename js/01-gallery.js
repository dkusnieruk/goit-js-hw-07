import { galleryItems } from './gallery-items.js';

// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);


const setGallery = galleryItems.forEach((element)=>{
    console.log(element);
    const link=document.createElement(`a`);
    const imageGallery=document.createElement(`img`);
    link.setAttribute("class", "gallery__link");
    link.setAttribute("href", `${element.original}`);
    imageGallery.setAttribute("class", "gallery__image");
    imageGallery.setAttribute("src", `${element.preview}`);
    imageGallery.setAttribute("data-source", `${element.original}`);
    imageGallery.setAttribute("alt", `${element.description}`);

    gallery.append(link);
    link.append(imageGallery);
});

gallery.addEventListener(`click`, (event)=>{
    event.preventDefault();
    console.log(event.target.dataset.source);
    const basicEdit = basicLightbox.create(`<img src = "${event.target.dataset.source}">`);
    basicEdit.show();
    
    basicEdit.addEventListener(`keydown`, (event)=>{
        if (event.code ==27){
            basicEdit.close();
        }
    })

    });


 
// const pictures = galleryItems.map((picture)=>
// `<a href =${picture.original}
// class="gallery__link"><img src =${picture.preview}
// class="gallery__image"
// data-source=${picture.original}
// alt=${picture.description}></a>`).join("");


// gallery.innerHTML =pictures;

// gallery.addEventListener(`click`, (event)=>{
// event.preventDefault();
// console.log(event.target);
// const basicPhotos = basicLightbox.create(`<img ${event.target} >`);
// basicPhotos.show();
// });



    
