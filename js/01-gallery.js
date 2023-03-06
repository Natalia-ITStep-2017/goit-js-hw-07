import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemsHtml = galleryItems.map(({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
  </a>
</div>`
).join('');

galleryEl.innerHTML = galleryItemsHtml;

function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const originalUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalUrl}">
    `, {
    onShow: () => {
        document.addEventListener("keyup", closeOriginalImage);
    },
    onClose: () => {
      document.removeEventListener("keyup", closeOriginalImage);
    },
    });
  instance.show();

  function closeOriginalImage(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}

galleryEl.addEventListener("click", selectImage)



   
 