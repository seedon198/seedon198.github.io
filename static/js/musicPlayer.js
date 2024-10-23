class MusicPlayer {
    constructor() {
        this.audioElement = new Audio();
        this.audioElement.volume = 0.1;
        this.isPlaying = false;
        this.currentTrackIndex = 0;
        this.playlist = [
            {
                filename: "Nerdout! - I'm a Watch Dog.mp3",
                title: "I'm a Watch Dog",
                artist: 'NerdOut',
                genre: 'Rock'
            },
            {
                filename: 'Dual Core - All The Things.mp3',
                title: 'All The Things',
                artist: 'Dual Core',
                genre: 'Hip-Hop/Rap'
            }
            // Add more tracks as needed
        ];

        this.playPauseBtn = document.getElementById('play-pause');
        this.nextBtn = document.getElementById('next-song');
        this.progressBar = document.getElementById('progress-bar');
        this.titleElement = document.getElementById('song-title');
        this.artistElement = document.getElementById('song-artist');
        this.genreElement = document.getElementById('song-genre');

        this.initEventListeners();
        this.loadTrack(this.currentTrackIndex);
    }

    

    initEventListeners() {
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.nextBtn.addEventListener('click', () => this.nextSong());
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
        this.audioElement.addEventListener('ended', () => this.nextSong());
    }

    loadTrack(index) {
        if (index >= 0 && index < this.playlist.length) {
            const track = this.playlist[index];
            this.audioElement.src = `/static/media/playlist/${track.filename}`;
            this.titleElement.textContent = track.title;
            this.artistElement.textContent = track.artist;
            this.genreElement.textContent = track.genre;
            this.currentTrackIndex = index;
        }
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.audioElement.pause();
            this.playPauseBtn.textContent = 'Play';
        } else {
            this.audioElement.play();
            this.playPauseBtn.textContent = 'Pause';
        }
        this.isPlaying = !this.isPlaying;
    }

    nextSong() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) {
            this.audioElement.play();
        }
    }

    updateProgress() {
        const progress = (this.audioElement.currentTime / this.audioElement.duration) * 100;
        this.progressBar.style.width = `${progress}%`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});
