import { fetchImages } from './js/pixabay-api';
import { renderImages, showNotification } from './js/render-functions';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form input[name="search"]');
const loader = document.querySelector('.loader');

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showNotification('Please enter a search query.');
    return;
  }

  loader.style.display = 'flex'; 

  try {
    const data = await fetchImages(query);
    
    if (data.hits.length === 0) {
      showNotification('Sorry, there are no images matching your search query. Please try again!');
    }

    form.reset();
    await renderImages(data.hits);
  } catch (error) {
    showNotification('An error occurred while fetching images. Please try again later.');
  } finally {
    loader.style.display = 'none'; 
    form.reset();
  }
};

form.addEventListener('submit', handleSubmitForm);
