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
        this.loadStateFromStorage();
    }

    initEventListeners() {
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.nextBtn.addEventListener('click', () => this.nextSong());
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
        this.audioElement.addEventListener('ended', () => this.nextSong());

        // Add click event listener to the document
        document.addEventListener('click', () => {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }
            if (!this.isPlaying) {
                this.togglePlayPause();
            }
        }, { once: true }); // This ensures it only fires once
    }

    loadStateFromStorage() {
        const savedState = localStorage.getItem('musicPlayerState');
        if (savedState) {
            const state = JSON.parse(savedState);
            this.currentTrackIndex = state.currentTrackIndex;
            this.isPlaying = state.isPlaying;
            this.audioElement.currentTime = state.currentTime || 0;
        }
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) {
            this.audioElement.play();
            this.playPauseBtn.textContent = 'Pause';
        }
    }

    saveStateToStorage() {
        const state = {
            currentTrackIndex: this.currentTrackIndex,
            isPlaying: this.isPlaying,
            currentTime: this.audioElement.currentTime
        };
        localStorage.setItem('musicPlayerState', JSON.stringify(state));
    }

    loadTrack(index) {
        if (index >= 0 && index < this.playlist.length) {
            const track = this.playlist[index];
            this.audioElement.src = `/static/media/playlist/${track.filename}`;
            this.titleElement.textContent = track.title;
            this.artistElement.textContent = track.artist;
            this.genreElement.textContent = track.genre;
            this.currentTrackIndex = index;
            this.saveStateToStorage();
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
        this.saveStateToStorage();
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
        this.saveStateToStorage();
    }
}

// Use this to create the player when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createPlayer);
} else {
    createPlayer();
}

function createPlayer() {
    window.musicPlayer = new MusicPlayer();
}