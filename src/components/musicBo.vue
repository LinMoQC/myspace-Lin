<template>
<div id="app">
    <div class="music-container" id="music-container">
        <div class="music-info">
            <h4 id="title"></h4>
            <div class="progress-container" id="progress-container">
                <div class="progress" id="progress"></div>
            </div>
        </div>

        <audio src="" id="audio"></audio>

        <div class="img-container">
            <img src="https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951168853928158&auth=89b92e880e0f4ff3e4873cf2f3297aa1edfc5a9d" alt="music-cover" id="cover" />
        </div>
        <div class="navigation">
            <button id="prev" class="action-btn" @click="reduce()">
                <i class="fas fa-backward"></i>
            </button>
            <button id="play" class="action-btn action-btn-big" @click="changeStaute">
                <i class="fas fa-play"></i>
            </button>
            <button id="next" class="action-btn" @click="add()">
                <i class="fas fa-forward"></i>
            </button>
            <div id="currTime">00:00</div><span>/</span>
            <div id="durTime">00:00</div>
        </div>
    </div>

    <div class="boxul">
        <div class="mar"><span style="color:skyblue;font-size: 30px;">{ <span style="color:pink;font-size: 20px;">歌单</span> }</span></div>

        <ul v-for="(item,index) in songs" :key="index">
            <div class="textBox">
                <li :class="{ 'active': index === currentSongIndex }" @click="playSelectedSong(index)">{{ index+1 }}&nbsp;&nbsp;&nbsp;{{ item.title }}</li>
            </div>
        </ul>
    </div>

    <div class="box-card">
        <el-card class="card">
            <div><span style="color:skyblue;font-size: 30px;">{ <span style="color:black;font-size: 20px;">歌词</span> }</span></div>
            <p>跑路，做不下去了</p>
        </el-card>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import {
    mapState
} from 'vuex';
import axios from 'axios';
export default {
    name: 'ComMusic',

    data() {
        return {
            isPlaying: false,
            songs: [],
            currentSongIndex: 0
        };
    },

    mounted() {
        //本地
        const musicContainer = document.getElementById('music-container');
        const playBtn = document.getElementById('play');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const bathBth = document.getElementById('bdth');
        const bsjBth = document.getElementById('bsj');
        const bwsrBth = document.getElementById('bwsr');
        const bdbdBth = document.getElementById('bdbd');

        const audio = document.getElementById('audio');
        const progress = document.getElementById('progress');
        const progressContainer = document.getElementById('progress-container');
        const title = document.getElementById('title');
        const cover = document.getElementById('cover');
        const currTime = document.querySelector('#currTime');
        const durTime = document.querySelector('#durTime');

        axios.get('https://api.i-meto.com/meting/api?server=netease&type=playlist&id=652762973&r=0.6795786064776044')
            .then(response => {
                this.songs = response.data;
                const songs = this.songs
                let songIndex = 0;

                loadSong(songs[songIndex]);

                // Update song details 更新歌曲详细信息
                function loadSong(song) {
                    title.innerText = song.title;
                    audio.src = song.url;
                    cover.src = song.pic;
                }

                // Play song 播放歌曲
                function playSong() {
                    musicContainer.classList.add('play');
                    playBtn.querySelector('i.fas').classList.remove('fa-play');
                    playBtn.querySelector('i.fas').classList.add('fa-pause');

                    audio.play();
                }

                // Pause song 暂停歌曲
                function pauseSong() {
                    musicContainer.classList.remove('play');
                    playBtn.querySelector('i.fas').classList.add('fa-play');
                    playBtn.querySelector('i.fas').classList.remove('fa-pause');

                    audio.pause();
                }

                // Previous song 切换上一首歌曲
                function prevSong() {
                    songIndex--;

                    if (songIndex < 0) {
                        songIndex = songs.length - 1;
                    }

                    pauseSong();
                    loadSong(songs[songIndex]);
                    playSong();
                }

                // Next song  切换下一首
                function nextSong() {
                    songIndex++;

                    if (songIndex > songs.length - 1) {
                        songIndex = 0;
                    }

                    pauseSong(); // 停止当前歌曲的播放
                    loadSong(songs[songIndex]);
                    playSong();
                }

                // Update progress bar 更新进度条
                function updateProgress(e) {
                    const {
                        duration,
                        currentTime
                    } = e.srcElement;
                    const progressPercent = (currentTime / duration) * 100;
                    progress.style.width = `${progressPercent}%`;
                }

                // Set progress bar  设置进度条
                function setProgress(e) {
                    const width = this.clientWidth;
                    const clickX = e.offsetX;
                    const duration = audio.duration;

                    audio.currentTime = (clickX / width) * duration;
                }

                function DurTime(e) {
                    const {
                        duration,
                        currentTime
                    } = e.srcElement;
                    var sec;
                    var sec_d;

                    let min = (currentTime == null) ? 0 :
                        Math.floor(currentTime / 60);
                    min = min < 10 ? '0' + min : min;

                    function get_sec(x) {
                        if (Math.floor(x) >= 60) {

                            for (var i = 1; i <= 60; i++) {
                                if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
                                    sec = Math.floor(x) - (60 * i);
                                    sec = sec < 10 ? '0' + sec : sec;
                                }
                            }
                        } else {
                            sec = Math.floor(x);
                            sec = sec < 10 ? '0' + sec : sec;
                        }
                    }

                    get_sec(currentTime, sec);

                    // change currentTime DOM 更改时间
                    currTime.innerHTML = min + ':' + sec;

                    // define minutes duration  定义分钟持续时间
                    let min_d = (isNaN(duration) === true) ? '0' :
                        Math.floor(duration / 60);
                    min_d = min_d < 10 ? '0' + min_d : min_d;

                    function get_sec_d(x) {
                        if (Math.floor(x) >= 60) {

                            for (var i = 1; i <= 60; i++) {
                                if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
                                    sec_d = Math.floor(x) - (60 * i);
                                    sec_d = sec_d < 10 ? '0' + sec_d : sec_d;
                                }
                            }
                        } else {
                            sec_d = (isNaN(duration) === true) ? '0' :
                                Math.floor(x);
                            sec_d = sec_d < 10 ? '0' + sec_d : sec_d;
                        }
                    }

                    // define seconds duration  定义秒针持续时间

                    get_sec_d(duration);

                    // change duration DOM   改变持续时间
                    durTime.innerHTML = min_d + ':' + sec_d;

                };

                // Event listeners   事件监听器
                playBtn.addEventListener('click', () => {
                    const isPlaying = musicContainer.classList.contains('play');

                    if (isPlaying) {
                        pauseSong();
                    } else {
                        playSong();
                    }
                });

                // Change song   切换歌曲
                prevBtn.addEventListener('click', prevSong);
                nextBtn.addEventListener('click', nextSong);

                // Time/song update  时间/歌曲更新
                audio.addEventListener('timeupdate', updateProgress);

                // Click on progress bar 单击进度条
                progressContainer.addEventListener('click', setProgress);

                // Song ends 歌曲结束
                audio.addEventListener('ended', nextSong);

                // Time of song 歌曲的时间
                audio.addEventListener('timeupdate', DurTime);
            })
            .catch(error => {
                console.error('请求音乐数据时出错：', error);
            })

    },

    methods: {
        changeStaute: function () {
            this.isPlaying = !this.isPlaying;
        },

        add: function () {
            if (this.currentSongIndex < this.songs.length - 1) {
                this.currentSongIndex++;
            } else {
                this.currentSongIndex = 0;
            }

            this.scrollToCurrentSong();
        },

        reduce: function () {
            if (this.currentSongIndex > 0) {
                this.currentSongIndex--;
            } else {
                this.currentSongIndex = this.songs.length - 1;
            }

            this.scrollToCurrentSong();
        },

        scrollToCurrentSong() {
            const songList = document.querySelector('.boxul');
            const songItem = document.querySelectorAll('.box ul li')[this.currentSongIndex];

            if (songList && songItem) {
                const scrollOffset = songItem.offsetTop - songList.offsetTop;
                songList.scrollTop = scrollOffset;
            }
        },

        loadSong(song) {
            // 此函数用于加载歌曲
            title.innerText = song.title;
            audio.src = song.url;
            cover.src = song.pic;
        },

        playSelectedSong(index) {
            this.currentSongIndex = index;

            const selectedSong = this.songs[index];
            this.loadSong(selectedSong);
            this.playSong();
        },

        playSong() {
            // 此函数用于播放歌曲
            const musicContainer = document.getElementById('music-container');
            const playBtn = document.getElementById('play');
            musicContainer.classList.add('play');
            playBtn.querySelector('i.fas').classList.remove('fa-play');
            playBtn.querySelector('i.fas').classList.add('fa-pause');
            audio.play();
        },
    },
    computed: {
        ...mapState(['isPlay']), // 将全局状态 isPlaying 映射到组件的 isPlaying 中
    },

    watch: {
        isPlaying() {
            this.$store.commit('change', this.isPlaying);
        },
        currentSongIndex(newIndex) {
            // 获取歌单容器和歌曲项
            const songList = document.querySelector('.box ul');
            const songItem = document.querySelectorAll('.box ul li')[newIndex];

            // 设置歌单滚动条的 scrollTop 与歌曲项的位置相匹配
            if (songList && songItem) {
                const scrollOffset = songItem.offsetTop - songList.offsetTop;
                songList.scrollTop = scrollOffset;
            }
        }
    },
    activated() {
        if (this.$store.state.isPlay) {
            audio.play();
        }
    },
    // deactivated(){
    //     audio.play();
    // }
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

