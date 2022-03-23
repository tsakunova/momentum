import './styles/main.scss';
import { showTime } from './scripts/time';
import { setBG, listner } from './scripts/welcome-bg';
import { getNameAndFocus, listnerNameAndFocus } from './scripts/local-save';
import { listnerWeather, getWeather } from './scripts/weather';
import { listnerQuote } from './scripts/quotes';
import { listnerAudio, createTrackList } from './scripts/audio';
import { init, listnerLang } from "./scripts/language";
import { listnerSetting } from './scripts/setting';

createTrackList();
listnerWeather();
getWeather();
setBG();
showTime();
getNameAndFocus();
listner();
listnerNameAndFocus();
listnerQuote();
listnerAudio();
listnerSetting();
init();
listnerLang();
console.log(`Самооценка 134 из 160 баллов.
Не реализованные пункты:
- Получение фонового изображения от API -10
- в настройках приложения можно указать источник получения фото для фонового изображения -3 балла
- если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото -3
- Дополнительный функционал не реализовывался
Итого: 134 балла
`)