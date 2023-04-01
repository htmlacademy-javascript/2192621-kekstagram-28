const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_VALUE = 100;
const PERCENT_DIVIDER = 100;

const btnControlSmaller = document.querySelector('.scale__control--smaller');
const btnControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

function scaleImage(value) {
  imageElement.style.transform = `scale(${value / PERCENT_DIVIDER})`;
  scaleControlValue.value = `${value}%`;
}

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE_VALUE) {
    newValue = MIN_SCALE_VALUE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE_VALUE) {
    newValue = MAX_SCALE_VALUE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_VALUE);

btnControlSmaller.addEventListener('click', onSmallerButtonClick);
btnControlBigger.addEventListener('click', onBiggerButtonClick);

export { resetScale };
