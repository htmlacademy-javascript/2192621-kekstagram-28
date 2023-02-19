// Функция для проверки длины строки.
const getStringlength = (stringValue, length) => (stringValue.length) <= length;

getStringlength('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом.
const isPalindrome = (stringValue) => {
  let stringValueReverse = '';
  for (let i = stringValue.length - 1; i >= 0; i--) {
    stringValueReverse += stringValue[i];
  }
  return (stringValue.toLowerCase().replaceAll(' ', '') === stringValueReverse.toLowerCase().replaceAll(' ', ''));
};

isPalindrome('Лёша на полке клопа нашёл ');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры.
const getNumFromStr = (stringValue) => {
  const result = String(stringValue).replace(/[^0-9]/g, '');
  return parseInt(result, 10);
};

getNumFromStr(-1.5);

// Функция для формирования адресов файлов

