const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG = 5;
const MAX_COMMENTS_LENGTH = 140;

const imgUploadForm = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

const isValidComment = (comment) => comment.length <= MAX_COMMENTS_LENGTH;

const createHashtagArray = (value) => value.trim().toLowerCase().split(' ').filter((item) => item);

const checkIsHashtagRegexp = (hashtags) => {
  if (!hashtags) {
    return true;
  }
  const hashtagArray = createHashtagArray(hashtags);
  return hashtagArray.every((hashtag) => REGEXP.test(hashtag));
};

const checkHashtagLength = (hashtags) => {
  const hashtagArray = createHashtagArray(hashtags);
  return hashtagArray.length <= MAX_HASHTAG;
};

const checkHashtagSame = (hashtags) => {
  const hashtagArray = createHashtagArray(hashtags);
  return new Set(hashtagArray).size === hashtagArray.length;
};

pristine.addValidator(hashtagField, checkIsHashtagRegexp, 'Неверный хэш-тег, хэш-теги должны разделяться пробелами');
pristine.addValidator(hashtagField, checkHashtagLength, `Нельзя указать больше ${MAX_HASHTAG} хэш-тегов`);
pristine.addValidator(hashtagField, checkHashtagSame, 'Один и тот же хэш-тег не может быть использован дважды');
pristine.addValidator(textDescription, isValidComment, `Длинна комментария не должна превышать ${MAX_COMMENTS_LENGTH} символов`);

const resetPristine = () => pristine.reset();
const validateForm = () => pristine.validate();

export { validateForm, resetPristine };
