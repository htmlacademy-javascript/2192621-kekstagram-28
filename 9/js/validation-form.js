const imgUploadForm = document.querySelector('.img-upload__form');
const hashtag = document.querySelector('.text__hashtags');

const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG = 5;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

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

pristine.addValidator(hashtag, checkIsHashtagRegexp, 'неверный хэш-тег, хэш-теги должны разделяться пробелами');
pristine.addValidator(hashtag, checkHashtagLength, `нельзя указать больше ${MAX_HASHTAG} хэш-тегов`);
pristine.addValidator(hashtag, checkHashtagSame, 'один и тот же хэш-тег не может быть использован дважды');

const validateForm = () => pristine.validate();

export { validateForm };
