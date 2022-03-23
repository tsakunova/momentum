/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _scripts_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/time */ "./src/scripts/time.js");
/* harmony import */ var _scripts_welcome_bg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/welcome-bg */ "./src/scripts/welcome-bg.js");
/* harmony import */ var _scripts_local_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/local-save */ "./src/scripts/local-save.js");
/* harmony import */ var _scripts_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/weather */ "./src/scripts/weather.js");
/* harmony import */ var _scripts_quotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/quotes */ "./src/scripts/quotes.js");
/* harmony import */ var _scripts_audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/audio */ "./src/scripts/audio.js");
/* harmony import */ var _scripts_language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/language */ "./src/scripts/language.js");
/* harmony import */ var _scripts_setting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/setting */ "./src/scripts/setting.js");









(0,_scripts_audio__WEBPACK_IMPORTED_MODULE_6__.createTrackList)();
(0,_scripts_weather__WEBPACK_IMPORTED_MODULE_4__.listnerWeather)();
(0,_scripts_weather__WEBPACK_IMPORTED_MODULE_4__.getWeather)();
(0,_scripts_welcome_bg__WEBPACK_IMPORTED_MODULE_2__.setBG)();
(0,_scripts_time__WEBPACK_IMPORTED_MODULE_1__.showTime)();
(0,_scripts_local_save__WEBPACK_IMPORTED_MODULE_3__.getNameAndFocus)();
(0,_scripts_welcome_bg__WEBPACK_IMPORTED_MODULE_2__.listner)();
(0,_scripts_local_save__WEBPACK_IMPORTED_MODULE_3__.listnerNameAndFocus)();
(0,_scripts_quotes__WEBPACK_IMPORTED_MODULE_5__.listnerQuote)();
(0,_scripts_audio__WEBPACK_IMPORTED_MODULE_6__.listnerAudio)();
(0,_scripts_setting__WEBPACK_IMPORTED_MODULE_8__.listnerSetting)();
(0,_scripts_language__WEBPACK_IMPORTED_MODULE_7__.init)();
(0,_scripts_language__WEBPACK_IMPORTED_MODULE_7__.listnerLang)();
console.log("\u0421\u0430\u043C\u043E\u043E\u0446\u0435\u043D\u043A\u0430 134 \u0438\u0437 160 \u0431\u0430\u043B\u043B\u043E\u0432.\n\u041D\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0443\u043D\u043A\u0442\u044B:\n- \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0444\u043E\u043D\u043E\u0432\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442 API -10\n- \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E \u0434\u043B\u044F \u0444\u043E\u043D\u043E\u0432\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F -3 \u0431\u0430\u043B\u043B\u0430\n- \u0435\u0441\u043B\u0438 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E \u0443\u043A\u0430\u0437\u0430\u043D API, \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u0435\u0433/\u0442\u0435\u0433\u0438, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 API \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0435\u0442 \u0444\u043E\u0442\u043E -3\n- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043D\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u044B\u0432\u0430\u043B\u0441\u044F\n\u0418\u0442\u043E\u0433\u043E: 134 \u0431\u0430\u043B\u043B\u0430\n");

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQuotesList": () => (/* binding */ getQuotesList)
/* harmony export */ });
/* harmony import */ var _quotesData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotesData.json */ "./src/scripts/quotesData.json");
/* harmony import */ var _quotesRu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotesRu.json */ "./src/scripts/quotesRu.json");


var getQuotesList = function getQuotesList(lang) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var qs = lang === 'en' ? _quotesData_json__WEBPACK_IMPORTED_MODULE_0__ : _quotesRu_json__WEBPACK_IMPORTED_MODULE_1__;

      if (qs) {
        resolve(qs);
      } else {
        reject('Loading quotes error!');
      }
    }, 500);
  });
};

/***/ }),

/***/ "./src/scripts/audio.js":
/*!******************************!*\
  !*** ./src/scripts/audio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startAudio": () => (/* binding */ startAudio),
/* harmony export */   "createTrackList": () => (/* binding */ createTrackList),
/* harmony export */   "listnerAudio": () => (/* binding */ listnerAudio)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes */ "./src/scripts/quotes.js");
var _this = undefined;



var isStart = false;
var currentAudio = 0;
var audioList = [];

var audioTrack = function audioTrack() {
  _constants__WEBPACK_IMPORTED_MODULE_0__.audio.src = "assets/audio/".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO[currentAudio].src);
  audioList[currentAudio].classList.add('active-audio');
};

var startAudio = function startAudio() {
  audioTrack();

  if (!isStart) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.audio.play();
    isStart = true;
  } else {
    _constants__WEBPACK_IMPORTED_MODULE_0__.audio.pause();
    isStart = false;
  }
};

var toggleMute = function toggleMute() {
  if (_constants__WEBPACK_IMPORTED_MODULE_0__.audio.muted) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.audio.muted = false;
    muteStyle();
  } else if (!_constants__WEBPACK_IMPORTED_MODULE_0__.audio.muted) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.audio.muted = true;
    muteStyle();
  }
};

var muteStyle = function muteStyle() {
  var iconMute = _constants__WEBPACK_IMPORTED_MODULE_0__.audio.muted ? 'url(assets/img/muteoff.svg) 50% 50%/contain no-repeat' : 'url(assets/img/mute.svg) 50% 50%/contain no-repeat';
  _constants__WEBPACK_IMPORTED_MODULE_0__.muteBtn.style.background = iconMute;
};

var skip = function skip() {
  _constants__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime += parseFloat(_this.dataset.skip);
};

var handleRangeUpdate = function handleRangeUpdate() {
  _constants__WEBPACK_IMPORTED_MODULE_0__.audio.volume = _constants__WEBPACK_IMPORTED_MODULE_0__.progressVol.value;
  var percent = _constants__WEBPACK_IMPORTED_MODULE_0__.audio.volume * 100;
  _constants__WEBPACK_IMPORTED_MODULE_0__.progressVol.style.background = "linear-gradient(to right, #96e676 0%, #96e676 ".concat(percent, "%, #C4C4C4 ").concat(percent, "%, #C4C4C4 100%)");

  if (_constants__WEBPACK_IMPORTED_MODULE_0__.audio.volume === 0) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.audio.muted = true;
    muteStyle();
  } else {
    _constants__WEBPACK_IMPORTED_MODULE_0__.audio.muted = false;
    muteStyle();
  }
};

var formatTime = function formatTime(sec) {
  var min = Math.floor(sec / 60) || 0;
  var seconds = Math.round(sec - min * 60) || 0;

  if (min < 10) {
    min = "0".concat(min);
  }

  if (seconds < 10) {
    seconds = "0".concat(seconds);
  }

  return "".concat(min, ":").concat(seconds);
};

var handleProgress = function handleProgress() {
  var percent = _constants__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime / _constants__WEBPACK_IMPORTED_MODULE_0__.audio.duration * 100 || 0;
  _constants__WEBPACK_IMPORTED_MODULE_0__.progress.value = "".concat(percent);
  _constants__WEBPACK_IMPORTED_MODULE_0__.progress.style.background = "linear-gradient(to right, #96e676 0%, #96e676 ".concat(percent, "%, #C4C4C4 ").concat(percent, "%, #C4C4C4 100%)");
  var durationAud = _constants__WEBPACK_IMPORTED_MODULE_0__.audio.duration;
  var currentAud = _constants__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime;
  _constants__WEBPACK_IMPORTED_MODULE_0__.durationDiv.innerHTML = "<div>".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO[currentAudio].author, " - ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO[currentAudio].track, "</div><div>").concat(formatTime(currentAud), " / ").concat(formatTime(durationAud), "</div>");
};

var scrub = function scrub(e) {
  var scrubTime = e.offsetX / _constants__WEBPACK_IMPORTED_MODULE_0__.progress.offsetWidth * _constants__WEBPACK_IMPORTED_MODULE_0__.audio.duration;
  _constants__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime = scrubTime;
};

var toggleBtnPlay = function toggleBtnPlay() {
  _constants__WEBPACK_IMPORTED_MODULE_0__.playAudio.classList.toggle('pause');
  var audioSpan = document.querySelectorAll('.item-audio-span');
  audioSpan.forEach(function (item) {
    item.classList.remove('pause');
  });
  audioSpan[currentAudio].classList.toggle('pause');
};
/* const togglePlaylistBtn = () =>{
  
  audioSpan[currentAudio].classList.add('pause');
  if(!isStart){
    audioSpan[currentAudio].classList.add('pause');
  } else {
    audioSpan[currentAudio].classList.remove('pause');
  }
} */


var stopPlay = function stopPlay() {
  audioTrack();
  _constants__WEBPACK_IMPORTED_MODULE_0__.playAudio.classList.remove('pause');
  _constants__WEBPACK_IMPORTED_MODULE_0__.audio.pause();
  isStart = false;
};

var playNextAudio = function playNextAudio() {
  if (currentAudio !== _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO.length - 1) {
    currentAudio++;
    audioList[currentAudio - 1].classList.remove('active-audio');
  } else if (currentAudio === _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO.length - 1) {
    currentAudio = 0;
    audioList[audioList.length - 1].classList.remove('active-audio');
  }

  stopPlay();
};

var playPrevAudio = function playPrevAudio() {
  if (currentAudio <= _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO.length && currentAudio > 0) {
    currentAudio--;
    audioList[currentAudio + 1].classList.remove('active-audio');
  } else if (currentAudio <= 0) {
    currentAudio = _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO.length - 1;
    audioList[0].classList.remove('active-audio');
  }

  stopPlay();
};

var createTrackList = function createTrackList() {
  for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO.length; i++) {
    var divListItem = document.createElement('div');
    var span = document.createElement('span');
    span.classList.add('item-audio-span');
    divListItem.classList.add('item-audio');
    _constants__WEBPACK_IMPORTED_MODULE_0__.playlistAudio.appendChild(divListItem);
    divListItem.innerHTML = "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO[i].author, " - ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_AUDIO[i].track);
    divListItem.appendChild(span);
    audioList.push(divListItem);
  }
};
var mousedown = false;
var listnerAudio = function listnerAudio() {
  _constants__WEBPACK_IMPORTED_MODULE_0__.muteBtn.addEventListener('click', toggleMute);
  _constants__WEBPACK_IMPORTED_MODULE_0__.playAudio.addEventListener('click', startAudio);
  _constants__WEBPACK_IMPORTED_MODULE_0__.playAudio.addEventListener('click', toggleBtnPlay);
  _constants__WEBPACK_IMPORTED_MODULE_0__.nextAudio.addEventListener('click', playNextAudio);
  _constants__WEBPACK_IMPORTED_MODULE_0__.prevAudio.addEventListener('click', playPrevAudio);
  _constants__WEBPACK_IMPORTED_MODULE_0__.playAudio.addEventListener('click', handleRangeUpdate);
  _constants__WEBPACK_IMPORTED_MODULE_0__.audio.addEventListener('timeupdate', handleProgress);
  _constants__WEBPACK_IMPORTED_MODULE_0__.progress.addEventListener('click', scrub);
  _constants__WEBPACK_IMPORTED_MODULE_0__.ranges.forEach(function (range) {
    return range.addEventListener('change', handleRangeUpdate);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.ranges.forEach(function (range) {
    return range.addEventListener('mousemove', handleRangeUpdate);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.progress.addEventListener('mousemove', function (e) {
    return mousedown && scrub(e);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.progress.addEventListener('mousedown', function () {
    return mousedown = true;
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.progress.addEventListener('mouseup', function () {
    return mousedown = false;
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.audio.addEventListener('ended', function () {
    playNextAudio();
    startAudio();
    toggleBtnPlay();
  });
  audioList.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
      audioList[currentAudio].classList.remove('active-audio');
      var audioSpan = document.querySelectorAll('.item-audio-span');
      audioSpan.forEach(function (item) {
        item.classList.remove('pause');
      });
      currentAudio = index;
      audioTrack();
      stopPlay();

      if (e.target.tagName === 'SPAN') {
        toggleBtnPlay();
        startAudio();
      }
    });
  });
};

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "time": () => (/* binding */ time),
/* harmony export */   "week": () => (/* binding */ week),
/* harmony export */   "greeting": () => (/* binding */ greeting),
/* harmony export */   "greetContainer": () => (/* binding */ greetContainer),
/* harmony export */   "focusContainer": () => (/* binding */ focusContainer),
/* harmony export */   "audioContainer": () => (/* binding */ audioContainer),
/* harmony export */   "quoteContainer": () => (/* binding */ quoteContainer),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "focus": () => (/* binding */ focus),
/* harmony export */   "btnBackgroundLeft": () => (/* binding */ btnBackgroundLeft),
/* harmony export */   "btnBackgroundRight": () => (/* binding */ btnBackgroundRight),
/* harmony export */   "preloadContainer": () => (/* binding */ preloadContainer),
/* harmony export */   "weatherContainer": () => (/* binding */ weatherContainer),
/* harmony export */   "timeContainer": () => (/* binding */ timeContainer),
/* harmony export */   "weatherIcon": () => (/* binding */ weatherIcon),
/* harmony export */   "temperature": () => (/* binding */ temperature),
/* harmony export */   "weatherDescription": () => (/* binding */ weatherDescription),
/* harmony export */   "city": () => (/* binding */ city),
/* harmony export */   "humidity": () => (/* binding */ humidity),
/* harmony export */   "wind": () => (/* binding */ wind),
/* harmony export */   "weatherError": () => (/* binding */ weatherError),
/* harmony export */   "weatherLoading": () => (/* binding */ weatherLoading),
/* harmony export */   "blockquote": () => (/* binding */ blockquote),
/* harmony export */   "figcaption": () => (/* binding */ figcaption),
/* harmony export */   "btn": () => (/* binding */ btn),
/* harmony export */   "prevAudio": () => (/* binding */ prevAudio),
/* harmony export */   "nextAudio": () => (/* binding */ nextAudio),
/* harmony export */   "playAudio": () => (/* binding */ playAudio),
/* harmony export */   "playlistAudio": () => (/* binding */ playlistAudio),
/* harmony export */   "audio": () => (/* binding */ audio),
/* harmony export */   "itemsAudio": () => (/* binding */ itemsAudio),
/* harmony export */   "sliderLang": () => (/* binding */ sliderLang),
/* harmony export */   "dayFocus": () => (/* binding */ dayFocus),
/* harmony export */   "settingBtn": () => (/* binding */ settingBtn),
/* harmony export */   "settingMenu": () => (/* binding */ settingMenu),
/* harmony export */   "timeSetting": () => (/* binding */ timeSetting),
/* harmony export */   "greetingsSetting": () => (/* binding */ greetingsSetting),
/* harmony export */   "focusSetting": () => (/* binding */ focusSetting),
/* harmony export */   "audiosetting": () => (/* binding */ audiosetting),
/* harmony export */   "weatherSetting": () => (/* binding */ weatherSetting),
/* harmony export */   "quotesSetting": () => (/* binding */ quotesSetting),
/* harmony export */   "enSetting": () => (/* binding */ enSetting),
/* harmony export */   "ruSetting": () => (/* binding */ ruSetting),
/* harmony export */   "langSetting": () => (/* binding */ langSetting),
/* harmony export */   "showSetting": () => (/* binding */ showSetting),
/* harmony export */   "timeSettingSpan": () => (/* binding */ timeSettingSpan),
/* harmony export */   "greetingsSettingSpan": () => (/* binding */ greetingsSettingSpan),
/* harmony export */   "focusSettingSpan": () => (/* binding */ focusSettingSpan),
/* harmony export */   "audiosettingSpan": () => (/* binding */ audiosettingSpan),
/* harmony export */   "weatherSettingSpan": () => (/* binding */ weatherSettingSpan),
/* harmony export */   "quotesSettingSpan": () => (/* binding */ quotesSettingSpan),
/* harmony export */   "progress": () => (/* binding */ progress),
/* harmony export */   "progressVol": () => (/* binding */ progressVol),
/* harmony export */   "durationDiv": () => (/* binding */ durationDiv),
/* harmony export */   "audioSpan": () => (/* binding */ audioSpan),
/* harmony export */   "muteBtn": () => (/* binding */ muteBtn),
/* harmony export */   "ranges": () => (/* binding */ ranges),
/* harmony export */   "overlay": () => (/* binding */ overlay),
/* harmony export */   "MONTH_NAME": () => (/* binding */ MONTH_NAME),
/* harmony export */   "WEEK_DAY_NAME": () => (/* binding */ WEEK_DAY_NAME),
/* harmony export */   "IMAGE_STORAGE": () => (/* binding */ IMAGE_STORAGE),
/* harmony export */   "BASE_IMAGE_SRC": () => (/* binding */ BASE_IMAGE_SRC),
/* harmony export */   "BASE_AUDIO": () => (/* binding */ BASE_AUDIO),
/* harmony export */   "IMG_HOURS": () => (/* binding */ IMG_HOURS)
/* harmony export */ });
var body = document.getElementById('body');
var time = document.getElementById('time');
var week = document.getElementById('week');
var greeting = document.getElementById('greeting');
var greetContainer = document.querySelector('.greet-container');
var focusContainer = document.querySelector('.focus-container');
var audioContainer = document.getElementById('audio-container');
var quoteContainer = document.querySelector('.quote');
var name = document.getElementById('name');
var focus = document.getElementById('focus');
var btnBackgroundLeft = document.querySelector('.btn-background-left');
var btnBackgroundRight = document.querySelector('.btn-background-right');
var preloadContainer = document.querySelector('.preload-container');
var weatherContainer = document.getElementById('weather-container');
var timeContainer = document.querySelector('.time-container');
var weatherIcon = document.querySelector('.weather-icon');
var temperature = document.querySelector('.temperature');
var weatherDescription = document.querySelector('.weather-description');
var city = document.querySelector('.city');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var weatherError = document.querySelector('.weather-error');
var weatherLoading = document.querySelector('.weather-loading');
var blockquote = document.querySelector('blockquote');
var figcaption = document.querySelector('figcaption');
var btn = document.querySelector('.btn-quote');
var prevAudio = document.querySelector('.prev-audio');
var nextAudio = document.querySelector('.next-audio');
var playAudio = document.querySelector('.play-audio');
var playlistAudio = document.querySelector('.playlist-audio');
var audio = document.querySelector('audio');
var itemsAudio = document.querySelectorAll('.item-audio');
var sliderLang = document.getElementById('slider');
var dayFocus = document.getElementById('day-focus');
var settingBtn = document.querySelector('.setting');
var settingMenu = document.querySelector('.setting-menu');
var timeSetting = document.getElementById('time-setting');
var greetingsSetting = document.getElementById('greetings-setting');
var focusSetting = document.getElementById('focus-setting');
var audiosetting = document.getElementById('audio-setting');
var weatherSetting = document.getElementById('weather-setting');
var quotesSetting = document.getElementById('quotes-setting');
var enSetting = document.getElementById('en-setting');
var ruSetting = document.getElementById('ru-setting');
var langSetting = document.querySelector('.lang');
var showSetting = document.querySelector('.show-hide');
var timeSettingSpan = document.querySelector('.time-setting');
var greetingsSettingSpan = document.querySelector('.greetings-setting');
var focusSettingSpan = document.querySelector('.focus-setting');
var audiosettingSpan = document.querySelector('.audio-setting');
var weatherSettingSpan = document.querySelector('.weather-setting');
var quotesSettingSpan = document.querySelector('.quotes-setting');
var progress = document.querySelector('.audio-progress');
var progressVol = document.querySelector('.volume');
var durationDiv = document.querySelector('.duration');
var audioSpan = document.querySelectorAll('.item-audio-span');
var muteBtn = document.querySelector('#mute');
var ranges = document.querySelectorAll('.progress');
var overlay = document.querySelector('.overlay');
var MONTH_NAME = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/* ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] */

var WEEK_DAY_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var IMAGE_STORAGE = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
var BASE_IMAGE_SRC = 'https://raw.githubusercontent.com/tsakunova/stage1-tasks/assets/images/';
var BASE_AUDIO = [{
  src: '1.mp3',
  author: 'Stromae',
  track: 'Alors On Danse'
}, {
  src: '2.mp3',
  author: 'Minelli',
  track: 'Rampampams'
}, {
  src: '3.mp3',
  author: 'Dance Monkey',
  track: 'Tones and I'
}]; // export const IMAGES_ARR = [];

var IMG_HOURS = ['night', 'morning', 'afternoon', 'evening']; // export const COUNT_IMAGES = 6;

/***/ }),

/***/ "./src/scripts/language.js":
/*!*********************************!*\
  !*** ./src/scripts/language.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "listnerLang": () => (/* binding */ listnerLang)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time */ "./src/scripts/time.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather */ "./src/scripts/weather.js");
/* harmony import */ var _welcome_bg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome-bg */ "./src/scripts/welcome-bg.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes */ "./src/scripts/quotes.js");
/* harmony import */ var _local_save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-save */ "./src/scripts/local-save.js");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting */ "./src/scripts/setting.js");








var translationRu = {
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
var translationEn = {
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
function init() {
  (0,_time__WEBPACK_IMPORTED_MODULE_2__.showTime)();
  (0,_weather__WEBPACK_IMPORTED_MODULE_3__.getWeather)();
  (0,_welcome_bg__WEBPACK_IMPORTED_MODULE_4__.setBG)();
  (0,_quotes__WEBPACK_IMPORTED_MODULE_5__.getQuote)();
  (0,_local_save__WEBPACK_IMPORTED_MODULE_6__.getNameAndFocus)();
  (0,_setting__WEBPACK_IMPORTED_MODULE_7__.addTextSetting)();
}
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].init({
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
var listnerLang = function listnerLang() {
  _constants__WEBPACK_IMPORTED_MODULE_1__.sliderLang.addEventListener('click', function () {
    if (_constants__WEBPACK_IMPORTED_MODULE_1__.sliderLang.checked === true) {
      i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage('ru', function () {
        init();
      });
    } else {
      i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage('en', function () {
        init();
      });
    }
  });
};

/***/ }),

/***/ "./src/scripts/local-save.js":
/*!***********************************!*\
  !*** ./src/scripts/local-save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNameAndFocus": () => (/* binding */ getNameAndFocus),
/* harmony export */   "listnerNameAndFocus": () => (/* binding */ listnerNameAndFocus)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language */ "./src/scripts/language.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.js");




var getName = function getName() {
  if (localStorage.getItem('name') === null) {
    _constants__WEBPACK_IMPORTED_MODULE_2__.name.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('enterName'));
  } else {
    _constants__WEBPACK_IMPORTED_MODULE_2__.name.textContent = localStorage.getItem('name');
  }
}; // delete name


var delName = function delName() {
  _constants__WEBPACK_IMPORTED_MODULE_2__.name.textContent = '';

  if (localStorage.getItem('name') === null) {
    localStorage.setItem('name', "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('enterName')));
  }
}; // set name


var setName = function setName(e) {
  var storage = localStorage.getItem('name');

  if (e.type === 'keypress') {
    // enter pressed
    if (e.which === 13 || e.keyCode === 13) {
      if (e.target.innerText === '') {
        _constants__WEBPACK_IMPORTED_MODULE_2__.name.textContent = storage;
      }

      localStorage.setItem('name', e.target.innerText);
      _constants__WEBPACK_IMPORTED_MODULE_2__.name.blur();
    }
  } else {
    // blur
    if (e.target.innerText === '') {
      _constants__WEBPACK_IMPORTED_MODULE_2__.name.textContent = storage;
    }

    localStorage.setItem('name', e.target.innerText);
  }
}; // get focus


var getFocus = function getFocus() {
  if (localStorage.getItem('focus') === null) {
    _constants__WEBPACK_IMPORTED_MODULE_2__.focus.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('enterFocus'));
  } else {
    _constants__WEBPACK_IMPORTED_MODULE_2__.focus.textContent = localStorage.getItem('focus');
  }
}; // delete focus


var delFocus = function delFocus() {
  _constants__WEBPACK_IMPORTED_MODULE_2__.focus.textContent = '';

  if (localStorage.getItem('focus') === null) {
    localStorage.setItem('focus', "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('enterName')));
  }
}; // set focus


var setFocus = function setFocus(e) {
  var storage = localStorage.getItem('focus');

  if (e.type === 'keypress') {
    // enter pressed
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText === '') {
        _constants__WEBPACK_IMPORTED_MODULE_2__.focus.textContent = storage;
      }

      localStorage.setItem('focus', e.target.innerText);
      _constants__WEBPACK_IMPORTED_MODULE_2__.focus.blur();
    }
  } else {
    // blur
    if (e.target.innerText === '') {
      _constants__WEBPACK_IMPORTED_MODULE_2__.focus.textContent = storage;
    }

    localStorage.setItem('focus', e.target.innerText);
  }
}; // eslint-disable-next-line max-len


var settingArr = [_constants__WEBPACK_IMPORTED_MODULE_2__.timeSetting, _constants__WEBPACK_IMPORTED_MODULE_2__.greetingsSetting, _constants__WEBPACK_IMPORTED_MODULE_2__.focusSetting, _constants__WEBPACK_IMPORTED_MODULE_2__.audiosetting, _constants__WEBPACK_IMPORTED_MODULE_2__.weatherSetting, _constants__WEBPACK_IMPORTED_MODULE_2__.quotesSetting]; // eslint-disable-next-line max-len

var containerArr = [_constants__WEBPACK_IMPORTED_MODULE_2__.timeContainer, _constants__WEBPACK_IMPORTED_MODULE_2__.greetContainer, _constants__WEBPACK_IMPORTED_MODULE_2__.focusContainer, _constants__WEBPACK_IMPORTED_MODULE_2__.audioContainer, _constants__WEBPACK_IMPORTED_MODULE_2__.weatherContainer, _constants__WEBPACK_IMPORTED_MODULE_2__.quoteContainer];
var localName = ['time', 'greet', 'focusSet', 'audio', 'weather', 'quotes'];

var getSetting = function getSetting() {
  if (!localStorage.getItem('lang')) {
    _constants__WEBPACK_IMPORTED_MODULE_2__.sliderLang.checked = false;
  } else {
    _constants__WEBPACK_IMPORTED_MODULE_2__.sliderLang.checked = JSON.parse(localStorage.getItem('lang'));

    if (localStorage.getItem('lang') === 'true') {
      i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage('ru');
      _constants__WEBPACK_IMPORTED_MODULE_2__.ruSetting.classList.add('backgroundLang');
      _constants__WEBPACK_IMPORTED_MODULE_2__.enSetting.classList.remove('backgroundLang');
    } else {
      i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage('en');
      _constants__WEBPACK_IMPORTED_MODULE_2__.enSetting.classList.add('backgroundLang');
      _constants__WEBPACK_IMPORTED_MODULE_2__.ruSetting.classList.remove('backgroundLang');
    }
  }

  for (var i = 0; i < settingArr.length; i++) {
    if (!localStorage.getItem(localName[i])) {
      settingArr[i].checked = true;
    } else {
      settingArr[i].checked = JSON.parse(localStorage.getItem(localName[i]));

      if (localStorage.getItem(localName[i]) === 'true') {
        containerArr[i].classList.remove('none');
      } else if (localStorage.getItem(localName[i]) === 'false') {
        containerArr[i].classList.add('none');
      }
    }
  }
};

var setSetting = function setSetting() {
  localStorage.setItem('lang', _constants__WEBPACK_IMPORTED_MODULE_2__.sliderLang.checked);

  for (var i = 0; i < settingArr.length; i++) {
    localStorage.setItem(localName[i], settingArr[i].checked);
  }
};

var getNameAndFocus = function getNameAndFocus() {
  getName();
  getFocus();
  getSetting();
};
var listnerNameAndFocus = function listnerNameAndFocus() {
  _constants__WEBPACK_IMPORTED_MODULE_2__.name.addEventListener('keypress', setName);
  _constants__WEBPACK_IMPORTED_MODULE_2__.name.addEventListener('blur', setName);
  _constants__WEBPACK_IMPORTED_MODULE_2__.focus.addEventListener('keypress', setFocus);
  _constants__WEBPACK_IMPORTED_MODULE_2__.focus.addEventListener('blur', setFocus);
  _constants__WEBPACK_IMPORTED_MODULE_2__.name.addEventListener('click', delName);
  _constants__WEBPACK_IMPORTED_MODULE_2__.focus.addEventListener('click', delFocus);
  _constants__WEBPACK_IMPORTED_MODULE_2__.sliderLang.addEventListener('click', setSetting);
  settingArr.forEach(function (el) {
    el.addEventListener('click', setSetting);
  });
};

/***/ }),

/***/ "./src/scripts/quotes.js":
/*!*******************************!*\
  !*** ./src/scripts/quotes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandom": () => (/* binding */ getRandom),
/* harmony export */   "getQuote": () => (/* binding */ getQuote),
/* harmony export */   "listnerQuote": () => (/* binding */ listnerQuote)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/scripts/api.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var getRandom = function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
};
var getQuote = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var data, curentQuote;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.getQuotesList)(i18next__WEBPACK_IMPORTED_MODULE_4__["default"].language);

          case 3:
            data = _context.sent;
            curentQuote = data[getRandom(0, data.length)];
            _constants__WEBPACK_IMPORTED_MODULE_2__.blockquote.textContent = curentQuote.text;
            _constants__WEBPACK_IMPORTED_MODULE_2__.figcaption.textContent = curentQuote.author;
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            _constants__WEBPACK_IMPORTED_MODULE_2__.blockquote.textContent = 'What you are is what you have been. What you’ll be is what you do now.';
            _constants__WEBPACK_IMPORTED_MODULE_2__.figcaption.textContent = 'Buddha';

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getQuote() {
    return _ref.apply(this, arguments);
  };
}();
var listnerQuote = function listnerQuote() {
  document.addEventListener('DOMContentLoaded', getQuote);
  _constants__WEBPACK_IMPORTED_MODULE_2__.btn.addEventListener('click', getQuote);
};

/***/ }),

/***/ "./src/scripts/setting.js":
/*!********************************!*\
  !*** ./src/scripts/setting.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTextSetting": () => (/* binding */ addTextSetting),
/* harmony export */   "listnerSetting": () => (/* binding */ listnerSetting)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language */ "./src/scripts/language.js");




var hiddenBlock = function hiddenBlock(elem, block) {
  elem.addEventListener('change', function () {
    block.classList.toggle('none');
  });
};

var addTextSetting = function addTextSetting() {
  _constants__WEBPACK_IMPORTED_MODULE_1__.timeSettingSpan.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('time'));
  _constants__WEBPACK_IMPORTED_MODULE_1__.greetingsSettingSpan.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('greeting'));
  _constants__WEBPACK_IMPORTED_MODULE_1__.focusSettingSpan.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('focusSet'));
  _constants__WEBPACK_IMPORTED_MODULE_1__.audiosettingSpan.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('audio'), " ");
  _constants__WEBPACK_IMPORTED_MODULE_1__.weatherSettingSpan.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('weather'));
  _constants__WEBPACK_IMPORTED_MODULE_1__.quotesSettingSpan.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('quotesSet'));
  _constants__WEBPACK_IMPORTED_MODULE_1__.enSetting.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('english'));
  _constants__WEBPACK_IMPORTED_MODULE_1__.ruSetting.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('russian'));
  _constants__WEBPACK_IMPORTED_MODULE_1__.langSetting.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('language'));
  _constants__WEBPACK_IMPORTED_MODULE_1__.showSetting.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('show'));
};

var addLangSetting = function addLangSetting() {
  _constants__WEBPACK_IMPORTED_MODULE_1__.enSetting.addEventListener('click', function () {
    i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage('en', function () {
      localStorage.setItem('lang', false);
      _constants__WEBPACK_IMPORTED_MODULE_1__.enSetting.classList.add('backgroundLang');
      _constants__WEBPACK_IMPORTED_MODULE_1__.ruSetting.classList.remove('backgroundLang');
      (0,_language__WEBPACK_IMPORTED_MODULE_2__.init)();
    });
  });
  _constants__WEBPACK_IMPORTED_MODULE_1__.ruSetting.addEventListener('click', function () {
    i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage('ru', function () {
      localStorage.setItem('lang', true);
      _constants__WEBPACK_IMPORTED_MODULE_1__.ruSetting.classList.add('backgroundLang');
      _constants__WEBPACK_IMPORTED_MODULE_1__.enSetting.classList.remove('backgroundLang');
      (0,_language__WEBPACK_IMPORTED_MODULE_2__.init)();
    });
  });
};

var listnerSetting = function listnerSetting() {
  hiddenBlock(_constants__WEBPACK_IMPORTED_MODULE_1__.weatherSetting, _constants__WEBPACK_IMPORTED_MODULE_1__.weatherContainer);
  hiddenBlock(_constants__WEBPACK_IMPORTED_MODULE_1__.timeSetting, _constants__WEBPACK_IMPORTED_MODULE_1__.timeContainer);
  hiddenBlock(_constants__WEBPACK_IMPORTED_MODULE_1__.greetingsSetting, _constants__WEBPACK_IMPORTED_MODULE_1__.greetContainer);
  hiddenBlock(_constants__WEBPACK_IMPORTED_MODULE_1__.focusSetting, _constants__WEBPACK_IMPORTED_MODULE_1__.focusContainer);
  hiddenBlock(_constants__WEBPACK_IMPORTED_MODULE_1__.quotesSetting, _constants__WEBPACK_IMPORTED_MODULE_1__.quoteContainer);
  hiddenBlock(_constants__WEBPACK_IMPORTED_MODULE_1__.audiosetting, _constants__WEBPACK_IMPORTED_MODULE_1__.audioContainer);
  addLangSetting();
  _constants__WEBPACK_IMPORTED_MODULE_1__.settingBtn.addEventListener('click', function () {
    _constants__WEBPACK_IMPORTED_MODULE_1__.settingMenu.classList.toggle('menuRight');
  });
};

