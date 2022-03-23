import quotes from './quotesData.json';
import quotesru from './quotesRu.json';

export const getQuotesList = (lang) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const qs = lang ==='en'? quotes: quotesru;
    if (qs) {
      resolve(qs);
    } else {
      reject('Loading quotes error!');
    }
  }, 500);
});
