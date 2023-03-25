import { isEscapeKey } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const removeErrorMessage = () => {
  document.removeEventListener('keydown', onErrorMessageKeydown);

  document.querySelector('.success').remove();
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

function onSuccessMessageKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeSuccessMessage();
  }
}

function onSuccessMessageClick(evt){
  evt.preventDefault();
  if(evt.target.closest('.success__button') || evt.target.matches('.success')) {
    removeSuccessMessage();
  }
}

const renderMessage = (element) => document.body.append(element);

// const createErrorLoadMessage = (message) => {
//   const div = document.createElement('div');
//   div.classList.add('error-message');
//   div.textContent = message;
//   renderMessage(div);
// };

const createErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  renderMessage(errorMessage);

  document.addEventListener('keydown', onErrorMessageKeydown);
};

const createSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  renderMessage(successMessage);

  document.addEventListener('keydown', onSuccessMessageKeydown);
  document.addEventListener('click', onSuccessMessageClick);
};

export { createErrorMessage, createSuccessMessage };
