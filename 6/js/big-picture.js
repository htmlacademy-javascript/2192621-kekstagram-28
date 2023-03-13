import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const socialCommenCount = document.querySelector('.social__comment-count');
const commentsLoaderBtn = document.querySelector('.comments-loader');

const fillCommentData = (comment) => {
  const commentClone = commentTemplate.cloneNode(true);
  commentClone.querySelector('.social__picture').src = comment.avatar;
  commentClone.querySelector('.social__picture').alt = comment.name;
  commentClone.querySelector('.social__text').textContent = comment.message;
  return commentClone;
};

const renderComments = (comments) => {
  comments.forEach((comment) => commentsList.append(fillCommentData(comment)));
};

const fillPictureData = (photo) => {
  bigPicture.querySelector('img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  commentsList.innerHTML = '';
  renderComments(photo.comments);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  bigPictureCloseBtn.removeEventListener('click', onBigPictureCloseClick);
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommenCount.classList.add('hidden');
  commentsLoaderBtn.classList.add('hidden');

  bigPictureCloseBtn.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onBigPictureEscKeydown);
};

function onBigPictureCloseClick (evt) {
  evt.preventDefault();
  closeBigPicture();
}

function onBigPictureEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const onPictureClick = (photo) => {
  openBigPicture();
  fillPictureData(photo);
};

export { onPictureClick };
