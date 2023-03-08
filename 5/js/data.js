import { getRandomInteger, getRandomArrayElement } from './util.js';

const PHOTO_DESCRIPTIONS = [
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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTO_COUNT = 25;

let photoId = 1;
let commentId = 1;

const createMessage = () => {
  const message = Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES));
  return [... new Set(message)].join(' ');
};

const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${commentId}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
  commentId += 1;
  return comment;
};

const createPhoto = () => {
  const photo = {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(1, 6) }, createComment),
  };
  photoId += 1;
  return photo;
};

const createPhotos = () => Array.from({ length: PHOTO_COUNT }, createPhoto);

export { createPhotos };