/***/ }),

/***/ "./src/scripts/time.js":
/*!*****************************!*\
  !*** ./src/scripts/time.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showTime": () => (/* binding */ showTime)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.js");



var addZero = function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

var showTime = function showTime() {
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  var month = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t(_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH_NAME[today.getMonth()]);
  var day = today.getDate();
  var weekDay = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t(_constants__WEBPACK_IMPORTED_MODULE_1__.WEEK_DAY_NAME[today.getDay()]); // day of week 0-6

  _constants__WEBPACK_IMPORTED_MODULE_1__.time.innerHTML = "".concat(addZero(hour), "<span>:</span>").concat(addZero(min), "<span>:</span>").concat(addZero(sec));

  if (i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === 'en') {
    _constants__WEBPACK_IMPORTED_MODULE_1__.week.innerHTML = "".concat(weekDay, ", ").concat(month, " ").concat(day);
  } else {
    _constants__WEBPACK_IMPORTED_MODULE_1__.week.innerHTML = " ".concat(weekDay, ", ").concat(day, " ").concat(month);
  }
  /*  if (min === 0 && sec === 0) {
    setBG();
  } */


  setTimeout(showTime, 1000);
};

/***/ }),

/***/ "./src/scripts/weather.js":
/*!********************************!*\
  !*** ./src/scripts/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "listnerWeather": () => (/* binding */ listnerWeather)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var resetWeather = function resetWeather() {
  _constants__WEBPACK_IMPORTED_MODULE_2__.weatherError.textContent = '';
  _constants__WEBPACK_IMPORTED_MODULE_2__.temperature.textContent = '';
  _constants__WEBPACK_IMPORTED_MODULE_2__.weatherDescription.textContent = '';
  _constants__WEBPACK_IMPORTED_MODULE_2__.humidity.textContent = '';
  _constants__WEBPACK_IMPORTED_MODULE_2__.wind.textContent = '';
};

var getWeather = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var cityStorage, cityName, url, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resetWeather();
            cityStorage = localStorage.getItem('city');
            cityName = !_constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent ? i18next__WEBPACK_IMPORTED_MODULE_3__["default"].t('city') : _constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent;

            if (cityStorage) {
              _constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent = cityStorage;
              cityName = cityStorage;
            } else {
              _constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent = i18next__WEBPACK_IMPORTED_MODULE_3__["default"].t('city');
              localStorage.setItem('city', i18next__WEBPACK_IMPORTED_MODULE_3__["default"].t('city'));
            }

            _constants__WEBPACK_IMPORTED_MODULE_2__.weatherLoading.textContent = 'Loading';
            url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&lang=").concat(i18next__WEBPACK_IMPORTED_MODULE_3__["default"].language, "&appid=584520212cf6d7836596b3cabf28fb4f&units=metric");
            _context.prev = 6;
            _context.next = 9;
            return fetch(url);

          case 9:
            res = _context.sent;
            _context.next = 12;
            return res.json();

          case 12:
            data = _context.sent;
            _constants__WEBPACK_IMPORTED_MODULE_2__.weatherLoading.textContent = '';
            _constants__WEBPACK_IMPORTED_MODULE_2__.weatherIcon.className = 'weather-icon owf';
            _constants__WEBPACK_IMPORTED_MODULE_2__.weatherIcon.classList.add("owf-".concat(data.weather[0].id));
            _constants__WEBPACK_IMPORTED_MODULE_2__.temperature.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_3__["default"].t('temp'), ": ").concat(Math.round(data.main.temp), "\xB0C");
            _constants__WEBPACK_IMPORTED_MODULE_2__.weatherDescription.textContent = data.weather[0].description;
            _constants__WEBPACK_IMPORTED_MODULE_2__.humidity.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_3__["default"].t('humid'), ": ").concat(Math.round(data.main.humidity), " %");
            _constants__WEBPACK_IMPORTED_MODULE_2__.wind.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_3__["default"].t('wind'), ": ").concat(Math.round(data.wind.speed), " m/s");
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](6);
            _constants__WEBPACK_IMPORTED_MODULE_2__.weatherError.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_3__["default"].t('errCity'));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 22]]);
  }));

  return function getWeather() {
    return _ref.apply(this, arguments);
  };
}();

var delCity = function delCity() {
  _constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent = '';

  if (localStorage.getItem('city') === null) {
    localStorage.setItem('city', '[Enter City]');
  }
}; // set city


var setCity = function setCity(e) {
  var storage = localStorage.getItem('city');

  if (e.type === 'keypress') {
    // enter pressed
    if (e.which === 13 || e.keyCode === 13) {
      if (e.target.innerText === '') {
        _constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent = storage;
      }

      _constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent = e.target.innerText;
      localStorage.setItem('city', e.target.innerText);
      _constants__WEBPACK_IMPORTED_MODULE_2__.city.blur();
      getWeather();
    }
  } else {
    // blur
    if (e.target.innerText === '') {
      _constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent = storage;
    }

    _constants__WEBPACK_IMPORTED_MODULE_2__.city.textContent = e.target.innerText;
    localStorage.setItem('city', e.target.innerText);
    getWeather();
  }
};

var listnerWeather = function listnerWeather() {
  document.addEventListener('DOMContentLoaded', getWeather);
  _constants__WEBPACK_IMPORTED_MODULE_2__.city.addEventListener('keypress', setCity);
  _constants__WEBPACK_IMPORTED_MODULE_2__.city.addEventListener('blur', setCity);
  _constants__WEBPACK_IMPORTED_MODULE_2__.city.addEventListener('click', delCity);
};

/***/ }),

/***/ "./src/scripts/welcome-bg.js":
/*!***********************************!*\
  !*** ./src/scripts/welcome-bg.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBG": () => (/* binding */ setBG),
/* harmony export */   "listner": () => (/* binding */ listner)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes */ "./src/scripts/quotes.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");



var currentIndex = 0;
var imgHour = '';
var startBG = (0,_quotes__WEBPACK_IMPORTED_MODULE_1__.getRandom)(1, 20);

var preloadImg = function preloadImg(url, callback) {
  var img = new Image();
  img.src = url;
  img.width = 0;
  img.height = 0;
  _constants__WEBPACK_IMPORTED_MODULE_0__.preloadContainer.appendChild(img);

  img.onload = function () {
    callback();
    _constants__WEBPACK_IMPORTED_MODULE_0__.preloadContainer.innerHTML = '';
  };
};

var getHourText = function getHourText() {
  var today = new Date();
  var hour = today.getHours();

  if (hour < 6) {
    imgHour = _constants__WEBPACK_IMPORTED_MODULE_0__.IMG_HOURS[0];
  } else if (hour < 12) {
    imgHour = _constants__WEBPACK_IMPORTED_MODULE_0__.IMG_HOURS[1];
  } else if (hour < 18) {
    imgHour = _constants__WEBPACK_IMPORTED_MODULE_0__.IMG_HOURS[2];
  } else {
    imgHour = _constants__WEBPACK_IMPORTED_MODULE_0__.IMG_HOURS[3];
  }

  return imgHour;
};

var setBgGreet = function setBgGreet(image) {
  var bg = '';
  var hour = getHourText();

  if (hour === 'night') {
    bg = "url('".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(image, "')");
    preloadImg("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(image), function () {
      document.body.style.backgroundImage = bg;
      _constants__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_2__["default"].t('night'));
    });
  } else if (hour === 'morning') {
    bg = "url('".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(image, "')");
    preloadImg("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(image), function () {
      document.body.style.backgroundImage = bg;
      _constants__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_2__["default"].t('morning'));
    });
  } else if (hour === 'afternoon') {
    bg = "url('".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(image, "')");
    preloadImg("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(image), function () {
      document.body.style.backgroundImage = bg;
      _constants__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_2__["default"].t('afternoon'));
    });
  } else {
    bg = "url('".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(image, "')");
    preloadImg("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(image), function () {
      document.body.style.backgroundImage = bg;
      _constants__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = "".concat(i18next__WEBPACK_IMPORTED_MODULE_2__["default"].t('evening'));
    });
  }
};

var setBG = function setBG() {
  // generateImages();
  setBgGreet(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_STORAGE[startBG]);
  currentIndex = startBG;
  _constants__WEBPACK_IMPORTED_MODULE_0__.dayFocus.innerHTML = "".concat(i18next__WEBPACK_IMPORTED_MODULE_2__["default"].t('focus'));
  _constants__WEBPACK_IMPORTED_MODULE_0__.body.style.fontFamily = "".concat(i18next__WEBPACK_IMPORTED_MODULE_2__["default"].t('font'));
  /* setBgGreet(IMAGE_STORAGE[currentIndex]);
  currentIndex++;
  if (currentIndex >= IMAGE_STORAGE.length) {
    currentIndex = 0;
  } */
};

var changeBgLeft = function changeBgLeft() {
  var hour = getHourText();

  if (currentIndex <= _constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_STORAGE.length) {
    currentIndex--;
  }

  if (currentIndex < 0) {
    currentIndex = 19;
  }

  var bg = "url('".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_STORAGE[currentIndex], "')");
  preloadImg("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_STORAGE[currentIndex]), function () {
    document.body.style.backgroundImage = bg;
  });
};

var changeBgRight = function changeBgRight() {
  var hour = getHourText();

  if (currentIndex !== _constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_STORAGE.length) {
    currentIndex++;
  }

  if (currentIndex === _constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_STORAGE.length) {
    currentIndex = 0;
  }

  var bg = "url('".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_STORAGE[currentIndex], "')");
  preloadImg("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_IMAGE_SRC).concat(hour, "/").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_STORAGE[currentIndex]), function () {
    document.body.style.backgroundImage = bg;
  });
};

