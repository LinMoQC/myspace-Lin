<template>
<div>
    <div class="music-container" id="music-container">
        <div class="music-info">
            <h4 id="title"></h4>
            <div class="progress-container" id="progress-container">
                <div class="progress" id="progress"></div>
            </div>
        </div>

        <audio :src="currentMusic.url" id="audio"></audio>

        <div class="img-container">
            <img :src="currentMusic.pic" alt="music-cover" id="cover" />
        </div>
        <div class="navigation">
            <button id="prev" class="action-btn" @click="prevSong">
                <i class="fas fa-backward"></i>
            </button>
            <button id="play" class="action-btn action-btn-big" @click="togglePlay">
                <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
            </button>
            <button id="next" class="action-btn" @click="nextSong">
                <i class="fas fa-forward"></i>
            </button>
            <div id="currTime">{{ currentTime }}</div><span>/</span>
            <div id="durTime">{{ duration }}</div>
        </div>
    </div>
</div>
</template>

  
<script>
/* eslint-disable */
import axios from 'axios';

export default {
    name: 'ComMusic',

    data() {
        return {
            isPlaying: false,
            Musics: [],
            currentMusic: {
                title: '',
                url: '',
                pic: ''
            },
            currentTime: '00:00',
            duration: '00:00'
        };
    },

    mounted() {
        axios
            .get('https://api.i-meto.com/meting/api?server=netease&type=playlist&id=308905952&r=0.6795786064776044')
            .then((response) => {
                this.Musics = response.data;
                this.loadMusic(0);
            })
            .catch((error) => {
                console.error('请求音乐数据时出错：', error);
            });

        const audio = document.getElementById('audio');
        const progress = document.getElementById('progress');
        const progressContainer = document.getElementById('progress-container');

        audio.addEventListener('timeupdate', this.updateProgress);
        progressContainer.addEventListener('click', this.setProgress);
        audio.addEventListener('ended', this.nextSong);
        audio.addEventListener('timeupdate', this.DurTime);
    },

    methods: {
        togglePlay() {
            const audio = document.getElementById('audio');
            if (this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            this.isPlaying = !this.isPlaying;
        },

        loadMusic(index) {
            const music = this.Musics[index];
            this.currentMusic.title = music.title;
            this.currentMusic.url = music.url;
            this.currentMusic.pic = music.pic;
            this.isPlaying = true; // 自动播放
        },

        prevSong() {
            let newIndex = this.Musics.indexOf(this.currentMusic) - 1;
            if (newIndex < 0) {
                newIndex = this.Musics.length - 1;
            }
            this.loadMusic(newIndex);
        },

        nextSong() {
            let newIndex = this.Musics.indexOf(this.currentMusic) + 1;
            if (newIndex >= this.Musics.length) {
                newIndex = 0;
            }
            this.loadMusic(newIndex);
        },

        updateProgress(e) {
            const {
                duration,
                currentTime
            } = e.srcElement;
            const progressPercent = (currentTime / duration) * 100;
            this.$refs.progress.style.width = `${progressPercent}%`;
            this.currentTime = this.formatTime(currentTime);
            this.duration = this.formatTime(duration);
        },

        setProgress(e) {
            const width = this.$refs.progressContainer.clientWidth;
            const clickX = e.offsetX;
            const duration = document.getElementById('audio').duration;
            const newTime = (clickX / width) * duration;
            document.getElementById('audio').currentTime = newTime;
        },

        formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },

        DurTime(e) {
            const {
                duration,
                currentTime
            } = e.srcElement;
            this.currentTime = this.formatTime(currentTime);
            this.duration = this.formatTime(duration);
        },
    },
};
</script>

<style lang="css" scoped>
hr {
    border: 1px solid;
}

@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css');

* {
    box-sizing: border-box;
}

body {
    background-image: linear-gradient(0deg,
            rgba(247, 247, 247, 1) 23.8%,
            rgba(252, 221, 221, 1) 92%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Lato', sans-serif;
    margin: 20px;
}

.music-container {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 20px 20px 0 rgba(252, 169, 169, 0.6);
    display: flex;
    padding: 20px 30px;
    position: relative;
    margin: 100px 0;
    z-index: 10;
}

.img-container {
    position: relative;
    width: 110px;
}

.img-container::after {
    content: '';
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, 50%);
}

.img-container img {
    border-radius: 50%;
    object-fit: cover;
    height: 110px;
    width: inherit;
    position: absolute;
    bottom: 0;
    left: 0;
    animation: rotate 3s linear infinite;

    animation-play-state: paused;
}

.music-container.play .img-container img {
    animation-play-state: running;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.action-btn {
    background-color: #fff;
    border: 0;
    color: #dfdbdf;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    margin: 0 20px;
}

.action-btn.action-btn-big {
    color: #cdc2d0;
    font-size: 30px;
}

.action-btn:focus {
    outline: 0;
}

.music-info {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px 15px 0 0;
    position: absolute;
    top: 0;
    left: 20px;
    width: calc(100% - 40px);
    padding: 10px 10px 10px 150px;
    opacity: 0;
    transform: translateY(0%);
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
    z-index: 0;
}

.music-container.play .music-info {
    opacity: 1;
    transform: translateY(-100%);
}

.music-info h4 {
    margin: 0;
}

.progress-container {
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
    height: 4px;
    width: 100%;
}

.progress {
    background-color: #fe8daa;
    border-radius: 5px;
    height: 100%;
    width: 0%;
    transition: width 0.1s linear;
}

.music-container {
    margin-top: 150px;
    float: left;
    margin-left: 20px;
    margin-right: 80px;
}
</style>
