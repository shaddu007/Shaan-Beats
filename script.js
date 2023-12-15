console.log("Welcome To Spotify");

// Initializing variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "O Saiyyan", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Unholy", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Ek Dil Ek Jaan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Shy Mora Saiyaan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Jalte Diye", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Kaise Mujhe", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Amake Nao", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Aasman Ko Chuke Dekha", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tum Ho Sath Mere", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Labon Ko", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];

// Iterating through songs
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Audio play pause event
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update progressBar
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('input', () => {
    const seekTime = (myProgressBar.value * audioElement.duration) / 100;
    audioElement.currentTime = seekTime;
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
    });
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex > 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})