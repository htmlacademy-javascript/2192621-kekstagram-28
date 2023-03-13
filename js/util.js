const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const checkStringLength = (string, length) => string.length <= length;

const checkIsPalindrome = (string) => {
  string = string.toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
};

const getNumFromStr = (string) => parseInt(String(string).replace(/[^0-9]/g, ''), 10);

const createNewString = (string, length, extension) => {
  if (string.length >= length) {
    return string;
  }

  while (string.length < length) {
    const extensionLength = length - string.length;
    string = extension.slice(0, extensionLength) + string;
  }
  return string;
};

export { getRandomInteger, getRandomArrayElement, checkStringLength, checkIsPalindrome, getNumFromStr, createNewString, isEscapeKey };
