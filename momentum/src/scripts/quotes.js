import { blockquote, figcaption, btn } from './constants';
import { getQuotesList } from './api';
import i18next from 'i18next';

export const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
};

export const getQuote = async () => {
  try {
    const data = await getQuotesList(i18next.language);
    const curentQuote = data[getRandom(0, data.length)];
    blockquote.textContent = curentQuote.text;
    figcaption.textContent = curentQuote.author;
  } catch (e) {
    blockquote.textContent = 'What you are is what you have been. What you’ll be is what you do now.';
    figcaption.textContent = 'Buddha';
  }
};

export const listnerQuote = () => {
  document.addEventListener('DOMContentLoaded', getQuote);
  btn.addEventListener('click', getQuote);
};
