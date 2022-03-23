import i18next from 'i18next';
import { init } from './language';
import {
  name, focus, timeSetting, timeContainer, greetingsSetting, focusSetting, audiosetting, weatherSetting, quotesSetting, greetContainer, focusContainer, audioContainer, weatherContainer, quoteContainer, sliderLang, langSetting, enSetting, ruSetting
} from './constants';

const getName = () => {
  if (localStorage.getItem('name') === null) {
    name.textContent = `${i18next.t('enterName')}`;
  } else {
    name.textContent = localStorage.getItem('name');
  }
};
// delete name
const delName = () => {
  name.textContent = '';
  if (localStorage.getItem('name') === null) {
    localStorage.setItem('name', `${i18next.t('enterName')}`);
  }
};

// set name
const setName = (e) => {
  const storage = localStorage.getItem('name');

  if (e.type === 'keypress') {
    // enter pressed
    if (e.which === 13 || e.keyCode === 13) {
      if (e.target.innerText === '') {
        name.textContent = storage;
      }
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    // blur
    if (e.target.innerText === '') {
      name.textContent = storage;
    }
    localStorage.setItem('name', e.target.innerText);
  }
};

// get focus
const getFocus = () => {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = `${i18next.t('enterFocus')}`;
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
};
// delete focus
const delFocus = () => {
  focus.textContent = '';
  if (localStorage.getItem('focus') === null) {
    localStorage.setItem('focus', `${i18next.t('enterName')}`);
  }
};

// set focus
const setFocus = (e) => {
  const storage = localStorage.getItem('focus');
  if (e.type === 'keypress') {
    // enter pressed
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText === '') {
        focus.textContent = storage;
      }
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    // blur
    if (e.target.innerText === '') {
      focus.textContent = storage;
    }
    localStorage.setItem('focus', e.target.innerText);
  }
};

// eslint-disable-next-line max-len
const settingArr = [timeSetting, greetingsSetting, focusSetting, audiosetting, weatherSetting, quotesSetting];
// eslint-disable-next-line max-len
const containerArr = [timeContainer, greetContainer, focusContainer, audioContainer, weatherContainer, quoteContainer];
const localName = ['time', 'greet', 'focusSet', 'audio', 'weather', 'quotes'];

const getSetting = () => {
  if (!localStorage.getItem('lang')) {
    sliderLang.checked = false;
  } else {
    sliderLang.checked = JSON.parse(localStorage.getItem('lang'));
    if (localStorage.getItem('lang') === 'true') {
      i18next.changeLanguage('ru');
      ruSetting.classList.add('backgroundLang');
      enSetting.classList.remove('backgroundLang');
    } else {
      i18next.changeLanguage('en');
      enSetting.classList.add('backgroundLang');
      ruSetting.classList.remove('backgroundLang');
    }
  }
  for (let i = 0; i < settingArr.length; i++) {
    if (!localStorage.getItem(localName[i])) {
      settingArr[i].checked = true;
    } else {
      settingArr[i].checked = JSON.parse(localStorage.getItem(localName[i]));
      if (localStorage.getItem(localName[i]) === 'true') {
        containerArr[i].classList.remove('none');
      } else if ((localStorage.getItem(localName[i]) === 'false')) {
        containerArr[i].classList.add('none');
      }
    }
  }
};
const setSetting = () => {
  localStorage.setItem('lang', sliderLang.checked);
  for (let i = 0; i < settingArr.length; i++) {
    localStorage.setItem(localName[i], settingArr[i].checked);
  }
};

export const getNameAndFocus = () => {
  getName();
  getFocus();
  getSetting();
};

export const listnerNameAndFocus = () => {
  name.addEventListener('keypress', setName);
  name.addEventListener('blur', setName);
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', setFocus);
  name.addEventListener('click', delName);
  focus.addEventListener('click', delFocus);
  sliderLang.addEventListener('click', setSetting);
  settingArr.forEach((el) => {
    el.addEventListener('click', setSetting);
  });
};
