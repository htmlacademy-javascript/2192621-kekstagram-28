import { isEscapeKey } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const renderMessage = (element) => document.body.append(element);

const createErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  renderMessage(errorMessage);

  document.addEventListener('keydown', onErrorMessageKeydown);
  document.addEventListener('click', onErrorMessageClick);
};

const createSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  renderMessage(successMessage);

  document.addEventListener('keydown', onSuccessMessageKeydown);
  document.addEventListener('click', onSuccessMessageClick);
};

const removeErrorMessage = () => {
  document.removeEventListener('keydown', onErrorMessageKeydown);
  document.querySelector('.error').removeEventListener('click', onErrorMessageKeydown);

  document.querySelector('.error').remove();
};

const removeSuccessMessage = () => {
  document.removeEventListener('keydown', onSuccessMessageKeydown);
  document.querySelector('.success').removeEventListener('click', onSuccessMessageClick);

  document.querySelector('.success').remove();
};

function onErrorMessageKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeErrorMessage();
  }
}

function onErrorMessageClick(evt) {
  evt.preventDefault();
  if (evt.target.closest('.error__button') || evt.target.matches('.error')) {
    removeErrorMessage();
  }
}

function onSuccessMessageKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeSuccessMessage();
  }
}

function onSuccessMessageClick(evt) {
  evt.preventDefault();
  if (evt.target.closest('.success__button') || evt.target.matches('.success')) {
    removeSuccessMessage();
  }
}

export { createErrorMessage, createSuccessMessage };
