import { onPictureClick } from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__img').alt = photo.description;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    onPictureClick(photo);
  });

  return pictureElement;
};

const renderPhotos = (data) => {
  data.forEach((item) => picturesContainer.append(createPhoto(item)));
};

export { renderPhotos };
