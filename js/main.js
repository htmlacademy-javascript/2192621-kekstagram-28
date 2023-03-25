import { renderPhotos } from './render-photos.js';
import { loadPhoto } from './uploading-image.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
// import { createErrorLoadMessage } from './fetch-message.js';

getData()
  .then((pictures) => renderPhotos(pictures))
  .catch((err) => showAlert(err.message));

loadPhoto();
