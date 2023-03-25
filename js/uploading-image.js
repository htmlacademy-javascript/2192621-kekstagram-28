import { isEscapeKey, showAlert } from './util.js';
import { validateForm, resetInputValue } from './validation-form.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';
import { sendData } from './api.js';
import { createSuccessMessage } from './fetch-message.js';

const editImage = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadCloseButton = document.querySelector('.img-upload__cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const submitButtonTextContent = {
  DEFAULT: 'Опубликовать',
  SENDING: 'Загружаю...'
};

const openEditingImage = () => {
  editImage.classList.remove('hidden');
  document.body.classList.add('modal-open');

  resetScale();
  resetEffects();

  imgUploadCloseButton.addEventListener('click', onEditImageCloseButtonClick);
  document.addEventListener('keydown', onEditImageEscKeydown);
};

const closeEditingImage = () => {
  imgUploadInput.value = '';

  editImage.classList.add('hidden');
  document.body.classList.remove('modal-open');

  resetScale();
  resetEffects();

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

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = submitButtonTextContent.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = submitButtonTextContent.DEFAULT;
};

// function onError() {
//   createErrorMessage();
// }

function onSuccess() {
  closeEditingImage();
  resetInputValue();
  createSuccessMessage();
}

function onEditImageFormSubmit(evt) {
  evt.preventDefault();
  if (validateForm()) {
    blockSubmitButton();
    sendData(new FormData(evt.target))
      .then(onSuccess)
      .catch((err) => {
        showAlert(err.message);
      })
      // .catch(onError)
      .finally(unblockSubmitButton);
  }
}

imgUploadForm.addEventListener('submit', onEditImageFormSubmit);

const loadPhoto = () => {
  imgUploadInput.addEventListener('change', onUploadPhotoChange);
};

export { loadPhoto };
