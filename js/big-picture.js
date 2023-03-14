import { isEscapeKey } from './util.js';

const COMMENT_COUNTER = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoaderBtn = document.querySelector('.comments-loader');

let commentsLength = 0;
let showingComments = 0;

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

const fillCommentsCount = () => {
  socialCommentCount.innerHTML = `${showingComments} из <span class="comments-count">${commentsLength}</span> комментариев`;
};

const showComments = (comments) => {
  showingComments += COMMENT_COUNTER;
  const arrayComments = comments.slice(0, showingComments);
  renderComments(arrayComments);
  fillCommentsCount();
  if (showingComments >= commentsLength) {
    commentsLoaderBtn.classList.add('hidden');
  } else {
    commentsLoaderBtn.classList.remove('hidden');
  }
};

const fillPictureData = (photo) => {
  bigPicture.querySelector('img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  commentsList.innerHTML = '';
  commentsLength = photo.comments.length;
  showComments(photo.comments);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  commentsLoaderBtn.removeEventListener('click', onCommentsLoaderBtn);
  bigPictureCloseBtn.removeEventListener('click', onBigPictureCloseClick);
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  commentsLength = 0;
  showingComments = 0;
};

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  commentsLoaderBtn.addEventListener('click', onCommentsLoaderBtn);
  bigPictureCloseBtn.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onBigPictureEscKeydown);

  fillPictureData(photo);
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

function onCommentsLoaderBtn (evt) {
  evt.preventDefault();
  renderComments();
}

const onPictureClick = (photo) => {
  openBigPicture(photo);
};

export { onPictureClick };
