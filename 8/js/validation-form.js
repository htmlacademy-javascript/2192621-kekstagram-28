const imgUploadForm = document.querySelector('.img-upload__form');
const hashtag = document.querySelector('.text__hashtags');

const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG = 5;

const messageHashtagError = `Нельзя указать больше ${MAX_HASHTAG} хэш-тегов`;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

const checkIsHashtagRegexp = (hashtags) => {
  for (let i = 0; i < hashtags.length; i++) {
    if (REGEXP.test(hashtags[i])) {
      return true;
    }
  }
  return false;
};

const checkHashtagSame = (hashtags) => {
  for (let i = 0; i < hashtags.length; i++) {
    const currentItem = hashtags[i].toLowerCase();
    for (let j = i + 1; j < hashtags.length; j++) {
      const nextItem = hashtags[j].toLowerCase();
      if (currentItem === nextItem) {
        return true;
      }
    }
  }
  return false;
};

const checkHashtagLength = (hashtags) => {
  if (hashtags.length > MAX_HASHTAG) {
    return true;
  }
  return false;
};


const validateHashtag = () => {
  const hashtags = hashtag.value.trim().split(' ');
  const isValid = checkIsHashtagRegexp(hashtags) && checkHashtagSame(hashtags) && checkHashtagLength(hashtags);
  if (hashtag.length > 0) {
    return isValid;
  }
  return false;
};


pristine.addValidator(hashtag, validateHashtag, messageHashtagError);

const validate = () => {
  if (pristine.validate()) {
    return true;
  }
  return false;
};

export { validate };
