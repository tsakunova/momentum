import i18next from 'i18next';
import {
  time, MONTH_NAME, WEEK_DAY_NAME, week
} from './constants';

const addZero = (n) => (parseInt(n, 10) < 10 ? '0' : '') + n;

export const showTime = () => {
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  const month = i18next.t(MONTH_NAME[today.getMonth()]);
  const day = today.getDate();
  const weekDay = i18next.t(WEEK_DAY_NAME[today.getDay()]); // day of week 0-6
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  if (i18next.language === 'en') {
    week.innerHTML = `${weekDay}, ${month} ${day}`;
  } else {
    week.innerHTML = ` ${weekDay}, ${day} ${month}`;
  }

  /*  if (min === 0 && sec === 0) {
    setBG();
  } */
  setTimeout(showTime, 1000);
};
