import { 
  formatSongTitle, 
  getSongDurationInMinutes 
} from "./spotifyUtils.js";


const song = {
  title: "shape of you",
  duration: 263
};


console.log("Song:", formatSongTitle(song.title));
console.log("Duration:", getSongDurationInMinutes(song.duration));