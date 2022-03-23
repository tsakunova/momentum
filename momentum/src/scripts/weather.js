import {
  weatherDescription, weatherError, temperature, humidity, wind, city, weatherLoading, weatherIcon
} from './constants';
import i18next from 'i18next';

const resetWeather = () => {
  weatherError.textContent = '';
  temperature.textContent = '';
  weatherDescription.textContent = '';
  humidity.textContent = '';
  wind.textContent = '';
};

export const getWeather = async () => {
  resetWeather();
  const cityStorage = localStorage.getItem('city');
  let cityName = (!city.textContent) ? i18next.t('city') : city.textContent;
  if (cityStorage) {
    city.textContent = cityStorage;
    cityName = cityStorage;
  } else {
    city.textContent = i18next.t('city');
    localStorage.setItem('city', i18next.t('city'));
  }
  weatherLoading.textContent = 'Loading';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${i18next.language}&appid=584520212cf6d7836596b3cabf28fb4f&units=metric`;
  try {
    // let data;
    // fetch(url).then(resp => resp.json()).then(result => data = result)
    const res = await fetch(url);
    const data = await res.json();
    weatherLoading.textContent = '';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${i18next.t('temp')}: ${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `${i18next.t('humid')}: ${Math.round(data.main.humidity)} %`;
    wind.textContent = `${i18next.t('wind')}: ${Math.round(data.wind.speed)} m/s`;
  } catch (e) {
    weatherError.textContent = `${i18next.t('errCity')}`;
  }
};

const delCity = () => {
  city.textContent = '';
  if (localStorage.getItem('city') === null) {
    localStorage.setItem('city', '[Enter City]');
  }
};

// set city
const setCity = (e) => {
  const storage = localStorage.getItem('city');
  if (e.type === 'keypress') {
    // enter pressed
    if (e.which === 13 || e.keyCode === 13) {
      if (e.target.innerText === '') {
        city.textContent = storage;
      }
      city.textContent = e.target.innerText;
      localStorage.setItem('city', e.target.innerText);
      city.blur();
      getWeather();
    }
  } else {
    // blur
    if (e.target.innerText === '') {
      city.textContent = storage;
    }
    city.textContent = e.target.innerText;
    localStorage.setItem('city', e.target.innerText);
    getWeather();
  }
};

export const listnerWeather = () => {
  document.addEventListener('DOMContentLoaded', getWeather);
  city.addEventListener('keypress', setCity);
  city.addEventListener('blur', setCity);
  city.addEventListener('click', delCity);
};
