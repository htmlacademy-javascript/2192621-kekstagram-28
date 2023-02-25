const PHOTO_DESCRIPTION = [
  'Пляж у отеля',
  'Тропа с указателем на пляж',
  'Пляж',
  'Девушка на фоне моря',
  'Рисовые человечки в ванночке',
  'Крутая машина',
  'Тарелочка с клубникой',
  'Морс',
  'Пролетающий самолёт',
  'Удобная полка для хранения обуви',
  'Дорога к морю',
  'Супер тачка',
  'Попробовали азиатскую кухню',
  'Суши с Кексом',
  'Зимой в них очень уютно',
  'Летим над горами',
  'Хоровой концерт',
  'Раритетный автомобиль',
  'Ночью в этих тапочках вы точно не упадёте',
  'Пальмы',
  'Салат',
  'Закат на фоне моря',
  'Крабик',
  'Оттянулись на концерте',
  'Поехали в джунгли',
];

const NAMES = [
  'Наталия',
  'Нина',
  'Татьяна',
  'Ольга',
  'Джантемир',
  'Артур',
  'Александр',
  'Руслан',
  'Елена',
  'Павел',
  'Адель',
  'Ильдар',
  'Эльвира',
  'Адик',
  'Евгений',
  'Рамиль',
  'Сергей',
  'Антон',
  'Рашид',
  'Густав',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_GET_PHOTO_DESCRIPTION_COUNT = 25;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomId = (min, max) => {
  const previousId = [];

  return function () {
    let currentId = getRandomInteger(min, max);
    if (previousId.length >= (max - min + 1)) {
      return null;
    }
    while (previousId.includes(currentId)) {
      currentId = getRandomInteger(min, max);
    }
    previousId.push(currentId);
    return currentId;
  };
};

const generateCommentId = getRandomId(1, 1000);

const getRandomURL = (min, max) => {
  const previousURL = [];

  return function () {
    let currentURL = getRandomInteger(min, max);
    if (previousURL.length >= (max - min + 1)) {
      return null;
    }
    while (previousURL.includes(currentURL)) {
      currentURL = getRandomInteger(min, max);
    }
    previousURL.push(currentURL);
    return currentURL;
  };
};

const getCommentsGenerator = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

const getPhotoDescription = () => {
  const photoUrl = getRandomURL(1, 25);
  const generatePhotoId = getRandomId(1, 25);

  return {
    id: generatePhotoId(),
    url: `photos/${photoUrl()}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: getCommentsGenerator(),
  };
};

const similarGetPhotoDescription = () => Array.from({ length: SIMILAR_GET_PHOTO_DESCRIPTION_COUNT }, getPhotoDescription);

similarGetPhotoDescription();
