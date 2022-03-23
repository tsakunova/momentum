import {
  prevAudio, nextAudio, playAudio, audio, BASE_AUDIO, playlistAudio, itemsAudio, muteBtn, progress, ranges, progressVol, audioSpan, durationDiv
} from './constants';
import { getRandom } from './quotes';

let isStart = false;
let currentAudio = 0;

const audioList = [];
const audioTrack = () => {
  audio.src = `assets/audio/${BASE_AUDIO[currentAudio].src}`;
  audioList[currentAudio].classList.add('active-audio');
};

export const startAudio = () => {
  audioTrack();
  if (!isStart) {
    audio.play();
    isStart = true;
  } else {
    audio.pause();
    isStart = false;
  }
};

const toggleMute = () => {
  if (audio.muted) {
    audio.muted = false;
    muteStyle();
  } else if (!audio.muted) {
    audio.muted = true;
    muteStyle();
  }
};
const muteStyle = () => {
  const iconMute = audio.muted ? 'url(assets/img/muteoff.svg) 50% 50%/contain no-repeat' : 'url(assets/img/mute.svg) 50% 50%/contain no-repeat';
  muteBtn.style.background = iconMute;
};
const skip = () => {
  audio.currentTime += parseFloat(this.dataset.skip);
};
const handleRangeUpdate = () => {
  audio.volume = progressVol.value;
  const percent = audio.volume * 100;
  progressVol.style.background = `linear-gradient(to right, #96e676 0%, #96e676 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`;
  if (audio.volume === 0) {
    audio.muted = true;
    muteStyle();
  } else {
    audio.muted = false;
    muteStyle();
  }
};
const formatTime = (sec) => {
  let min = Math.floor(sec / 60) || 0;
  let seconds = Math.round((sec - min * 60)) || 0;
  if (min < 10) {
    min = `0${min}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${min}:${seconds}`;
};
const handleProgress = () => {
  const percent = ((audio.currentTime / audio.duration) * 100) || 0;
  progress.value = `${percent}`;
  progress.style.background = `linear-gradient(to right, #96e676 0%, #96e676 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`;
  const durationAud = audio.duration;
  const currentAud = audio.currentTime;
  durationDiv.innerHTML = `<div>${BASE_AUDIO[currentAudio].author} - ${BASE_AUDIO[currentAudio].track}</div><div>${formatTime(currentAud)} / ${formatTime(durationAud)}</div>`;
};
const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
  audio.currentTime = scrubTime;
};

const toggleBtnPlay = () => {
  playAudio.classList.toggle('pause');
  const audioSpan = document.querySelectorAll('.item-audio-span');
  audioSpan.forEach(item => {
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

const stopPlay = () => {
  audioTrack();
  playAudio.classList.remove('pause');
  audio.pause();
  isStart = false;
};

const playNextAudio = () => {
  if (currentAudio !== BASE_AUDIO.length - 1) {
    currentAudio++;
    audioList[currentAudio - 1].classList.remove('active-audio');
  } else if (currentAudio === BASE_AUDIO.length - 1) {
    currentAudio = 0;
    audioList[audioList.length - 1].classList.remove('active-audio');
  }
  stopPlay();
};

const playPrevAudio = () => {
  if (currentAudio <= BASE_AUDIO.length && currentAudio > 0) {
    currentAudio--;
    audioList[currentAudio + 1].classList.remove('active-audio');
  } else if (currentAudio <= 0) {
    currentAudio = BASE_AUDIO.length - 1;
    audioList[0].classList.remove('active-audio');
  }
  stopPlay();
};

export const createTrackList = () => {
  for (let i = 0; i < BASE_AUDIO.length; i++) {
    const divListItem = document.createElement('div');
    const span = document.createElement('span');
    span.classList.add('item-audio-span');
    divListItem.classList.add('item-audio');
    playlistAudio.appendChild(divListItem);
    divListItem.innerHTML = `${BASE_AUDIO[i].author} - ${BASE_AUDIO[i].track}`;
    divListItem.appendChild(span);
    audioList.push(divListItem);
  }
};
let mousedown = false;
export const listnerAudio = () => {
  muteBtn.addEventListener('click', toggleMute);
  playAudio.addEventListener('click', startAudio);
  playAudio.addEventListener('click', toggleBtnPlay);
  nextAudio.addEventListener('click', playNextAudio);
  prevAudio.addEventListener('click', playPrevAudio);
  playAudio.addEventListener('click', handleRangeUpdate);
  audio.addEventListener('timeupdate', handleProgress);
  progress.addEventListener('click', scrub);
  ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
  ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);
  audio.addEventListener('ended', () => {
    playNextAudio();
    startAudio();
    toggleBtnPlay();
  });
  audioList.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      audioList[currentAudio].classList.remove('active-audio');
      const audioSpan = document.querySelectorAll('.item-audio-span');
      audioSpan.forEach(item => {
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
