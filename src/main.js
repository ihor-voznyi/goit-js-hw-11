import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

const showLoader = () => {
    loader.classList.remove('hidden');
};

const hideLoader = () => {
    loader.classList.add('hidden');
};

const onSearchForm = (event) => {
    event.preventDefault();
    const searchValue = searchForm.elements.user_query.value.trim();

    if (!searchValue) {
        return; 
    }

    showLoader();

    fetchImages(searchValue)
        .then(data => {
            renderGallery(data.hits);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            iziToast.error({
                message: "Something went wrong. Please try again later.",
                position: 'topRight'
            });
        })
        .finally(() => {
            hideLoader();
            searchForm.reset();
        });
};

searchForm.addEventListener('submit', onSearchForm);