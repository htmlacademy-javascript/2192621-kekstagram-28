const imgUploadForm = document.querySelector('.img-upload__form');
const hashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG = 5;
const MAX_COMMENTS_LENGTH = 140;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

const isValidComment = (comment) => comment.length <= MAX_COMMENTS_LENGTH; //эта функция не работает....

const checkIsHashtagRegexp = (hashtags) => {
  const hashtagArray = hashtags.trim().split(' ');
  const isValid = hashtagArray.some((hashtagElement) => !REGEXP.test(hashtagElement));
  return (!hashtag.value.length) ? isValid : !isValid;
};

const checkHashtagLength = (hashtags) => {
  const hashtagArray = hashtags.trim().split(' ');
  return hashtagArray.length <= MAX_HASHTAG;
};

const checkHashtagSame = (hashtags) => {
  const hashtagArray = hashtags.trim().split(' ');
  return new Set(hashtagArray).size === hashtagArray.length;
};

pristine.addValidator(hashtag, checkIsHashtagRegexp, 'Неверный хэш-тег, хэш-теги должны разделяться пробелами');
pristine.addValidator(hashtag, checkHashtagLength, `Нельзя указать больше ${MAX_HASHTAG} хэш-тегов`);
pristine.addValidator(hashtag, checkHashtagSame, 'Один и тот же хэш-тег не может быть использован дважды');
pristine.addValidator(textDescription, isValidComment, `Длинна комментария не должна превышать ${MAX_COMMENTS_LENGTH} символов`);

const resetInputValue = () => {
  hashtag.value = '';
  textDescription.value = '';
};

const validateForm = () => pristine.validate();

export { validateForm, resetInputValue };
