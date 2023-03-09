import { createPhotos } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPhotos = createPhotos();

const createPhoto = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__img').alt = photo.description;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  return pictureElement;
};

const renderPhotos = () => {
  similarPhotos.forEach((item) => picturesContainer.append(createPhoto(item)));
};

export { renderPhotos };
