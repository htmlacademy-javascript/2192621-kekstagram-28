import { renderPhotos } from './render-photos.js';
import { loadPhoto } from './uploading-image.js';
import { getData } from './api.js';

getData()
  .then((pictures) => renderPhotos(pictures));

loadPhoto();
