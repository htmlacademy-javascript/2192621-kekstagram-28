const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: ''
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const errorText = 'Не удалось загрузить данные. Попробуйте обновить страницу';

const load = (route, method, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, Method.GET);

const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);

export { getData, sendData };
