// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import imageMarkup from './markup';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryElements = document.querySelector('.gallery');

galleryElements.innerHTML = imageMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
