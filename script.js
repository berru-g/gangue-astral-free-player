

const tracks = [
    { title: 'Boule', file: './2024/BOULE.wav', backgroundClass: 'bg-animation-1' },
    { title: 'Encore', file: './2024/ENCORE.wav', backgroundClass: 'bg-animation-2' },
    { title: 'ff', file: './2024/ff.wav', backgroundClass: 'bg-animation-3' },
    { title: 'SOFT', file: './2024/SOFT.wav', backgroundClass: 'bg-animation-3'},
    { title: 'OSC', file: './2024/OSC.wav', background: 'url_to_background_image2.jpg' },
    { title: 'Utopia', file: './2023/UTOPIA.wav', background: 'url_to_background_image3.jpg' },
{ title: 'Romance', file: './2023/ROMANCE.wav', background: 'url_to_background_image3.jpg' }
];

const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentTrackIndex = 0;

tracks.forEach((track, index) => {
    const trackElement = document.createElement('div');
    trackElement.classList.add('track');
    trackElement.textContent = track.title;
    trackElement.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audioPlayer.play();
    });
    playlist.appendChild(trackElement);
});

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

prevBtn.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
    } else {
        currentTrackIndex = tracks.length - 1;
    }
    loadTrack(currentTrackIndex);
    audioPlayer.play();
});

nextBtn.addEventListener('click', () => {
    if (currentTrackIndex < tracks.length - 1) {
        currentTrackIndex++;
    } else {
        currentTrackIndex = 0;
    }
    loadTrack(currentTrackIndex);
    audioPlayer.play();
});

audioPlayer.addEventListener('ended', () => {
    if (currentTrackIndex < tracks.length - 1) {
        currentTrackIndex++;
    } else {
        currentTrackIndex = 0;
    }
    loadTrack(currentTrackIndex);
    audioPlayer.play();
});

function loadTrack(index) {
    audioPlayer.src = tracks[index].file;
    trackTitle.textContent = tracks[index].title;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';

    // Supprimer toutes les classes d'animation de fond
    document.body.classList.remove('bg-animation-1', 'bg-animation-2');
    
    // Ajouter la classe d'animation de fond correspondante à la piste
    document.body.classList.add(tracks[index].backgroundClass);
}



loadTrack(currentTrackIndex);

