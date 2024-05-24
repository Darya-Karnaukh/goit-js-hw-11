import {searchFoto} from './js/pixabay-api';
import {imagesTemplate} from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


    const lightbox = new SimpleLightbox('.gallery a', {
        animationSpeed: 200,
        animationSlide: true,
        disableScroll: false,
        history: false,
        captionsData: 'alt',
        captionDelay: 250,
});


const form = document.querySelector('.form');
const imagesList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const word = e.target.elements.word.value.trim();

    if (!word) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
    loader.classList.remove('hidden');
    loader.style.display = 'block';
    

    searchFoto (word).then(data => {
        const markup = imagesTemplate(data.hits);
        imagesList.innerHTML = markup;
        lightbox.refresh()

        loader.classList.add('hidden');
        loader.style.display = 'none';
        
    })
    .catch (error => {
        console.error('Error searching images:', error.message);
        loader.classList.add('hidden');
        loader.style.display = 'none';
    });


});