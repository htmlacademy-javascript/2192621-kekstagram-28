const imgUploadForm = document.querySelector('.img-upload__form');
const hashtag = document.querySelector('.text__hashtags');

const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const MAXHASHTAG = 5;

const messageHashtagError = `Нельзя указать больше ${MAXHASHTAG} хэш-тегов`;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

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
      const nextItem = hashtags[i].toLowerCase();
      if (currentItem === nextItem) {
        return true;
      }
    }
  }
  return false;
};

const checkHashtagLength = (hashtags) => {
  if (hashtags.length > MAXHASHTAG) {
    return true;
  }
  return false;
};

const validatHashtag = () => {
  const hashtags = hashtag.value.split(' ');
  const isValid = checkIsHashtagRegexp(hashtags) && checkHashtagSame(hashtags) && checkHashtagLength(hashtags);
  return isValid;
};


pristine.addValidator(hashtag, validatHashtag, messageHashtagError);

const validate = () => {
  pristine.validate();
};

export { validate };
