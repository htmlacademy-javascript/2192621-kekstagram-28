const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export { getRandomInteger, getRandomArrayElement };

const checkStringLength = (string, length) => (string.length) <= length;

checkStringLength();

const checkIsPalindrome = (string) => {
  string = string.toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
};

checkIsPalindrome();

const getNumFromStr = (string) => parseInt(String(string).replace(/[^0-9]/g, ''), 10);

getNumFromStr();

const creatNewString = (string, length, extention) => {
  if (string.length >= length) {
    return string;
  }

  while (string.length < length) {
    const extentionLength = length - string.length;
    string = extention.slice(0, extentionLength) + string;
  }
  return string;
};

creatNewString();
