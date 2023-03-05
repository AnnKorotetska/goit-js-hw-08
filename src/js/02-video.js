import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';
const videoPlayerCurrentTime = localStorage.getItem(CURRENT_TIME_KEY);

if (videoPlayerCurrentTime) {
  player.setCurrentTime(videoPlayerCurrentTime);
}

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));