var listner = function listner() {
  _constants__WEBPACK_IMPORTED_MODULE_0__.btnBackgroundLeft.addEventListener('click', changeBgLeft);
  _constants__WEBPACK_IMPORTED_MODULE_0__.btnBackgroundRight.addEventListener('click', changeBgRight);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/owfont-regular.eot?v=1.0.0 */ "./src/assets/fonts/owfont-regular.eot?v=1.0.0"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/owfont-regular.eot */ "./src/assets/fonts/owfont-regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/owfont-regular.woff */ "./src/assets/fonts/owfont-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/owfont-regular.ttf */ "./src/assets/fonts/owfont-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/mute.svg */ "./src/assets/img/mute.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/right.svg */ "./src/assets/img/right.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pause.svg */ "./src/assets/img/pause.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___, { hash: "?#iefix&v=1.0.0" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\r\n *  owfont-regular 1.0.0 by Deniz Fuchidzhiev - http://websygen.com\r\n *  License - font: SIL OFL 1.1, css: MIT License\r\n */\n/* FONT PATH\r\n * -------------------------- */\n@font-face {\n  font-family: 'owfont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n.owf {\n  display: inline-block;\n  font: normal normal normal 14px/1 owfont;\n  font-size: 3rem;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n/* makes the font 33% larger relative to the icon container */\n.owf-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.owf-2x {\n  font-size: 2em; }\n\n.owf-3x {\n  font-size: 3em; }\n\n.owf-4x {\n  font-size: 4em; }\n\n.owf-5x {\n  font-size: 5em; }\n\n.owf-fw {\n  width: 1.28571429em;\n  text-align: center; }\n\n.owf-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none; }\n\n.owf-ul > li {\n  position: relative; }\n\n.owf-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center; }\n\n.owf-li.owf-lg {\n  left: -1.85714286em; }\n\n.owf-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em; }\n\n.owf-pull-right {\n  float: right; }\n\n.owf-pull-left {\n  float: left; }\n\n.owf.owf-pull-left {\n  margin-right: .3em; }\n\n.owf.owf-pull-right {\n  margin-left: .3em; }\n\n/* owfont uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\n/*   Weather Condition Codes    */\n/*   Thunderstorm - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\n/* thunderstorm with light rain */\n.owf-200:before,\n.owf-200-d:before,\n.owf-200-n:before {\n  content: \"\\EB28\"; }\n\n/* thunderstorm with rain */\n.owf-201:before,\n.owf-201-d:before,\n.owf-201-n:before {\n  content: \"\\EB29\"; }\n\n/* thunderstorm with heavy rain */\n.owf-202:before,\n.owf-202-d:before,\n.owf-202-n:before {\n  content: \"\\EB2A\"; }\n\n/*  light thunderstorm  */\n.owf-210:before,\n.owf-210-d:before,\n.owf-210-n:before {\n  content: \"\\EB32\"; }\n\n/*  thunderstorm  */\n.owf-211:before,\n.owf-211-d:before,\n.owf-211-n:before {\n  content: \"\\EB33\"; }\n\n/*   heavy thunderstorm   */\n.owf-212:before,\n.owf-212-d:before,\n.owf-212-n:before {\n  content: \"\\EB34\"; }\n\n/*   ragged thunderstorm   */\n.owf-221:before,\n.owf-221-d:before,\n.owf-221-n:before {\n  content: \"\\EB3D\"; }\n\n/*  thunderstorm with light drizzle    */\n.owf-230:before,\n.owf-230-d:before,\n.owf-230-n:before {\n  content: \"\\EB46\"; }\n\n/*  thunderstorm with drizzle     */\n.owf-231:before,\n.owf-231-d:before,\n.owf-231-n:before {\n  content: \"\\EB47\"; }\n\n/* thunderstorm with heavy drizzle     */\n.owf-232:before,\n.owf-232-d:before,\n.owf-232-n:before {\n  content: \"\\EB48\"; }\n\n/*   Drizzle - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\n/*  light intensity drizzle */\n.owf-300:before,\n.owf-300-d:before,\n.owf-300-n:before {\n  content: \"\\EB8C\"; }\n\n/*  drizzle */\n.owf-301:before,\n.owf-301-d:before,\n.owf-301-n:before {\n  content: \"\\EB8D\"; }\n\n/*  heavy intensity drizzle  */\n.owf-302:before,\n.owf-302-d:before,\n.owf-302-n:before {\n  content: \"\\EB8E\"; }\n\n/*   light intensity drizzle rain  */\n.owf-310:before,\n.owf-310-d:before,\n.owf-310-n:before {\n  content: \"\\EB96\"; }\n\n/*  drizzle rain  */\n.owf-311:before,\n.owf-311-d:before,\n.owf-311-n:before {\n  content: \"\\EB97\"; }\n\n/* heavy intensity drizzle rain */\n.owf-312:before,\n.owf-312-d:before,\n.owf-312-n:before {\n  content: \"\\EB98\"; }\n\n/* shower rain and drizzle  */\n.owf-313:before,\n.owf-313-d:before,\n.owf-313-n:before {\n  content: \"\\EB99\"; }\n\n/* heavy shower rain and drizzle*/\n.owf-314:before,\n.owf-314-d:before,\n.owf-314-n:before {\n  content: \"\\EB9A\"; }\n\n/* shower drizzle */\n.owf-321:before,\n.owf-321-d:before,\n.owf-321-n:before {\n  content: \"\\EBA1\"; }\n\n/*   Rain - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\n/* light rain  */\n.owf-500:before,\n.owf-500-d:before,\n.owf-500-n:before {\n  content: \"\\EC54\"; }\n\n/* moderate rain  */\n.owf-501:before,\n.owf-501-d:before,\n.owf-501-n:before {\n  content: \"\\EC55\"; }\n\n/* heavy intensity rain  */\n.owf-502:before,\n.owf-502-d:before,\n.owf-502-n:before {\n  content: \"\\EC56\"; }\n\n/* very heavy rain   */\n.owf-503:before,\n.owf-503-d:before,\n.owf-503-n:before {\n  content: \"\\EC57\"; }\n\n/* extreme rain    */\n.owf-504:before,\n.owf-504-d:before,\n.owf-504-n:before {\n  content: \"\\EC58\"; }\n\n/* freezing rain    */\n.owf-511:before,\n.owf-511-d:before,\n.owf-511-n:before {\n  content: \"\\EC5F\"; }\n\n/*  light intensity shower rain    */\n.owf-520:before,\n.owf-520-d:before,\n.owf-520-n:before {\n  content: \"\\EC68\"; }\n\n/* shower rain  */\n.owf-521:before,\n.owf-521-d:before,\n.owf-521-n:before {\n  content: \"\\EC69\"; }\n\n/*  heavy intensity shower rain  */\n.owf-522:before,\n.owf-522-d:before,\n.owf-522-n:before {\n  content: \"\\EC6A\"; }\n\n/* ragged shower rain  */\n.owf-531:before,\n.owf-531-d:before,\n.owf-531-n:before {\n  content: \"\\EC73\"; }\n\n/*   Snow - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\n/* light snow  */\n.owf-600:before,\n.owf-600-d:before,\n.owf-600-n:before {\n  content: \"\\ECB8\"; }\n\n/*  snow  */\n.owf-601:before,\n.owf-601-d:before,\n.owf-601-n:before {\n  content: \"\\ECB9\"; }\n\n/*   heavy snow   */\n.owf-602:before,\n.owf-602-d:before,\n.owf-602-n:before {\n  content: \"\\ECBA\"; }\n\n/*  sleet  */\n.owf-611:before,\n.owf-611-d:before,\n.owf-611-n:before {\n  content: \"\\ECC3\"; }\n\n/*   shower sleet */\n.owf-612:before,\n.owf-612-d:before,\n.owf-612-n:before {\n  content: \"\\ECC4\"; }\n\n/* light rain and snow */\n.owf-615:before,\n.owf-615-d:before,\n.owf-615-n:before {\n  content: \"\\ECC7\"; }\n\n/* rain and snow  */\n.owf-616:before,\n.owf-616-d:before,\n.owf-616-n:before {\n  content: \"\\ECC8\"; }\n\n/* light shower snow  */\n.owf-620:before,\n.owf-620-d:before,\n.owf-620-n:before {\n  content: \"\\ECCC\"; }\n\n/* shower snow  */\n.owf-621:before,\n.owf-621-d:before,\n.owf-621-n:before {\n  content: \"\\ECCD\"; }\n\n/* heavy shower snow  */\n.owf-622:before,\n.owf-622-d:before,\n.owf-622-n:before {\n  content: \"\\ECCE\"; }\n\n/*   Atmosphere - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\n/* mist */\n.owf-701:before,\n.owf-701-d:before,\n.owf-701-n:before {\n  content: \"\\ED1D\"; }\n\n/* smoke */\n.owf-711:before,\n.owf-711-d:before,\n.owf-711-n:before {\n  content: \"\\ED27\"; }\n\n/* haze */\n.owf-721:before,\n.owf-721-d:before,\n.owf-721-n:before {\n  content: \"\\ED31\"; }\n\n/* Sand/Dust Whirls */\n.owf-731:before,\n.owf-731-d:before,\n.owf-731-n:before {\n  content: \"\\ED3B\"; }\n\n/* Fog */\n.owf-741:before,\n.owf-741-d:before,\n.owf-741-n:before {\n  content: \"\\ED45\"; }\n\n/* sand */\n.owf-751:before,\n.owf-751-d:before,\n.owf-751-n:before {\n  content: \"\\ED4F\"; }\n\n/* dust */\n.owf-761:before,\n.owf-761-d:before,\n.owf-761-n:before {\n  content: \"\\ED59\"; }\n\n/*  VOLCANIC ASH  */\n.owf-762:before,\n.owf-762-d:before,\n.owf-762-n:before {\n  content: \"\\ED5A\"; }\n\n/* SQUALLS */\n.owf-771:before,\n.owf-771-d:before,\n.owf-771-n:before {\n  content: \"\\ED63\"; }\n\n/* TORNADO */\n.owf-781:before,\n.owf-781-d:before,\n.owf-781-n:before {\n  content: \"\\ED6D\"; }\n\n/*   Clouds - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\n/*  sky is clear  */\n/*  Calm  */\n.owf-800:before,\n.owf-800-d:before,\n.owf-951:before,\n.owf-951-d:before {\n  content: \"\\ED80\"; }\n\n.owf-800-n:before,\n.owf-951-n:before {\n  content: \"\\F168\"; }\n\n/*  few clouds   */\n.owf-801:before,\n.owf-801-d:before {\n  content: \"\\ED81\"; }\n\n.owf-801-n:before {\n  content: \"\\F169\"; }\n\n/* scattered clouds */\n.owf-802:before,\n.owf-802-d:before {\n  content: \"\\ED82\"; }\n\n.owf-802-n:before {\n  content: \"\\F16A\"; }\n\n/* broken clouds  */\n.owf-803:before,\n.owf-803-d:before,\n.owf-803-n:before {\n  content: \"\\ED83\"; }\n\n/* overcast clouds  */\n.owf-804:before,\n.owf-804-d:before,\n.owf-804-n:before {\n  content: \"\\ED84\"; }\n\n/*   Extreme - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\n/* tornado  */\n.owf-900:before,\n.owf-900-d:before,\n.owf-900-n:before {\n  content: \"\\EDE4\"; }\n\n/*  tropical storm  */\n.owf-901:before,\n.owf-901-d:before,\n.owf-901-n:before {\n  content: \"\\EDE5\"; }\n\n/* hurricane */\n.owf-902:before,\n.owf-902-d:before,\n.owf-902-n:before {\n  content: \"\\EDE6\"; }\n\n/* cold */\n.owf-903:before,\n.owf-903-d:before,\n.owf-903-n:before {\n  content: \"\\EDE7\"; }\n\n/* hot */\n.owf-904:before,\n.owf-904-d:before,\n.owf-904-n:before {\n  content: \"\\EDE8\"; }\n\n/* windy */\n.owf-905:before,\n.owf-905-d:before,\n.owf-905-n:before {\n  content: \"\\EDE9\"; }\n\n/* hail */\n.owf-906:before,\n.owf-906-d:before,\n.owf-906-n:before {\n  content: \"\\EDEA\"; }\n\n/*   Additional - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\n/* Setting */\n.owf-950:before,\n.owf-950-d:before,\n.owf-950-n:before {\n  content: \"\\EE16\"; }\n\n/*  Light breeze  */\n.owf-952:before,\n.owf-952-d:before,\n.owf-952-n:before {\n  content: \"\\EE18\"; }\n\n/*  Gentle Breeze  */\n.owf-953:before,\n.owf-953-d:before,\n.owf-953-n:before {\n  content: \"\\EE19\"; }\n\n/*  Moderate breeze  */\n.owf-954:before,\n.owf-954-d:before,\n.owf-954-n:before {\n  content: \"\\EE1A\"; }\n\n/* Fresh Breeze  */\n.owf-955:before,\n.owf-955-d:before,\n.owf-955-n:before {\n  content: \"\\EE1B\"; }\n\n/* Strong  Breeze  */\n.owf-956:before,\n.owf-956-d:before,\n.owf-956-n:before {\n  content: \"\\EE1C\"; }\n\n/* High wind, near gale  */\n.owf-957:before,\n.owf-957-d:before,\n.owf-957-n:before {\n  content: \"\\EE1D\"; }\n\n/* Gale */\n.owf-958:before,\n.owf-958-d:before,\n.owf-958-n:before {\n  content: \"\\EE1E\"; }\n\n/*  Severe Gale  */\n.owf-959:before,\n.owf-959-d:before,\n.owf-959-n:before {\n  content: \"\\EE1F\"; }\n\n/* Storm */\n.owf-960:before,\n.owf-960-d:before,\n.owf-960-n:before {\n  content: \"\\EE20\"; }\n\n/*  Violent Storm  */\n.owf-961:before,\n.owf-961-d:before,\n.owf-961-n:before {\n  content: \"\\EE21\"; }\n\n/* Hurricane */\n.owf-962:before,\n.owf-962-d:before,\n.owf-962-n:before {\n  content: \"\\EE22\"; }\n\n#audio-container {\n  position: absolute;\n  top: 0rem;\n  left: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 20rem;\n  height: 3rem;\n  color: rgba(255, 255, 255, 0.85098); }\n  #audio-container .duration {\n    height: 2rem;\n    font-size: 0.8rem; }\n  #audio-container .audio-player {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%; }\n    #audio-container .audio-player .audio-player-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n    #audio-container .audio-player .player {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 40%;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin: 1rem auto; }\n    #audio-container .audio-player .audio-progress {\n      background: -webkit-gradient(linear, left top, right top, from(#96e676), color-stop(0%, #96e676), color-stop(0%, #c4c4c4), to(#c4c4c4));\n      background: linear-gradient(to right, #96e676 0%, #96e676 0%, #c4c4c4 0%, #c4c4c4 100%); }\n    #audio-container .audio-player .progress {\n      display: block;\n      margin: 12px 0px;\n      height: 5px;\n      width: 60%;\n      outline: none;\n      -webkit-appearance: none;\n      -webkit-transition: background 450ms ease-in;\n      transition: background 450ms ease-in; }\n    #audio-container .audio-player #progress::-webkit-slider-thumb {\n      width: 15px;\n      height: 15px;\n      background: #FFFFFF;\n      border-radius: 50%;\n      -webkit-appearance: none;\n      cursor: ew-resize; }\n    #audio-container .audio-player .progress::-webkit-slider-thumb {\n      width: 15px;\n      height: 15px;\n      background: #FFFFFF;\n      border-radius: 50%;\n      -webkit-appearance: none;\n      cursor: ew-resize; }\n    #audio-container .audio-player #mute {\n      width: 25px;\n      height: 25px;\n      border: none;\n      background-color: transparent;\n      background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") 50% 50%/contain no-repeat;\n      cursor: pointer;\n      -webkit-transition: 0.2s linear;\n      transition: 0.2s linear; }\n    #audio-container .audio-player .volume {\n      margin: 12px 0;\n      background: -webkit-gradient(linear, left top, right top, color-stop(40%, #96e676), color-stop(0%, #96e676), color-stop(40%, #c4c4c4), to(#c4c4c4));\n      background: linear-gradient(to right, #96e676 40%, #96e676 0%, #c4c4c4 40%, #c4c4c4 100%);\n      width: 20%;\n      outline: none;\n      -webkit-appearance: none; }\n    #audio-container .audio-player .prev-audio,\n    #audio-container .audio-player .next-audio {\n      background: rgba(175, 181, 183, 0.21961);\n      width: 2rem;\n      height: 2rem;\n      border: 2px solid rgba(255, 255, 255, 0.85098);\n      border-radius: 50%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n    #audio-container .audio-player .play-audio {\n      background: rgba(175, 181, 183, 0.21961);\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n      background-size: 1rem;\n      background-position: 60% center;\n      background-repeat: no-repeat;\n      width: 2.5rem;\n      height: 2.5rem;\n      border: 2px solid rgba(255, 255, 255, 0.85098);\n      border-radius: 50%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n    #audio-container .audio-player .pause {\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n      background-position: 50% center;\n      background-size: 0.8rem; }\n    #audio-container .audio-player .play-audio:hover,\n    #audio-container .audio-player .prev-audio:hover,\n    #audio-container .audio-player .next-audio:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n\n.playlist-audio {\n  margin-top: 2rem;\n  width: 85%; }\n  .playlist-audio .item-audio {\n    text-align: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer;\n    margin-bottom: 0.5rem; }\n    .playlist-audio .item-audio span {\n      -webkit-box-ordinal-group: 0;\n          -ms-flex-order: -1;\n              order: -1;\n      margin-right: 1rem;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n      background-repeat: no-repeat;\n      background-size: 0.4rem;\n      background-position: 60% center;\n      width: 1.5rem;\n      height: 1.5rem;\n      display: inline-block;\n      border: 1px solid #ffffff;\n      border-radius: 50%;\n      -webkit-transform: translate(25%, 0%);\n              transform: translate(25%, 0%); }\n    .playlist-audio .item-audio .pause {\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n      background-position: 50% center;\n      background-size: 0.8rem; }\n  .playlist-audio .active-audio {\n    background-color: rgba(255,255,255,0.2902);\n    border-radius: 0.4rem; }\n    .playlist-audio .active-audio span {\n      border-color: #d8e9b1; }\n\n.switch-theme {\n  margin: 0 auto;\n  position: absolute;\n  left: 47vw;\n  top: 1rem; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(143,144,148,0.58824);\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"EN\";\n  padding: 7px;\n  left: 0px;\n  bottom: 4px;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  -webkit-box-shadow: 0 0px 15px rgba(32,32,32,0.23922);\n          box-shadow: 0 0px 15px rgba(32,32,32,0.23922);\n  background: #b8e7d5;\n  background-size: 70%;\n  background-repeat: no-repeat;\n  background-position: center; }\n\ninput:checked + .slider {\n  background-color: rgba(143,144,148,0.58824); }\n\ninput:focus + .slider {\n  -webkit-box-shadow: 0 0 1px #e1eef1;\n          box-shadow: 0 0 1px #e1eef1; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(24px);\n  transform: translateX(24px);\n  content: \"RU\";\n  background: #d8e9b1;\n  background-size: 70%;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.setting {\n  position: absolute;\n  bottom: 2rem;\n  left: 1rem;\n  z-index: 3; }\n  .setting .pulse-bg {\n    background: rgba(169,169,169,0.74118); }\n\n.setting-menu {\n  position: absolute;\n  width: 15rem;\n  height: 16rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  bottom: 3rem;\n  left: -100%;\n  padding: 1rem;\n  border-radius: 1rem;\n  color: #495a6e;\n  background-color: #fffefe;\n  z-index: 2;\n  -webkit-transition: .3s;\n  transition: .3s; }\n  .setting-menu h3 {\n    padding-bottom: 0.3rem; }\n  .setting-menu span {\n    display: inline-block; }\n  .setting-menu .set-check {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: initial;\n        -ms-flex-align: initial;\n            align-items: initial; }\n    .setting-menu .set-check label {\n      display: block;\n      position: relative;\n      margin-right: 10px; }\n    .setting-menu .set-check label:before {\n      top: 5px;\n      right: 1px;\n      position: absolute;\n      content: '';\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      background-color: #d6d6d6;\n      border: 1px solid gray; }\n    .setting-menu .set-check input:checked + label:after {\n      top: 8px;\n      right: 4px;\n      position: absolute;\n      content: '';\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background-color: rgba(85,83,93,0.63922); }\n    .setting-menu .set-check input {\n      display: none; }\n\n.menuRight {\n  left: 2rem;\n  -webkit-transition: .3s;\n  transition: .3s; }\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\n:root {\n  font-size: 16px; }\n\nbody {\n  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);\n  background-repeat: no-repeat;\n  background-size: cover;\n  font-family: 'Quicksand', sans-serif;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  height: 100vh;\n  color: white;\n  -webkit-transition: background-image 0.4s ease-in-out;\n  transition: background-image 0.4s ease-in-out; }\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 13rem;\n  color: #fff;\n  font-size: 2rem; }\n  .footer a {\n    text-decoration: none; }\n  .footer ul {\n    list-style-type: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .footer ul li {\n      margin-left: 1rem; }\n    .footer ul i {\n      color: #fff; }\n    .footer ul img {\n      width: 100%; }\n\n.overlay {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.3);\n  /*dim the background*/ }\n\n.none {\n  opacity: 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n\n#weather-container {\n  position: absolute;\n  right: 2rem;\n  top: 2rem; }\n\n.greet-container, .focus-container, #audio-container, #weather-container, .time-container, .quote {\n  -webkit-transition: all 0.7s ease;\n  transition: all 0.7s ease; }\n\n.weather-error {\n  color: #fd0b0b;\n  font-size: 1rem;\n  font-weight: bold; }\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-item-align: center;\n      align-self: center;\n  margin-top: 3.5rem;\n  width: 40rem; }\n\n.btn-background-left {\n  position: absolute;\n  top: 50%;\n  left: 3rem; }\n\n.btn-background-right {\n  position: absolute;\n  top: 50%;\n  right: 3rem; }\n\n.time-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  width: 27rem;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n#en-setting, #ru-setting {\n  padding: 4px 10px; }\n\n.backgroundLang {\n  background: rgba(197,197,197,0.58039);\n  border-radius: 5px; }\n\n.dws-bg {\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.pulse-bg, .bloc-bg, .phone-bg {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  color: rgba(255,255,255,0.85098);\n  text-align: center;\n  border-radius: 50%; }\n\n.bloc-bg {\n  cursor: pointer;\n  z-index: 1;\n  overflow: hidden; }\n\n.pulse-bg {\n  background: rgba(175,181,183,0.21961);\n  position: relative;\n  -webkit-transition: .5s;\n  transition: .5s; }\n\n.phone-bg {\n  font-size: 1.5rem;\n  line-height: 40px; }\n\n.text-bg {\n  position: absolute;\n  opacity: 0;\n  text-transform: uppercase;\n  font-weight: 700;\n  top: 28px;\n  font-size: 15px;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out; }\n\n.phone-bg i {\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out; }\n\n.pulse-bg:hover {\n  background: rgba(135,194,214,0.21961); }\n\n.pulse-bg:hover i {\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.pulse-bg:hover .text {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n  opacity: 1; }\n\n.pulse-bg:hover::before,\n.pulse-bg:hover::after {\n  content: '';\n  position: absolute;\n  border: 1px solid rgba(135,194,214,0.21961);\n  left: -20px;\n  right: -20px;\n  top: -20px;\n  bottom: -20px;\n  border-radius: 50%;\n  -webkit-animation: pulse 1.8s linear infinite;\n          animation: pulse 1.8s linear infinite;\n  opacity: 0; }\n\n.pulse-bg:hover::after {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s; }\n\n@-webkit-keyframes pulse-bg {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    opacity: 0; } }\n\n@keyframes pulse-bg {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    opacity: 0; } }\n\n.city {\n  font-size: 2rem; }\n\n#time {\n  font-size: 8rem; }\n\nh1 {\n  margin-top: 2rem;\n  margin-bottom: 3rem; }\n\nh2 {\n  font-size: 1.2rem;\n  min-height: 1rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.7; }\n\n#week {\n  font-size: 1.5rem; }\n\n.quote {\n  background: rgba(255,254,254,0.3098);\n  font-size: 1.5rem;\n  z-index: 1;\n  margin-top: 2rem;\n  width: 45rem;\n  min-height: 14rem;\n  padding: 1rem 5rem;\n  border-radius: 1rem;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.quote figcaption {\n  text-align: right; }\n\n.btn-quote {\n  position: absolute;\n  top: 2rem;\n  right: 0; }\n\n.dws {\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.pulse, .bloc, .phone {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  color: rgba(255,255,255,0.85098);\n  text-align: center;\n  border-radius: 50%; }\n\n.bloc {\n  cursor: pointer;\n  z-index: 1;\n  overflow: hidden; }\n\n.pulse {\n  background: rgba(175,181,183,0.21961);\n  position: relative;\n  -webkit-transition: .5s;\n  transition: .5s; }\n\n.phone {\n  font-size: 1.5rem;\n  line-height: 40px;\n  -webkit-animation: phone .9s ease-in-out infinite;\n          animation: phone .9s ease-in-out infinite; }\n\n.text {\n  position: absolute;\n  opacity: 0;\n  text-transform: uppercase;\n  font-weight: 700;\n  top: 28px;\n  font-size: 15px;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out; }\n\n.phone i {\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out; }\n\n.pulse:hover {\n  background: rgba(135,194,214,0.21961); }\n\n.pulse:hover i {\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.pulse:hover .text {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n  opacity: 1; }\n\n.pulse:hover::before,\n.pulse:hover::after {\n  content: '';\n  position: absolute;\n  border: 1px solid rgba(135,194,214,0.21961);\n  left: -20px;\n  right: -20px;\n  top: -20px;\n  bottom: -20px;\n  border-radius: 50%;\n  -webkit-animation: pulse 1.8s linear infinite;\n          animation: pulse 1.8s linear infinite;\n  opacity: 0; }\n\n.pulse:hover::after {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s; }\n\n@-webkit-keyframes phone {\n  0%, 100% {\n    -webkit-transform: rotate(-20deg);\n            transform: rotate(-20deg); }\n  50% {\n    -webkit-transform: rotate(21deg);\n            transform: rotate(21deg); } }\n\n@keyframes phone {\n  0%, 100% {\n    -webkit-transform: rotate(-20deg);\n            transform: rotate(-20deg); }\n  50% {\n    -webkit-transform: rotate(21deg);\n            transform: rotate(21deg); } }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    opacity: 0; } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    opacity: 0; } }\n\n@media (max-width: 1100px) {\n  :root {\n    font-size: 16px; }\n  .quote {\n    font-size: 1.3rem; }\n  #weather-container {\n    font-size: 0.9rem;\n    right: 0.5rem;\n    top: 0.5rem; } }\n\n@media (max-width: 820px) {\n  :root {\n    font-size: 14px; } }\n\n@media (max-width: 670px) {\n  :root {\n    font-size: 14px; }\n  #time {\n    font-size: 7rem; }\n  .time-container {\n    width: 22rem; }\n  h2 {\n    font-size: 1rem; }\n  .quote {\n    font-size: 1rem;\n    padding: 1rem 2rem;\n    width: 34rem; } }\n\n@media (max-width: 560px) {\n  .container {\n    width: 28rem;\n    margin-top: 5.5rem; } }\n\n@media (max-width: 490px) {\n  .container {\n    width: 20rem;\n    margin-top: 4rem; }\n  #time {\n    font-size: 4rem; }\n  h1 {\n    font-size: 1.2rem; }\n  .time-container {\n    width: 12rem; }\n  .quote {\n    font-size: 0.9rem;\n    width: 20rem;\n    min-height: 13.5rem; } }\n", "",{"version":3,"sources":["webpack://./src/styles/owfont-regular.scss","webpack://./src/styles/main.scss","webpack://./src/styles/audio.scss","webpack://./src/styles/switch.scss","webpack://./src/styles/setting.scss"],"names":[],"mappings":"AAAA;;;ECGE;ADCF;+BCC+B;ADC/B;EACE,qBAAqB;EACrB,4CAAsD;EACtD,4LAE8D;EAE9D,mBAAmB;EACnB,kBAAkB,EAAA;;AAEpB;EACE,qBAAqB;EACrB,wCAAwC;EACxC,eAAe;EACf,oBAAoB;EACpB,mCAAmC;EACnC,kCAAkC;EAClC,kCAA0B;UAA1B,0BAA0B,EAAA;;AAE5B,6DAAA;AACA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB,EAAA;;AAEtB;EACE,cAAc,EAAA;;AAEhB;EACE,cAAc,EAAA;;AAEhB;EACE,cAAc,EAAA;;AAEhB;EACE,cAAc,EAAA;;AAEhB;EACE,mBAAmB;EACnB,kBAAkB,EAAA;;AAEpB;EACE,eAAe;EACf,yBAAyB;EACzB,qBAAqB,EAAA;;AAEvB;EACE,kBAAkB,EAAA;;AAEpB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB,EAAA;;AAEpB;EACE,mBAAmB,EAAA;;AAErB;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,mBAAmB,EAAA;;AAErB;EACE,YAAY,EAAA;;AAEd;EACE,WAAW,EAAA;;AAEb;EACE,kBAAkB,EAAA;;AAEpB;EACE,iBAAiB,EAAA;;AAGnB;mECHmE;ADMnE,iCAAA;AAEA,8FAAA;AAEA,iCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,2BAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,iCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,yBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,2BAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,4BAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,wCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,wCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAGlB,yFAAA;AAEA,6BAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,aAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,8BAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,oCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,iCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,6BAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,iCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAGlB,sFAAA;AAEA,gBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,0BAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,sBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,oBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,qBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,oCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,iBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,kCAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,wBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAGlB,sFAAA;AAEA,gBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,WAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,YAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,wBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,uBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,iBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,uBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAGlB,4FAAA;AAEA,SAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,UAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,SAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,qBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,QAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,SAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,SAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,YAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,YAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAGlB,wFAAA;AAEA,mBAAA;AAAsB,WAAA;AACtB;;;;EAIE,gBAAgB,EAAA;;AAElB;;EAEE,gBAAgB,EAAA;;AAElB,kBAAA;AACA;;EAEE,gBAAgB,EAAA;;AAElB;EACE,gBAAgB,EAAA;;AAElB,qBAAA;AACA;;EAEE,gBAAgB,EAAA;;AAElB;EACE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,qBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAGlB,yFAAA;AAEA,aAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,qBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,cAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,SAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,QAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,UAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,SAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAGlB,4FAAA;AAEA,YAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,mBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,oBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,sBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,kBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,oBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,0BAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,SAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,kBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,UAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,oBAAA;AACA;;;EAGE,gBAAgB,EAAA;;AAElB,cAAA;AACA;;;EAGE,gBAAgB,EAAA;;AE5iBlB;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,mBAAe;MAAf,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,mCAAmC,EAAA;EATrC;IAWI,YAAY;IACZ,iBAAiB,EAAA;EAZrB;IAgBI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,4BAAsB;IAAtB,6BAAsB;QAAtB,0BAAsB;YAAtB,sBAAsB;IACtB,WAAW,EAAA;IAlBf;MAoBM,oBAAa;MAAb,oBAAa;MAAb,aAAa;MACf,yBAA8B;UAA9B,sBAA8B;cAA9B,8BAA8B,EAAA;IArBlC;MAwBM,oBAAa;MAAb,oBAAa;MAAb,aAAa;MACb,UAAU;MACV,yBAA8B;UAA9B,sBAA8B;cAA9B,8BAA8B;MAC9B,yBAAmB;UAAnB,sBAAmB;cAAnB,mBAAmB;MACnB,iBAAiB,EAAA;IA5BvB;MA+BQ,uIAAmI;MAAnI,uFAAmI,EAAA;IA/B3I;MAmCQ,cAAc;MACd,gBAAgB;MAChB,WAAW;MACX,UAAU;MACV,aAAa;MACb,wBAAwB;MACxB,4CAAoC;MAApC,oCAAoC,EAAA;IAzC5C;MA4CQ,WAAW;MACX,YAAY;MACZ,mBAAmB;MACnB,kBAAkB;MAClB,wBAAwB;MACxB,iBAAiB,EAAA;IAjDzB;MAoDQ,WAAW;MACX,YAAY;MACZ,mBAAmB;MACnB,kBAAkB;MAClB,wBAAwB;MACxB,iBAAiB,EAAA;IAzDzB;MA8DQ,WAAW;MACX,YAAY;MACZ,YAAY;MACZ,6BAA6B;MAC7B,6EAAmE;MACnE,eAAe;MACf,+BAAuB;MAAvB,uBAAuB,EAAA;IApE/B;MAwEQ,cAAc;MACd,mJAAqI;MAArI,yFAAqI;MACrI,UAAU;MACV,aAAa;MACb,wBAAwB,EAAA;IA5EhC;;MAiFQ,wCAAwC;MACxC,WAAW;MACX,YAAY;MACZ,8CAA8C;MAC9C,kBAAkB;MAClB,oBAAa;MAAb,oBAAa;MAAb,aAAa;MACb,wBAAuB;UAAvB,qBAAuB;cAAvB,uBAAuB;MACvB,yBAAmB;UAAnB,sBAAmB;cAAnB,mBAAmB;MACnB,wBAAgB;MAAhB,gBAAgB,EAAA;IAzFxB;MA8FQ,wCAAwC;MACxC,yDAAgD;MAChD,qBAAqB;MACrB,+BAA+B;MAC/B,4BAA4B;MAC5B,aAAa;MACb,cAAc;MACd,8CAA8C;MAC9C,kBAAkB;MAClB,oBAAa;MAAb,oBAAa;MAAb,aAAa;MACb,wBAAuB;UAAvB,qBAAuB;cAAvB,uBAAuB;MACvB,yBAAmB;UAAnB,sBAAmB;cAAnB,mBAAmB;MACnB,wBAAgB;MAAhB,gBAAgB,EAAA;IA1GxB;MA8GQ,yDAAgD;MAChD,+BAA+B;MAC/B,uBAAuB,EAAA;IAhH/B;;;MAsHQ,6BAAqB;cAArB,qBAAqB,EAAA;;AAK3B;EACE,gBAAgB;EAChB,UAAU,EAAA;EAFZ;IAKI,gBAAgB;IAChB,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,eAAe;IACf,qBAAqB,EAAA;IARzB;MAWM,4BAAS;UAAT,kBAAS;cAAT,SAAS;MACT,kBAAkB;MAClB,yDAAgD;MAChD,4BAA4B;MAC5B,uBAAuB;MACvB,+BAA+B;MAC/B,aAAa;MACb,cAAc;MACd,qBAAqB;MACrB,yBAAyB;MACzB,kBAAkB;MAClB,qCAA6B;cAA7B,6BAA6B,EAAA;IAtBnC;MAyBM,yDAAgD;MAChD,+BAA+B;MAC/B,uBAAuB,EAAA;EA3B7B;IAgCI,0CAA2B;IAC3B,qBAAqB,EAAA;IAjCzB;MAoCM,qBAAqB,EAAA;;AC/J7B;EACE,cAAc;EACd,kBAAkB;EAChB,UAAU;EACV,SAAS,EAAA;;AAGb;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,UAAU;EACV,QAAQ;EACR,SAAS,EAAA;;AAGX;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,2CAA2B;EAC3B,wBAAgB;EAAhB,gBAAgB,EAAA;;AAGlB;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,SAAS;EACT,WAAW;EACX,MAAM;EACN,SAAS;EACT,cAAc;EACd,wBAAgB;EAAhB,gBAAgB;EAChB,qDAAgC;UAAhC,6CAAgC;EAChC,mBAAmB;EACnB,oBAAoB;EACpB,4BAA4B;EAC5B,2BAA2B,EAAA;;AAG7B;EACE,2CAA2B,EAAA;;AAG7B;EACE,mCAA2B;UAA3B,2BAA2B,EAAA;;AAG7B;EACE,mCAAmC;EAEnC,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,4BAA4B;EAC5B,2BAA2B,EAAA;;AAG7B;EACE,mBAAmB,EAAA;;AAGrB;EACE,kBAAkB,EAAA;;ACxEpB;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,UAAU,EAAA;EAJZ;IAMI,qCAAqB,EAAA;;AAIzB;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,wBAAsB;MAAtB,qBAAsB;UAAtB,uBAAsB;EACtB,sBAAqB;MAArB,mBAAqB;UAArB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,yBAAoC;EACpC,UAAU;EACV,uBAAe;EAAf,eAAe,EAAA;EAdjB;IAiBI,sBAAsB,EAAA;EAjB1B;IAqBI,qBAAqB,EAAA;EArBzB;IAyBI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,4BAAsB;IAAtB,6BAAsB;QAAtB,0BAAsB;YAAtB,sBAAsB;IACtB,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB,EAAA;IA3BxB;MA8BM,cAAc;MACd,kBAAkB;MAClB,kBAAkB,EAAA;IAhCxB;MAmCM,QAAQ;MACR,UAAU;MACV,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,yBAAyB;MACzB,sBAAsB,EAAA;IA3C5B;MA8CM,QAAQ;MACR,UAAU;MACV,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,wCAA2B,EAAA;IArDjC;MAwDM,aAAa,EAAA;;AAKnB;EACE,UAAU;EACV,uBAAe;EAAf,eAAe,EAAA;;AHpEjB;EACI,8BAAsB;UAAtB,sBAAsB;EACtB,SAAS;EACT,UAAU,EAAA;;AAEZ;EACE,eAAe,EAAA;;AAEjB;EACE,8GAE6B;EAC7B,4BAA4B;EAC5B,sBAAsB;EACtB,oCAAoC;EACpC,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,4BAAsB;EAAtB,6BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,qDAA6C;EAA7C,6CAA6C,EAAA;;AAG/C;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,eAAe,EAAA;EANjB;IAQI,qBAAqB,EAAA;EARzB;IAWI,qBAAqB;IACrB,oBAAa;IAAb,oBAAa;IAAb,aAAa,EAAA;IAZjB;MAeM,iBAAiB,EAAA;IAfvB;MAkBM,WAAW,EAAA;IAlBjB;MAqBM,WAAW,EAAA;;AAIjB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,4BAAsB;EAAtB,6BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,WAAW;EACX,oCAAiC;EAAE,qBAAA,EAAsB;;AAE3D;EACE,UAAU;EACV,wBAAgB;EAAhB,gBAAgB,EAAA;;AAElB;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS,EAAA;;AAEX;EACE,iCAAyB;EAAzB,yBAAyB,EAAA;;AAI3B;EACE,cAAc;EACd,eAAe;EACf,iBAAiB,EAAA;;AAEnB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,4BAAsB;EAAtB,6BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,2BAAkB;MAAlB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY,EAAA;;AAEd;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU,EAAA;;AAEZ;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW,EAAA;;AAEb;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,cAAc;EACd,YAAY;EACZ,4BAAsB;EAAtB,6BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB,EAAA;;AAExB;EACE,iBAAiB,EAAA;;AAEnB;EACE,qCAAqB;EACrB,kBAAkB,EAAA;;AAGpB;EAEE,wCAAgC;UAAhC,gCAAgC,EAAA;;AAEjC;EACC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gCAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAEnB;EACC,eAAe;EACf,UAAU;EACV,gBAAgB,EAAA;;AAEjB;EACC,qCAAqB;EACrB,kBAAkB;EAClB,uBAAe;EAAf,eAAe,EAAA;;AAEhB;EACC,iBAAiB;EACjB,iBAAiB,EAAA;;AAGlB;EACC,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,gBAAgB;EAChB,SAAS;EACT,eAAe;EACf,6BAAqB;UAArB,qBAAqB;EACrB,mCAA2B;EAA3B,2BAA2B,EAAA;;AAE5B;EACC,mCAA2B;EAA3B,2BAA2B,EAAA;;AAE5B;EACC,qCAAqB,EAAA;;AAEtB;EACC,mCAA2B;EAA3B,2BAA2B;EAC3B,2BAAmB;UAAnB,mBAAmB,EAAA;;AAEpB;EACC,4BAAoB;UAApB,oBAAoB;EACpB,mCAA2B;EAA3B,2BAA2B;EAC3B,UAAU,EAAA;;AAEX;;EAEC,WAAW;EACX,kBAAkB;EAClB,2CAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,6CAAqC;UAArC,qCAAqC;EACrC,UAAU,EAAA;;AAEX;EACC,4BAAoB;UAApB,oBAAoB,EAAA;;AAIrB;EACC;IACC,6BAAqB;YAArB,qBAAqB;IACrB,UAAU,EAAA;EAEX;IACC,UAAU,EAAA;EAEX;IACC,6BAAqB;YAArB,qBAAqB;IACrB,UAAU,EAAA,EAAA;;AAVZ;EACC;IACC,6BAAqB;YAArB,qBAAqB;IACrB,UAAU,EAAA;EAEX;IACC,UAAU,EAAA;EAEX;IACC,6BAAqB;YAArB,qBAAqB;IACrB,UAAU,EAAA,EAAA;;AAIb;EACE,eAAe,EAAA;;AAGjB;EACE,eAAe,EAAA;;AAEjB;EACE,gBAAgB;EAChB,mBAAmB,EAAA;;AAErB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;EACrB,YAAY,EAAA;;AAEd;EACE,iBAAiB,EAAA;;AAGnB;EACE,oCAAqB;EACrB,iBAAiB;EACjB,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,kBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,4BAAsB;EAAtB,6BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAkB;MAAlB,kBAAkB,EAAA;;AAGpB;EACE,iBAAiB,EAAA;;AAGnB;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ,EAAA;;AAEV;EACE,wCAAgC;UAAhC,gCAAgC,EAAA;;AAEjC;EACC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gCAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAEnB;EACC,eAAe;EACf,UAAU;EACV,gBAAgB,EAAA;;AAEjB;EACC,qCAAqB;EACrB,kBAAkB;EAClB,uBAAe;EAAf,eAAe,EAAA;;AAEhB;EACC,iBAAiB;EACjB,iBAAiB;EACjB,iDAAyC;UAAzC,yCAAyC,EAAA;;AAE1C;EACC,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,gBAAgB;EAChB,SAAS;EACT,eAAe;EACf,6BAAqB;UAArB,qBAAqB;EACrB,mCAA2B;EAA3B,2BAA2B,EAAA;;AAE5B;EACC,mCAA2B;EAA3B,2BAA2B,EAAA;;AAE5B;EACC,qCAAqB,EAAA;;AAEtB;EACC,mCAA2B;EAA3B,2BAA2B;EAC3B,2BAAmB;UAAnB,mBAAmB,EAAA;;AAEpB;EACC,4BAAoB;UAApB,oBAAoB;EACpB,mCAA2B;EAA3B,2BAA2B;EAC3B,UAAU,EAAA;;AAEX;;EAEC,WAAW;EACX,kBAAkB;EAClB,2CAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,6CAAqC;UAArC,qCAAqC;EACrC,UAAU,EAAA;;AAEX;EACC,4BAAoB;UAApB,oBAAoB,EAAA;;AAGrB;EACC;IACC,iCAAyB;YAAzB,yBAAyB,EAAA;EAE1B;IACC,gCAAwB;YAAxB,wBAAwB,EAAA,EAAA;;AAL1B;EACC;IACC,iCAAyB;YAAzB,yBAAyB,EAAA;EAE1B;IACC,gCAAwB;YAAxB,wBAAwB,EAAA,EAAA;;AAG1B;EACC;IACC,6BAAqB;YAArB,qBAAqB;IACrB,UAAU,EAAA;EAEX;IACC,UAAU,EAAA;EAEX;IACC,6BAAqB;YAArB,qBAAqB;IACrB,UAAU,EAAA,EAAA;;AAVZ;EACC;IACC,6BAAqB;YAArB,qBAAqB;IACrB,UAAU,EAAA;EAEX;IACC,UAAU,EAAA;EAEX;IACC,6BAAqB;YAArB,qBAAqB;IACrB,UAAU,EAAA,EAAA;;AAGb;EACE;IACI,eAAe,EAAA;EAEnB;IAEI,iBAAiB,EAAA;EAErB;IACI,iBAAiB;IACjB,aAAa;IACjB,WAAW,EAAA,EACV;;AAIH;EACE;IACI,eAAe,EAAA,EAClB;;AAIH;EACE;IACI,eAAe,EAAA;EAEnB;IACI,eAAe,EAAA;EAEjB;IACE,YAAY,EAAA;EAEhB;IACI,eAAe,EAAA;EAEnB;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY,EAAA,EAEb;;AAGL;EACM;IACA,YAAY;IACZ,kBAAkB,EAAA,EACnB;;AAIL;EACE;IACI,YAAY;IACZ,gBAAgB,EAAA;EAEpB;IACA,eAAe,EAAA;EAEjB;IACE,iBAAiB,EAAA;EAEnB;IACE,YAAY,EAAA;EAEd;IACI,iBAAiB;IACnB,YAAY;IACZ,mBAAmB,EAAA,EACpB","sourcesContent":["/*!\r\n *  owfont-regular 1.0.0 by Deniz Fuchidzhiev - http://websygen.com\r\n *  License - font: SIL OFL 1.1, css: MIT License\r\n */\r\n/* FONT PATH\r\n * -------------------------- */\r\n@font-face {\r\n  font-family: 'owfont';\r\n  src: url('../assets/fonts/owfont-regular.eot?v=1.0.0');\r\n  src: url('../assets/fonts/owfont-regular.eot?#iefix&v=1.0.0') format('embedded-opentype'),\r\n\t   url('../assets/fonts/owfont-regular.woff') format('woff'),\r\n\t   url('../assets/fonts/owfont-regular.ttf') format('truetype');\r\n\t  //  url('./assets/fonts/owfont-regular.svg#owf-regular') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.owf {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 owfont;\r\n  font-size: 3rem;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  transform: translate(0, 0);\r\n}\r\n/* makes the font 33% larger relative to the icon container */\r\n.owf-lg {\r\n  font-size: 1.33333333em;\r\n  line-height: 0.75em;\r\n  vertical-align: -15%;\r\n}\r\n.owf-2x {\r\n  font-size: 2em;\r\n}\r\n.owf-3x {\r\n  font-size: 3em;\r\n}\r\n.owf-4x {\r\n  font-size: 4em;\r\n}\r\n.owf-5x {\r\n  font-size: 5em;\r\n}\r\n.owf-fw {\r\n  width: 1.28571429em;\r\n  text-align: center;\r\n}\r\n.owf-ul {\r\n  padding-left: 0;\r\n  margin-left: 2.14285714em;\r\n  list-style-type: none;\r\n}\r\n.owf-ul > li {\r\n  position: relative;\r\n}\r\n.owf-li {\r\n  position: absolute;\r\n  left: -2.14285714em;\r\n  width: 2.14285714em;\r\n  top: 0.14285714em;\r\n  text-align: center;\r\n}\r\n.owf-li.owf-lg {\r\n  left: -1.85714286em;\r\n}\r\n.owf-border {\r\n  padding: .2em .25em .15em;\r\n  border: solid 0.08em #eeeeee;\r\n  border-radius: .1em;\r\n}\r\n.owf-pull-right {\r\n  float: right;\r\n}\r\n.owf-pull-left {\r\n  float: left;\r\n}\r\n.owf.owf-pull-left {\r\n  margin-right: .3em;\r\n}\r\n.owf.owf-pull-right {\r\n  margin-left: .3em;\r\n}\r\n\r\n/* owfont uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\r\n   \r\n/*   Weather Condition Codes    */\r\n   \r\n/*   Thunderstorm - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\r\n   \r\n/* thunderstorm with light rain */\r\n.owf-200:before,\r\n.owf-200-d:before,\r\n.owf-200-n:before {\r\n  content: \"\\EB28\";\r\n}\r\n/* thunderstorm with rain */\r\n.owf-201:before,\r\n.owf-201-d:before,\r\n.owf-201-n:before {\r\n  content: \"\\EB29\";\r\n}\r\n/* thunderstorm with heavy rain */\r\n.owf-202:before,\r\n.owf-202-d:before,\r\n.owf-202-n:before {\r\n  content: \"\\EB2A\";\r\n}\r\n/*  light thunderstorm  */\r\n.owf-210:before,\r\n.owf-210-d:before,\r\n.owf-210-n:before {\r\n  content: \"\\EB32\";\r\n}\r\n/*  thunderstorm  */\r\n.owf-211:before,\r\n.owf-211-d:before,\r\n.owf-211-n:before {\r\n  content: \"\\EB33\";\r\n}\r\n/*   heavy thunderstorm   */\r\n.owf-212:before,\r\n.owf-212-d:before,\r\n.owf-212-n:before {\r\n  content: \"\\EB34\";\r\n}\r\n/*   ragged thunderstorm   */\r\n.owf-221:before,\r\n.owf-221-d:before,\r\n.owf-221-n:before {\r\n  content: \"\\EB3D\";\r\n}\r\n/*  thunderstorm with light drizzle    */\r\n.owf-230:before,\r\n.owf-230-d:before,\r\n.owf-230-n:before {\r\n  content: \"\\EB46\";\r\n}\r\n/*  thunderstorm with drizzle     */\r\n.owf-231:before,\r\n.owf-231-d:before,\r\n.owf-231-n:before {\r\n  content: \"\\EB47\";\r\n}\r\n/* thunderstorm with heavy drizzle     */\r\n.owf-232:before,\r\n.owf-232-d:before,\r\n.owf-232-n:before {\r\n  content: \"\\EB48\";\r\n}\r\n\r\n/*   Drizzle - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\r\n\r\n/*  light intensity drizzle */\r\n.owf-300:before,\r\n.owf-300-d:before,\r\n.owf-300-n:before {\r\n  content: \"\\EB8C\";\r\n}\r\n/*  drizzle */\r\n.owf-301:before,\r\n.owf-301-d:before,\r\n.owf-301-n:before {\r\n  content: \"\\EB8D\";\r\n}\r\n/*  heavy intensity drizzle  */\r\n.owf-302:before,\r\n.owf-302-d:before,\r\n.owf-302-n:before {\r\n  content: \"\\EB8E\";\r\n}\r\n/*   light intensity drizzle rain  */\r\n.owf-310:before,\r\n.owf-310-d:before,\r\n.owf-310-n:before {\r\n  content: \"\\EB96\";\r\n}\r\n/*  drizzle rain  */\r\n.owf-311:before,\r\n.owf-311-d:before,\r\n.owf-311-n:before {\r\n  content: \"\\EB97\";\r\n}\r\n/* heavy intensity drizzle rain */\r\n.owf-312:before,\r\n.owf-312-d:before,\r\n.owf-312-n:before {\r\n  content: \"\\EB98\";\r\n}\r\n/* shower rain and drizzle  */\r\n.owf-313:before,\r\n.owf-313-d:before,\r\n.owf-313-n:before {\r\n  content: \"\\EB99\";\r\n}\r\n/* heavy shower rain and drizzle*/\r\n.owf-314:before,\r\n.owf-314-d:before,\r\n.owf-314-n:before {\r\n  content: \"\\EB9A\";\r\n}\r\n/* shower drizzle */\r\n.owf-321:before,\r\n.owf-321-d:before,\r\n.owf-321-n:before {\r\n  content: \"\\EBA1\";\r\n}\r\n\r\n/*   Rain - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\r\n\r\n/* light rain  */\r\n.owf-500:before,\r\n.owf-500-d:before,\r\n.owf-500-n:before {\r\n  content: \"\\EC54\";\r\n}\r\n/* moderate rain  */\r\n.owf-501:before,\r\n.owf-501-d:before,\r\n.owf-501-n:before {\r\n  content: \"\\EC55\";\r\n}\r\n/* heavy intensity rain  */\r\n.owf-502:before,\r\n.owf-502-d:before,\r\n.owf-502-n:before {\r\n  content: \"\\EC56\";\r\n}\r\n/* very heavy rain   */\r\n.owf-503:before,\r\n.owf-503-d:before,\r\n.owf-503-n:before {\r\n  content: \"\\EC57\";\r\n}\r\n/* extreme rain    */\r\n.owf-504:before,\r\n.owf-504-d:before,\r\n.owf-504-n:before {\r\n  content: \"\\EC58\";\r\n}\r\n/* freezing rain    */\r\n.owf-511:before,\r\n.owf-511-d:before,\r\n.owf-511-n:before {\r\n  content: \"\\EC5F\";\r\n}\r\n/*  light intensity shower rain    */\r\n.owf-520:before,\r\n.owf-520-d:before,\r\n.owf-520-n:before {\r\n  content: \"\\EC68\";\r\n}\r\n/* shower rain  */\r\n.owf-521:before,\r\n.owf-521-d:before,\r\n.owf-521-n:before {\r\n  content: \"\\EC69\";\r\n}\r\n/*  heavy intensity shower rain  */\r\n.owf-522:before,\r\n.owf-522-d:before,\r\n.owf-522-n:before {\r\n  content: \"\\EC6A\";\r\n}\r\n/* ragged shower rain  */\r\n.owf-531:before,\r\n.owf-531-d:before,\r\n.owf-531-n:before {\r\n  content: \"\\EC73\";\r\n}\r\n\r\n/*   Snow - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\r\n\r\n/* light snow  */\r\n.owf-600:before,\r\n.owf-600-d:before,\r\n.owf-600-n:before {\r\n  content: \"\\ECB8\";\r\n}\r\n/*  snow  */\r\n.owf-601:before,\r\n.owf-601-d:before,\r\n.owf-601-n:before {\r\n  content: \"\\ECB9\";\r\n}\r\n/*   heavy snow   */\r\n.owf-602:before,\r\n.owf-602-d:before,\r\n.owf-602-n:before {\r\n  content: \"\\ECBA\";\r\n}\r\n/*  sleet  */\r\n.owf-611:before,\r\n.owf-611-d:before,\r\n.owf-611-n:before {\r\n  content: \"\\ECC3\";\r\n}\r\n/*   shower sleet */\r\n.owf-612:before,\r\n.owf-612-d:before,\r\n.owf-612-n:before {\r\n  content: \"\\ECC4\";\r\n}\r\n/* light rain and snow */\r\n.owf-615:before,\r\n.owf-615-d:before,\r\n.owf-615-n:before {\r\n  content: \"\\ECC7\";\r\n}\r\n/* rain and snow  */\r\n.owf-616:before,\r\n.owf-616-d:before,\r\n.owf-616-n:before {\r\n  content: \"\\ECC8\";\r\n}\r\n/* light shower snow  */\r\n.owf-620:before,\r\n.owf-620-d:before,\r\n.owf-620-n:before {\r\n  content: \"\\ECCC\";\r\n}\r\n/* shower snow  */\r\n.owf-621:before,\r\n.owf-621-d:before,\r\n.owf-621-n:before {\r\n  content: \"\\ECCD\";\r\n}\r\n/* heavy shower snow  */\r\n.owf-622:before,\r\n.owf-622-d:before,\r\n.owf-622-n:before {\r\n  content: \"\\ECCE\";\r\n}\r\n\r\n/*   Atmosphere - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\r\n\r\n/* mist */\r\n.owf-701:before,\r\n.owf-701-d:before,\r\n.owf-701-n:before {\r\n  content: \"\\ED1D\";\r\n}\r\n/* smoke */\r\n.owf-711:before,\r\n.owf-711-d:before,\r\n.owf-711-n:before {\r\n  content: \"\\ED27\";\r\n}\r\n/* haze */\r\n.owf-721:before,\r\n.owf-721-d:before,\r\n.owf-721-n:before {\r\n  content: \"\\ED31\";\r\n}\r\n/* Sand/Dust Whirls */\r\n.owf-731:before,\r\n.owf-731-d:before,\r\n.owf-731-n:before {\r\n  content: \"\\ED3B\";\r\n}\r\n/* Fog */\r\n.owf-741:before,\r\n.owf-741-d:before,\r\n.owf-741-n:before {\r\n  content: \"\\ED45\";\r\n}\r\n/* sand */\r\n.owf-751:before,\r\n.owf-751-d:before,\r\n.owf-751-n:before {\r\n  content: \"\\ED4F\";\r\n}\r\n/* dust */\r\n.owf-761:before,\r\n.owf-761-d:before,\r\n.owf-761-n:before {\r\n  content: \"\\ED59\";\r\n}\r\n/*  VOLCANIC ASH  */\r\n.owf-762:before,\r\n.owf-762-d:before,\r\n.owf-762-n:before {\r\n  content: \"\\ED5A\";\r\n}\r\n/* SQUALLS */\r\n.owf-771:before,\r\n.owf-771-d:before,\r\n.owf-771-n:before {\r\n  content: \"\\ED63\";\r\n}\r\n/* TORNADO */\r\n.owf-781:before,\r\n.owf-781-d:before,\r\n.owf-781-n:before {\r\n  content: \"\\ED6D\";\r\n}\r\n\r\n/*   Clouds - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\r\n\r\n/*  sky is clear  */  /*  Calm  */\r\n.owf-800:before,\r\n.owf-800-d:before,\r\n.owf-951:before,\r\n.owf-951-d:before {\r\n  content: \"\\ED80\";\r\n}\r\n.owf-800-n:before,\r\n.owf-951-n:before {\r\n  content: \"\\F168\";\r\n}\r\n/*  few clouds   */\r\n.owf-801:before,\r\n.owf-801-d:before {\r\n  content: \"\\ED81\";\r\n}\r\n.owf-801-n:before {\r\n  content: \"\\F169\";\r\n}\r\n/* scattered clouds */\r\n.owf-802:before,\r\n.owf-802-d:before {\r\n  content: \"\\ED82\";\r\n}\r\n.owf-802-n:before {\r\n  content: \"\\F16A\";\r\n}\r\n/* broken clouds  */\r\n.owf-803:before,\r\n.owf-803-d:before,\r\n.owf-803-n:before {\r\n  content: \"\\ED83\";\r\n}\r\n/* overcast clouds  */\r\n.owf-804:before,\r\n.owf-804-d:before,\r\n.owf-804-n:before {\r\n  content: \"\\ED84\";\r\n}\r\n\r\n/*   Extreme - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\r\n\r\n/* tornado  */\r\n.owf-900:before,\r\n.owf-900-d:before,\r\n.owf-900-n:before {\r\n  content: \"\\EDE4\";\r\n}\r\n/*  tropical storm  */\r\n.owf-901:before,\r\n.owf-901-d:before,\r\n.owf-901-n:before {\r\n  content: \"\\EDE5\";\r\n}\r\n/* hurricane */\r\n.owf-902:before,\r\n.owf-902-d:before,\r\n.owf-902-n:before {\r\n  content: \"\\EDE6\";\r\n}\r\n/* cold */\r\n.owf-903:before,\r\n.owf-903-d:before,\r\n.owf-903-n:before {\r\n  content: \"\\EDE7\";\r\n}\r\n/* hot */\r\n.owf-904:before,\r\n.owf-904-d:before,\r\n.owf-904-n:before {\r\n  content: \"\\EDE8\";\r\n}\r\n/* windy */\r\n.owf-905:before,\r\n.owf-905-d:before,\r\n.owf-905-n:before {\r\n  content: \"\\EDE9\";\r\n}\r\n/* hail */\r\n.owf-906:before,\r\n.owf-906-d:before,\r\n.owf-906-n:before {\r\n  content: \"\\EDEA\";\r\n}\r\n\r\n/*   Additional - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -    */\r\n\r\n/* Setting */\r\n.owf-950:before,\r\n.owf-950-d:before,\r\n.owf-950-n:before {\r\n  content: \"\\EE16\";\r\n}\r\n/*  Light breeze  */\r\n.owf-952:before,\r\n.owf-952-d:before,\r\n.owf-952-n:before {\r\n  content: \"\\EE18\";\r\n}\r\n/*  Gentle Breeze  */\r\n.owf-953:before,\r\n.owf-953-d:before,\r\n.owf-953-n:before {\r\n  content: \"\\EE19\";\r\n}\r\n/*  Moderate breeze  */\r\n.owf-954:before,\r\n.owf-954-d:before,\r\n.owf-954-n:before {\r\n  content: \"\\EE1A\";\r\n}\r\n/* Fresh Breeze  */\r\n.owf-955:before,\r\n.owf-955-d:before,\r\n.owf-955-n:before {\r\n  content: \"\\EE1B\";\r\n}\r\n/* Strong  Breeze  */\r\n.owf-956:before,\r\n.owf-956-d:before,\r\n.owf-956-n:before {\r\n  content: \"\\EE1C\";\r\n}\r\n/* High wind, near gale  */\r\n.owf-957:before,\r\n.owf-957-d:before,\r\n.owf-957-n:before {\r\n  content: \"\\EE1D\";\r\n}\r\n/* Gale */\r\n.owf-958:before,\r\n.owf-958-d:before,\r\n.owf-958-n:before {\r\n  content: \"\\EE1E\";\r\n}\r\n/*  Severe Gale  */\r\n.owf-959:before,\r\n.owf-959-d:before,\r\n.owf-959-n:before {\r\n  content: \"\\EE1F\";\r\n}\r\n/* Storm */\r\n.owf-960:before,\r\n.owf-960-d:before,\r\n.owf-960-n:before {\r\n  content: \"\\EE20\";\r\n}\r\n/*  Violent Storm  */\r\n.owf-961:before,\r\n.owf-961-d:before,\r\n.owf-961-n:before {\r\n  content: \"\\EE21\";\r\n}\r\n/* Hurricane */\r\n.owf-962:before,\r\n.owf-962-d:before,\r\n.owf-962-n:before {\r\n  content: \"\\EE22\";\r\n}","@import './owfont-regular.scss';\r\n@import './audio.scss';\r\n@import './switch.scss';\r\n@import './setting.scss';\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  :root{\r\n    font-size: 16px;\r\n  }\r\n  body{\r\n    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),\r\n    0px 8px 13px rgba(0,0,0,0.1),\r\n    0px 18px 23px rgba(0,0,0,0.1);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    font-family: 'Quicksand', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    height: 100vh;\r\n    color: white;\r\n    transition: background-image 0.4s ease-in-out;\r\n    \r\n  }\r\n  .footer{\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 13rem;\r\n    color: #fff;\r\n    font-size: 2rem;\r\n    a{\r\n      text-decoration: none;\r\n    }\r\n    ul{\r\n      list-style-type: none;\r\n      display: flex;\r\n      \r\n      li{\r\n        margin-left: 1rem;\r\n      }\r\n      i{\r\n        color: #fff;\r\n      }\r\n      img {\r\n        width: 100%;\r\n    }\r\n    }\r\n  }\r\n  .overlay{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n    background-color: rgba(0,0,0,0.3); /*dim the background*/\r\n  }\r\n  .none{\r\n    opacity: 0;\r\n    transition: 0.5s;\r\n  }\r\n  #weather-container{\r\n    position: absolute;\r\n    right: 2rem;\r\n    top: 2rem;\r\n  }\r\n  .greet-container, .focus-container, #audio-container, #weather-container, .time-container,  .quote{\r\n    transition: all 0.7s ease;\r\n  }\r\n\r\n  \r\n  .weather-error {\r\n    color: #fd0b0b;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n  }\r\n  .container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-self: center;\r\n    margin-top: 3.5rem;\r\n    width: 40rem;\r\n  }\r\n  .btn-background-left{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 3rem;\r\n  }\r\n  .btn-background-right{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 3rem;\r\n  }\r\n  .time-container{\r\n    display: flex;\r\n    margin: 0 auto;\r\n    width: 27rem;\r\n    flex-direction: column;\r\n  }\r\n  #en-setting, #ru-setting{\r\n    padding: 4px 10px;\r\n  }\r\n  .backgroundLang{\r\n    background: #c5c5c594;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .dws-bg {\r\n    \r\n    transform: translate(-50%, -50%);\r\n   }\r\n   .pulse-bg, .bloc-bg, .phone-bg {\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    color: #ffffffd9;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n   }\r\n   .bloc-bg {\r\n    cursor: pointer;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n   }\r\n   .pulse-bg {\r\n    background: #afb5b738;\r\n    position: relative;\r\n    transition: .5s;\r\n   }\r\n   .phone-bg {\r\n    font-size: 1.5rem;\r\n    line-height: 40px;\r\n\r\n   }\r\n   .text-bg {\r\n    position: absolute;\r\n    opacity: 0;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    top: 28px;\r\n    font-size: 15px;\r\n    transform: scaleX(-1);\r\n    transition: .5s ease-in-out;\r\n   }\r\n   .phone-bg i {\r\n    transition: .5s ease-in-out;\r\n   }\r\n   .pulse-bg:hover {\r\n    background: #87c2d638;\r\n   }\r\n   .pulse-bg:hover i {\r\n    transition: .5s ease-in-out;\r\n    transform: scale(0);\r\n   }\r\n   .pulse-bg:hover .text {\r\n    transform: scaleX(1);\r\n    transition: .5s ease-in-out;\r\n    opacity: 1;\r\n   }\r\n   .pulse-bg:hover::before,\r\n   .pulse-bg:hover::after {\r\n    content: '';\r\n    position: absolute;\r\n    border: 1px solid #87c2d638;\r\n    left: -20px;\r\n    right: -20px;\r\n    top: -20px;\r\n    bottom: -20px;\r\n    border-radius: 50%;\r\n    animation: pulse 1.8s linear infinite;\r\n    opacity: 0;\r\n   }\r\n   .pulse-bg:hover::after {\r\n    animation-delay: .5s;\r\n   }\r\n   \r\n   \r\n   @keyframes pulse-bg {\r\n    0% {\r\n     transform: scale(0.5);\r\n     opacity: 0;\r\n    }\r\n    50% {\r\n     opacity: 1;\r\n    }\r\n    100% {\r\n     transform: scale(1.2);\r\n     opacity: 0;\r\n    }\r\n   }\r\n  \r\n  .city{\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  #time{\r\n    font-size: 8rem;\r\n  }\r\n  h1{\r\n    margin-top: 2rem;\r\n    margin-bottom: 3rem;\r\n  }\r\n  h2{\r\n    font-size: 1.2rem;\r\n    min-height: 1rem;\r\n    margin-bottom: 0.5rem;\r\n    opacity: 0.7;\r\n  }\r\n  #week{\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .quote {\r\n    background: #fffefe4f;\r\n    font-size: 1.5rem;\r\n    z-index: 1;\r\n    margin-top: 2rem;\r\n    width: 45rem;\r\n    min-height: 14rem;\r\n    padding:  1rem 5rem;\r\n    border-radius: 1rem;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-self: center;\r\n  }\r\n  \r\n  .quote figcaption {\r\n    text-align: right;\r\n  }\r\n  \r\n  .btn-quote{\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 0;\r\n  }\r\n  .dws {\r\n    transform: translate(-50%, -50%);\r\n   }\r\n   .pulse, .bloc, .phone {\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    color: #ffffffd9;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n   }\r\n   .bloc {\r\n    cursor: pointer;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n   }\r\n   .pulse {\r\n    background: #afb5b738;\r\n    position: relative;\r\n    transition: .5s;\r\n   }\r\n   .phone {\r\n    font-size: 1.5rem;\r\n    line-height: 40px;\r\n    animation: phone .9s ease-in-out infinite;\r\n   }\r\n   .text {\r\n    position: absolute;\r\n    opacity: 0;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    top: 28px;\r\n    font-size: 15px;\r\n    transform: scaleX(-1);\r\n    transition: .5s ease-in-out;\r\n   }\r\n   .phone i {\r\n    transition: .5s ease-in-out;\r\n   }\r\n   .pulse:hover {\r\n    background: #87c2d638;\r\n   }\r\n   .pulse:hover i {\r\n    transition: .5s ease-in-out;\r\n    transform: scale(0);\r\n   }\r\n   .pulse:hover .text {\r\n    transform: scaleX(1);\r\n    transition: .5s ease-in-out;\r\n    opacity: 1;\r\n   }\r\n   .pulse:hover::before,\r\n   .pulse:hover::after {\r\n    content: '';\r\n    position: absolute;\r\n    border: 1px solid #87c2d638;\r\n    left: -20px;\r\n    right: -20px;\r\n    top: -20px;\r\n    bottom: -20px;\r\n    border-radius: 50%;\r\n    animation: pulse 1.8s linear infinite;\r\n    opacity: 0;\r\n   }\r\n   .pulse:hover::after {\r\n    animation-delay: .5s;\r\n   }\r\n   \r\n   @keyframes phone {\r\n    0%, 100% {\r\n     transform: rotate(-20deg);\r\n    }\r\n    50% {\r\n     transform: rotate(21deg);\r\n    }\r\n   }\r\n   @keyframes pulse {\r\n    0% {\r\n     transform: scale(0.5);\r\n     opacity: 0;\r\n    }\r\n    50% {\r\n     opacity: 1;\r\n    }\r\n    100% {\r\n     transform: scale(1.2);\r\n     opacity: 0;\r\n    }\r\n   }\r\n  @media(max-width:1100px){\r\n    :root{\r\n        font-size: 16px;\r\n    }\r\n    .quote{\r\n        \r\n        font-size: 1.3rem;\r\n    }\r\n    #weather-container{\r\n        font-size: 0.9rem;\r\n        right: 0.5rem;\r\n    top: 0.5rem;\r\n    }\r\n   \r\n  \r\n  }\r\n  @media(max-width:820px){\r\n    :root{\r\n        font-size: 14px;\r\n    }\r\n    \r\n    \r\n  }\r\n  @media(max-width:670px){\r\n    :root{\r\n        font-size: 14px;\r\n    }\r\n    #time {\r\n        font-size: 7rem;\r\n      }\r\n      .time-container{\r\n        width: 22rem;\r\n      }\r\n    h2{\r\n        font-size: 1rem;\r\n    }\r\n    .quote {\r\n        font-size: 1rem;\r\n        padding: 1rem 2rem;\r\n        width: 34rem;\r\n        \r\n      }\r\n      \r\n  }\r\n  @media(max-width:560px){\r\n        .container {\r\n        width: 28rem;\r\n        margin-top: 5.5rem;\r\n      }\r\n      \r\n      \r\n  }\r\n  @media(max-width:490px){\r\n    .container {\r\n        width: 20rem;\r\n        margin-top: 4rem;\r\n      }\r\n    #time {\r\n    font-size: 4rem;\r\n  }\r\n  h1{\r\n    font-size: 1.2rem;\r\n  }\r\n  .time-container{\r\n    width: 12rem;\r\n  }\r\n  .quote{\r\n      font-size: 0.9rem;\r\n    width: 20rem;\r\n    min-height: 13.5rem;\r\n  }\r\n  \r\n  }","#audio-container {\r\n  position: absolute;\r\n  top: 0rem;\r\n  left: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  width: 20rem;\r\n  height: 3rem;\r\n  color: rgba(255, 255, 255, 0.85098);\r\n  .duration{\r\n    height: 2rem;\r\n    font-size: 0.8rem;\r\n    \r\n  }\r\n  .audio-player{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    .audio-player-wrapper{\r\n      display: flex;\r\n    justify-content: space-between;\r\n    }\r\n    .player {\r\n      display: flex;\r\n      width: 40%;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      margin: 1rem auto;\r\n    }\r\n      .audio-progress {\r\n        background: linear-gradient(to right, rgb(150, 230, 118) 0%, rgb(150, 230, 118) 0%, rgb(196, 196, 196) 0%, rgb(196, 196, 196) 100%);\r\n      }\r\n  \r\n      .progress {\r\n        display: block;\r\n        margin: 12px 0px;\r\n        height: 5px;\r\n        width: 60%;\r\n        outline: none;\r\n        -webkit-appearance: none;\r\n        transition: background 450ms ease-in;\r\n      }\r\n      #progress::-webkit-slider-thumb {\r\n        width: 15px;\r\n        height: 15px;\r\n        background: #FFFFFF;\r\n        border-radius: 50%;\r\n        -webkit-appearance: none;\r\n        cursor: ew-resize;\r\n      }\r\n      .progress::-webkit-slider-thumb {\r\n        width: 15px;\r\n        height: 15px;\r\n        background: #FFFFFF;\r\n        border-radius: 50%;\r\n        -webkit-appearance: none;\r\n        cursor: ew-resize;\r\n      }\r\n      \r\n  \r\n      #mute {\r\n        width: 25px;\r\n        height: 25px;\r\n        border: none;\r\n        background-color: transparent;\r\n        background: url('../assets/img/mute.svg') 50% 50%/contain no-repeat;\r\n        cursor: pointer;\r\n        transition: 0.2s linear;\r\n      }\r\n  \r\n      .volume {\r\n        margin: 12px 0;\r\n        background: linear-gradient(to right, rgb(150, 230, 118) 40%, rgb(150, 230, 118) 0%, rgb(196, 196, 196) 40%, rgb(196, 196, 196) 100%);\r\n        width: 20%;\r\n        outline: none;\r\n        -webkit-appearance: none;\r\n      }\r\n  \r\n      .prev-audio,\r\n      .next-audio {\r\n        background: rgba(175, 181, 183, 0.21961);\r\n        width: 2rem;\r\n        height: 2rem;\r\n        border: 2px solid rgba(255, 255, 255, 0.85098);\r\n        border-radius: 50%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.5s;\r\n  \r\n      }\r\n  \r\n      .play-audio {\r\n        background: rgba(175, 181, 183, 0.21961);\r\n        background-image: url('../assets/img/right.svg');\r\n        background-size: 1rem;\r\n        background-position: 60% center;\r\n        background-repeat: no-repeat;\r\n        width: 2.5rem;\r\n        height: 2.5rem;\r\n        border: 2px solid rgba(255, 255, 255, 0.85098);\r\n        border-radius: 50%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.5s;\r\n      }\r\n  \r\n      .pause {\r\n        background-image: url('../assets/img/pause.svg');\r\n        background-position: 50% center;\r\n        background-size: 0.8rem;\r\n      }\r\n  \r\n      .play-audio:hover,\r\n      .prev-audio:hover,\r\n      .next-audio:hover {\r\n        transform: scale(1.1);\r\n      }\r\n  }\r\n  }\r\n\r\n  .playlist-audio {\r\n    margin-top: 2rem;\r\n    width: 85%;\r\n\r\n    .item-audio {\r\n      text-align: left;\r\n      display: flex;\r\n      cursor: pointer;\r\n      margin-bottom: 0.5rem;\r\n\r\n      span {\r\n        order: -1;\r\n        margin-right: 1rem;\r\n        background-image: url('../assets/img/right.svg');\r\n        background-repeat: no-repeat;\r\n        background-size: 0.4rem;\r\n        background-position: 60% center;\r\n        width: 1.5rem;\r\n        height: 1.5rem;\r\n        display: inline-block;\r\n        border: 1px solid #ffffff;\r\n        border-radius: 50%;\r\n        transform: translate(25%, 0%);\r\n      }\r\n      .pause {\r\n        background-image: url('../assets/img/pause.svg');\r\n        background-position: 50% center;\r\n        background-size: 0.8rem;\r\n      }\r\n    }\r\n\r\n    .active-audio {\r\n      background-color: #ffffff4a;\r\n      border-radius: 0.4rem;\r\n\r\n      span {\r\n        border-color: #d8e9b1;\r\n      }\r\n    }\r\n\r\n  }\r\n",".switch-theme {\r\n  margin: 0 auto;\r\n  position: absolute;\r\n    left: 47vw;\r\n    top: 1rem;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #8f909496;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"EN\";\r\n  padding: 7px;\r\n  left: 0px;\r\n  bottom: 4px;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  transition: 0.4s;\r\n  box-shadow: 0 0px 15px #2020203d;\r\n  background: #b8e7d5;\r\n  background-size: 70%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\ninput:checked+.slider {\r\n  background-color: #8f909496;\r\n}\r\n\r\ninput:focus+.slider {\r\n  box-shadow: 0 0 1px #e1eef1;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n  -webkit-transform: translateX(24px);\r\n  -ms-transform: translateX(24px);\r\n  transform: translateX(24px);\r\n  content: \"RU\";\r\n  background: #d8e9b1;\r\n  background-size: 70%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}",".setting {\r\n  position: absolute;\r\n  bottom: 2rem;\r\n  left: 1rem;\r\n  z-index: 3;\r\n  .pulse-bg{\r\n    background: #a9a9a9bd;\r\n  }\r\n\r\n}\r\n.setting-menu {\r\n  position: absolute;\r\n  width: 15rem;\r\n  height: 16rem;\r\n  display: flex;\r\n  justify-content:center;\r\n  align-items: flex-end;\r\n  bottom: 3rem;\r\n  left: -100%;\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  color: #495a6e;\r\n  background-color: rgb(255, 254, 254);\r\n  z-index: 2;\r\n  transition: .3s;\r\n\r\n  h3 {\r\n    padding-bottom: 0.3rem;\r\n  }\r\n\r\n  span {\r\n    display: inline-block;\r\n  }\r\n\r\n  .set-check {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: initial;\r\n\r\n    label {\r\n      display: block;\r\n      position: relative;\r\n      margin-right: 10px;\r\n    }\r\n    label:before{\r\n      top: 5px;\r\n      right: 1px;\r\n      position: absolute;\r\n      content: '';\r\n      width: 14px;\r\n      height: 14px;\r\n      border-radius: 50%;\r\n      background-color: #d6d6d6;\r\n      border: 1px solid gray;\r\n    }\r\n    input:checked + label:after{\r\n      top: 8px;\r\n      right: 4px;\r\n      position: absolute;\r\n      content: '';\r\n      width: 10px;\r\n      height: 10px;\r\n      border-radius: 50%;\r\n      background-color: #55535da3;\r\n    }\r\n    input {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n}\r\n.menuRight{\r\n  left: 2rem;\r\n  transition: .3s;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/i18next/dist/esm/i18next.js":
/*!**************************************************!*\
  !*** ./node_modules/i18next/dist/esm/i18next.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");










var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Logger);

    this.init(concreteLogger, options);
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter = function () {
  function EventEmitter() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, EventEmitter);

    this.observers = {};
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();

    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
var chars = [' ', ',', '?', '!', ';'];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  var possibleChars = chars.filter(function (c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0) return true;
  var r = new RegExp("(".concat(possibleChars.map(function (c) {
    return c === '?' ? '\\?' : c;
  }).join('|'), ")"));
  var matched = !r.test(key);

  if (!matched) {
    var ki = key.indexOf(keySeparator);

    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }

  return matched;
}

function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (!current) return undefined;

    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
      return undefined;
    }

    if (current[paths[i]] === undefined) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];

      while (mix === undefined && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }

      if (mix === undefined) return undefined;
      if (typeof mix === 'string') return mix;
      if (p && typeof mix[p] === 'string') return mix[p];
      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
      return undefined;
    }

    current = current[paths[i]];
  }

  return current;
}

var ResourceStore = function (_EventEmitter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ResourceStore);

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ResourceStore).call(this));

    if (isIE10) {
      EventEmitter.call((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    if (_this.options.ignoreJSONStructure === undefined) {
      _this.options.ignoreJSONStructure = true;
    }

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      var result = getPath(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n = data && Object.keys(data) || [];
      return !!n.find(function (v) {
        return data[v] && Object.keys(data[v]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var checkedLoadedFor = {};

var Translator = function (_EventEmitter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Translator);

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Translator).call(this));

    if (isIE10) {
      EventEmitter.call((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    }

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };

      if (key === undefined || key === null) {
        return false;
      }

      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);

      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m = key.match(this.interpolator.nestingRegexp);

        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }

        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;

      if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          }

          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
            ns: namespaces
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }

          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var hasDefaultValue = Translator.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;

        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k, fallbackValue) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? fallbackValue : resForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? fallbackValue : resForMissing, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (language) {
                _this2.pluralResolver.getSuffixes(language).forEach(function (suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init((0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
          interpolation: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.options.interpolation, options.interpolation)
        }));
        var skipOnVariables = options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
        var nestBef;

        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

            return null;
          }

          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);
              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context));
              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = 'defaultValue';

      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LanguageUtil);

    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');

    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }

    this.rules = createRules();
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? 'ordinal' : 'cardinal'
          });
        } catch (_unused) {
          return;
        }
      }

      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }

      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function (suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (!rule) {
        return [];
      }

      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
        }).map(function (pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }

      return rule.numbers.map(function (number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var rule = this.getRule(code, options);

      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }

        return this.getSuffixRetroCompatible(rule, count);
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;

      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];

      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = 'plural';
        } else if (suffix === 1) {
          suffix = '';
        }
      }

      var returnSuffix = function returnSuffix() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };

      if (this.options.compatibilityJSON === 'v1') {
        if (suffix === 1) return '';
        if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === 'v2') {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }

      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
    }
  }]);

  return PluralResolver;
}();

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, data, {
            interpolationkey: key
          })) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, data, {
          interpolationkey: k
        }));
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;

        while (match = todo.regex.exec(str)) {
          value = handleFormat(match[1].trim());

          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));

              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString(value);
          }

          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);

          if (skipOnVariables) {
            todo.regex.lastIndex += safeValue.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }

          replaces++;

          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase();
  var formatOptions = {};

  if (formatStr.indexOf('(') > -1) {
    var p = formatStr.split('(');
    formatName = p[0].toLowerCase();
    var optStr = p[1].substring(0, p[1].length - 1);

    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(';');
      opts.forEach(function (opt) {
        if (!opt) return;

        var _opt$split = opt.split(':'),
            _opt$split2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_opt$split, 2),
            key = _opt$split2[0],
            val = _opt$split2[1];

        if (val.trim() === 'false') formatOptions[key.trim()] = false;
        if (val.trim() === 'true') formatOptions[key.trim()] = true;
        if (!isNaN(val.trim())) formatOptions[key.trim()] = parseInt(val.trim(), 10);
        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val.trim();
      });
    }
  }

  return {
    formatName: formatName,
    formatOptions: formatOptions
  };
}

var Formatter = function () {
  function Formatter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Formatter);

    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: function number(val, lng, options) {
        return new Intl.NumberFormat(lng, options).format(val);
      },
      currency: function currency(val, lng, options) {
        return new Intl.NumberFormat(lng, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
          style: 'currency'
        })).format(val);
      },
      datetime: function datetime(val, lng, options) {
        return new Intl.DateTimeFormat(lng, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options)).format(val);
      },
      relativetime: function relativetime(val, lng, options) {
        return new Intl.RelativeTimeFormat(lng, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options)).format(val, options.range || 'day');
      },
      list: function list(val, lng, options) {
        return new Intl.ListFormat(lng, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options)).format(val);
      }
    };
    this.init(options);
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Formatter, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
    }
  }, {
    key: "add",
    value: function add(name, fc) {
      this.formats[name] = fc;
    }
  }, {
    key: "format",
    value: function format(value, _format, lng, options) {
      var _this = this;

      var formats = _format.split(this.formatSeparator);

      var result = formats.reduce(function (mem, f) {
        var _parseFormatStr = parseFormatStr(f),
            formatName = _parseFormatStr.formatName,
            formatOptions = _parseFormatStr.formatOptions;

        if (_this.formats[formatName]) {
          var formatted = mem;

          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formatOptions, options, valOptions));
          } catch (error) {
            _this.logger.warn(error);
          }

          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }

        return mem;
      }, value);
      return result;
    }
  }]);

  return Formatter;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector = function (_EventEmitter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Connector);

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Connector).call(this));

    if (isIE10) {
      EventEmitter.call((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});
      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(args[2]) === 'object' || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n = function (_EventEmitter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, I18n);

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(I18n).call(this));

    if (isIE10) {
      EventEmitter.call((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    }

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (!options.defaultNS && options.ns) {
        if (typeof options.ns === 'string') {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf('translation') < 0) {
          options.defaultNS = options.ns[0];
        }
      }

      var defOpts = get();
      this.options = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defOpts, this.options, transformOptions(options));

      if (options.keySeparator !== undefined) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }

      if (options.nsSeparator !== undefined) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var formatter;

        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== 'undefined') {
          formatter = Formatter;
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });

        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }

        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }

      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;

          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

          return _this2;
        };
      });
      var deferred = defer();

      var load = function load() {
        var finish = function finish(err, t) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        };

        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));

        _this2.changeLanguage(_this2.options.lng, finish);
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === 'formatter') {
        this.modules.formatter = module;
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var setLngProps = function setLngProps(l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        _this4.resolvedLanguage = undefined;
        if (['cimode', 'dev'].indexOf(l) > -1) return;

        for (var li = 0; li < _this4.languages.length; li++) {
          var lngInLngs = _this4.languages[li];
          if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;

          if (_this4.store.hasLanguageSomeTranslations(lngInLngs)) {
            _this4.resolvedLanguage = lngInLngs;
            break;
          }
        }
      };

      var done = function done(err, l) {
        if (l) {
          setLngProps(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            setLngProps(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        var keySeparator = _this5.options.keySeparator || '.';
        var resultKey = keyPrefix ? "".concat(keyPrefix).concat(keySeparator).concat(key) : key;
        return _this5.t(resultKey, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/owfont-regular.eot":
/*!*********************************************!*\
  !*** ./src/assets/fonts/owfont-regular.eot ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "77585afbae07886acc4e.eot";

/***/ }),

