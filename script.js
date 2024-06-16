//player wav src https://github.com/berru-g/gangue-astral-free-player/raw/main/2023/ROMANCE.wav
Swal.fire({
    title: 'Découvrez Gangue Astral, un univers musicale éthérée et expérimentale.',
    text: 'Écoutez mes dernières tracks et plongez dans ma galaxie sonore unique.',
    icon: 'info',
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false
  }).then(() => {
    // Action après la confirmation de la déconnexion
  });

const tracks = [
    { title: 'Boule', file: './2024/BOULE.wav', backgroundClass: 'bg-animation-1' },
    { title: 'Encore', file: './2024/ENCORE.wav', backgroundClass: 'bg-animation-2' },
    { title: 'ff', file: './2024/ff.wav', backgroundClass: 'bg-animation-3' },
    { title: 'SOFT', file: './2024/SOFT.wav', backgroundClass: 'bg-animation-4'},
    { title: 'OSC', file: './2024/OSC.wav', backgroundClass: 'bg-animation-5'},
    { title: 'ROMANCE', file: './2023/ROMANCE.wav', backgroundClass: 'bg-animation-6'},
    { title: 'UTOPIA', file: './2023/UTOPIA.wav', backgroundClass: 'bg-animation-7'},
    { title: '4h55 du mat', file: '2023/4h55 DUMAT.wav', backgroundClass: 'bg-animation-8'},
    { title: 'Bassline', file: '2023/BASSLINE2.wav', backgroundClass: 'bg-animation-9'}
  
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
    document.body.classList.remove('bg-animation-1', 'bg-animation-2', 'bg-animation-3');
  
    // Ajouter la classe d'animation de fond correspondante à la piste
    document.body.classList.add(tracks[index].backgroundClass);
  }
  



loadTrack(currentTrackIndex);

document.getElementById('main-title').addEventListener('click', function() {
  Swal.fire({
    title: '🔊',
    html: `
      <ul style="list-style: none; padding: 4;">
        <li><a href="https://www.youtube.com/@gangueastral1024" onclick="menuItemClick('Option 1')">Youtube</a></li>
        <li><a href="#" onclick="menuItemClick('Option 2')">-</a></li>
        <li><a href="mailto:antoineleberruyer@gmail.com" onclick="menuItemClick('Option 3')">Contact</a></li>
        <li><a href="#" onclick="menuItemClick('Option 2')">-</a></li>
        <li><a href="#" onclick="menuItemClick('Option 3')">Soutenir</a></li>
      </ul>
    `,
    showCloseButton: true,
    showConfirmButton: false,
    focusConfirm: false,
  });
});

function menuItemClick(option) {
  Swal.fire({
    title: `You selected ${option}`,
    icon: 'success',
    confirmButtonText: 'OK'
  });
}