#music-container {
    margin-top: 65px;
    margin-right: 0;
    margin-left: 30px;
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
    margin-left: 10px;
    margin-right: 80px;
}

.boxul {
    margin-right: 30px;
    padding: 0;
    max-width: 240px;
    max-height: 420px;
    background: url('../assets/img7.jpg') center center;
    float: right;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 5px;
    box-shadow: 10px 15px 15px 15px rgba(0, 0, 0, 0.25);
    transition: all 3s；
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    color: #818080;
    display: block;
    text-align: left;
    cursor: pointer;
    height: 50px;
    padding: 12px;
}

li:hover {
    font-size: calc(110%);
}

::-webkit-scrollbar {
    width: 10px;
    height: 1px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent);
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
}

.textBox {
    border-bottom: 1px solid #c4bebe;
}

.active {
    background-color: rgba(0, 0, 0, 0.25);
    border-left: 5px solid skyblue;
    color: plum;
    font-size: calc(110%);
}

.mar {
    margin-bottom: 10px;
    margin-top: 10px;
}

.box-card{
    float: left;
    width: 500px;
    height: 230px;
    margin-left: 30px;
    margin-top: -70px;
    box-shadow: 20px 25px 25px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 0px solid #726c6c;
    background: url('../assets/bg.jpg') center;
    overflow: hidden;
}

.card{
    width: 500px;
    height: 230px;
    background-color: transparent;
    backdrop-filter: blur(5px);
    border: 0px solid #000;
}
</style>