/***/ "./src/assets/fonts/owfont-regular.eot?v=1.0.0":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/owfont-regular.eot?v=1.0.0 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "77585afbae07886acc4e.eot?v=1.0.0";

/***/ }),

/***/ "./src/assets/fonts/owfont-regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/owfont-regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3d46599b045b6a14f599.ttf";

/***/ }),

/***/ "./src/assets/fonts/owfont-regular.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/owfont-regular.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "165d3deef009efd0c531.woff";

/***/ }),

/***/ "./src/assets/img/mute.svg":
/*!*********************************!*\
  !*** ./src/assets/img/mute.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae4b6cbe60435fd79160.svg";

/***/ }),

/***/ "./src/assets/img/pause.svg":
/*!**********************************!*\
  !*** ./src/assets/img/pause.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "df8e640e9d1371a2a0b9.svg";

/***/ }),

/***/ "./src/assets/img/right.svg":
/*!**********************************!*\
  !*** ./src/assets/img/right.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "45c9001d0ab48afa8d10.svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./src/scripts/quotesData.json":
/*!*************************************!*\
  !*** ./src/scripts/quotesData.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"text":"Genius is one percent inspiration and ninety-nine percent perspiration.","author":"Thomas Edison"},{"text":"You can observe a lot just by watching.","author":"Yogi Berra"},{"text":"A house divided against itself cannot stand.","author":"Abraham Lincoln"},{"text":"Difficulties increase the nearer we get to the goal.","author":"Johann Wolfgang von Goethe"},{"text":"Fate is in your hands and no one elses","author":"Byron Pulsifer"},{"text":"Be the chief but never the lord.","author":"Lao Tzu"},{"text":"Nothing happens unless first we dream.","author":"Carl Sandburg"},{"text":"Well begun is half done.","author":"Aristotle"},{"text":"Life is a learning experience, only if you learn.","author":"Yogi Berra"},{"text":"Self-complacency is fatal to progress.","author":"Margaret Sangster"},{"text":"Peace comes from within. Do not seek it without.","author":"Buddha"},{"text":"What you give is what you get.","author":"Byron Pulsifer"},{"text":"We can only learn to love by loving.","author":"Iris Murdoch"},{"text":"Life is change. Growth is optional. Choose wisely.","author":"Karen Clark"},{"text":"You\'ll see it when you believe it.","author":"Wayne Dyer"},{"text":"Today is the tomorrow we worried about yesterday.","author":null},{"text":"It\'s easier to see the mistakes on someone else\'s paper.","author":null},{"text":"Every man dies. Not every man really lives.","author":null},{"text":"To lead people walk behind them.","author":"Lao Tzu"},{"text":"Having nothing, nothing can he lose.","author":"William Shakespeare"},{"text":"Trouble is only opportunity in work clothes.","author":"Henry J. Kaiser"},{"text":"A rolling stone gathers no moss.","author":"Publilius Syrus"},{"text":"Ideas are the beginning points of all fortunes.","author":"Napoleon Hill"},{"text":"Everything in life is luck.","author":"Donald Trump"},{"text":"Doing nothing is better than being busy doing nothing.","author":"Lao Tzu"},{"text":"Trust yourself. You know more than you think you do.","author":"Benjamin Spock"},{"text":"Study the past, if you would divine the future.","author":"Confucius"},{"text":"From error to error one discovers the entire truth.","author":"Sigmund Freud"},{"text":"Well done is better than well said.","author":"Benjamin Franklin"},{"text":"Bite off more than you can chew, then chew it.","author":"Ella Williams"},{"text":"Work out your own salvation. Do not depend on others.","author":"Buddha"},{"text":"One today is worth two tomorrows.","author":"Benjamin Franklin"},{"text":"Once you choose hope, anythings possible.","author":"Christopher Reeve"},{"text":"God always takes the simplest way.","author":"Albert Einstein"},{"text":"One fails forward toward success.","author":"Charles Kettering"},{"text":"Learning is a treasure that will follow its owner everywhere","author":"Chinese proverb"},{"text":"Be as you wish to seem.","author":"Socrates"},{"text":"The world is always in movement.","author":"V. Naipaul"},{"text":"Never mistake activity for achievement.","author":"John Wooden"},{"text":"What worries you masters you.","author":"Haddon Robinson"},{"text":"One faces the future with ones past.","author":"Pearl Buck"},{"text":"Goals are the fuel in the furnace of achievement.","author":"Brian Tracy"},{"text":"Who sows virtue reaps honour.","author":"Leonardo da Vinci"},{"text":"Be kind whenever possible. It is always possible.","author":"Dalai Lama"},{"text":"Talk doesn\'t cook rice.","author":"Chinese proverb"},{"text":"He is able who thinks he is able.","author":"Buddha"},{"text":"A goal without a plan is just a wish.","author":"Larry Elder"},{"text":"To succeed, we must first believe that we can.","author":"Michael Korda"},{"text":"Learn from yesterday, live for today, hope for tomorrow.","author":"Albert Einstein"},{"text":"A weed is no more than a flower in disguise.","author":"James Lowell"},{"text":"Do, or do not. There is no try.","author":"Yoda"},{"text":"All serious daring starts from within.","author":"Harriet Beecher Stowe"},{"text":"The best teacher is experience learned from failures.","author":"Byron Pulsifer"},{"text":"Think how hard physics would be if particles could think.","author":"Murray Gell-Mann"},{"text":"Love is the flower you\'ve got to let grow.","author":"John Lennon"},{"text":"Don\'t wait. The time will never be just right.","author":"Napoleon Hill"},{"text":"Time is the wisest counsellor of all.","author":"Pericles"},{"text":"You give before you get.","author":"Napoleon Hill"},{"text":"Wisdom begins in wonder.","author":"Socrates"},{"text":"Without courage, wisdom bears no fruit.","author":"Baltasar Gracian"},{"text":"Change in all things is sweet.","author":"Aristotle"},{"text":"What you fear is that which requires action to overcome.","author":"Byron Pulsifer"},{"text":"When performance exceeds ambition, the overlap is called success.","author":"Cullen Hightower"},{"text":"When deeds speak, words are nothing.","author":"African proverb"},{"text":"Real magic in relationships means an absence of judgement of others.","author":"Wayne Dyer"},{"text":"I never think of the future. It comes soon enough.","author":"Albert Einstein"},{"text":"Skill to do comes of doing.","author":"Ralph Emerson"},{"text":"Wisdom is the supreme part of happiness.","author":"Sophocles"},{"text":"I believe that every person is born with talent.","author":"Maya Angelou"},{"text":"Important principles may, and must, be inflexible.","author":"Abraham Lincoln"},{"text":"The undertaking of a new action brings new strength.","author":"Richard Evans"},{"text":"The years teach much which the days never know.","author":"Ralph Emerson"},{"text":"Our distrust is very expensive.","author":"Ralph Emerson"},{"text":"All know the way; few actually walk it.","author":"Bodhidharma"},{"text":"Great talent finds happiness in execution.","author":"Johann Wolfgang von Goethe"},{"text":"Faith in oneself is the best and safest course.","author":"Michelangelo"},{"text":"Courage is going from failure to failure without losing enthusiasm.","author":"Winston Churchill"},{"text":"The two most powerful warriors are patience and time.","author":"Leo Tolstoy"},{"text":"Anticipate the difficult by managing the easy.","author":"Lao Tzu"},{"text":"Those who are free of resentful thoughts surely find peace.","author":"Buddha"},{"text":"A short saying often contains much wisdom.","author":"Sophocles"},{"text":"Only do what your heart tells you.","author":"Princess Diana"},{"text":"Life is movement-we breathe, we eat, we walk, we move!","author":"John Pierrakos"},{"text":"No one can make you feel inferior without your consent.","author":"Eleanor Roosevelt"},{"text":"Argue for your limitations, and sure enough theyre yours.","author":"Richard Bach"},{"text":"Luck is what happens when preparation meets opportunity.","author":"Seneca"},{"text":"Victory belongs to the most persevering.","author":"Napoleon Bonaparte"},{"text":"Love all, trust a few, do wrong to none.","author":"William Shakespeare"},{"text":"In order to win, you must expect to win.","author":"Richard Bach"},{"text":"A goal is a dream with a deadline.","author":"Napoleon Hill"},{"text":"You can do it if you believe you can!","author":"Napoleon Hill"},{"text":"Set your goals high, and don\'t stop till you get there.","author":"Bo Jackson"},{"text":"Smile, breathe, and go slowly.","author":"Thich Nhat Hanh"},{"text":"Nobody will believe in you unless you believe in yourself.","author":"Liberace"},{"text":"Do more than dream: work.","author":"William Arthur Ward"},{"text":"No man was ever wise by chance.","author":"Seneca"},{"text":"He that is giddy thinks the world turns round.","author":"William Shakespeare"},{"text":"Don\'t ruin the present with the ruined past.","author":"Ellen Gilchrist"},{"text":"Do something wonderful, people may imitate it.","author":"Albert Schweitzer"},{"text":"Do one thing every day that scares you.","author":"Eleanor Roosevelt"},{"text":"If you cannot be silent be brilliant and thoughtful.","author":"Byron Pulsifer"},{"text":"Who looks outside, dreams; who looks inside, awakes.","author":"Carl Jung"},{"text":"What we think, we become.","author":"Buddha"},{"text":"The shortest answer is doing.","author":"Lord Herbert"},{"text":"All our knowledge has its origins in our perceptions.","author":"Leonardo da Vinci"},{"text":"Trusting our intuition often saves us from disaster.","author":"Anne Wilson Schaef"},{"text":"Truth is powerful and it prevails.","author":"Sojourner Truth"},{"text":"Light tomorrow with today!","author":"Elizabeth Browning"},{"text":"Silence is a fence around wisdom.","author":"German proverb"},{"text":"Society develops wit, but its contemplation alone forms genius.","author":"Madame de Stael"},{"text":"The simplest things are often the truest.","author":"Richard Bach"},{"text":"Yesterday I dared to struggle. Today I dare to win.","author":"Bernadette Devlin"},{"text":"No alibi will save you from accepting the responsibility.","author":"Napoleon Hill"},{"text":"If you can dream it, you can do it.","author":"Walt Disney"},{"text":"It is better to travel well than to arrive.","author":"Buddha"},{"text":"Life shrinks or expands in proportion to one\'s courage.","author":"Anais Nin"},{"text":"You have to believe in yourself.","author":"Sun Tzu"},{"text":"Our intention creates our reality.","author":"Wayne Dyer"},{"text":"Silence is a true friend who never betrays.","author":"Confucius"},{"text":"Character develops itself in the stream of life.","author":"Johann Wolfgang von Goethe"},{"text":"From little acorns mighty oaks do grow.","author":"American proverb"},{"text":"You can\'t stop the waves, but you can learn to surf.","author":"Jon Kabat-Zinn"},{"text":"Reality does not conform to the ideal, but confirms it.","author":"Gustave Flaubert"},{"text":"Speak low, if you speak love.","author":"William Shakespeare"},{"text":"A really great talent finds its happiness in execution.","author":"Johann Wolfgang von Goethe"},{"text":"Reality leaves a lot to the imagination.","author":"John Lennon"},{"text":"The greatest remedy for anger is delay.","author":"Seneca"},{"text":"Growth itself contains the germ of happiness.","author":"Pearl Buck"},{"text":"Nothing strengthens authority so much as silence.","author":"Leonardo da Vinci"},{"text":"Wherever you go, go with all your heart.","author":"Confucius"},{"text":"The only real valuable thing is intuition.","author":"Albert Einstein"},{"text":"Good luck is another name for tenacity of purpose.","author":"Ralph Emerson"},{"text":"Rainbows apologize for angry skies.","author":"Sylvia Voirol"},{"text":"Time is the most valuable thing a man can spend.","author":"Theophrastus"},{"text":"Whatever happens, take responsibility.","author":"Tony Robbins"},{"text":"Experience is simply the name we give our mistakes.","author":"Oscar Wilde"},{"text":"I think and that is all that I am.","author":"Wayne Dyer"},{"text":"If the shoe doesn\'t fit, must we change the foot?","author":"Gloria Steinem"},{"text":"Each day provides its own gifts.","author":"Marcus Aurelius"},{"text":"While we stop to think, we often miss our opportunity.","author":"Publilius Syrus"},{"text":"Life isn\'t about finding yourself. Life is about creating yourself.","author":"Bernard Shaw"},{"text":"To bring anything into your life, imagine that it\'s already there.","author":"Richard Bach"},{"text":"Begin to weave and God will give you the thread.","author":"German proverb"},{"text":"The more you know yourself, the more you forgive yourself.","author":"Confucius"},{"text":"Without faith, nothing is possible. With it, nothing is impossible.","author":"Mary Bethune"},{"text":"Once we accept our limits, we go beyond them.","author":"Albert Einstein"},{"text":"Whatever we expect with confidence becomes our own self-fulfilling prophecy.","author":"Brian Tracy"},{"text":"Everything you can imagine is real.","author":"Pablo Picasso"},{"text":"Fear is a darkroom where negatives develop.","author":"Usman Asif"},{"text":"The truest wisdom is a resolute determination.","author":"Napoleon Bonaparte"},{"text":"Life is the flower for which love is the honey.","author":"Victor Hugo"},{"text":"Freedom is the right to live as we wish.","author":"Epictetus"},{"text":"Never ignore a gut feeling, but never believe that it\'s enough.","author":"Robert Heller"},{"text":"Loss is nothing else but change,and change is Natures delight.","author":"Marcus Aurelius"},{"text":"Someone is special only if you tell them.","author":"Byron Pulsifer"},{"text":"There is no way to happiness, happiness is the way.","author":"Thich Nhat Hanh"},{"text":"He who talks more is sooner exhausted.","author":"Lao Tzu"},{"text":"He who is contented is rich.","author":"Lao Tzu"},{"text":"What we achieve inwardly will change outer reality.","author":"Plutarch"},{"text":"Our strength grows out of our weaknesses.","author":"Ralph Waldo Emerson"},{"text":"We must become the change we want to see.","author":"Mahatma Gandhi"},{"text":"Happiness is found in doing, not merely possessing.","author":"Napoleon Hill"},{"text":"We choose our destiny in the way we treat others.","author":"Wit"},{"text":"No snowflake in an avalanche ever feels responsible.","author":"Voltaire"},{"text":"Fortune favours the brave.","author":"Virgil"},{"text":"I believe in one thing only, the power of human will.","author":"Joseph Stalin"},{"text":"The best way out is always through.","author":"Robert Frost"},{"text":"The mind unlearns with difficulty what it has long learned.","author":"Seneca"},{"text":"I destroy my enemies when I make them my friends.","author":"Abraham Lincoln"},{"text":"No garden is without its weeds.","author":"Thomas Fuller"},{"text":"There is no failure except in no longer trying.","author":"Elbert Hubbard"},{"text":"Kind words will unlock an iron door.","author":"Turkish proverb"},{"text":"Problems are only opportunities with thorns on them.","author":"Hugh Miller"},{"text":"Life is just a chance to grow a soul.","author":"A. Powell Davies"},{"text":"Mountains cannot be surmounted except by winding paths.","author":"Johann Wolfgang von Goethe"},{"text":"May our hearts garden of awakening bloom with hundreds of flowers.","author":"Thich Nhat Hanh"},{"text":"Fortune befriends the bold.","author":"John Dryden"},{"text":"Keep true to the dreams of thy youth.","author":"Friedrich von Schiller"},{"text":"You\'re never a loser until you quit trying.","author":"Mike Ditka"},{"text":"Science is organized knowledge. Wisdom is organized life.","author":"Immanuel Kant"},{"text":"Knowing is not enough; we must apply!","author":"Johann Wolfgang von Goethe"},{"text":"Strong beliefs win strong men, and then make them stronger.","author":"Richard Bach"},{"text":"Autumn is a second spring when every leaf is a flower.","author":"Albert Camus"},{"text":"If you surrender to the wind, you can ride it.","author":"Toni Morrison"},{"text":"Keep yourself to the sunshine and you cannot see the shadow.","author":"Helen Keller"},{"text":"Write your plans in pencil and give God the eraser.","author":"Paulo Coelho"},{"text":"Inspiration exists, but it has to find us working.","author":"Pablo Picasso"},{"text":"Pick battles big enough to matter, small enough to win.","author":"Jonathan Kozol"},{"text":"Don\'t compromise yourself. You are all you\'ve got.","author":"Janis Joplin"},{"text":"A short saying oft contains much wisdom.","author":"Sophocles"},{"text":"Difficulties are things that show a person what they are.","author":"Epictetus"},{"text":"When you doubt your power, you give power to your doubt.","author":"Honore de Balzac"},{"text":"The cause is hidden. The effect is visible to all.","author":"Ovid"},{"text":"A prudent question is one half of wisdom.","author":"Francis Bacon"},{"text":"The path to success is to take massive, determined action.","author":"Tony Robbins"},{"text":"I allow my intuition to lead my path.","author":"Manuel Puig"},{"text":"Nature takes away any faculty that is not used.","author":"William R. Inge"},{"text":"If you wish to be a writer, write.","author":"Epictetus"},{"text":"There is no way to prosperity, prosperity is the way.","author":"Wayne Dyer"},{"text":"Either you run the day or the day runs you.","author":"Jim Rohn"},{"text":"Better be ignorant of a matter than half know it.","author":"Publilius Syrus"},{"text":"Follow your instincts. That is where true wisdom manifests itself.","author":"Oprah Winfrey"},{"text":"There never was a good knife made of bad steel.","author":"Benjamin Franklin"},{"text":"To accomplish great things, we must dream as well as act.","author":"Anatole France"},{"text":"Patience is the companion of wisdom.","author":"Saint Augustine"},{"text":"The mind is everything. What you think you become.","author":"Buddha"},{"text":"To enjoy life, we must touch much of it lightly.","author":"Voltaire"},{"text":"To fly, we have to have resistance.","author":"Maya Lin"},{"text":"What you see depends on what you\'re looking for.","author":null},{"text":"The heart has its reasons which reason knows not of.","author":"Blaise Pascal"},{"text":"Be great in act, as you have been in thought.","author":"William Shakespeare"},{"text":"Imagination rules the world.","author":"Napoleon Bonaparte"},{"text":"Kind words do not cost much. Yet they accomplish much.","author":"Blaise Pascal"},{"text":"There is no greater harm than that of time wasted.","author":"Michelangelo"},{"text":"Intuition will tell the thinking mind where to look next.","author":"Jonas Salk"},{"text":"Worry gives a small thing a big shadow.","author":null},{"text":"Fears are nothing more than a state of mind.","author":"Napoleon Hill"},{"text":"The journey of a thousand miles begins with one step.","author":"Lao Tzu"},{"text":"Efficiency is doing things right; effectiveness is doing the right things.","author":"Peter Drucker"},{"text":"Blaze with the fire that is never extinguished.","author":"Luisa Sigea"},{"text":"Don\'t cry because it\'s over. Smile because it happened.","author":"Dr. Seuss"},{"text":"No is easier to do. Yes is easier to say.","author":"Jason Fried"},{"text":"To be wrong is nothing unless you continue to remember it.","author":"Confucius"},{"text":"Yesterdays home runs don\'t win today\'s games.","author":"Babe Ruth"},{"text":"Silence is deep as Eternity, Speech is shallow as Time.","author":"Carlyle"},{"text":"Don\'t smother each other. No one can grow in the shade.","author":"Leo F. Buscaglia"},{"text":"An ant on the move does more than a dozing ox","author":"Lao Tzu"},{"text":"You can\'t shake hands with a clenched fist.","author":"Indira Gandhi"},{"text":"A good decision is based on knowledge and not on numbers.","author":"Plato"},{"text":"The cautious seldom err.","author":"Confucius"},{"text":"If there is no struggle, there is no progress.","author":"Frederick Douglass"},{"text":"Where there is great love, there are always miracles.","author":"Willa Cather"},{"text":"Time you enjoy wasting, was not wasted.","author":"John Lennon"},{"text":"Every problem has a gift for you in its hands.","author":"Richard Bach"},{"text":"Sadness flies away on the wings of time.","author":"Jean de la Fontaine"},{"text":"I have often regretted my speech, never my silence.","author":"Publilius Syrus"},{"text":"Never put off till tomorrow what you can do today.","author":"Thomas Jefferson"},{"text":"Minds are like parachutes. They only function when open.","author":"Thomas Dewar"},{"text":"If a man does his best, what else is there?","author":"George Patton"},{"text":"The secret of success is constancy to purpose.","author":"Benjamin Disraeli"},{"text":"Life is a progress, and not a station.","author":"Ralph Emerson"},{"text":"All seasons are beautiful for the person who carries happiness within.","author":"Horace Friess"},{"text":"To avoid criticism, do nothing, say nothing, be nothing.","author":"Elbert Hubbard"},{"text":"All things change; nothing perishes.","author":"Ovid"},{"text":"Absence makes the heart grow fonder.","author":"Haynes Bayly"},{"text":"Imagination is the highest kite one can fly.","author":"Lauren Bacall"},{"text":"The beginning of knowledge is the discovery of something we do not understand.","author":"Frank Herbert"},{"text":"Love doesn\'t make the world go round, love is what makes the ride worthwhile.","author":"Elizabeth Browning"},{"text":"Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.","author":"Arthur Conan Doyle"},{"text":"Good timber does not grow with ease; the stronger the wind, the stronger the trees.","author":"J. Willard Marriott"},{"text":"I believe that we are fundamentally the same and have the same basic potential.","author":"Dalai Lama"},{"text":"The winds and waves are always on the side of the ablest navigators.","author":"Edward Gibbon"},{"text":"The future belongs to those who believe in the beauty of their dreams.","author":"Eleanor Roosevelt"},{"text":"To get something you never had, you have to do something you never did.","author":null},{"text":"Be thankful when you don\'t know something for it gives you the opportunity to learn.","author":null},{"text":"Strength does not come from physical capacity. It comes from an indomitable will.","author":"Mahatma Gandhi"},{"text":"Each misfortune you encounter will carry in it the seed of tomorrows good luck.","author":"Og Mandino"},{"text":"To forgive is to set a prisoner free and realize that prisoner was you.","author":"Lewis B. Smedes"},{"text":"In separateness lies the world\'s great misery, in compassion lies the world\'s true strength.","author":"Buddha"},{"text":"By believing passionately in something that does not yet exist, we create it.","author":"Nikos Kazantzakis"},{"text":"Letting go is not the end of the world; it is the beginning of a new life.","author":null},{"text":"All the great performers I have worked with are fuelled by a personal dream.","author":"John Eliot"},{"text":"One of the advantages of being disorderly is that one is constantly making exciting discoveries.","author":"A. A. Milne"},{"text":"I never see what has been done; I only see what remains to be done.","author":"Marie Curie"},{"text":"Begin at once to live and count each separate day as a separate life.","author":"Seneca"},{"text":"If you don\'t know where you are going, you will probably end up somewhere else.","author":"Lawrence Peter"},{"text":"It is not so important to know everything as to appreciate what we learn.","author":"Hannah More"},{"text":"The bird of paradise alights only upon the hand that does not grasp.","author":"John Berry"},{"text":"Think as a wise man but communicate in the language of the people.","author":"William Yeats"},{"text":"Practice yourself, for heavens sake in little things, and then proceed to greater.","author":"Epictetus"},{"text":"If one does not know to which port is sailing, no wind is favorable.","author":"Seneca"},{"text":"Our greatest glory is not in never failing but rising everytime we fall.","author":null},{"text":"Being right is highly overrated. Even a stopped clock is right twice a day.","author":null},{"text":"To be upset over what you don\'t have is to waste what you do have.","author":"Ken S. Keyes"},{"text":"If we did the things we are capable of, we would astound ourselves.","author":"Thomas Edison"},{"text":"Nothing in life is to be feared. It is only to be understood.","author":"Marie Curie"},{"text":"Successful people ask better questions, and as a result, they get better answers.","author":"Tony Robbins"},{"text":"Love is not blind; it simply enables one to see things others fail to see.","author":null},{"text":"Life is a process. We are a process. The universe is a process.","author":"Anne Schaef"},{"text":"I think somehow we learn who we really are and then live with that decision.","author":"Eleanor Roosevelt"},{"text":"We learn what we have said from those who listen to our speaking.","author":"Kenneth Patton"},{"text":"A little knowledge that acts is worth infinitely more than much knowledge that is idle.","author":"Kahlil Gibran"},{"text":"If you get up one more time than you fall, you will make it through.","author":null},{"text":"The doors we open and close each day decide the lives we live.","author":"Flora Whittemore"},{"text":"The worst bankrupt in the world is the person who has lost his enthusiasm.","author":"H. W. Arnold"},{"text":"Happiness comes when your work and words are of benefit to yourself and others.","author":"Buddha"},{"text":"Don\'t focus on making the right decision, focus on making the decision the right one.","author":null},{"text":"Everything is perfect in the universe even your desire to improve it.","author":"Wayne Dyer"},{"text":"The universe is full of magical things, patiently waiting for our wits to grow sharper.","author":"Eden Phillpotts"},{"text":"Just as a candle cannot burn without fire, men cannot live without a spiritual life.","author":"Buddha"},{"text":"A thing long expected takes the form of the unexpected when at last it comes.","author":"Mark Twain"},{"text":"Action may not always bring happiness; but there is no happiness without action.","author":"Benjamin Disraeli"},{"text":"I don\'t believe in failure. It is not failure if you enjoyed the process.","author":"Oprah Winfrey"},{"text":"What you do not want done to yourself, do not do to others.","author":"Confucius"},{"text":"Short words are best and the old words when short are best of all.","author":"Winston Churchill"},{"text":"If you light a lamp for somebody, it will also brighten your path.","author":"Buddha"},{"text":"I have done my best: that is about all the philosophy of living one needs.","author":"Lin-yutang"},{"text":"Through perseverance many people win success out of what seemed destined to be certain failure.","author":"Benjamin Disraeli"},{"text":"Give thanks for the rain of life that propels us to reach new horizons.","author":"Byron Pulsifer"},{"text":"Love is just a word until someone comes along and gives it meaning.","author":null},{"text":"We all have problems. The way we solve them is what makes us different.","author":null},{"text":"The secret to a rich life is to have more beginnings than endings.","author":"Dave Weinbaum"},{"text":"It is only when the mind and character slumber that the dress can be seen.","author":"Ralph Waldo Emerson"},{"text":"If you don\'t like something, change it. If you can\'t change it, change your attitude.","author":"Maya Angelou"},{"text":"Reviewing what you have learned and learning anew, you are fit to be a teacher.","author":"Confucius"},{"text":"The world is a book, and those who do not travel read only a page.","author":"Augustinus Sanctus"},{"text":"So long as a person is capable of self-renewal they are a living being.","author":"Henri-Frederic Amiel"},{"text":"I\'m not afraid of storms, for I\'m learning how to sail my ship.","author":"Louisa Alcott"},{"text":"Think for yourselves and let others enjoy the privilege to do so too.","author":"Voltaire"},{"text":"How we spend our days is, of course, how we spend our lives.","author":"Annie Dillard"},{"text":"It has never been my object to record my dreams, just to realize them.","author":"Man Ray"},{"text":"The most complicated achievements of thought are possible without the assistance of consciousness.","author":"Sigmund Freud"},{"text":"Be miserable. Or motivate yourself. Whatever has to be done, it\'s always your choice.","author":"Wayne Dyer"},{"text":"Most great people have attained their greatest success just one step beyond their greatest failure.","author":"Napoleon Hill"},{"text":"If you think you can, you can. And if you think you can\'t, you\'re right.","author":"Henry Ford"},{"text":"Better to have loved and lost, than to have never loved at all.","author":"St. Augustine"},{"text":"Everyone thinks of changing the world, but no one thinks of changing himself.","author":"Leo Tolstoy"},{"text":"The best way to pay for a lovely moment is to enjoy it.","author":"Richard Bach"},{"text":"You have enemies? Good. That means you\'ve stood up for something, sometime in your life.","author":"Winston Churchill"},{"text":"Slow down and everything you are chasing will come around and catch you.","author":"John De Paola"},{"text":"Your worst enemy cannot harm you as much as your own unguarded thoughts.","author":"Buddha"},{"text":"I always wanted to be somebody, but I should have been more specific.","author":"Lily Tomlin"},{"text":"Yeah we all shine on, like the moon, and the stars, and the sun.","author":"John Lennon"},{"text":"Knowledge is a process of piling up facts; wisdom lies in their simplification.","author":"Martin Fischer"},{"text":"Life is like riding a bicycle. To keep your balance you must keep moving.","author":"Albert Einstein"},{"text":"We should all be thankful for those people who rekindle the inner spirit.","author":"Albert Schweitzer"},{"text":"Opportunity is missed by most because it is dressed in overalls and looks like work.","author":"Thomas Edison"},{"text":"Feeling and longing are the motive forces behind all human endeavor and human creations.","author":"Albert Einstein"},{"text":"In the end we retain from our studies only that which we practically apply.","author":"Johann Wolfgang von Goethe"},{"text":"If you correct your mind, the rest of your life will fall into place.","author":"Lao Tzu"},{"text":"The world makes way for the man who knows where he is going.","author":"Ralph Emerson"},{"text":"When your desires are strong enough you will appear to possess superhuman powers to achieve.","author":"Napoleon Hill"},{"text":"Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.","author":"John Adams"},{"text":"I cannot make my days longer so I strive to make them better.","author":"Henry David Thoreau"},{"text":"Tension is who you think you should be. Relaxation is who you are.","author":"Chinese proverb"},{"text":"Never bend your head. Always hold it high. Look the world right in the eye.","author":"Helen Keller"},{"text":"One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.","author":"Albert Schweitzer"},{"text":"We cannot do everything at once, but we can do something at once.","author":"Calvin Coolidge"},{"text":"You have to do your own growing no matter how tall your grandfather was.","author":"Abraham Lincoln"},{"text":"Invent your world. Surround yourself with people, color, sounds, and work that nourish you.","author":null},{"text":"It is fatal to enter any war without the will to win it.","author":"General Douglas MacArthur"},{"text":"Be what you are. This is the first step toward becoming better than you are.","author":"Julius Charles Hare"},{"text":"There is nothing in a caterpillar that tells you it\'s going to be a butterfly.","author":"Buckminster Fuller"},{"text":"Love and compassion open our own inner life, reducing stress, distrust and loneliness.","author":"Dalai Lama"},{"text":"Ideals are an imaginative understanding of that which is desirable in that which is possible.","author":"Walter Lippmann"},{"text":"The superior man is satisfied and composed; the mean man is always full of distress.","author":"Confucius"},{"text":"If you spend too much time thinking about a thing, you\'ll never get it done.","author":"Bruce Lee"},{"text":"The way is not in the sky. The way is in the heart.","author":"Buddha"},{"text":"Most people are about as happy as they make up their minds to be","author":"Abraham Lincoln"},{"text":"Three things cannot be long hidden: the sun, the moon, and the truth.","author":"Buddha"},{"text":"More often than not, anger is actually an indication of weakness rather than of strength.","author":"Dalai Lama"},{"text":"Before you put on a frown, make absolutely sure there are no smiles available.","author":"Jim Beggs"},{"text":"A man of ability and the desire to accomplish something can do anything.","author":"Donald Kircher"},{"text":"You, yourself, as much as anybody in the entire universe, deserve your love and affection.","author":"Buddha"},{"text":"It is not uncommon for people to spend their whole life waiting to start living.","author":"Eckhart Tolle"},{"text":"Don\'t be afraid to go out on a limb. That\'s where the fruit is.","author":"H. Jackson Browne"},{"text":"Wicked people are always surprised to find ability in those that are good.","author":"Marquis Vauvenargues"},{"text":"Life is so constructed that an event does not, cannot, will not, match the expectation.","author":"Charlotte Bronte"},{"text":"If you change the way you look at things, the things you look at change.","author":"Wayne Dyer"},{"text":"No man can succeed in a line of endeavor which he does not like.","author":"Napoleon Hill"},{"text":"You will not be punished for your anger, you will be punished by your anger.","author":"Buddha"},{"text":"Don\'t judge each day by the harvest you reap but by the seeds you plant.","author":"Robert Stevenson"},{"text":"They say that time changes things, but you actually have to change them yourself.","author":"Andy Warhol"},{"text":"Never apologize for showing feelings. When you do so, you apologize for the truth.","author":"Benjamin Disraeli"},{"text":"The truth you believe and cling to makes you unavailable to hear anything new.","author":"Pema Chodron"},{"text":"Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.","author":"Horace"},{"text":"If you spend your whole life waiting for the storm, you\'ll never enjoy the sunshine.","author":"Morris West"},{"text":"The only limit to our realization of tomorrow will be our doubts of today.","author":"Franklin Roosevelt"},{"text":"Every action of our lives touches on some chord that will vibrate in eternity.","author":"Edwin Chapin"},{"text":"Shoot for the moon. Even if you miss, you\'ll land among the stars.","author":"Les Brown"},{"text":"It does not matter how slowly you go as long as you do not stop.","author":"Confucius"},{"text":"Every day may not be good, but there\'s something good in every day.","author":null},{"text":"Most folks are about as happy as they make up their minds to be.","author":"Abraham Lincoln"},{"text":"If you would take, you must first give, this is the beginning of intelligence.","author":"Lao Tzu"},{"text":"Some people think it\'s holding that makes one strong sometimes it\'s letting go.","author":null},{"text":"It is on our failures that we base a new and different and better success.","author":"Havelock Ellis"},{"text":"Quality is never an accident; it is always the result of intelligent effort.","author":"John Ruskin"},{"text":"To study and not think is a waste. To think and not study is dangerous.","author":"Confucius"},{"text":"Life is a succession of lessons, which must be lived to be understood.","author":"Ralph Emerson"},{"text":"Time changes everything except something within us which is always surprised by change.","author":"Thomas Hardy"},{"text":"You are important enough to ask and you are blessed enough to receive back.","author":"Wayne Dyer"},{"text":"If you cannot do great things, do small things in a great way.","author":"Napoleon Hill"},{"text":"If you want your life to be more rewarding, you have to change the way you think.","author":"Oprah Winfrey"},{"text":"Transformation doesn\'t take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.","author":"Byron Pulsifer"},{"text":"The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.","author":"Leonardo Ruiz"},{"text":"The free man is he who does not fear to go to the end of his thought.","author":"Leon Blum"},{"text":"Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.","author":"Ralph Emerson"},{"text":"A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.","author":"Bernard Shaw"},{"text":"The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.","author":"Lao Tzu"},{"text":"Don\'t leave a stone unturned. It\'s always something, to know you have done the most you could.","author":"Charles Dickens"},{"text":"By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.","author":"Dalai Lama"},{"text":"We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.","author":"Sam Keen"},{"text":"What lies behind us and what lies before us are tiny matters compared to what lies within us.","author":"Walt Emerson"},{"text":"There are things so deep and complex that only intuition can reach it in our stage of development as human beings.","author":"John Astin"},{"text":"A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.","author":"Elbert Hubbard"},{"text":"There is no retirement for an artist, it\'s your way of living so there is no end to it.","author":"Henry Moore"},{"text":"I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.","author":"Confucius"},{"text":"Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?","author":null},{"text":"When you are content to be simply yourself and don\'t compare or compete, everybody will respect you.","author":"Laozi"},{"text":"Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.","author":"William Shakespeare"},{"text":"Success means having the courage, the determination, and the will to become the person you believe you were meant to be.","author":"George Sheehan"},{"text":"Do you want to know who you are? Don\'t ask. Act! Action will delineate and define you.","author":"Thomas Jefferson"},{"text":"It is only with the heart that one can see rightly, what is essential is invisible to the eye.","author":"Antoine de Saint-Exupery"},{"text":"Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.","author":"Marcel Proust"},{"text":"Make the best use of what is in your power, and take the rest as it happens.","author":"Epictetus"},{"text":"The thoughts we choose to think are the tools we use to paint the canvas of our lives.","author":"Louise Hay"},{"text":"No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.","author":"W. Clement Stone"},{"text":"The reason most goals are not achieved is that we spend our time doing second things first.","author":"Robert McKain"},{"text":"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.","author":"John Quincy Adams"},{"text":"I\'m a great believer in luck and I find the harder I work, the more I have of it.","author":"Thomas Jefferson"},{"text":"Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.","author":"Ralph Emerson"},{"text":"The person born with a talent they are meant to use will find their greatest happiness in using it.","author":"Johann Wolfgang von Goethe"},{"text":"Good people are good because they\'ve come to wisdom through failure. We get very little wisdom from success, you know.","author":"William Saroyan"},{"text":"Your destiny isn\'t just fate; it is how you use your own developed abilities to get what you want.","author":"Byron Pulsifer"},{"text":"Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.","author":"Leonardo da Vinci"},{"text":"A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.","author":"Isaac Asimov"},{"text":"Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.","author":"Henry Van Dyke"},{"text":"You got to be careful if you don\'t know where you\'re going, because you might not get there.","author":"Yogi Berra"},{"text":"You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.","author":"Naguib Mahfouz"},{"text":"Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more","author":"Anthony Robbins"},{"text":"You can\'t let praise or criticism get to you. It\'s a weakness to get caught up in either one.","author":"John Wooden"},{"text":"I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.","author":"Og Mandino"},{"text":"Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.","author":"Jane Addams"},{"text":"By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.","author":"Thomas Carlyle"},{"text":"Until you value yourself, you won\'t value your time. Until you value your time, you won\'t do anything with it.","author":"M. Scott Peck"},{"text":"The minute you settle for less than you deserve, you get even less than you settled for.","author":"Maureen Dowd"},{"text":"The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.","author":"Charles Darwin"},{"text":"It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.","author":null},{"text":"If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.","author":"Dalai Lama"},{"text":"There is only one success to be able to spend your life in your own way.","author":"Christopher Morley"},{"text":"Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.","author":"Hannah Arendt"},{"text":"Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.","author":"Alan Cohen"},{"text":"There is only one corner of the universe you can be certain of improving, and that\'s your own self.","author":"Aldous Huxley"},{"text":"You\'re not obligated to win. You\'re obligated to keep trying to do the best you can every day.","author":"Marian Edelman"},{"text":"Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.","author":"Byron Pulsifer"},{"text":"Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.","author":"Sue Patton Thoele"},{"text":"You may be deceived if you trust too much, but you will live in torment if you don\'t trust enough.","author":"Frank Crane"},{"text":"Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.","author":"Lao Tzu"},{"text":"All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.","author":"Kathleen Norris"},{"text":"Choose a job you love, and you will never have to work a day in your life.","author":"Confucius"},{"text":"You cannot find yourself by going into the past. You can find yourself by coming into the present.","author":"Eckhart Tolle"},{"text":"All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.","author":"Anne Bronte"},{"text":"In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.","author":"Richard Bach"},{"text":"The fox has many tricks. The hedgehog has but one. But that is the best of all.","author":"Desiderius Erasmus"},{"text":"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.","author":"Arthur Rubinstein"},{"text":"Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity","author":"Louis Pasteur"},{"text":"Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.","author":"Rumi"},{"text":"We must never forget that it is through our actions, words, and thoughts that we have a choice.","author":"Sogyal Rinpoche"},{"text":"We see things not as they are, but as we are. Our perception is shaped by our previous experiences.","author":"Dennis Kimbro"},{"text":"True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.","author":"William Penn"},{"text":"All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.","author":"Immanuel Kant"},{"text":"The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.","author":"Buddha"},{"text":"As the rest of the world is walking out the door, your best friends are the ones walking in.","author":null},{"text":"Patience is a virtue but you will never ever accomplish anything if you don\'t exercise action over patience.","author":"Byron Pulsifer"},{"text":"Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.","author":"Robert Lynd"},{"text":"If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.","author":"Ralph Emerson"},{"text":"Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.","author":"Donald Trump"},{"text":"Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.","author":"Eleanor Roosevelt"},{"text":"Peace is not something you wish for. It\'s something you make, something you do, something you are, and something you give away.","author":"Robert Fulghum"},{"text":"A wise man can learn more from a foolish question than a fool can learn from a wise answer.","author":"Bruce Lee"},{"text":"Every man takes the limits of his own field of vision for the limits of the world.","author":"Arthur Schopenhauer"},{"text":"One does not discover new lands without consenting to lose sight of the shore for a very long time.","author":"Andre Gide"},{"text":"What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.","author":"Sai Baba"},{"text":"Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?","author":"Dalai Lama"},{"text":"Life is like a sewer. What you get out of it depends on what you put into it.","author":"Tom Lehrer"},{"text":"Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.","author":"Bruce Lee"},{"text":"Learn all you can from the mistakes of others. You won\'t have time to make them all yourself.","author":"Alfred Sheinwold"},{"text":"Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.","author":"Sri Chinmoy"},{"text":"People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.","author":"Johann Wolfgang von Goethe"},{"text":"We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.","author":"James Freeman Clarke"},{"text":"The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.","author":"Anais Nin"},{"text":"Everything that happens happens as it should, and if you observe carefully, you will find this to be so.","author":"Marcus Aurelius"},{"text":"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.","author":"Wayne Dyer"},{"text":"In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.","author":"Buddha"},{"text":"It is the greatest of all mistakes to do nothing because you can only do little do what you can.","author":"Sydney Smith"},{"text":"When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.","author":"Confucius"},{"text":"Aerodynamically the bumblebee shouldn\'t be able to fly, but the bumblebee doesn\'t know that so it goes on flying anyway.","author":"Mary Kay Ash"},{"text":"Those who try to do something and fail are infinitely better than those who try nothing and succeed.","author":"Lloyd Jones"},{"text":"Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.","author":"Vista Kelly"},{"text":"The first step to getting the things you want out of life is this: decide what you want.","author":"Ben Stein"},{"text":"Why compare yourself with others? No one in the entire world can do a better job of being you than you.","author":null},{"text":"Experience is not what happens to a man. It is what a man does with what happens to him.","author":"Aldous Huxley"},{"text":"A good teacher is like a candle it consumes itself to light the way for others.","author":null},{"text":"The only thing to do with good advice is to pass it on. It is never of any use to oneself.","author":"Oscar Wilde"},{"text":"Life is not measured by the breaths we take, but by the moments that take our breath.","author":null},{"text":"The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.","author":"Honore de Balzac"},{"text":"Consider how hard it is to change yourself and you\'ll understand what little chance you have in trying to change others.","author":"Jacob Braude"},{"text":"If you\'ll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.","author":"Vince Lombardi"},{"text":"What lies behind us and what lies before us are small matters compared to what lies within us.","author":"Oliver Holmes"},{"text":"With the realization of ones own potential and self-confidence in ones ability, one can build a better world.","author":"Dalai Lama"},{"text":"There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.","author":"Nelson Mandela"},{"text":"Forget about all the reasons why something may not work. You only need to find one good reason why it will.","author":"Robert Anthony"},{"text":"It is the mark of an educated mind to be able to entertain a thought without accepting it.","author":"Aristotle"},{"text":"Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.","author":"Washington Irving"},{"text":"We all live with the objective of being happy; our lives are all different and yet the same.","author":"Anne Frank"},{"text":"Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.","author":"Byron Pulsifer"},{"text":"To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself.","author":"Thich Nhat Hanh"},{"text":"Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.","author":"Buddha"},{"text":"It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.","author":"Jessamyn West"},{"text":"Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.","author":"Plato"},{"text":"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.","author":"Bruce Lee"},{"text":"Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!","author":"Charlotte Gilman"},{"text":"Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.","author":"Mother Teresa"},{"text":"Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.","author":"Margaret Runbeck"},{"text":"The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.","author":"Dalai Lama"},{"text":"If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.","author":"Johann Wolfgang von Goethe"},{"text":"Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.","author":"Ovid"},{"text":"I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.","author":"Og Mandino"},{"text":"We never understand how little we need in this world until we know the loss of it.","author":"James Barrie"},{"text":"The real measure of your wealth is how much youd be worth if you lost all your money.","author":null},{"text":"To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.","author":"Buddha"},{"text":"Take no thought of who is right or wrong or who is better than. Be not for or against.","author":"Bruce Lee"},{"text":"I am a man of fixed and unbending principles, the first of which is to be flexible at all times.","author":"Everett Dirksen"},{"text":"Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.","author":"Byron Pulsifer"},{"text":"The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.","author":"Henry Miller"},{"text":"At the center of your being you have the answer; you know who you are and you know what you want.","author":"Lao Tzu"},{"text":"How wonderful that we have met with a paradox. Now we have some hope of making progress.","author":"Niels Bohr"},{"text":"Everyone is a genius at least once a year. A real genius has his original ideas closer together.","author":"Georg Lichtenberg"},{"text":"Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.","author":"Anais Nin"},{"text":"Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.","author":"Gloria Steinem"},{"text":"Sadness may be part of life but there is no need to let it dominate your entire life.","author":"Byron Pulsifer"},{"text":"Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.","author":"Charles Schwab"},{"text":"Nature gave us one tongue and two ears so we could hear twice as much as we speak.","author":"Epictetus"},{"text":"Don\'t wait for your feelings to change to take the action. Take the action and your feelings will change.","author":"Barbara Baron"},{"text":"You are always free to change your mind and choose a different future, or a different past.","author":"Richard Bach"},{"text":"You were not born a winner, and you were not born a loser. You are what you make yourself be.","author":"Lou Holtz"},{"text":"Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.","author":"Napoleon Hill"},{"text":"Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.","author":"Napoleon Hill"},{"text":"To be what we are, and to become what we are capable of becoming, is the only end of life.","author":"Robert Stevenson"},{"text":"The road leading to a goal does not separate you from the destination; it is essentially a part of it.","author":"Charles DeLint"},{"text":"Take things as they are. Punch when you have to punch. Kick when you have to kick.","author":"Bruce Lee"},{"text":"I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.","author":"Albert Einstein"},{"text":"Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.","author":null},{"text":"Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.","author":"Paavo Nurmi"},{"text":"How wonderful it is that nobody need wait a single moment before starting to improve the world.","author":"Anne Frank"},{"text":"A friend is someone who understands your past, believes in your future, and accepts you just the way you are.","author":null},{"text":"It is one of the blessings of old friends that you can afford to be stupid with them.","author":"Ralph Emerson"},{"text":"He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.","author":"Tryon Edwards"},{"text":"Give me six hours to chop down a tree and I will spend the first four sharpening the axe.","author":"Abraham Lincoln"},{"text":"One must be fond of people and trust them if one is not to make a mess of life.","author":"E. M. Forster"},{"text":"We cannot change our memories, but we can change their meaning and the power they have over us.","author":"David Seamans"},{"text":"Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?","author":"Confucius"},{"text":"To give hope to someone occurs when you teach them how to use the tools to do it for themselves.","author":"Byron Pulsifer"},{"text":"Id rather regret the things that I have done than the things that I have not done.","author":"Lucille Ball"},{"text":"The past has no power to stop you from being present now. Only your grievance about the past can do that.","author":"Eckhart Tolle"},{"text":"If the stars should appear but one night every thousand years how man would marvel and adore.","author":"Ralph Emerson"},{"text":"There are two kinds of failures: those who thought and never did, and those who did and never thought.","author":"Laurence J. Peter"},{"text":"I\'m not interested in age. People who tell me their age are silly. You\'re as old as you feel.","author":"Elizabeth Arden"},{"text":"I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.","author":"Dalai Lama"},{"text":"When it is obvious that the goals cannot be reached, don\'t adjust the goals, adjust the action steps.","author":"Confucius"},{"text":"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.","author":"Nikola Tesla"},{"text":"Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.","author":"Leo Aikman"},{"text":"He can who thinks he can, and he can\'t who thinks he can\'t. This is an inexorable, indisputable law.","author":"Pablo Picasso"},{"text":"These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.","author":"Vernon Cooper"},{"text":"One secret of success in life is for a man to be ready for his opportunity when it comes.","author":"Benjamin Disraeli"},{"text":"People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn\'t mean they\'ve gotten lost.","author":"Dalai Lama"},{"text":"The shoe that fits one person pinches another; there is no recipe for living that suits all cases.","author":"Carl Jung"},{"text":"There are only two mistakes one can make along the road to truth; not going all the way, and not starting.","author":"Buddha"},{"text":"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.","author":"Marcus Aurelius"},{"text":"Giving up doesn\'t always mean you are weak. Sometimes it means that you are strong enough to let go.","author":null},{"text":"Treat people as if they were what they ought to be and you help them to become what they are capable of being.","author":"Johann Wolfgang von Goethe"},{"text":"The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.","author":"Thich Nhat Hanh"},{"text":"If you focus on results, you will never change. If you focus on change, you will get results.","author":"Jack Dixon"},{"text":"I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.","author":"G. K. Chesterton"},{"text":"There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.","author":"Denis Waitley"},{"text":"All difficult things have their origin in that which is easy, and great things in that which is small.","author":"Lao-Tzu"},{"text":"You can be what you want to be. You have the power within and we will help you always.","author":"Byron Pulsifer"},{"text":"To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.","author":"Johannes Gaertner"},{"text":"Wisdom is the reward you get for a lifetime of listening when you\'d have preferred to talk.","author":"Doug Larson"},{"text":"The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.","author":"Charles Lamb"},{"text":"When one tugs at a single thing in nature, he finds it attached to the rest of the world.","author":"John Muir"},{"text":"Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.","author":"Winston Churchill"},{"text":"The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.","author":"Helen Keller"},{"text":"To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.","author":"Buddha"},{"text":"Many of life\'s failures are people who did not realize how close they were to success when they gave up.","author":"Thomas Edison"},{"text":"When we seek to discover the best in others, we somehow bring out the best in ourselves.","author":"William Ward"},{"text":"If you accept the expectations of others, especially negative ones, then you never will change the outcome.","author":"Michael Jordan"},{"text":"A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.","author":"Oliver Holmes"},{"text":"I am not bothered by the fact that I am unknown. I am bothered when I do not know others.","author":"Confucius"},{"text":"He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.","author":"Epictetus"},{"text":"I am always doing that which I cannot do, in order that I may learn how to do it.","author":"Pablo Picasso"},{"text":"If you\'re walking down the right path and you\'re willing to keep walking, eventually you\'ll make progress.","author":"Barack Obama"},{"text":"The world is round and the place which may seem like the end may also be the beginning.","author":"Ivy Baker Priest"},{"text":"Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.","author":null},{"text":"Give it all you\'ve got because you never know if there\'s going to be a next time.","author":"Danielle Ingrum"},{"text":"You have to take it as it happens, but you should try to make it happen the way you want to take it.","author":"Old German proverb"},{"text":"Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.","author":"Ralph Blum"},{"text":"I\'m not in this world to live up to your expectations and you\'re not in this world to live up to mine.","author":"Bruce Lee"},{"text":"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.","author":"Thich Nhat Hanh"},{"text":"I can\'t imagine a person becoming a success who doesn\'t give this game of life everything hes got.","author":"Walter Cronkite"},{"text":"The greatest way to live with honor in this world is to be what we pretend to be.","author":"Socrates"},{"text":"The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.","author":"Seneca"},{"text":"The grand essentials of happiness are: something to do, something to love, and something to hope for.","author":"Chalmers"},{"text":"By living deeply in the present moment we can understand the past better and we can prepare for a better future.","author":"Thich Nhat Hanh"},{"text":"Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.","author":"Ralph Emerson"},{"text":"Do not go where the path may lead, go instead where there is no path and leave a trail.","author":"Ralph Emerson"},{"text":"There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.","author":"Robert Louis Stevenson"},{"text":"Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.","author":"Napoleon Hill"},{"text":"Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that\'s why they call it the present.","author":null},{"text":"The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.","author":"Henry Thoreau"},{"text":"The greatest good you can do for another is not just to share your riches but to reveal to him his own.","author":"Benjamin Disraeli"},{"text":"You can only grow if you\'re willing to feel awkward and uncomfortable when you try something new.","author":"Brian Tracy"},{"text":"To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect.","author":"Joan Didion"},{"text":"It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.","author":"Mabel Newcomber"},{"text":"When you don\'t know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.","author":null},{"text":"Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.","author":"Robert Graves"},{"text":"The thing always happens that you really believe in; and the belief in a thing makes it happen.","author":"Frank Wright"},{"text":"A true friend is the most precious of all possessions and the one we take the least thought about acquiring.","author":"Francois de La Rochefoucauld"},{"text":"There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.","author":"Epictetus"},{"text":"Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.","author":"Margaret Cousins"},{"text":"Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you will never get back.","author":null},{"text":"This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.","author":"Thomas Carlyle"},{"text":"Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.","author":"Pearl Buck"},{"text":"You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.","author":"Catherine Pulsifer"},{"text":"The happiness of a man in this life does not consist in the absence but in the mastery of his passions.","author":"Alfred Tennyson"},{"text":"Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.","author":"Margaret Mead"},{"text":"Let your hook always be cast; in the pool where you least expect it, there will be a fish.","author":"Ovid"},{"text":"You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.","author":"Remez Sasson"},{"text":"Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.","author":"Richard Bach"},{"text":"When you are content to be simply yourself and don\'t compare or compete, everybody will respect you.","author":"Lao Tzu"},{"text":"When you begin to touch your heart or let your heart be touched, you begin to discover that it\'s bottomless.","author":"Pema Chodron"},{"text":"If you love someone, set them free. If they come back they\'re yours; if they don\'t they never were.","author":"Richard Bach"},{"text":"Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.","author":"David Jordan"},{"text":"Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!","author":"Richard Bach"},{"text":"No valid plans for the future can be made by those who have no capacity for living now.","author":"Alan Watts"},{"text":"The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for.","author":"Oscar Wilde"},{"text":"To accomplish great things, we must not only act, but also dream; not only plan, but also believe.","author":"Anatole France"},{"text":"The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.","author":"Thomas Edison"},{"text":"If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.","author":"John Steinbeck"},{"text":"If we are facing in the right direction, all we have to do is keep on walking.","author":null},{"text":"Remember always that you not only have the right to be an individual, you have an obligation to be one.","author":"Eleanor Roosevelt"},{"text":"There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.","author":"Denis Waitley"},{"text":"If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.","author":"Epictetus"},{"text":"Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.","author":"Eknath Easwaran"},{"text":"We could never learn to be brave and patient if there were only joy in the world.","author":"Helen Keller"},{"text":"If it is not right do not do it; if it is not true do not say it.","author":"Marcus Aurelius"},{"text":"The truth of the matter is that you always know the right thing to do. The hard part is doing it.","author":"Norman Schwarzkopf"},{"text":"Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what\'s right for you.","author":"Julie Morgenstern"},{"text":"Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.","author":"Blaise Pascal"},{"text":"Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.","author":"Laura Teresa Marquez"},{"text":"If you are patient in one moment of anger, you will escape one hundred days of sorrow.","author":"Chinese proverb"},{"text":"When you have got an elephant by the hind legs and he is trying to run away, it\'s best to let him run.","author":"Abraham Lincoln"},{"text":"Courage is not about taking risks unknowingly, but putting your own being in front of challenges that others may not be able to.","author":"Byron Pulsifer"},{"text":"Can miles truly separate you from friends... If you want to be with someone you love, aren\'t you already there?","author":"Richard Bach"},{"text":"The poor man is not he who is without a cent, but he who is without a dream.","author":"Harry Kemp"},{"text":"The greatest good you can do for another is not just share your riches, but reveal to them their own.","author":"Benjamin Disraeli"},{"text":"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.","author":"Buddha"},{"text":"Peace of mind is not the absence of conflict from life, but the ability to cope with it.","author":null},{"text":"Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.","author":"Helen Keller"},{"text":"Change is the law of life. And those who look only to the past or present are certain to miss the future.","author":"John Kennedy"},{"text":"You have power over your mind not outside events. Realize this, and you will find strength.","author":"Marcus Aurelius"},{"text":"Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.","author":"Louis Pasteur"},{"text":"We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.","author":"Buddha"},{"text":"He that respects himself is safe from others; he wears a coat of mail that none can pierce.","author":"Henry Longfellow"},{"text":"I cannot always control what goes on outside. But I can always control what goes on inside.","author":"Wayne Dyer"},{"text":"What matters is the value we\'ve created in our lives, the people we\'ve made happy and how much we\'ve grown as people.","author":"Daisaku Ikeda"},{"text":"When you are offended at any man\'s fault, turn to yourself and study your own failings. Then you will forget your anger.","author":"Epictetus"},{"text":"Everyone has been made for some particular work, and the desire for that work has been put in every heart.","author":"Rumi"},{"text":"Take time to deliberate, but when the time for action has arrived, stop thinking and go in.","author":"Napoleon Bonaparte"},{"text":"With realization of ones own potential and self-confidence in ones ability, one can build a better world.","author":"Dalai Lama"},{"text":"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.","author":"Franklin Roosevelt"},{"text":"You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.","author":"Pearl Buck"},{"text":"Those who are blessed with the most talent don\'t necessarily outperform everyone else. It\'s the people with follow-through who excel.","author":"Mary Kay Ash"},{"text":"Try not to become a man of success, but rather try to become a man of value.","author":"Albert Einstein"},{"text":"All difficult things have their origin in that which is easy, and great things in that which is small.","author":"Lao Tzu"},{"text":"Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.","author":"Sophocles"},{"text":"It is not enough to have a good mind; the main thing is to use it well.","author":"Rene Descartes"},{"text":"Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.","author":"Byron Pulsifer"},{"text":"Never do things others can do and will do, if there are things others cannot do or will not do.","author":"Amelia Earhart"},{"text":"I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.","author":"Jimmy Dean"},{"text":"People of mediocre ability sometimes achieve outstanding success because they don\'t know when to quit. Most men succeed because they are determined to.","author":"George Allen"},{"text":"A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.","author":"Joseph Roux"},{"text":"Life\'s challenges are not supposed to paralyse you, they\'re supposed to help you discover who you are.","author":"Bernice Reagon"},{"text":"The greatest way to live with honour in this world is to be what we pretend to be.","author":"Socrates"},{"text":"To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.","author":"Henri Bergson"},{"text":"Try not to become a man of success but rather try to become a man of value.","author":"Albert Einstein"},{"text":"You can\'t create in a vacuum. Life gives you the material and dreams can propel new beginnings.","author":"Byron Pulsifer"},{"text":"Your work is to discover your world and then with all your heart give yourself to it.","author":"Buddha"},{"text":"The person who lives life fully, glowing with life\'s energy, is the person who lives a successful life.","author":"Daisaku Ikeda"},{"text":"Don\'t turn away from possible futures before you\'re certain you don\'t have anything to learn from them.","author":"Richard Bach"},{"text":"A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.","author":"David Brinkley"},{"text":"All that we are is the result of what we have thought. The mind is everything. What we think we become.","author":"Buddha"},{"text":"Work while you have the light. You are responsible for the talent that has been entrusted to you.","author":"Henri-Frederic Amiel"},{"text":"How far that little candle throws its beams! So shines a good deed in a naughty world.","author":"William Shakespeare"},{"text":"Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.","author":"Napoleon Hill"},{"text":"It is in your moments of decision that your destiny is shaped.","author":"Tony Robbins"},{"text":"An obstacle may be either a stepping stone or a stumbling block.","author":null},{"text":"The pain passes, but the beauty remains.","author":"Pierre Auguste Renoir"},{"text":"All I can say about life is, Oh God, enjoy it!","author":"Bob Newhart"},{"text":"Creativity comes from trust. Trust your instincts. And never hope more than you work.","author":"Rita Mae Brown"},{"text":"Your outlook on life is a direct reflection on how much you like yourself.","author":"Lululemon"},{"text":"I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.","author":"Lao Tzu"},{"text":"You won\'t skid if you stay in a rut.","author":"Kin Hubbard"},{"text":"You block your dream when you allow your fear to grow bigger than your faith.","author":"Mary Morrissey"},{"text":"Happiness depends upon ourselves.","author":"Aristotle"},{"text":"Wherever a man turns he can find someone who needs him.","author":"Albert Schweitzer"},{"text":"If one is lucky, a solitary fantasy can totally transform one million realities.","author":"Maya Angelou"},{"text":"Never idealize others. They will never live up to your expectations.","author":"Leo Buscaglia"},{"text":"When you realize there is nothing lacking, the whole world belongs to you.","author":"Lao Tzu"},{"text":"Happiness is not something ready made. It comes from your own actions.","author":"Dalai Lama"},{"text":"Meaning is not what you start with but what you end up with.","author":"Peter Elbow"},{"text":"No one has ever become poor by giving.","author":"Anne Frank"},{"text":"Be faithful in small things because it is in them that your strength lies.","author":"Mother Teresa"},{"text":"All is flux; nothing stays still.","author":"Heraclitus"},{"text":"He who is fixed to a star does not change his mind.","author":"Leonardo da Vinci"},{"text":"He who lives in harmony with himself lives in harmony with the universe.","author":"Marcus Aurelius"},{"text":"Ignorant men don\'t know what good they hold in their hands until they\'ve flung it away.","author":"Sophocles"},{"text":"When the solution is simple, God is answering.","author":"Albert Einstein"},{"text":"All achievements, all earned riches, have their beginning in an idea.","author":"Napoleon Hill"},{"text":"Do not turn back when you are just at the goal.","author":"Publilius Syrus"},{"text":"You can\'t trust without risk but neither can you live in a cocoon.","author":"Byron Pulsifer"},{"text":"All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.","author":"Rudolf Arnheim"},{"text":"Error is discipline through which we advance.","author":"Channing"},{"text":"The truth is always exciting. Speak it, then. Life is dull without it.","author":"Pearl Buck"},{"text":"The superior man is modest in his speech, but exceeds in his actions.","author":"Confucius"},{"text":"The longer we dwell on our misfortunes, the greater is their power to harm us.","author":"Voltaire"},{"text":"Those who will play with cats must expect to be scratched.","author":"Cervantes"},{"text":"I\'ve never seen a smiling face that was not beautiful.","author":null},{"text":"In all things of nature there is something of the marvellous.","author":"Aristotle"},{"text":"The universe is transformation; our life is what our thoughts make it.","author":"Marcus Aurelius"},{"text":"Memory is the mother of all wisdom.","author":"Samuel Johnson"},{"text":"Silence is the true friend that never betrays.","author":"Confucius"},{"text":"You might well remember that nothing can bring you success but yourself.","author":"Napoleon Hill"},{"text":"Watch the little things; a small leak will sink a great ship.","author":"Benjamin Franklin"},{"text":"God has given you one face, and you make yourself another.","author":"William Shakespeare"},{"text":"To be wronged is nothing unless you continue to remember it.","author":"Confucius"},{"text":"Kindness is the greatest wisdom.","author":null},{"text":"Action will remove the doubts that theory cannot solve.","author":"Tehyi Hsieh"},{"text":"Don\'t miss all the beautiful colors of the rainbow looking for that pot of gold.","author":null},{"text":"Your big opportunity may be right where you are now.","author":"Napoleon Hill"},{"text":"People who say it cannot be done should not interrupt those who are doing it.","author":"Chinese proverb"},{"text":"The day you decide to do it is your lucky day.","author":"Japanese proverb"},{"text":"We must not say every mistake is a foolish one.","author":"Cicero"},{"text":"Accept challenges, so that you may feel the exhilaration of victory.","author":"George Patton"},{"text":"It is better to understand a little than to misunderstand a lot.","author":"Anatole France"},{"text":"You don\'t drown by falling in water. You drown by staying there.","author":null},{"text":"Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.","author":null},{"text":"Correction does much, but encouragement does more.","author":"Johann Wolfgang von Goethe"},{"text":"Know, first, who you are, and then adorn yourself accordingly.","author":"Epictetus"},{"text":"The biggest adventure you can ever take is to live the life of your dreams.","author":"Oprah Winfrey"},{"text":"Life is 10% what happens to you and 90% how you react to it.","author":"Charles Swindoll"},{"text":"To want to be what one can be is purpose in life.","author":"Cynthia Ozick"},{"text":"Remember that sometimes not getting what you want is a wonderful stroke of luck.","author":"Dalai Lama"},{"text":"History will be kind to me for I intend to write it.","author":"Winston Churchill"},{"text":"Our lives are a sum total of the choices we have made.","author":"Wayne Dyer"},{"text":"Time stays long enough for anyone who will use it.","author":"Leonardo da Vinci"},{"text":"You must welcome change as the rule but not as your ruler.","author":"Denis Waitley"},{"text":"Give whatever you are doing and whoever you are with the gift of your attention.","author":"Jim Rohn"},{"text":"Always be smarter than the people who hire you.","author":"Lena Horne"},{"text":"Formula for success: under promise and over deliver.","author":"Tom Peters"},{"text":"The eye sees only what the mind is prepared to comprehend.","author":"Henri Bergson"},{"text":"People seldom notice old clothes if you wear a big smile.","author":"Lee Mildon"},{"text":"The more light you allow within you, the brighter the world you live in will be.","author":"Shakti Gawain"},{"text":"Nothing diminishes anxiety faster than action.","author":"Walter Anderson"},{"text":"Man cannot discover new oceans unless he has the courage to lose sight of the shore.","author":"Andre Gide"},{"text":"Everything that irritates us about others can lead us to an understanding about ourselves.","author":"Carl Jung"},{"text":"Can you imagine what I would do if I could do all I can?","author":"Sun Tzu"},{"text":"Ignorance never settle a question.","author":"Benjamin Disraeli"},{"text":"The awareness of our own strength makes us modest.","author":"Paul Cezanne"},{"text":"They must often change, who would be constant in happiness or wisdom.","author":"Confucius"},{"text":"There are no failures. Just experiences and your reactions to them.","author":"Tom Krause"},{"text":"Your future depends on many things, but mostly on you.","author":"Frank Tyger"},{"text":"Fear grows in darkness; if you think theres a bogeyman around, turn on the light.","author":"Dorothy Thompson"},{"text":"The most important point is to accept yourself and stand on your two feet.","author":"Shunryu Suzuki"},{"text":"Do not expect the world to look bright, if you habitually wear gray-brown glasses.","author":"Tomas Eliot"},{"text":"As long as your going to be thinking anyway, think big.","author":"Donald Trump"},{"text":"Without some goals and some efforts to reach it, no man can live.","author":"John Dewey"},{"text":"He who obtains has little. He who scatters has much.","author":"Richard Braunstein"},{"text":"Myths which are believed in tend to become true.","author":"George Orwell"},{"text":"The foot feels the foot when it feels the ground.","author":"Buddha"},{"text":"Not what we have but what we enjoy constitutes our abundance.","author":"John Petit-Senn"},{"text":"It is never too late to be what you might have been.","author":"George Eliot"},{"text":"The beginning is always today.","author":"Mary Wollstonecraft"},{"text":"In the long run we get no more than we have been willing to risk giving.","author":"Sheldon Kopp"},{"text":"Self-trust is the first secret of success.","author":"Ralph Emerson"},{"text":"Don\'t look back. Something might be gaining on you.","author":"Satchel Paige"},{"text":"Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.","author":"Marcus Aurelius"},{"text":"A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.","author":"George Bernard Shaw"},{"text":"Men are disturbed not by things, but by the view which they take of them.","author":"Epictetus"},{"text":"Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.","author":"Blaise Pascal"},{"text":"Happiness is a Swedish sunset it is there for all, but most of us look the other way and lose it.","author":"Mark Twain"},{"text":"A smile is a light in the window of your face to show your heart is at home.","author":null},{"text":"Look forward to spring as a time when you can start to see what nature has to offer once again.","author":"Byron Pulsifer"},{"text":"Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.","author":"Billy Wilder"},{"text":"The least movement is of importance to all nature. The entire ocean is affected by a pebble.","author":"Blaise Pascal"},{"text":"I am always doing that which I can not do, in order that I may learn how to do it.","author":"Pablo Picasso"},{"text":"Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.","author":"Niccolo Machiavelli"},{"text":"You may only be someone in the world, but to someone else, you may be the world.","author":null},{"text":"Every artist dips his brush in his own soul, and paints his own nature into his pictures.","author":"Henry Ward Beecher"},{"text":"If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.","author":"James Faust"},{"text":"Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.","author":"Denis Waitley"},{"text":"Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.","author":"Hasidic saying"},{"text":"When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.","author":"Joseph Campbell"},{"text":"Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.","author":"Peter Drucker"},{"text":"Life\'s challenges are not supposed to paralyze you, they\'re supposed to help you discover who you are.","author":"Bernice Reagon"},{"text":"There is one thing you have got to learn about our movement. Three people are better than no people.","author":"Fannie Hamer"},{"text":"Happiness is a perfume you cannot pour on others without getting a few drops on yourself.","author":"Ralph Waldo Emerson"},{"text":"It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes.","author":"Byron Roberts"},{"text":"The amount of happiness that you have depends on the amount of freedom you have in your heart.","author":"Thich Nhat Hanh"},{"text":"Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.","author":"Carl Jung"},{"text":"Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.","author":"Babatunde Olatunji"},{"text":"The way we communicate with others and with ourselves ultimately determines the quality of our lives.","author":"Tony Robbins"},{"text":"Sometimes it is better to lose and do the right thing than to win and do the wrong thing.","author":"Tony Blair"},{"text":"Let us always meet each other with smile, for the smile is the beginning of love.","author":"Mother Teresa"},{"text":"A bend in the road is not the end of the road...unless you fail to make the turn.","author":null},{"text":"We are what we repeatedly do. Excellence, then, is not an act, but a habit.","author":"Aristotle"},{"text":"Living at risk is jumping off the cliff and building your wings on the way down.","author":"Ray Bradbury"},{"text":"In the depth of winter, I finally learned that there was within me an invincible summer.","author":"Albert Camus"},{"text":"Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.","author":"Madame de Stael"},{"text":"A failure is a man who has blundered but is not capable of cashing in on the experience.","author":"Elbert Hubbard"},{"text":"I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.","author":"Herbert Swope"},{"text":"One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.","author":null},{"text":"The power of intuitive understanding will protect you from harm until the end of your days.","author":"Laozi"},{"text":"The best thing about the future is that it only comes one day at a time.","author":"Abraham Lincoln"},{"text":"We have two ears and one mouth so that we can listen twice as much as we speak.","author":"Epictetus"},{"text":"Fear of failure is one attitude that will keep you at the same point in your life.","author":"Byron Pulsifer"},{"text":"Friends are those rare people who ask how we are and then wait to hear the answer.","author":"Ed Cunningham"},{"text":"If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.","author":"Pema Chodron"},{"text":"People grow through experience if they meet life honestly and courageously. This is how character is built.","author":"Eleanor Roosevelt"},{"text":"A hero is no braver than an ordinary man, but he is braver five minutes longer.","author":"Ralph Waldo Emerson"},{"text":"While we try to teach our children all about life, our children teach us what life is all about.","author":"Angela Schwindt"},{"text":"When you dance, your purpose is not to get to a certain place on the floor. It\'s to enjoy each step along the way.","author":"Wayne Dyer"},{"text":"The Creator has not given you a longing to do that which you have no ability to do.","author":"Orison Marden"},{"text":"It\'s so simple to be wise. Just think of something stupid to say and then don\'t say it.","author":"Sam Levenson"},{"text":"Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.","author":"Dalai Lama"},{"text":"Until you make peace with who you are, you will never be content with what you have.","author":"Doris Mortman"},{"text":"No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.","author":"Buddha"},{"text":"The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.","author":"Henry Miller"},{"text":"Happiness is when what you think, what you say, and what you do are in harmony.","author":"Mohandas Gandhi"},{"text":"The greatest antidote to insecurity and the sense of fear is compassion it brings one back to the basis of one\'s inner strength","author":"Dalai Lama"},{"text":"Courage is the discovery that you may not win, and trying when you know you can lose.","author":null},{"text":"To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.","author":"Byron Pulsifer"},{"text":"The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.","author":"Mortimer Adler"},{"text":"When you realize how perfect everything is you will tilt your head back and laugh at the sky.","author":"Buddha"},{"text":"For every failure, there\'s an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.","author":"Mary Kay Ash"},{"text":"It is surprising what a man can do when he has to, and how little most men will do when they don\'t have to.","author":"Walter Linn"},{"text":"To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.","author":"Tenzin Gyatso"},{"text":"Nobody made a greater mistake than he who did nothing because he could do only a little.","author":"Edmund Burke"},{"text":"Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.","author":"Albert Schweitzer"},{"text":"The greatest minds are capable of the greatest vices as well as of the greatest virtues.","author":"Rene Descartes"},{"text":"A man should look for what is, and not for what he thinks should be.","author":"Albert Einstein"},{"text":"Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.","author":"William Channing"},{"text":"If you have no respect for your own values how can you be worthy of respect from others.","author":"Byron Pulsifer"},{"text":"Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.","author":"Alphonse Karr"},{"text":"To choose what is difficult all ones days, as if it were easy, that is faith.","author":"W. H. Auden"},{"text":"Ability is what you\'re capable of doing. Motivation determines what you do.Attitude determines how well you do it.","author":"Lou Holtz"},{"text":"Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.","author":"Thomas Carlyle"},{"text":"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.","author":"Buddha"},{"text":"I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing.","author":"Michel de Montaigne"},{"text":"Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.","author":"Margaret Laurence"},{"text":"To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.","author":"Napoleon Bonaparte"},{"text":"If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.","author":"Ajahn Chah"},{"text":"There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.","author":"Dalai Lama"},{"text":"The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.","author":"Vincent Lombardi"},{"text":"Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.","author":"Jean-Paul Sartre"},{"text":"Don\'t believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you\'ll see the way to fly.","author":"Richard Bach"},{"text":"I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.","author":"Elisabeth Kubler-Ross"},{"text":"Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.","author":"Byron Pulsifer"},{"text":"To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.","author":"Kahlil Gibran"},{"text":"I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.","author":"Bernard Shaw"},{"text":"Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.","author":"Albert Einstein"},{"text":"When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.","author":"Confucius"},{"text":"If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.","author":"Anne Lindbergh"},{"text":"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.","author":"Dale Carnegie"},{"text":"You may say I\'m a dreamer, but I\'m not the only one, I hope someday you will join us, and the world will live as one.","author":"John Lennon"},{"text":"Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.","author":"Nathaniel Hawthorne"},{"text":"He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.","author":"Buddha"},{"text":"In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.","author":"Buddha"},{"text":"You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you\'ll get to tomorrow. Intention without action is useless.","author":"Caroline Myss"},{"text":"Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.","author":"Winston Churchill"},{"text":"The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.","author":"William James"},{"text":"If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.","author":"Henry David Thoreau"},{"text":"The secret of joy in work is contained in one word excellence. To know how to do something well is to enjoy it.","author":"Pearl Buck"},{"text":"When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.","author":"Confucius"},{"text":"We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.","author":"Uta Hagen"},{"text":"Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them.","author":"Orison Marden"},{"text":"Everything can be taken from a man but ... the last of the human freedoms to choose ones attitude in any given set of circumstances, to choose ones own way.","author":"Victor Frankl"},{"text":"It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.","author":"Edward de Bono"},{"text":"Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.","author":"Abraham Lincoln"},{"text":"By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.","author":"Lao Tzu"},{"text":"I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.","author":"Amy Tan"},{"text":"Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.","author":"Epictetus"},{"text":"We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.","author":"Stephen Covey"},{"text":"The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you\'re being self-indulgent.","author":"Paul Graham"},{"text":"Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.","author":"Buddha"},{"text":"A lot of times people look at the negative side of what they feel they can\'t do. I always look on the positive side of what I can do.","author":"Chuck Norris"},{"text":"Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.","author":"Amiel"},{"text":"Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.","author":"Amy Bloom"},{"text":"With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.","author":"Keshavan Nair"},{"text":"The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.","author":"Margaret Smith"},{"text":"I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.","author":"Frederick Douglass"},{"text":"No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.","author":"Helen Keller"},{"text":"When you arise in the morning, think of what a precious privilege it is to be alive to breathe, to think, to enjoy, to love.","author":"Marcus Aurelius"},{"text":"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.","author":"Helen Keller"},{"text":"Although there may be tragedy in your life, there\'s always a possibility to triumph. It doesn\'t matter who you are, where you come from. The ability to triumph begins with you. Always.","author":"Oprah Winfrey"},{"text":"You must train your intuition you must trust the small voice inside you which tells you exactly what to say, what to decide.","author":"Ingrid Bergman"},{"text":"Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.","author":"Marcus Aurelius"},{"text":"Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.","author":"John Kennedy"},{"text":"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.","author":"Marie Curie"},{"text":"Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.","author":"Anne Frank"},{"text":"Adversity isn\'t set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.","author":"Byron Pulsifer"},{"text":"If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.","author":"Robert Fulghum"},{"text":"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.","author":"Albert Schweitzer"},{"text":"If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.","author":"Albert Einstein"},{"text":"My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate that\'s my philosophy.","author":"Thornton Wilder"},{"text":"Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.","author":"John Dewey"},{"text":"He who conquers others is strong; He who conquers himself is mighty.","author":"Lao Tzu"},{"text":"Anything you really want, you can attain, if you really go after it.","author":"Wayne Dyer"},{"text":"Arriving at one point is the starting point to another.","author":"John Dewey"},{"text":"The foolish man seeks happiness in the distance, the wise grows it under his feet.","author":"James Oppenheim"},{"text":"The greatest part of our happiness depends on our dispositions, not our circumstances.","author":"Martha Washington"},{"text":"It is only possible to live happily ever after on a day to day basis.","author":"Margaret Bonnano"},{"text":"A man sees in the world what he carries in his heart.","author":"Goethe"},{"text":"Action may not always bring happiness, but there is no happiness without action.","author":"Benjamin Disraeli"},{"text":"Believe deep down in your heart that you\'re destined to do great things.","author":"Joe Paterno"},{"text":"Sooner or later, those who win are those who think they can.","author":"Richard Bach"},{"text":"The only limit to your impact is your imagination and commitment.","author":"Tony Robbins"},{"text":"You are special, you are unique, you are the best!","author":"Cathy Pulsifer"},{"text":"Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.","author":"William Arthur Ward"},{"text":"To know oneself is to study oneself in action with another person.","author":"Bruce Lee"},{"text":"We must not allow ourselves to become like the system we oppose.","author":"Bishop Desmond Tutu"},{"text":"Smile, breathe and go slowly.","author":"Thich Nhat Hanh"},{"text":"Reality is merely an illusion, albeit a very persistent one.","author":"Albert Einstein"},{"text":"When you come to the end of your rope, tie a knot and hang on.","author":"Franklin Roosevelt"},{"text":"Always be mindful of the kindness and not the faults of others.","author":"Buddha"},{"text":"Everything that irritates us about others can lead us to an understanding of ourselves.","author":"Carl Jung"},{"text":"When fate hands us a lemon, lets try to make lemonade.","author":"Dale Carnegie"},{"text":"The weak can never forgive. Forgiveness is the attribute of the strong.","author":"Mohandas Gandhi"},{"text":"A man is great by deeds, not by birth.","author":"Chanakya"},{"text":"Success is getting what you want. Happiness is wanting what you get.","author":"Dale Carnegie"},{"text":"Truth isn\'t all about what actually happens but more about how what has happened is interpreted.","author":"Byron Pulsifer"},{"text":"A good rest is half the work.","author":null},{"text":"Don\'t judge each day by the harvest you reap but by the seeds that you plant.","author":"Robert Stevenson"},{"text":"Small opportunities are often the beginning of great enterprises.","author":"Demosthenes"},{"text":"To be tested is good. The challenged life may be the best therapist.","author":"Gail Sheehy"},{"text":"Take heed: you do not find what you do not seek.","author":"English proverb"},{"text":"Happiness is the reward we get for living to the highest right we know.","author":"Richard Bach"},{"text":"Be slow of tongue and quick of eye.","author":"Cervantes"},{"text":"Freedom is not worth having if it does not connote freedom to err.","author":"Mohandas Gandhi"},{"text":"I have always thought the actions of men the best interpreters of their thoughts.","author":"John Locke"},{"text":"He who obtains has little. He who scatters has much.","author":"Lao Tzu"},{"text":"To dare is to lose ones footing momentarily. To not dare is to lose oneself.","author":"Soren Kierkegaard"},{"text":"No day in which you learn something is a complete loss.","author":"David Eddings"},{"text":"Peace cannot be kept by force. It can only be achieved by understanding.","author":"Albert Einstein"},{"text":"Real success is finding your lifework in the work that you love.","author":"David McCullough"},{"text":"Better than a thousand hollow words, is one word that brings peace.","author":"Buddha"},{"text":"All the flowers of all the tomorrows are in the seeds of today.","author":null},{"text":"Your sacred space is where you can find yourself again and again.","author":"Joseph Campbell"},{"text":"As you think, so shall you become.","author":"Bruce Lee"},{"text":"In seed time learn, in harvest teach, in winter enjoy.","author":"William Blake"},{"text":"Happiness does not come from having much, but from being attached to little.","author":"Cheng Yen"},{"text":"Every gift from a friend is a wish for your happiness.","author":"Richard Bach"},{"text":"Go put your creed into the deed. Nor speak with double tongue.","author":"Ralph Emerson"},{"text":"The wisest men follow their own direction.","author":"Euripides"},{"text":"Hope arouses, as nothing else can arouse, a passion for the possible.","author":"William Sloane Coffin"},{"text":"Everything has beauty, but not everyone sees it.","author":"Confucius"},{"text":"Nothing ever goes away until it has taught us what we need to know.","author":"Pema Chodron"},{"text":"When you learn, teach. When you get, give.","author":"Maya Angelou"},{"text":"Only when we are no longer afraid do we begin to live.","author":"Dorothy Thompson"},{"text":"If you smile when no one else is around, you really mean it.","author":"Andy Rooney"},{"text":"Love is the only force capable of transforming an enemy into friend.","author":"Martin Luther King, Jr."},{"text":"In all chaos there is a cosmos, in all disorder a secret order.","author":"Carl Jung"},{"text":"A man is not where he lives but where he loves.","author":null},{"text":"The price of greatness is responsibility.","author":"Winston Churchill"},{"text":"Decision is a risk rooted in the courage of being free.","author":"Paul Tillich"},{"text":"Your mind will answer most questions if you learn to relax and wait for the answer.","author":"William Burroughs"},{"text":"The world does not happen to you it happens from you.","author":null},{"text":"We cannot solve our problems with the same thinking we used when we created them.","author":"Albert Einstein"},{"text":"More powerful than the will to win is the courage to begin.","author":null},{"text":"Learning is finding out what you already know.","author":"Richard Bach"},{"text":"Saying thank you is more than good manners. It is good spirituality.","author":"Alfred Painter"},{"text":"Silence is a source of great strength.","author":"Lao Tzu"},{"text":"Joy is the best makeup.","author":"Anne Lamott"},{"text":"There is no great genius without some touch of madness.","author":"Seneca"},{"text":"A jug fills drop by drop.","author":"Buddha"},{"text":"Until you make peace with who you are, you\'ll never be content with what you have.","author":"Doris Mortman"},{"text":"We aim above the mark to hit the mark.","author":"Ralph Emerson"},{"text":"Being angry never solves anything.","author":"Catherine Pulsifer"},{"text":"All men who have achieved great things have been great dreamers.","author":"Orison Marden"},{"text":"Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.","author":"Arthur Conan Doyle"},{"text":"Where all think alike, no one thinks very much.","author":"Walter Lippmann"},{"text":"Everything that exists is in a manner the seed of that which will be.","author":"Marcus Aurelius"},{"text":"Be less curious about people and more curious about ideas.","author":"Marie Curie"},{"text":"The heart has eyes which the brain knows nothing of.","author":"Charles Perkhurst"},{"text":"Only those who dare to fail greatly can ever achieve greatly.","author":"Robert Kennedy"},{"text":"Lose an hour in the morning, and you will spend all day looking for it.","author":"Richard Whately"},{"text":"Mistakes are always forgivable, if one has the courage to admit them.","author":"Bruce Lee"},{"text":"Go to your bosom: Knock there, and ask your heart what it doth know.","author":"William Shakespeare"},{"text":"Happiness mainly comes from our own attitude, rather than from external factors.","author":"Dalai Lama"},{"text":"If you do not change direction, you may end up where you are heading.","author":"Lao Tzu"},{"text":"What we see is mainly what we look for.","author":null},{"text":"Stay away from what might have been and look at what will be.","author":"Marsha Petrie Sue"},{"text":"Act as if what you do makes a difference. It does.","author":"William James"},{"text":"Passion creates the desire for more and action fuelled by passion creates a future.","author":"Byron Pulsifer"},{"text":"Do good by stealth, and blush to find it fame.","author":"Alexander Pope"},{"text":"Opportunity often comes disguised in the form of misfortune, or temporary defeat.","author":"Napoleon Hill"},{"text":"Don\'t talk about what you have done or what you are going to do.","author":"Thomas Jefferson"},{"text":"Most powerful is he who has himself in his own power.","author":"Seneca"},{"text":"We don\'t stop playing because we grow old; we grow old because we stop playing.","author":"Bernard Shaw"},{"text":"Experience can only be gained by doing not by thinking or dreaming.","author":"Byron Pulsifer"},{"text":"Always tell the truth. That way, you don\'t have to remember what you said.","author":"Mark Twain"},{"text":"From wonder into wonder existence opens.","author":"Lao Tzu"},{"text":"He who fears being conquered is sure of defeat.","author":"Napoleon Bonaparte"},{"text":"Life is what happens while you are making other plans.","author":"John Lennon"},{"text":"Doing what you love is the cornerstone of having abundance in your life.","author":"Wayne Dyer"},{"text":"Kindness is the golden chain by which society is bound together.","author":"Johann Wolfgang von Goethe"},{"text":"You need chaos in your soul to give birth to a dancing star.","author":"Nietzsche"},{"text":"It can\'t be spring if your heart is filled with past failures.","author":"Byron Pulsifer"},{"text":"No yesterdays are ever wasted for those who give themselves to today.","author":"Brendan Francis"},{"text":"There are no failures just experiences and your reactions to them.","author":"Tom Krause"},{"text":"Action is the foundational key to all success.","author":"Pablo Picasso"},{"text":"What is necessary to change a person is to change his awareness of himself.","author":"Abraham Maslow"},{"text":"Positive thinking will let you do everything better than negative thinking will.","author":"Zig Ziglar"},{"text":"We shall never know all the good that a simple smile can do.","author":"Mother Teresa"},{"text":"Nothing is so strong as gentleness. Nothing is so gentle as real strength.","author":"Frances de Sales"},{"text":"Imagination is not a talent of some men but is the health of every man.","author":"Ralph Waldo Emerson"},{"text":"We must embrace pain and burn it as fuel for our journey.","author":"Kenji Miyazawa"},{"text":"Don\'t wait for people to be friendly. Show them how.","author":null},{"text":"A gem cannot be polished without friction, nor a man perfected without trials.","author":"Chinese proverb"},{"text":"Each day can be one of triumph if you keep up your interests.","author":"George Matthew Adams"},{"text":"The place to improve the world is first in one\'s own heart and head and hands.","author":"Robert M. Pirsig"},{"text":"The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.","author":"Winston Churchill"},{"text":"Winners have simply formed the habit of doing things losers don\'t like to do.","author":"Albert Gray"},{"text":"Nature is a mutable cloud which is always and never the same.","author":"Ralph Emerson"},{"text":"Life is what you make of it. Always has been, always will be.","author":"Grandma Moses"},{"text":"Worry often gives a small thing a big shadow.","author":"Swedish proverb"},{"text":"I want you to be everything that\'s you, deep at the center of your being.","author":"Confucius"},{"text":"We know what we are, but know not what we may be.","author":"William Shakespeare"},{"text":"Freedom is what you do with what\'s been done to you.","author":"Jean-Paul Sartre"},{"text":"The truth which has made us free will in the end make us glad also.","author":"Felix Adler"},{"text":"He who has imagination without learning has wings but no feet.","author":"Joseph Joubert"},{"text":"Whoso loves, believes the impossible.","author":"Elizabeth Browning"},{"text":"It isn\'t where you come from, it\'s where you\'re going that counts.","author":"Ella Fitzgerald"},{"text":"The greatest obstacle to connecting with our joy is resentment.","author":"Pema Chodron"},{"text":"When anger use your energy to do something productive.","author":"C. Pulsifer"},{"text":"We are all something, but none of us are everything.","author":"Blaise Pascal"},{"text":"If you can\'t explain it simply, you don\'t understand it well enough.","author":"Albert Einstein"},{"text":"He who lives in harmony with himself lives in harmony with the world.","author":"Marcus Aurelius"},{"text":"He who knows himself is enlightened.","author":"Lao Tzu"},{"text":"Build a better mousetrap and the world will beat a path to your door.","author":"Ralph Emerson"},{"text":"As our case is new, we must think and act anew.","author":"Abraham Lincoln"},{"text":"If you can\'t feed a hundred people, then feed just one.","author":"Mother Teresa"},{"text":"In three words I can sum up everything Ive learned about life: it goes on.","author":"Robert Frost"},{"text":"Don\'t let today\'s disappointments cast a shadow on tomorrow\'s dreams.","author":null},{"text":"You always succeed in producing a result.","author":"Tony Robbins"},{"text":"Everything you are against weakens you. Everything you are for empowers you.","author":"Wayne Dyer"},{"text":"As we risk ourselves, we grow. Each new experience is a risk.","author":"Fran Watson"},{"text":"Who we are never changes. Who we think we are does.","author":"Mary Almanac"},{"text":"The final proof of greatness lies in being able to endure criticism without resentment.","author":"Elbert Hubbard"},{"text":"An invasion of armies can be resisted, but not an idea whose time has come.","author":"Victor Hugo"},{"text":"Never let lack of money interfere with having fun.","author":null},{"text":"Excellence is not a skill. It is an attitude.","author":"Ralph Marston"},{"text":"People may doubt what you say, but they will believe what you do.","author":"Lewis Cass"},{"text":"The most formidable weapon against errors of every kind is reason.","author":"Thomas Paine"},{"text":"It\'s important to know that words don\'t move mountains. Work, exacting work moves mountains.","author":"Danilo Dolci"},{"text":"Beware of missing chances; otherwise it may be altogether too late some day.","author":"Franz Liszt"},{"text":"You only lose what you cling to.","author":"Buddha"},{"text":"Life is a succession of moments. To live each one is to succeed.","author":"Corita Kent"},{"text":"Most of the shadows of life are caused by standing in our own sunshine.","author":"Ralph Waldo Emerson"},{"text":"Good actions give strength to ourselves and inspire good actions in others.","author":"Plato"},{"text":"I know but one freedom and that is the freedom of the mind.","author":"Antoine de Saint-Exupery"},{"text":"In the middle of every difficulty lies opportunity.","author":"Albert Einstein"},{"text":"Every human being is the author of his own health or disease.","author":"Buddha"},{"text":"When in doubt, tell the truth.","author":"Mark Twain"},{"text":"Every great advance in science has issued from a new audacity of the imagination.","author":"John Dewey"},{"text":"The path to success is to take massive, determined action.","author":"Anthony Robbins"},{"text":"The ladder of success is never crowded at the top.","author":"Napoleon Hill"},{"text":"He who has health has hope, and he who has hope has everything.","author":null},{"text":"All great achievements require time.","author":"Maya Angelou"},{"text":"No person is your friend who demands your silence, or denies your right to grow.","author":"Alice Walker"},{"text":"Impossibilities are merely things which we have not yet learned.","author":"Charles Chesnutt"},{"text":"Vision without action is a daydream. Action without vision is a nightmare.","author":"Japanese proverb"},{"text":"The Superior Man is aware of Righteousness, the inferior man is aware of advantage.","author":"Confucius"},{"text":"He who angers you conquers you.","author":"Elizabeth Kenny"},{"text":"I never worry about action, but only inaction.","author":"Winston Churchill"},{"text":"No man is free who is not master of himself.","author":"Epictetus"},{"text":"Those that know, do. Those that understand, teach.","author":"Aristotle"},{"text":"If we are not fully ourselves, truly in the present moment, we miss everything.","author":"Thich Nhat Hanh"},{"text":"No act of kindness, no matter how small, is ever wasted.","author":"Aesop"},{"text":"Every man is a volume if you know how to read him.","author":"Channing"},{"text":"The difficulties of life are intended to make us better, not bitter.","author":null},{"text":"Quality means doing it right when no one is looking.","author":"Henry Ford"},{"text":"Change your words. Change your world.","author":null},{"text":"Great acts are made up of small deeds.","author":"Lao Tzu"},{"text":"The odds of hitting your target go up dramatically when you aim at it.","author":"Mal Pancoast"},{"text":"Open minds lead to open doors.","author":null},{"text":"They can do all because they think they can.","author":"Virgil"},{"text":"You have to think anyway, so why not think big?","author":"Donald Trump"},{"text":"On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.","author":"Edward Young"},{"text":"Your body is precious. It is our vehicle for awakening. Treat it with care.","author":"Buddha"},{"text":"The one who always loses, is the only person who gets the reward.","author":"Claire Charmont"},{"text":"The future is completely open, and we are writing it moment to moment.","author":"Pema Chodron"},{"text":"Each time we face a fear, we gain strength, courage, and confidence in the doing.","author":null},{"text":"Ask yourself the secret of your success. Listen to your answer, and practice it.","author":"Richard Bach"},{"text":"Don\'t frown because you never know who is falling in love with your smile.","author":"Sinvyest Tan"},{"text":"Trust your hunches. They\'re usually based on facts filed away just below the conscious level.","author":"Joyce Brothers"},{"text":"Nothing is at last sacred but the integrity of your own mind.","author":"Ralph Emerson"},{"text":"Listen to your intuition. It will tell you everything you need to know.","author":"Anthony D\'Angelo"},{"text":"The personal life deeply lived always expands into truths beyond itself.","author":"Anais Nin"},{"text":"Whenever something negative happens to you, there is a deep lesson concealed within it.","author":"Eckhart Tolle"},{"text":"What is not started today is never finished tomorrow.","author":"Goethe"},{"text":"Our kindness may be the most persuasive argument for that which we believe.","author":"Gordon Hinckley"},{"text":"Chaos is inherent in all compounded things. Strive on with diligence.","author":"Buddha"},{"text":"Be sure you put your feet in the right place, then stand firm.","author":"Abraham Lincoln"},{"text":"Nothing great was ever achieved without enthusiasm.","author":"Ralph Emerson"},{"text":"The meaning I picked, the one that changed my life: Overcome fear, behold wonder.","author":"Richard Bach"},{"text":"Know how to listen, and you will profit even from those who talk badly.","author":"Plutarch"},{"text":"A man is not old as long as he is seeking something.","author":"Edmond Rostand"},{"text":"The time you think you\'re missing, misses you too.","author":"Ymber Delecto"},{"text":"Life is not measured by the breaths you take, but by its breathtaking moments.","author":"Michael Vance"},{"text":"Much wisdom often goes with fewer words.","author":"Sophocles"},{"text":"If you love life, don\'t waste time, for time is what life is made up of.","author":"Bruce Lee"},{"text":"Imagination is the living power and prime agent of all human perception.","author":"Samuel Taylor Coleridge"},{"text":"It is impossible to feel grateful and depressed in the same moment.","author":"Naomi Williams"},{"text":"Progress always involves risks. You can\'t steal second base and keep your foot on first.","author":"Frederick Wilcox"},{"text":"Liberty, taking the word in its concrete sense, consists in the ability to choose.","author":"Simone Weil"},{"text":"A thing well said will be wit in all languages.","author":"John Dryden"},{"text":"Always do your best. What you plant now, you will harvest later.","author":"Og Mandino"},{"text":"My mama always said: life\'s like a box of chocolate you never know what you gonna get.","author":"Forrest Gump"},{"text":"We are the leaves of one branch, the drops of one sea, the flowers of one garden.","author":"Jean Lacordaire"},{"text":"If you come to a fork in the road, take it.","author":null},{"text":"It is not only for what we do that we are held responsible, but also for what we do not do.","author":"Moliere"},{"text":"Nobody can do everything, but everybody can do something.","author":null},{"text":"The world has the habit of making room for the man whose actions show that he knows where he is going.","author":"Napoleon Hill"},{"text":"You cannot step twice into the same river, for other waters are continually flowing in.","author":"Heraclitus"},{"text":"Excellence is to do a common thing in an uncommon way.","author":"Booker Washington"},{"text":"No matter how hard the past, you can always begin again.","author":"Buddha"},{"text":"I begin with an idea and then it becomes something else.","author":"Pablo Picasso"},{"text":"Whoever is happy will make others happy, too.","author":"Mark Twain"},{"text":"Your work is to discover your work and then with all your heart to give yourself to it.","author":"Buddha"},{"text":"It\'s not what happens to you, but how you react to it that matters.","author":"Epictetus"},{"text":"Take it easy, but take it.","author":"Woody Guthrie"},{"text":"Never apologize for showing feeling. When you do so, you apologize for truth.","author":"Benjamin Disraeli"},{"text":"Take rest; a field that has rested gives a bountiful crop.","author":"Ovid"},{"text":"Age does not protect you from love. But love, to some extent, protects you from age.","author":"Anais Nin"},{"text":"Do what you can. Want what you have. Be who you are.","author":"Forrest Church"},{"text":"There are people who have money and people who are rich.","author":"Coco Chanel"},{"text":"Why worry about tomorrow, when today is all we have?","author":null},{"text":"Speak when you are angry and you will make the best speech you will ever regret.","author":"Ambrose Bierce"},{"text":"Things do not change, we change.","author":"Henry Thoreau"},{"text":"The exercise of an extraordinary gift is the supremest pleasure in life.","author":"Mark Twain"},{"text":"Sometimes the most important thing in a whole day is the rest we take between two deep breaths.","author":"Etty Hillesum"},{"text":"Forgiveness is choosing to love. It is the first skill of self-giving love.","author":"Mohandas Gandhi"},{"text":"To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.","author":"William Londen"},{"text":"Most smiles are started by another smile.","author":null},{"text":"Nothing is softer or more flexible than water, yet nothing can resist it.","author":"Lao Tzu"},{"text":"It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.","author":"Dalai Lama"},{"text":"Experience keeps a dear school, but fools will learn in no other.","author":"Benjamin Franklin"},{"text":"We can only be said to be alive in those moments when our hearts are conscious of our treasures.","author":"Thornton Wilder"},{"text":"Fine words and an insinuating appearance are seldom associated with true virtue","author":"Confucius"},{"text":"We do not quit playing because we grow old, we grow old because we quit playing.","author":"Oliver Holmes"},{"text":"You can\'t choose up sides on a round world.","author":"Wayne Dyer"},{"text":"My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate, that\'s my philosophy.","author":"Thornton Wilder"},{"text":"Kindness is the language which the deaf can hear and the blind can see.","author":"Mark Twain"},{"text":"I may not know everything, but everything is not known yet anyway.","author":"Byron Pulsifer"},{"text":"If we could see the miracle of a single flower clearly, our whole life would change.","author":"Buddha"},{"text":"Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.","author":"Carl Jung"},{"text":"You cannot travel the path until you have become the path itself.","author":"Buddha"},{"text":"Keep your eyes on the stars and your feet on the ground.","author":"Theodore Roosevelt"},{"text":"I am not afraid of tomorrow, for I have seen yesterday and I love today.","author":"William White"},{"text":"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.","author":"Jamie Paolinetti"},{"text":"When you lose, don\'t lose the lesson.","author":null},{"text":"If you want a thing done well, do it yourself.","author":"Napoleon Bonaparte"},{"text":"The greatest barrier to success is the fear of failure.","author":"Eriksson"},{"text":"Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.","author":"John Ruskin"},{"text":"If you aren\'t going all the way, why go at all?","author":"Joe Namath"},{"text":"Our greatest glory is not in never falling, but in rising every time we fall.","author":"Confucius"},{"text":"The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.","author":"Pierre Abelard"},{"text":"If I could reach up and hold a star for every time you\'ve made me smile, the entire evening sky would be in the palm of my hand.","author":null},{"text":"We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.","author":"Buddha"},{"text":"Stay committed to your decisions, but stay flexible in your approach.","author":"Tony Robbins"},{"text":"An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.","author":"Albert Schweitzer"},{"text":"What separates the winners from the losers is how a person reacts to each new twist of fate.","author":"Donald Trump"},{"text":"Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.","author":"Ralph Emerson"},{"text":"To change ones life, start immediately, do it flamboyantly, no exceptions.","author":"William James"},{"text":"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.","author":"John F. Kennedy"},{"text":"The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.","author":"Booker Washington"},{"text":"The steeper the mountain the harder the climb the better the view from the finishing line","author":null},{"text":"Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.","author":"Dr. David M. Burns"},{"text":"When I let go of what I am, I become what I might be.","author":"Lao Tzu"},{"text":"Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.","author":"Byron Pulsifer"},{"text":"Time is not a measure the length of a day or month or year but more a measure of what you have accomplished.","author":"Byron Pulsifer"},{"text":"Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.","author":"Johann Wolfgang von Goethe"},{"text":"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.","author":"Buddha"},{"text":"When there is no enemy within, the enemies outside cannot hurt you.","author":"African proverb"},{"text":"He who controls others may be powerful, but he who has mastered himself is mightier still.","author":"Lao Tzu"},{"text":"There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.","author":"Wayne Dyer"},{"text":"Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.","author":"Wolfgang Amadeus Mozart"},{"text":"The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.","author":"H. Bertram Lewis"},{"text":"As an organizer I start from where the world is, as it is, not as I would like it to be.","author":"Saul Alinsky"},{"text":"You are the only person on Earth who can use your ability.","author":"Zig Ziglar"},{"text":"Don\'t let what you can\'t do stop you from doing what you can do.","author":null},{"text":"Complaining doesn\'t change a thing only taking action does.","author":"Byron Pulsifer"},{"text":"Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.","author":"Charles A. Lindbergh"},{"text":"Enjoy the little things, for one day you may look back and realize they were the big things.","author":"Robert Brault"},{"text":"With every experience, you alone are painting your own canvas, thought by thought, choice by choice.","author":"Oprah Winfrey"},{"text":"Let the beauty of what you love be what you do.","author":"Rumi"},{"text":"The world turns aside to let any man pass who knows where he is going.","author":"Epictetus"},{"text":"Beauty is not in the face; beauty is a light in the heart.","author":"Kahlil Gibran"},{"text":"A day of worry is more exhausting than a day of work.","author":"John Lubbock"},{"text":"Truth, and goodness, and beauty are but different faces of the same all.","author":"Ralph Emerson"},{"text":"To be great is to be misunderstood.","author":"Ralph Emerson"},{"text":"Trust only movement. Life happens at the level of events, not of words. Trust movement.","author":"Alfred Adler"},{"text":"Never, never, never give up.","author":"Winston Churchill"},{"text":"The most decisive actions of our life... are most often unconsidered actions.","author":"Andre Gide"},{"text":"As we grow as unique persons, we learn to respect the uniqueness of others.","author":"Robert Schuller"},{"text":"Failure doesn\'t mean you are a failure it just means you haven\'t succeeded yet.","author":"Robert Schuller"},{"text":"It is the quality of our work which will please God, not the quantity.","author":"Mahatma Gandhi"},{"text":"Try and fail, but don\'t fail to try.","author":"Stephen Kaggwa"},{"text":"First say to yourself what you would be; and then do what you have to do.","author":"Epictetus"},{"text":"Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.","author":"Carl Jung"},{"text":"Keep silence for the most part, and speak only when you must, and then briefly.","author":"Epictetus"},{"text":"Fear not for the future, weep not for the past.","author":"Percy Shelley"},{"text":"We are Divine enough to ask and we are important enough to receive.","author":"Wayne Dyer"},{"text":"If you kick a stone in anger, you\'ll hurt your own foot.","author":"Korean proverb"},{"text":"To see things in the seed, that is genius.","author":"Lao Tzu"},{"text":"The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.","author":"Bertrand Russell"},{"text":"Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.","author":"Douglas Adams"},{"text":"Make the most of yourself, for that is all there is of you.","author":"Ralph Emerson"},{"text":"The universe is made of stories, not atoms.","author":"Muriel Rukeyser"},{"text":"Respect should be earned by actions, and not acquired by years.","author":"Frank Wright"},{"text":"I hear and I forget. I see and I remember. I do and I understand.","author":"Confucius"},{"text":"The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.","author":"Will Durant"},{"text":"A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.","author":"Chuck Norris"},{"text":"Sometimes the biggest act of courage is a small one.","author":"Lauren Raffo"},{"text":"People are not lazy. They simply have impotent goals that is, goals that do not inspire them.","author":"Tony Robbins"},{"text":"You do not become good by trying to be good, but by finding the goodness that is already within you.","author":"Eckhart Tolle"},{"text":"Waste no more time arguing about what a good man should be. Be one.","author":"Marcus Aurelius"},{"text":"Happiness often sneaks in through a door you didn\'t know you left open.","author":"John Barrymore"},{"text":"There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.","author":"Mark Twain"},{"text":"The things that one most wants to do are the things that are probably most worth doing.","author":"Winifred Holtby"},{"text":"Always bear in mind that your own resolution to succeed is more important than any one thing.","author":"Abraham Lincoln"},{"text":"Setting an example is not the main means of influencing another, it is the only means.","author":"Albert Einstein"},{"text":"Chaos and Order are not enemies, only opposites.","author":"Richard Garriott"},{"text":"Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody.","author":"Henry Longfellow"},{"text":"Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.","author":"Harriet Lerner"},{"text":"He who deliberates fully before taking a step will spend his entire life on one leg.","author":"Chinese proverb"},{"text":"Peace begins with a smile.","author":"Mother Teresa"},{"text":"Be your own hero, it\'s cheaper than a movie ticket.","author":"Doug Horton"},{"text":"Turn your face toward the sun and the shadows will fall behind you.","author":"Maori proverb"},{"text":"Things turn out best for those who make the best of the way things turn out.","author":"Jack Buck"},{"text":"Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.","author":"Whoopi Goldberg"},{"text":"To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.","author":"Anthony Robbins"},{"text":"Ability will never catch up with the demand for it.","author":"Confucius"},{"text":"Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.","author":"Albert Schweitzer"},{"text":"Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.","author":"Henry Reed"},{"text":"Setting goals is the first step in turning the invisible into the visible.","author":"Tony Robbins"},{"text":"Courage is not the absence of fear, but simply moving on with dignity despite that fear.","author":"Pat Riley"},{"text":"All truths are easy to understand once they are discovered; the point is to discover them.","author":"Galileo Galilei"},{"text":"The smallest act of kindness is worth more than the grandest intention.","author":"Oscar Wilde"},{"text":"We know from science that nothing in the universe exists as an isolated or independent entity.","author":"Margaret Wheatley"},{"text":"Everything in the universe goes by indirection. There are no straight lines.","author":"Ralph Emerson"},{"text":"What do we live for, if it is not to make life less difficult for each other?","author":"George Eliot"},{"text":"When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.","author":"Tenzin Gyatso"},{"text":"We may encounter many defeats but we must not be defeated.","author":"Maya Angelou"},{"text":"Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.","author":"Richard Bach"},{"text":"Logic will get you from A to B. Imagination will take you everywhere.","author":"Albert Einstein"},{"text":"Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.","author":"Sarah Breathnach"},{"text":"The world is but a canvas to the imagination.","author":"Henry Thoreau"},{"text":"Thats the risk you take if you change: that people you\'ve been involved with won\'t like the new you. But other people who do will come along.","author":"Lisa Alther"},{"text":"To be happy is to be able to become aware of oneself without fright.","author":"Walter Benjamin"},{"text":"Strength to carry on despite the odds means you have faith in your own abilities and know how.","author":"Byron Pulsifer"},{"text":"Make the most of yourself for that is all there is of you.","author":"Ralph Emerson"},{"text":"Be gentle first with yourself if you wish to be gentle with others.","author":"Lama Yeshe"},{"text":"A man who doesn\'t trust himself can never really trust anyone else.","author":"Cardinal Retz"},{"text":"We make our own fortunes and we call them fate.","author":"Benjamin Disraeli"},{"text":"Leaders aren\'t born they are made. And they are made just like anything else, through hard work. And that\'s the price well have to pay to achieve that goal, or any goal.","author":"Vince Lombardi"},{"text":"It takes courage to grow up and become who you really are.","author":"E. E. Cummings"},{"text":"Always seek out the seed of triumph in every adversity.","author":"Og Mandino"},{"text":"Rather than wishing for change, you first must be prepared to change.","author":"Catherine Pulsifer"},{"text":"I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.","author":"Buddha"},{"text":"Fame usually comes to those who are thinking about something else.","author":"Holmes"},{"text":"First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.","author":"Napoleon Hill"},{"text":"The superior man acts before he speaks, and afterwards speaks according to his action.","author":"Confucius"},{"text":"A single conversation across the table with a wise person is worth a months study of books.","author":"Chinese proverb"},{"text":"The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.","author":"Mohandas Gandhi"},{"text":"You can never cross the ocean unless you have the courage to lose sight of the shore.","author":null},{"text":"Work for something because it is good, not just because it stands a chance to succeed.","author":"Vaclav Havel"},{"text":"Knowledge rests not upon truth alone, but upon error also.","author":"Carl Jung"},{"text":"Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can\'t build on it; it\'s only for wallowing in.","author":"Katherine Mansfield"},{"text":"Never regret. If it\'s good, it\'s wonderful. If it\'s bad, it\'s experience.","author":"Victoria Holt"},{"text":"When deeds and words are in accord, the whole world is transformed.","author":"Chuang Tzu"},{"text":"Kind words can be short and easy to speak but their echoes are truly endless.","author":"Mother Teresa"},{"text":"For everything that lives is holy, life delights in life.","author":"William Blake"},{"text":"The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.","author":"Dalai Lama"},{"text":"Our passion is our strength.","author":"Billie Armstrong"},{"text":"In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.","author":"Leonardo da Vinci"},{"text":"Spring is a time for rebirth and the fulfilment of new life.","author":"Byron Pulsifer"},{"text":"There is nothing happens to any person but what was in his power to go through with.","author":"Marcus Aurelius"},{"text":"There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.","author":"Alfred Korzybski"},{"text":"The art of progress is to preserve order amid change, and to preserve change amid order.","author":"Alfred Whitehead"},{"text":"We make a living by what we get, but we make a life by what we give.","author":"Winston Churchill"},{"text":"If you want to study yourself look into the hearts of other people. If you want to study other people look into your own heart.","author":"Friedrich von Schiller"},{"text":"Maxim for life: You get treated in life the way you teach people to treat you.","author":"Wayne Dyer"},{"text":"The first duty of a human being is to assume the right functional relationship to society more briefly, to find your real job, and do it.","author":"Charlotte Perkins Gilman"},{"text":"The key to growth is the introduction of higher dimensions of consciousness into our awareness.","author":"Lao Tzu"},{"text":"Thought is the blossom; language the bud; action the fruit behind it.","author":"Ralph Emerson"},{"text":"True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.","author":"Daisaku Ikeda"},{"text":"There is nothing so useless as doing efficiently that which should not be done at all.","author":"Peter Drucker"},{"text":"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.","author":"Leonardo da Vinci"},{"text":"All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.","author":"William Shakespeare"},{"text":"As we are liberated from our own fear, our presence automatically liberates others.","author":"Nelson Mandela"},{"text":"The most successful people are those who are good at plan B.","author":"James Yorke"},{"text":"Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.","author":"Aristotle"},{"text":"To fly as fast as thought, you must begin by knowing that you have already arrived.","author":"Richard Bach"},{"text":"Obstacles are those things you see when you take your eyes off the goal.","author":"Hannah More"},{"text":"The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.","author":"Michelangelo"},{"text":"Great ideas often receive violent opposition from mediocre minds.","author":"Albert Einstein"},{"text":"We can change our lives. We can do, have, and be exactly what we wish.","author":"Tony Robbins"},{"text":"You are the only person on earth who can use your ability.","author":"Zig Ziglar"},{"text":"Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.","author":"Jean Lacordaire"},{"text":"The least of things with a meaning is worth more in life than the greatest of things without it.","author":"Carl Jung"},{"text":"The noblest worship is to make yourself as good and as just as you can.","author":"Isocrates"},{"text":"Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending.","author":"Carl Bard"},{"text":"A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.","author":"Denis Waitley"},{"text":"Don\'t think of it as failure. Think of it as time-released success.","author":"Robert Orben"},{"text":"We are what we repeatedly do. Excellence, then, is not an act but a habit.","author":"Aristotle"},{"text":"I walk slowly, but I never walk backward.","author":"Abraham Lincoln"},{"text":"Divide each difficulty into as many parts as is feasible and necessary to resolve it.","author":"Rene Descartes"},{"text":"The best place to find a helping hand is at the end of your own arm.","author":null},{"text":"We know the truth, not only by the reason, but by the heart.","author":"Blaise Pascal"},{"text":"We choose our joys and sorrows long before we experience them.","author":"Kahlil Gibran"},{"text":"Anybody can make history. Only a great man can write it.","author":"Oscar Wilde"},{"text":"If I know what love is, it is because of you.","author":"Hermann Hesse"},{"text":"Allow the world to live as it chooses, and allow yourself to live as you choose.","author":"Richard Bach"},{"text":"Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.","author":"Barack Obama"},{"text":"Compassion and happiness are not a sign of weakness but a sign of strength.","author":"Dalai Lama"},{"text":"It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.","author":"Franklin D. Roosevelt"},{"text":"Be here now. Be someplace else later. Is that so complicated?","author":"David Bader"},{"text":"To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.","author":"Mahummad Ali"},{"text":"Learning without reflection is a waste, reflection without learning is dangerous.","author":"Confucius"},{"text":"Don\'t fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.","author":null},{"text":"All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.","author":"Bruce Lee"},{"text":"I don\'t believe in failure. It\'s not failure if you enjoyed the process.","author":"Oprah Winfrey"},{"text":"The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.","author":"Helen Keller"},{"text":"Success in business requires training and discipline and hard work. But if you\'re not frightened by these things, the opportunities are just as great today as they ever were.","author":"David Rockefeller"},{"text":"The man who trusts men will make fewer mistakes than he who distrusts them.","author":"Cavour"},{"text":"The less effort, the faster and more powerful you will be.","author":"Bruce Lee"},{"text":"We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.","author":"Ralph Emerson"},{"text":"The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.","author":"Anais Nin"},{"text":"The cure for boredom is curiosity. There is no cure for curiosity.","author":"Ellen Parr"},{"text":"We can do no great things, only small things with great love.","author":"Mother Teresa"},{"text":"Be like the flower, turn your face to the sun.","author":"Kahlil Gibran"},{"text":"Remembering a wrong is like carrying a burden on the mind.","author":"Buddha"},{"text":"The foolish man seeks happiness in the distance; the wise grows it under his feet.","author":"James Openheim"},{"text":"Gratitude is the fairest blossom which springs from the soul.","author":"Henry Beecher"},{"text":"If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?","author":"Confucius"},{"text":"You cannot have what you do not want.","author":"John Acosta"},{"text":"Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.","author":"Ralph Waldo Emerson"},{"text":"It is not fair to ask of others what you are unwilling to do yourself.","author":"Eleanor Roosevelt"},{"text":"Knowing your own darkness is the best method for dealing with the darknesses of other people.","author":"Carl Jung"},{"text":"The best thing in every noble dream is the dreamer...","author":"Moncure Conway"},{"text":"Weve got to have a dream if we are going to make a dream come true.","author":"Walt Disney"},{"text":"If you want things to be different, perhaps the answer is to become different yourself.","author":"Norman Peale"},{"text":"There is nothing impossible to him who will try.","author":"Alexander the Great"},{"text":"Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.","author":"Theodore Rubin"},{"text":"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.","author":"Harriet Tubman"},{"text":"The only real failure in life is not to be true to the best one knows.","author":"Buddha"},{"text":"Anyone who doesn\'t take truth seriously in small matters cannot be trusted in large ones either.","author":"Albert Einstein"},{"text":"Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.","author":"Barack Obama"},{"text":"Those who cannot learn from history are doomed to repeat it.","author":"George Santayan"},{"text":"The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.","author":"Carlos Castaneda"},{"text":"Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.","author":"Dhammapada"},{"text":"Things that were hard to bear are sweet to remember.","author":"Seneca"},{"text":"Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.","author":"Henry James"},{"text":"However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?","author":"Buddha"},{"text":"They can conquer who believe they can.","author":"Virgil"},{"text":"Learn to listen. Opportunity could be knocking at your door very softly.","author":"Frank Tyger"},{"text":"All action results from thought, so it is thoughts that matter.","author":"Sai Baba"},{"text":"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.","author":"Albert Einstein"},{"text":"I love my past. I love my present. I\'m not ashamed of what Ive had, and I\'m not sad because I have it no longer.","author":"Colette"},{"text":"Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.","author":"Maya Angelou"},{"text":"Just as much as we see in others we have in ourselves.","author":"William Hazlitt"},{"text":"Prosperity depends more on wanting what you have than having what you want.","author":"Geoffrey F. Abert"},{"text":"How many cares one loses when one decides not to be something but to be someone.","author":"Coco Chanel"},{"text":"He who knows, does not speak. He who speaks, does not know.","author":"Lao Tzu"},{"text":"We cannot direct the wind but we can adjust the sails.","author":null},{"text":"One may say the eternal mystery of the world is its comprehensibility.","author":"Albert Einstein"},{"text":"The self is not something ready-made, but something in continuous formation through choice of action.","author":"John Dewey"},{"text":"Our greatness lies not so much in being able to remake the world as being able to remake ourselves.","author":"Mahatma Gandhi"},{"text":"Moments of complete apathy are the best for new creations.","author":"Philip Breedveld"},{"text":"The only real mistake is the one from which we learn nothing.","author":"John Powell"},{"text":"To dream of the person you would like to be is to waste the person you are.","author":"Tim Menchen"},{"text":"The important thing is this: to be able at any moment to sacrifice what we are for what we could become.","author":"Charles Dubois"},{"text":"Gratitude is not only the greatest of virtues, but the paren\'t of all the others.","author":"Cicero"},{"text":"It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today.","author":"Lama Yeshe"},{"text":"Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.","author":"Byron Pulsifer"},{"text":"Things do not change; we change.","author":"Henry Thoreau"},{"text":"We must learn our limits. We are all something, but none of us are everything.","author":"Blaise Pascal"},{"text":"Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.","author":"Stephen Sigmund"},{"text":"We are all faced with a series of great opportunities brilliantly disguised as impossible situations.","author":"Charles R. Swindoll"},{"text":"All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.","author":"Albert Camus"},{"text":"Be a good listener. Your ears will never get you in trouble.","author":"Frank Tyger"},{"text":"Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.","author":"Buddha"},{"text":"You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.","author":"Anatole France"},{"text":"To listen well is as powerful a means of communication and influence as to talk well.","author":"John Marshall"},{"text":"There is only one happiness in life, to love and be loved.","author":"George Sand"},{"text":"Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.","author":"Matt Zotti"},{"text":"Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.","author":"Lao Tzu"},{"text":"Reason and free inquiry are the only effectual agents against error.","author":"Thomas Jefferson"},{"text":"The best cure for the body is a quiet mind.","author":"Napoleon Bonaparte"},{"text":"See the positive side, the potential, and make an effort.","author":"Dalai Lama"},{"text":"By accepting yourself and being fully what you are, your presence can make others happy.","author":"Jane Roberts"},{"text":"Never deny a diagnosis, but do deny the negative verdict that may go with it.","author":"Norman Cousins"},{"text":"The really unhappy person is the one who leaves undone what they can do, and starts doing what they don\'t understand; no wonder they come to grief.","author":"Johann Wolfgang von Goethe"},{"text":"You cannot be lonely if you like the person you\'re alone with.","author":"Wayne Dyer"},{"text":"I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.","author":"G. K. Chesterton"},{"text":"If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.","author":"Buddha"},{"text":"Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.","author":"Cadet Maxim"},{"text":"Failure will never overtake me if my determination to succeed is strong enough.","author":"Og Mandino"},{"text":"Let go of your attachment to being right, and suddenly your mind is more open. You\'re able to benefit from the unique viewpoints of others, without being crippled by your own judgement.","author":"Ralph Marston"},{"text":"Wrinkles should merely indicate where smiles have been.","author":"Mark Twain"},{"text":"Your attitude, not your aptitude, will determine your altitude.","author":"Zig Ziglar"},{"text":"Let yourself be silently drawn by the stronger pull of what you really love.","author":"Rumi"},{"text":"I gave my life to become the person I am right now. Was it worth it?","author":"Richard Bach"},{"text":"Give thanks for a little and you will find a lot.","author":"Hausa"},{"text":"Your ability to learn faster than your competition is your only sustainable competitive advantage.","author":"Arie de Gues"},{"text":"Forgiveness does not change the past, but it does enlarge the future.","author":"Paul Boese"},{"text":"Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.","author":"Nikola Tesla"},{"text":"Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.","author":"Aristotle"},{"text":"The deepest craving of human nature is the need to be appreciated.","author":"William James"},{"text":"Love does not consist of gazing at each other, but in looking together in the same direction.","author":"Antoine de Saint-Exupery"},{"text":"We have committed the Golden Rule to memory; let us now commit it to life.","author":"Edwin Markham"},{"text":"It is with words as with sunbeams. The more they are condensed, the deeper they burn.","author":"Robert Southey"},{"text":"When people are like each other they tend to like each other.","author":"Tony Robbins"},{"text":"Sincerity is the way of Heaven. The attainment of sincerity is the way of men.","author":"Confucius"},{"text":"Be the change that you want to see in the world.","author":"Mohandas Gandhi"},{"text":"The more you care, the stronger you can be.","author":"Jim Rohn"},{"text":"Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.","author":"Oprah Winfrey"},{"text":"Just trust yourself, then you will know how to live.","author":"Goethe"},{"text":"To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.","author":"Pema Chodron"},{"text":"If you don\'t design your own life plan, chances are you\'ll fall into someone else\'s plan. And guess what they have planned for you? Not much.","author":"Jim Rohn"},{"text":"It all depends on how we look at things, and not how they are in themselves.","author":"Carl Jung"},{"text":"Giving up doesn\'t always mean you are weak; sometimes it means that you are strong enough to let go.","author":null},{"text":"To climb steep hills requires a slow pace at first.","author":"William Shakespeare"},{"text":"An idea that is developed and put into action is more important than an idea that exists only as an idea.","author":"Buddha"},{"text":"It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.","author":"Max Planck"},{"text":"Truth is generally the best vindication against slander.","author":"Abraham Lincoln"},{"text":"To follow, without halt, one aim: There is the secret of success.","author":"Anna Pavlova"},{"text":"And as we let our own light shine, we unconsciously give other people permission to do the same.","author":"Nelson Mandela"},{"text":"What is a weed? A plant whose virtues have not yet been discovered.","author":"Ralph Emerson"},{"text":"Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.","author":"Ralph Emerson"},{"text":"Many people have gone further than they thought they could because someone else thought they could.","author":null},{"text":"We read the world wrong and say that it deceives us.","author":"Rabindranath Tagore"},{"text":"If only wed stop trying to be happy wed have a pretty good time.","author":"Edith Wharton"},{"text":"You must do the things you think you cannot do.","author":"Eleanor Roosevelt"},{"text":"Be yourself; everyone else is already taken.","author":"Oscar Wilde"},{"text":"The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.","author":"Richard Bach"},{"text":"I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.","author":"Edna Millay"},{"text":"Most folks are as happy as they make up their minds to be.","author":"Abraham Lincoln"},{"text":"Love is the master key that opens the gates of happiness.","author":"Oliver Holmes"},{"text":"The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.","author":"Cecil B. DeMille"},{"text":"My reputation grows with every failure.","author":"George Shaw"},{"text":"Good thoughts are no better than good dreams, unless they be executed.","author":"Ralph Emerson"},{"text":"Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.","author":"Dalai Lama"},{"text":"However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?","author":"Buddha"},{"text":"For success, attitude is equally as important as ability.","author":"Harry Banks"},{"text":"If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.","author":"Colin Powell"},{"text":"A person who never made a mistake never tried anything new.","author":"Albert Einstein"},{"text":"Better than a thousand hollow words is one word that brings peace.","author":"Buddha"},{"text":"The possibilities are numerous once we decide to act and not react.","author":"George Bernard Shaw"},{"text":"Almost everything comes from nothing.","author":"Henri Amiel"},{"text":"Sometimes by losing a battle you find a new way to win the war.","author":"Donald Trump"},{"text":"Listen to what you know instead of what you fear.","author":"Richard Bach"},{"text":"It is easier to live through someone else than to become complete yourself.","author":"Betty Friedan"},{"text":"If you\'re in a bad situation, don\'t worry it\'ll change. If you\'re in a good situation, don\'t worry it\'ll change.","author":"John Simone"},{"text":"Remember that failure is an event, not a person.","author":"Zig Ziglar"},{"text":"Don\'t settle for a relationship that won\'t let you be yourself.","author":"Oprah Winfrey"},{"text":"What the caterpillar calls the end of the world, the master calls a butterfly.","author":"Richard Bach"},{"text":"Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.","author":"Thomas Carlyle"},{"text":"If you do what you\'ve always done, you\'ll get what youve always gotten.","author":"Tony Robbins"},{"text":"Do not wait for leaders; do it alone, person to person.","author":"Mother Teresa"},{"text":"Knowledge has three degrees opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.","author":"Plotinus"},{"text":"Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.","author":"Mary Parrish"},{"text":"We never live; we are always in the expectation of living.","author":"Voltaire"},{"text":"Think like a man of action; act like a man of thought.","author":"Henri L. Bergson"},{"text":"You can complain because roses have thorns, or you can rejoice because thorns have roses.","author":"Ziggy"},{"text":"There is not one big cosmic meaning for all, there is only the meaning we each give to our life.","author":"Anais Nin"},{"text":"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.","author":"Lao Tzu"},{"text":"Time you enjoyed wasting was not wasted.","author":"John Lennon"},{"text":"You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.","author":"Albert Camus"},{"text":"Genuine sincerity opens people\'s hearts, while manipulation causes them to close.","author":"Daisaku Ikeda"},{"text":"To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.","author":"Confucius"},{"text":"A man\'s dreams are an index to his greatness.","author":"Zadok Rabinowitz"},{"text":"This is the final test of a gentleman: his respect for those who can be of no possible value to him.","author":"William Lyon Phelps"},{"text":"You teach best what you most need to learn.","author":"Richard Bach"},{"text":"Continuous effort, not strength or intelligence is the key to unlocking our potential.","author":"Winston Churchill"},{"text":"Obstacles are those frightful things you see when you take your eyes off your goal.","author":"Henry Ford"},{"text":"Go for it now. The future is promised to no one.","author":"Wayne Dyer"},{"text":"Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing.","author":"John Holmes"},{"text":"Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward.","author":"Byron Pulsifer"},{"text":"If we look at the world with a love of life, the world will reveal its beauty to us.","author":"Daisaku Ikeda"},{"text":"In skating over thin ice our safety is in our speed.","author":"Ralph Emerson"},{"text":"When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.","author":"W. Clement Stone"},{"text":"Never promise more than you can perform.","author":"Publilius Syrus"},{"text":"If you don\'t go after what you want, you\'ll never have it. If you don\'t ask, the answer is always no. If you don\'t step forward, you\'re always in the same place.","author":"Nora Roberts"},{"text":"I can\'t believe that God put us on this earth to be ordinary.","author":"Lou Holtz"},{"text":"There are no limitations to the mind except those we acknowledge.","author":"Napoleon Hill"},{"text":"It is through science that we prove, but through intuition that we discover.","author":"Jules Poincare"},{"text":"Don\'t be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.","author":"Richard Bach"},{"text":"If someone in your life talked to you the way you talk to yourself, you would have left them long ago.","author":"Carla Gordon"},{"text":"The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.","author":"Edward Ericson"},{"text":"If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor.","author":"Daisaku Ikeda"},{"text":"There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.","author":"Linda Hogan"},{"text":"Never tell me the sky is the limit when there are footprints on the moon.","author":null},{"text":"I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.","author":"Georg Lichtenberg"},{"text":"The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.","author":"Eckhart Tolle"},{"text":"Take it easy but take it.","author":"Woody Guthrie"},{"text":"Blessed is the man who expects nothing, for he shall never be disappointed.","author":"Alexander Pope"},{"text":"He who knows others is wise. He who knows himself is enlightened.","author":"Lao Tzu"},{"text":"The best way to predict your future is to create it.","author":"Peter Drucker"},{"text":"A garden is always a series of losses set against a few triumphs, like life itself.","author":"May Sarton"},{"text":"If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.","author":"Rachel Carson"},{"text":"Never mistake motion for action.","author":"Ernest Hemingway"},{"text":"One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.","author":"Hannah Senesh"},{"text":"One who is too insistent on his own views, finds few to agree with him.","author":"Lao Tzu"},{"text":"Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.","author":"Harry Burchell Mathews"},{"text":"Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.","author":"Voltaire"},{"text":"The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.","author":"George Shaw"},{"text":"Good instincts usually tell you what to do long before your head has figured it out.","author":"Michael Burke"},{"text":"It isn\'t what happens to us that causes us to suffer; it\'s what we say to ourselves about what happens.","author":"Pema Chodron"},{"text":"Those who dream by day are cognizant of many things which escape those who dream only by night.","author":"Edgar Allan Poe"},{"text":"We cannot hold a torch to light another\'s path without brightening our own.","author":"Ben Sweetland"},{"text":"You are never given a wish without also being given the power to make it come true. You may have to work for it, however.","author":"Richard Bach"},{"text":"Kind words can be short and easy to speak, but their echoes are truly endless.","author":"Mother Teresa"},{"text":"Count your joys instead of your woes. Count your friends instead of your foes.","author":null},{"text":"Dreams come true. Without that possibility, nature would not incite us to have them.","author":"John Updike"},{"text":"Staying in one place is the best path to be taken over and surpassed by many.","author":"Byron Pulsifer"},{"text":"Imagination will often carry us to worlds that never were. But without it we go nowhere.","author":"Carl Sagan"},{"text":"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.","author":"Helen Keller"},{"text":"A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.","author":"Jawaharlal Nehru"},{"text":"I have no special talent. I am only passionately curious.","author":"Albert Einstein"},{"text":"I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.","author":"Elizabeth Montagu"},{"text":"The height of your accomplishments will equal the depth of your convictions.","author":"William Scolavino"},{"text":"If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?","author":"Rabbi Hillel"},{"text":"When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.","author":"Audre Lorde"},{"text":"All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.","author":"Alexis Carrel"},{"text":"To get the full value of joy you must have someone to divide it with.","author":"Mark Twain"},{"text":"Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.","author":"Johann Wolfgang von Goethe"},{"text":"We lost because we told ourselves we lost.","author":"Leo Tolstoy"},{"text":"Success is determined by those whom prove the impossible, possible.","author":"James Pence"},{"text":"Good advice is always certain to be ignored, but that\'s no reason not to give it.","author":"Agatha Christie"},{"text":"The winner ain\'t the one with the fastest car it\'s the one who refuses to lose.","author":"Dale Earnhardt"},{"text":"Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life.","author":"Robert C. Solomon"},{"text":"No one has a finer command of language than the person who keeps his mouth shut.","author":"Sam Rayburn"},{"text":"The only person who never makes mistakes is the person who never does anything.","author":"Denis Waitley"},{"text":"Life is what happens to you while you\'re busy making other plans.","author":"John Lennon"},{"text":"Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.","author":"Jonathan Swift"},{"text":"If you have knowledge, let others light their candles in it.","author":"Margaret Fuller"},{"text":"It is impossible for a man to learn what he thinks he already knows.","author":"Epictetus"},{"text":"If you find yourself in a hole, the first thing to do is stop digging.","author":"Will Rogers"},{"text":"To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.","author":"Plutarch"},{"text":"I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.","author":"Lee Womack"},{"text":"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.","author":"Marcus Aurelius"},{"text":"Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.","author":"William Menninger"},{"text":"I have an everyday religion that works for me. Love yourself first, and everything else falls into line.","author":"Lucille Ball"},{"text":"Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.","author":"Chuang Tzu"},{"text":"Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.","author":"Jane Addams"},{"text":"The energy of the mind is the essence of life.","author":"Aristotle"},{"text":"Begin, be bold, and venture to be wise.","author":"Horace"},{"text":"Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.","author":"Lao Tzu"},{"text":"A wise man will make more opportunities than he finds.","author":"Francis Bacon"},{"text":"Slow down and enjoy life. It\'s not only the scenery you miss by going too fast you also miss the sense of where you are going and why.","author":"Eddie Cantor"},{"text":"Miracles come in moments. Be ready and willing.","author":"Wayne Dyer"},{"text":"Numberless are the worlds wonders, but none more wonderful than man.","author":"Sophocles"},{"text":"So is cheerfulness, or a good temper, the more it is spent, the more remains.","author":"Ralph Emerson"},{"text":"The true way to render ourselves happy is to love our work and find in it our pleasure.","author":"Francoise de Motteville"},{"text":"When you judge another, you do not define them, you define yourself.","author":"Wayne Dyer"},{"text":"Argue for your limitations, and sure enough they\'re yours.","author":"Richard Bach"},{"text":"He who wishes to secure the good of others, has already secured his own.","author":"Confucius"},{"text":"Wise men talk because they have something to say; fools, because they have to say something.","author":"Plato"},{"text":"Life is really simple, but we insist on making it complicated.","author":"Confucius"},{"text":"The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.","author":"Jim Bishop"},{"text":"Everything that irritates us about others can lead us to a better understanding of ourselves.","author":"Carl Jung"},{"text":"Beware of the half truth. You may have gotten hold of the wrong half.","author":null},{"text":"The greatest mistake you can make in life is to be continually fearing you will make one.","author":"Elbert Hubbard"},{"text":"I have never been hurt by anything I didn\'t say.","author":"Calvin Coolidge"},{"text":"Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.","author":"Thomas Kempis"},{"text":"Adversity causes some men to break, others to break records.","author":"William Ward"},{"text":"An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.","author":"Thomas Fuller"},{"text":"The industrial landscape is already littered with remains of once successful companies that could not adapt their strategic vision to altered conditions of competition.","author":"Abernathy"},{"text":"Example has more followers than reason.","author":"Christian Bovee"},{"text":"One that desires to excel should endeavour in those things that are in themselves most excellent.","author":"Epictetus"},{"text":"If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.","author":"Mary Pickford"},{"text":"The only Zen you find on the tops of mountains is the Zen you bring up there.","author":"Robert Pirsig"},{"text":"Gratitude is riches. Complaint is poverty.","author":"Doris Day"},{"text":"Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.","author":"Richard Needham"},{"text":"To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.","author":"Byron Pulsifer"},{"text":"You can stand tall without standing on someone. You can be a victor without having victims.","author":"Harriet Woods"},{"text":"Bad times have a scientific value. These are occasions a good learner would not miss.","author":"Ralph Emerson"},{"text":"It\'s not who you are that holds you back, it\'s who you think you\'re not.","author":null},{"text":"All children are artists. The problem is how to remain an artist once he grows up.","author":"Pablo Picasso"},{"text":"Either I will find a way, or I will make one.","author":"Philip Sidney"},{"text":"He who knows that enough is enough will always have enough.","author":"Lao Tzu"},{"text":"The only way to have a friend is to be one.","author":"Ralph Emerson"},{"text":"If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.","author":"Anne Bradstreet"},{"text":"Joy is what happens to us when we allow ourselves to recognize how good things really are.","author":"Marianne Williamson"},{"text":"Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.","author":"Carl Jung"},{"text":"There is never enough time to do everything, but there is always enough time to do the most important thing.","author":"Brian Tracy"},{"text":"You really can change the world if you care enough.","author":"Marian Edelman"},{"text":"What you are is what you have been. What you will be is what you do now.","author":"Buddha"},{"text":"Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.","author":"Gordon Hinckley"},{"text":"There surely is in human nature an inherent propensity to extract all the good out of all the evil.","author":"Benjamin Haydon"},{"text":"Music in the soul can be heard by the universe.","author":"Lao Tzu"},{"text":"What we see depends mainly on what we look for.","author":"John Lubbock"},{"text":"To hell with circumstances; I create opportunities.","author":"Bruce Lee"},{"text":"The truest greatness lies in being kind, the truest wisdom in a happy mind.","author":"Ella Wilcox"},{"text":"An ounce of emotion is equal to a ton of facts.","author":"John Junor"},{"text":"We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.","author":"Barbara De Angelis"},{"text":"Great is the art of beginning, but greater is the art of ending.","author":"Lazurus Long"},{"text":"Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.","author":"Wayne Dyer"},{"text":"Nothing will work unless you do.","author":"Maya Angelou"},{"text":"Our ability to achieve happiness and success depends on the strength of our wings.","author":"Catherine Pulsifer"},{"text":"To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.","author":"Theodore H. White"},{"text":"Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.","author":"Melody Beattie"},{"text":"Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.","author":"Byron Pulsifer"},{"text":"We are all inclined to judge ourselves by our ideals; others, by their acts.","author":"Harold Nicolson"},{"text":"Nothing is a waste of time if you use the experience wisely.","author":"Rodin"},{"text":"If one way be better than another, that you may be sure is natures way.","author":"Aristotle"},{"text":"Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.","author":"Napoleon Hill"},{"text":"It is not in the stars to hold our destiny but in ourselves.","author":"William Shakespeare"},{"text":"Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.","author":"Tony Robbins"},{"text":"I will prepare and some day my chance will come.","author":"Abraham Lincoln"},{"text":"Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.","author":"Tom Jackson"}]');

/***/ }),

/***/ "./src/scripts/quotesRu.json":
/*!***********************************!*\
  !*** ./src/scripts/quotesRu.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"text":"Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете","author":"Стив Макконнелл"},{"text":"Сложность программы растет до тех пор, пока не превысит способности программиста","author":"Артур Блох. Законы Мэрфи"},{"text":"Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены","author":"И. Берард"},{"text":"Что разум человека может постигнуть и во что он может поверить, того он способен достичь","author":"Наполеон Хилл"},{"text":"Стремитесь не к успеху, а к ценностям, которые он дает","author":"Альберт Эйнштейн"},{"text":"Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!","author":"Марк Твен"},{"text":"Оценивать эффективность процесса программирования количеством написанных строк кода — то же самое, что оценивать процесс создания самолёта по его весу","author":"Билл Гейтс"},{"text":"Наслаждайтесь тем, что вы делаете и вы никогда в своей жизни не будете работать","author":"Билл Гейтс"},{"text":"Работать нужно не 12 часов, а головой!","author":"Стив Джобс"},{"text":"Я не стремлюсь быть привлекательным для людей. Моё дело — заставлять их становиться лучше","author":"Стив Джобс"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("be761cf5fab4484e493a")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "momentum:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatemomentum"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map