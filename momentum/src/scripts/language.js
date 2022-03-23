import i18next from 'i18next';
import { enSetting, ruSetting, sliderLang } from './constants';
import { showTime } from './time';
import { getWeather } from './weather';
import { setBG } from './welcome-bg';
import { getQuote } from './quotes';
import { getNameAndFocus } from './local-save';
import { addTextSetting } from './setting';

const translationRu = {
  Sunday: 'Воскресенье',
  Monday: 'Понедельник',
  Tuesday: 'Вторник',
  Wednesday: 'Среда',
  Thursday: 'Четверг',
  Friday: 'Пятница',
  Saturday: 'Суббота',
  January: 'января',
  February: 'февраля',
  March: 'марта',
  April: 'апреля',
  May: 'мая',
  June: 'июня',
  July: 'июля',
  August: 'августа',
  September: 'сентября',
  October: 'октября',
  November: 'ноября',
  December: 'декабря',
  enterFocus: '[Введите цель]',
  enterName: '[Введите имя]',
  temp: 'Температура',
  humid: 'Влажность',
  wind: 'Ветер',
  errCity: 'Город введен не верно',
  city: 'Минск',
  night: 'Доброй ночи',
  morning: 'Доброе утро',
  afternoon: 'Добрый день',
  evening: 'Добрый вечер',
  focus: 'На чем вы сосредоточены сегодня?',
  font: '"Marmelad", sans-serif',
  quotes: './quotesRu.json',
  language: 'Язык',
  english: 'Английский',
  russian: 'Русский',
  show: 'Показать/Спрятать',
  time: 'Время',
  greeting: 'Приветствие',
  focusSet: 'Фокус дня',
  audio: 'Аудио',
  weather: 'Погода',
  quotesSet: 'Цитаты'
};

const translationEn = {
  Sunday: 'Sunday',
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  January: 'January',
  February: 'February',
  March: 'March',
  April: 'April',
  May: 'May',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  November: 'November',
  December: 'December',
  enterFocus: '[Enter Focus]',
  enterName: '[Enter Name]',
  temp: 'Temperature',
  humid: 'Humidity',
  wind: 'Wind',
  errCity: 'ERROR: Incorrect Town',
  city: 'Minsk',
  night: 'Good night',
  morning: 'Good morning',
  afternoon: 'Good afternoon',
  evening: 'Good evening',
  focus: 'What Is Your Focus Today?',
  font: '"Quicksand", sans-serif',
  quotes: './quotesData.json',
  language: 'Language',
  english: 'English',
  russian: 'Russian',
  show: 'Show/ Hide',
  time: 'Time',
  greeting: 'Greetings',
  focusSet: 'Focus',
  audio: 'Audio Player',
  weather: 'Weather',
  quotesSet: 'Quotes'
};
export function init() {
  showTime();
  getWeather();
  setBG();
  getQuote();
  getNameAndFocus();
  addTextSetting();
}
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: translationEn
    },
    ru: {
      translation: translationRu
    }
  }
});

export const listnerLang = () => {
  sliderLang.addEventListener('click', () => {
    if (sliderLang.checked === true) {
      i18next.changeLanguage('ru', () => {
        init();
      });
    } else {
      i18next.changeLanguage('en', () => {
        init();
      });
    }
  });
};
