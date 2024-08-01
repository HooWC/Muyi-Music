const music = new Audio('./audio/禅定的末朵祀.mp3');

const songs = [
    {
        id: '1',
        songName: `禅定的末朵祀 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: `最卑的归宿 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/2.jpg"
    },
    {
        id: '3',
        songName: `最高品格 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/3.jpg"
    },
    {
        id: '4',
        songName: `余生无你 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/4.jpg"
    },
    {
        id: '5',
        songName: `蚂蚁之辈 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/5.jpg"
    },
    {
        id: '6',
        songName: `金贝拉 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/6.jpg"
    },
    {
        id: '7',
        songName: `黑暗淹没了我 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/7.jpg"
    },
    {
        id: '8',
        songName: `Kill Me Again <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/8.jpg"
    },
    {
        id: '9',
        songName: `黑色残局 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/9.jpg"
    },
    {
        id: '10',
        songName: `你说你曾爱我 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/10.jpg"
    },
    /* 流行歌 */
    {
        id: '11',
        songName: `也许失去了爱 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/11.jpg"
    },
    {
        id: '12',
        songName: `为了未来而不再继续颓废 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/12.jpg"
    },
    {
        id: '13',
        songName: `所以人生就这样吧 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/13.jpg"
    },
    {
        id: '14',
        songName: `与神共舞 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/14.jpg"
    },
    {
        id: '15',
        songName: `失恋倾听者 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/15.jpg"
    },
    {
        id: '16',
        songName: `Sadness 悲伤 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/16.jpg"
    },
    {
        id: '17',
        songName: `Wie <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/17.jpg"
    },
    {
        id: '18',
        songName: `爱 原来是那么的腐朽 <br/>
               <div class="subtitle">Muyi 木已</div>`,
        poster: "img/18.jpg"
    },
    {
        id: '19',
        songName: `暴戾情人 <br/>
               <div class="subtitle">Muyi 木已</div>`,
        poster: "img/19.jpg"
    },
    {
        id: '20',
        songName: `点烟人 <br/>
               <div class="subtitle">Muyi 木已</div>`,
        poster: "img/20.jpg"
    },
    {
        id: '21',
        songName: `合二为一 <br/>
               <div class="subtitle">Muyi 木已</div>`,
        poster: "img/21.jpg"
    },
    {
        id: '22',
        songName: `酒精 <br/>
               <div class="subtitle">Muyi 木已</div>`,
        poster: "img/22.jpg"
    },
    {
        id: '23',
        songName: `故人 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/23.jpg"
    },
    {
        id: '24',
        songName: `枯萎 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/24.jpg"
    },
    {
        id: '25',
        songName: `哭求 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/25.jpg"
    },
    {
        id: '26',
        songName: `当我死了无数次 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/26.jpg"
    },
    {
        id: '27',
        songName: `躺在雪地上的人是你吗 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/27.jpg"
    },
    {
        id: '28',
        songName: `人非圣贤 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/28.jpg"
    },
    {
        id: '29',
        songName: `你究竟在哪 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/29.jpg"
    },
    {
        id: '30',
        songName: `山啊 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/30.jpg"
    },
    /* Rap */
    {
        id: '31',
        songName: `我是怪物 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/31.jpg"
    },
    {
        id: '32',
        songName: `我就是Muyi <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/32.jpg"
    },
    {
        id: '33',
        songName: `诉说 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/33.jpg"
    },
    {
        id: '34',
        songName: `上流社会 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/34.jpg"
    },
    {
        id: '35',
        songName: `国王回归 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/35.jpg"
    },
    {
        id: '36',
        songName: `Nothing <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/36.jpg"
    },
    {
        id: '37',
        songName: `Stand Up Again <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/37.jpg"
    },
    {
        id: '38',
        songName: `老师的礼物 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/38.jpg"
    },
    {
        id: '39',
        songName: `那群#绑#架#者 Game Over <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/39.jpg"
    },
    /* eng */
    {
        id: '40',
        songName: `A red apple <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/40.jpg"
    },
    {
        id: '41',
        songName: `But so what <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/41.jpg"
    },
    {
        id: '42',
        songName: `Arion Stormblade <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/42.jpg"
    },
    {
        id: '43',
        songName: `Bullets <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/43.jpg"
    },
    {
        id: '44',
        songName: `Hymn  <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/44.jpg"
    },
    {
        id: '45',
        songName: `I just want to live the life I want (1) <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/45.jpg"
    },
    {
        id: '46',
        songName: `I just want to live the life I want (2) <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/46.jpg"
    },
    {
        id: '47',
        songName: `Raise your weapon <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/47.jpg"
    },
    {
        id: '48',
        songName: `Redemption <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/48.jpg"
    },
    {
        id: '49',
        songName: `War <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/49.jpg"
    },
    {
        id: '50',
        songName: `When My World Broken <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/50.jpg"
    },
    {
        id: '51',
        songName: `Why You <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/51.jpg"
    },
    {
        id: '52',
        songName: `Girl V1 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/52.jpg"
    },
    {
        id: '53',
        songName: `Girl V2 <br/>
            <div class="subtitle">Muyi 木已</div>`,
        poster: "img/53.jpg"
    },

]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () => {
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 170, .1)";
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }

    currentEnd.innerHTML = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }

    currentStart.innerHTML = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })
    makeAllPlays();

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 170, .1)";
})

next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })
    makeAllPlays();

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 170, .1)";
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
    console.log(123)
    pop_song.scrollLeft -= 330;
})

right_scroll.addEventListener('click', () => {
    console.log(123)
    pop_song.scrollLeft += 330;
})

/* let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 330;
})

right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 330;
}) */

let left_scroll_rap = document.getElementById('left_scroll_rap');
let right_scroll_rap = document.getElementById('right_scroll_rap');
let rap = document.getElementsByClassName('rap_song')[0];

left_scroll_rap.addEventListener('click', () => {
    rap.scrollLeft -= 330;
})

right_scroll_rap.addEventListener('click', () => {
    rap.scrollLeft += 330;
})

let left_scroll_eng = document.getElementById('left_scroll_eng');
let right_scroll_eng = document.getElementById('right_scroll_eng');
let eng = document.getElementsByClassName('eng_song')[0];

left_scroll_eng.addEventListener('click', () => {
    eng.scrollLeft -= 330;
})

right_scroll_eng.addEventListener('click', () => {
    eng.scrollLeft += 330;
})