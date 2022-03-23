import {
  // eslint-disable-next-line max-len
  BASE_IMAGE_SRC, IMG_HOURS, IMAGE_STORAGE, greeting, preloadContainer, btnBackgroundLeft, btnBackgroundRight, dayFocus, body
} from './constants';
import { getRandom } from './quotes';
import i18next from "i18next";

let currentIndex = 0;
let imgHour = '';
let startBG = getRandom(1, 20);

const preloadImg = (url, callback) => {
  const img = new Image();
  img.src = url;
  img.width = 0;
  img.height = 0;
  preloadContainer.appendChild(img);
  img.onload = () => {
    callback();
    preloadContainer.innerHTML = '';
  };
};

const getHourText = () => {
  const today = new Date();
  const hour = today.getHours();
  if (hour < 6) {
    imgHour = IMG_HOURS[0];
  } else if (hour < 12) {
    imgHour = IMG_HOURS[1];
  } else if (hour < 18) {
    imgHour = IMG_HOURS[2];
  } else {
    imgHour = IMG_HOURS[3];
  }
  return imgHour;
};

const setBgGreet = (image) => {
  let bg = '';
  const hour = getHourText();
  if (hour === 'night') {
    bg = `url('${BASE_IMAGE_SRC}${hour}/${image}')`;
    preloadImg(`${BASE_IMAGE_SRC}${hour}/${image}`, () => {
      document.body.style.backgroundImage = bg;
      greeting.textContent = `${i18next.t('night')}`;
    });
  } else if (hour === 'morning') {
    bg = `url('${BASE_IMAGE_SRC}${hour}/${image}')`;
    preloadImg(`${BASE_IMAGE_SRC}${hour}/${image}`, () => {
      document.body.style.backgroundImage = bg;
      greeting.textContent = `${i18next.t('morning')}`;
    });
  } else if (hour === 'afternoon') {
    bg = `url('${BASE_IMAGE_SRC}${hour}/${image}')`;
    preloadImg(`${BASE_IMAGE_SRC}${hour}/${image}`, () => {
      document.body.style.backgroundImage = bg;
      greeting.textContent = `${i18next.t('afternoon')}`;
    });
  } else {
    bg = `url('${BASE_IMAGE_SRC}${hour}/${image}')`;
    preloadImg(`${BASE_IMAGE_SRC}${hour}/${image}`, () => {
      document.body.style.backgroundImage = bg;
      greeting.textContent = `${i18next.t('evening')}`;
    });
  }
};
export const setBG = () => {
  // generateImages();
  setBgGreet(IMAGE_STORAGE[startBG]);
  currentIndex = startBG;
  dayFocus.innerHTML = `${i18next.t('focus')}`;
  body.style.fontFamily = `${i18next.t('font')}`;
  /* setBgGreet(IMAGE_STORAGE[currentIndex]);
  currentIndex++;
  if (currentIndex >= IMAGE_STORAGE.length) {
    currentIndex = 0;
  } */
};

const changeBgLeft = () => {
  const hour = getHourText();
  if (currentIndex <= IMAGE_STORAGE.length) {
    currentIndex--;
  }
  if (currentIndex < 0) {
    currentIndex = 19;
  }
  const bg = `url('${BASE_IMAGE_SRC}${hour}/${IMAGE_STORAGE[currentIndex]}')`;
  preloadImg(`${BASE_IMAGE_SRC}${hour}/${IMAGE_STORAGE[currentIndex]}`, () => {
    document.body.style.backgroundImage = bg;
  });
};
const changeBgRight = () => {
  const hour = getHourText();
  if (currentIndex !== IMAGE_STORAGE.length) {
    currentIndex++;
  }
  if (currentIndex === IMAGE_STORAGE.length) {
    currentIndex = 0;
  }
  const bg = `url('${BASE_IMAGE_SRC}${hour}/${IMAGE_STORAGE[currentIndex]}')`;
  preloadImg(`${BASE_IMAGE_SRC}${hour}/${IMAGE_STORAGE[currentIndex]}`, () => {
    document.body.style.backgroundImage = bg;
  });
};

export const listner = () => {
  btnBackgroundLeft.addEventListener('click', changeBgLeft);
  btnBackgroundRight.addEventListener('click', changeBgRight);
};
