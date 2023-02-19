const checkStringLength = (string, length) => (string.length) <= length;

checkStringLength('проверяемая строка', 18);

const checkIsPalindrome = (string) => {
  string = string.toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
};

checkIsPalindrome('Лёша на полке клопа нашёл ');

const getNumFromStr = (stringValue) => {
  const result = String(stringValue).replace(/[^0-9]/g, '');
  return parseInt(result, 10);
};

getNumFromStr(-1.5);

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

creatNewString('q', 4, 'werty');
