import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemsHtml = galleryItems.map(({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
  </a>
</div>`
).join('');


galleryEl.innerHTML = galleryItemsHtml;

let gallery = new SimpleLightbox('.gallery a',
  {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    showCounter: false
  });
gallery.on('show.simplelightbox', function () {
	// do something…
});
