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
            },
            {
                filename: 'deadmau5 - Antisec.mp3',
                title: 'Antisec',
                artist: 'Deadmau5 ft YTCracker',
                genre: 'Electronic'
            },
            {
                filename: 'Dual Core - 0x0A Hack Commandments.mp3',
                title: '0x0A Hack Commandments',
                artist: 'Dual Core',
                genre: 'Hip-Hop/Rap'
            }
            // Add more tracks as needed
        ];

        this.playerElement = document.getElementById('music-player');
        this.playPauseBtn = document.getElementById('play-pause');
        this.nextBtn = document.getElementById('next-song');
        this.progressBar = document.getElementById('progress-bar');
        this.titleElement = document.getElementById('song-title');
        this.artistElement = document.getElementById('song-artist');
        this.genreElement = document.getElementById('song-genre');
        this.minimizedTitle = document.querySelector('.minimized-title');

        this.initEventListeners();
        this.loadStateFromStorage();
        this.initMinimizeFeature();
    }

    initEventListeners() {
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.nextBtn.addEventListener('click', () => this.nextSong());
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
        this.audioElement.addEventListener('ended', () => this.nextSong());
    }

    initMinimizeFeature() {
        this.playerElement.addEventListener('mouseenter', () => {
            this.playerElement.classList.remove('minimized');
        });

        this.playerElement.addEventListener('mouseleave', () => {
            this.playerElement.classList.add('minimized');
        });

        // Update minimized title when track changes
        this.updateMinimizedTitle();
    }

    loadStateFromStorage() {
        const savedState = localStorage.getItem('musicPlayerState');
        if (savedState) {
            const state = JSON.parse(savedState);
            this.currentTrackIndex = state.currentTrackIndex;
            this.isPlaying = false; // Always start paused
            this.audioElement.currentTime = state.currentTime || 0;
        }
        this.loadTrack(this.currentTrackIndex);
        this.playPauseBtn.textContent = 'Play'; // Ensure button shows 'Play'
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
            this.updateMinimizedTitle();
            this.saveStateToStorage();
        }
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.audioElement.pause();
            this.playPauseBtn.textContent = 'Play';
        } else {
            this.audioElement.play().catch(error => {
                console.error("Playback failed:", error);
                // Handle the error (e.g., show a message to the user)
            });
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

    updateMinimizedTitle() {
        const currentTrack = this.playlist[this.currentTrackIndex];
        this.minimizedTitle.textContent = currentTrack.title;
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
