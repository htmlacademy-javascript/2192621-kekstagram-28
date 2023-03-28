import { isEscapeKey } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const renderMessage = (element) => document.body.append(element);

const createErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  renderMessage(errorMessage);

  document.querySelector('.error').addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onErrorMessageKeydown);
};

const removeErrorMessage = () => document.querySelector('.error').remove();

const createSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  renderMessage(successMessage);

  document.addEventListener('keydown', onSuccessMessageKeydown);
  document.querySelector('.success').addEventListener('click', onSuccessMessageClick);
};

const removeSuccessMessage = () => document.querySelector('.success').remove();

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
