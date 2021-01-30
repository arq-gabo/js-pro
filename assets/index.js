import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause()]
});

const playbutton = document.getElementById("playbutton");
playbutton.onclick = () => player.togglePlay();

const mutebutton = document.getElementById("mutebutton");
mutebutton.onclick = () => player.toggleMute();
