import { renderPhotos } from './render-photos.js';
import { loadPhoto } from './uploading-image.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { initFilter } from './filter.js';
import './avatar.js';

getData()
  .then((pictures) => {
    renderPhotos(pictures);
    initFilter(pictures);
  })
  .catch((err) => showAlert(err.message));

loadPhoto();
