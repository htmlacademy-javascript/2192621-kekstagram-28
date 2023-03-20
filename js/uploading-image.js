import { isEscapeKey } from './util.js';
import { validateForm } from './validation-form.js';

const editImage = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadCloseButton = document.querySelector('.img-upload__cancel');
const imgUploadForm = document.querySelector('.img-upload__form');

const openEditingImage = () => {
  editImage.classList.remove('hidden');
  document.body.classList.add('modal-open');

  imgUploadCloseButton.addEventListener('click', onEditImageCloseButtonClick);
  document.addEventListener('keydown', onEditImageEscKeydown);
};

const closeEditingImage = () => {
  imgUploadInput.value = '';

  editImage.classList.add('hidden');
  document.body.classList.remove('modal-open');

  imgUploadCloseButton.removeEventListener('click', onEditImageCloseButtonClick);
  document.removeEventListener('keydown', onEditImageEscKeydown);
};

function onEditImageCloseButtonClick(evt) {
  evt.preventDefault();
  closeEditingImage();
}

function onUploadPhotoChange(evt) {
  evt.preventDefault();
  openEditingImage();
}

function onEditImageEscKeydown(evt) {
  if (isEscapeKey(evt) && !evt.target.closest('.text__hashtags') && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeEditingImage();
  }
}

function onEditImageFormSubmit(evt) {
  if (!validateForm()) {
    evt.preventDefault();
  }
}

imgUploadForm.addEventListener('submit', onEditImageFormSubmit);

const loadPhoto = () => {
  imgUploadInput.addEventListener('change', onUploadPhotoChange);
};

export { loadPhoto };
