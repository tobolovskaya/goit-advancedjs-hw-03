import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = (error) => reject(error);
  });
};

export const renderImages = async (images) => {
  gallery.innerHTML = '';

  const imagePromises = images.map(image => loadImage(image.webformatURL));
    await Promise.all(imagePromises);

  gallery.innerHTML = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}">
      <div class="info">
        <div>
          <p>Likes</p>
          <p>${image.likes}</p>
        </div>
        <div>
          <p>Views</p>
          <p>${image.views}</p>
        </div>
        <div>
          <p>Comments</p>
          <p>${image.comments}</p>
        </div>
        <div>
          <p>Downloads</p>
          <p>${image.downloads}</p>
        </div>
      </div>
    </a>
  `
    )
    .join('');

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });
  lightbox.refresh();
};

export const showNotification = message => {
  iziToast.error({
    message: message,
    position: 'topRight',
    color: '#EF4040',
    messageColor: 'white',
    iconColor: 'white',
    timeout: 9999999
  });
};