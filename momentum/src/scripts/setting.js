import i18next from 'i18next';
import {
  timeSetting, timeSettingSpan, focusSettingSpan, audiosettingSpan,
  weatherSettingSpan, quotesSettingSpan, langSetting, showSetting, enSetting, ruSetting,
  weatherSetting, greetingsSetting, quotesSetting, audiosetting, weatherContainer, timeContainer, greetContainer, focusContainer,
  quoteContainer, audioContainer, focusSetting, greetingsSettingSpan, settingBtn, settingMenu, sliderLang, overlay
} from './constants';
import { init } from './language';

const hiddenBlock = (elem, block) => {
  elem.addEventListener('change', () => {
    block.classList.toggle('none');
  });
};
export const addTextSetting = () => {
  timeSettingSpan.innerHTML = `${i18next.t('time')}`;
  greetingsSettingSpan.innerHTML = `${i18next.t('greeting')}`;
  focusSettingSpan.innerHTML = `${i18next.t('focusSet')}`;
  audiosettingSpan.innerHTML = `${i18next.t('audio')} `;
  weatherSettingSpan.innerHTML = `${i18next.t('weather')}`;
  quotesSettingSpan.innerHTML = `${i18next.t('quotesSet')}`;
  enSetting.innerHTML = `${i18next.t('english')}`;
  ruSetting.innerHTML = `${i18next.t('russian')}`;
  langSetting.innerHTML = `${i18next.t('language')}`;
  showSetting.innerHTML = `${i18next.t('show')}`;
};

const addLangSetting = () => {
  enSetting.addEventListener('click', () => {
    i18next.changeLanguage('en', () => {
      localStorage.setItem('lang', false);
      enSetting.classList.add('backgroundLang');
      ruSetting.classList.remove('backgroundLang');
      init();
    });
  });
  ruSetting.addEventListener('click', () => {
    i18next.changeLanguage('ru', () => {
      localStorage.setItem('lang', true);
      ruSetting.classList.add('backgroundLang');
      enSetting.classList.remove('backgroundLang');
      init();
    });
  });
};

export const listnerSetting = () => {
  hiddenBlock(weatherSetting, weatherContainer);
  hiddenBlock(timeSetting, timeContainer);
  hiddenBlock(greetingsSetting, greetContainer);
  hiddenBlock(focusSetting, focusContainer);
  hiddenBlock(quotesSetting, quoteContainer);
  hiddenBlock(audiosetting, audioContainer);
  addLangSetting();
  settingBtn.addEventListener('click', () => {
    settingMenu.classList.toggle('menuRight');
  });
};
