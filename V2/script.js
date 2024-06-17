//player wav src https://github.com/berru-g/gangue-astral-free-player/raw/main/2023/ROMANCE.wav
/*
Swal.fire({
    title: 'Découvrez Gangue Astral, un univers musicale éthérée et expérimentale.',
    text: '',
    icon: 'info',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false
  }).then(() => {
  });
*/
const tracks = [
    { title: 'Ailleurs - Josman', file: '../playlist/ailleurs.mp3', backgroundClass: 'bg-animation-10', image: 'path/to/image1.jpg', profileImage: 'path/to/profile1.jpg' },
    { title: 'french bossa nova', file: '../playlist/french-bossa-nova-feat-aupinard-gracegrace-and-chezile.mp3', backgroundClass: 'bg-animation-11', image: 'path/to/image1.jpg', profileImage: 'path/to/profile1.jpg' },
    { title: 'Meditate - JID', file: '../playlist/meditate-ft-j-i-d.mp3', backgroundClass: 'bg-animation-12' , image: 'path/to/image1.jpg', profileImage: 'path/to/profile1.jpg'},
    { title: 'Petit homme - Kolimba', file: '../playlist/petit-homme.mp3', backgroundClass: 'bg-animation-13', image: 'path/to/image1.jpg', profileImage: 'path/to/profile1.jpg'}
  
];


const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const trackImage = document.getElementById('track-image');
const profileImage = document.getElementById('profile-image');
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

audioPlayer.addEventListener('play', () => {
    // Show the image when the audio starts playing
    trackImage.src = tracks[currentTrackIndex].image;
    trackImage.style.display = 'block';
    profileImage.src = tracks[currentTrackIndex].profileImage;
});

function loadTrack(index) {
    audioPlayer.src = tracks[index].file;
    trackTitle.textContent = tracks[index].title;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';

    // Supprimer toutes les classes d'animation de fond
    document.body.classList.remove('bg-animation-1', 'bg-animation-2', 'bg-animation-3', 'bg-animation-10', 'bg-animation-11', 'bg-animation-12', 'bg-animation-13');

    // Ajouter la classe d'animation de fond correspondante à la piste
    document.body.classList.add(tracks[index].backgroundClass);

    // Cacher l'image avant que la musique ne commence à jouer
    trackImage.style.display = 'collapse';
    trackImage.src = '';
}

loadTrack(currentTrackIndex);

/*
document.getElementById('main-title').addEventListener('click', function() {
  Swal.fire({
    title: '🔊',
    subtitle: 'Découvrez Gangue Astral, un univers musicale éthérée et expérimentale.',
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
}*/
document.getElementById('main-title').addEventListener('click', function() {
    Swal.fire({
        title: 'experimental road trip',
        html: `
            <h4>Producteur amateur depuis 15 ans.</h4>
            <ul style="list-style: none; padding: 0;">
                <li><a href="./setup.html" onclick="menuItemClick('en cours page test')">Mon set up</a></li>
                <li><a href="./2024" onclick="menuItemClick('en cours')">Album</a></li>
            </ul>
            <h4>M'écouter</h4>
            <ul style="list-style: none; padding: 0;">
                <li><a href="https://www.youtube.com/@gangueastral1024" onclick="menuItemClick('Bonne écoute')">Youtube</a></li>
                <li><a href="https://www.youtube.com/@gangueastral1024" onclick="menuItemClick('Merci pour le soutient')">Spotify</a></li>
            </ul>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
    });
});

function menuItemClick(option) {
    Swal.fire({
        title: `- ${option}`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
