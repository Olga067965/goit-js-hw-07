import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
}

const galleryMarkup = galleryItems
  .map((item) => createGalleryItemMarkup(item))
  .join("");

galleryList.innerHTML = galleryMarkup;

const gallery = new SimpleLightbox(".gallery__link", {
  captionsData: 'alt',
  captionDelay: 250
});