/* ════════════════════════════════════════════════
   ╔══════════════════════════════════════════╗
   ║  CONFIGURACIÓN — RUTAS DE ARCHIVOS       ║
   ║  Pon tus imágenes en la carpeta  img/    ║
   ║  Pon tus canciones en la carpeta music/  ║
   ╚══════════════════════════════════════════╝
════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════
   TOP 10  —  img: portada  |  src: archivo de audio
════════════════════════════════════════════════ */
const TOP10 = [
  {
    rank: 1, name: 'Get Lucky', artist: 'Daft Punk',
    img:  'img/Rectangle 47.png',        // 🖼️  ej: 'img/get-lucky.jpg'
    src:  'music/Daft Punk - Get Lucky (Feat. Pharrell Williams).mp3',        // 🎵  ej: 'music/get-lucky.mp3'
    g: ['#1e1000','#9b6a00','#3d2600'],
  },
  {
    rank: 2, name: 'Dance Dance', artist: 'Fall Out Boy',
    img:  'img/Rectangle 19.png',        // 🖼️  ej: 'img/dance-dance.jpg'
    src:  'music/Fall Out Boy - Dance Dance (Audio).mp3',        // 🎵  ej: 'music/dance-dance.mp3'
    g: ['#1e0800','#cc3300','#2a0a00'],
  },
  {
    rank: 3, name: 'Smells Like Teen Spirit', artist: 'Nirvana',
    img:  'img/Smell.jpeg',        // 🖼️  ej: 'img/teen-spirit.jpg'
    src:  'music/Nirvana - Smells Like Teen Spirit.mp3',        // 🎵  ej: 'music/teen-spirit.mp3'
    g: ['#001228','#005cb3','#001a3d'],
  },
  {
    rank: 4, name: 'Sweet Chill On Mine', artist: 'Guns N Roses',
    img:  'img/Sweet.jpeg',         
    src:  'music/Sweet.mp3',   
    g: ['#0c0c0c','#282828','#080808'],
  },
  {
    rank: 5, name: 'Blinding Lights', artist: 'The Weeknd',
    img:  'img/Blind.jpeg',        // 🖼️  ej: 'img/blinding-lights.jpg'
    src:  'music/The Weeknd - Blinding Lights.mp3',        // 🎵  ej: 'music/blinding-lights.mp3'
    g: ['#1e0030','#aa0088','#100020'],
  },
  {
    rank: 6, name: 'Bohemian Rhapsody', artist: 'Queen',
    img:  'img/Bohemian.jpeg',        // 🖼️  ej: 'img/bohemian-rhapsody.jpg'
    src:  'music/Queen - Bohemian Rhapsody (HQ).mp3',        // 🎵  ej: 'music/bohemian-rhapsody.mp3'
    g: ['#1e1c00','#888600','#2e2a00'],
  },
  {
    rank: 7, name: 'Hotel California', artist: 'Eagles',
    img:  'img/Hotel.jpeg',        // 🖼️  ej: 'img/hotel-california.jpg'
    src:  'music/Eagles - Hotel California (Official Audio).mp3',        // 🎵  ej: 'music/hotel-california.mp3'
    g: ['#1e0c00','#7a3000','#2a1400'],
  },
  {
    rank: 8, name: 'Stairway to Heaven', artist: 'Led Zeppelin',
    img:  'img/Heven.jpeg',        // 🖼️  ej: 'img/stairway.jpg'
    src:  'music/Led Zeppelin - Stairway To Heaven (Official Audio).mp3',        // 🎵  ej: 'music/stairway.mp3'
    g: ['#001a1a','#006060','#001e1e'],
  },
  {
    rank: 9, name: '悲しみがとまらない　I CAN T STOP THE LONELINESS', artist: 'Anri',
    img:  'img/Timely.jpg',        // 🖼️  ej: 'img/purple-rain.jpg'
    src:  'music/悲しみがとまらないI CAN T STOP THE LONELINESS.mp3',        // 🎵  ej: 'music/purple-rain.mp3'
    g: ['#140014','#6600aa','#1a001a'],
  },
  {
    rank: 10, name: 'Lose Yourself', artist: 'Eminem',
    img:  'img/Losejpeg.jpeg',        // 🖼️  ej: 'img/lose-yourself.jpg'
    src:  'music/Lose Yourself (From 8 Mile Soundtrack).mp3',        // 🎵  ej: 'music/lose-yourself.mp3'
    g: ['#0c0c0c','#484848','#181818'],
  },
];

const TOP10_GENRES = {
  'Get Lucky':                                           'electronic',
  'Dance Dance':                                         'rock',
  'Smells Like Teen Spirit':                             'rock',
  'Sweet Chill On Mine':                                 'rock',
  'Blinding Lights':                                     'pop',
  'Bohemian Rhapsody':                                   'rock',
  'Hotel California':                                    'rock',
  'Stairway to Heaven':                                  'rock',
  '悲しみがとまらない　I CAN T STOP THE LONELINESS': 'jpop',
  'Lose Yourself':                                       'hiphop',
};

/* ════════════════════════════════════════════════
   PLAYLISTS  —  img: portada de la playlist
════════════════════════════════════════════════ */
const PLAYLISTS = [
  {
    name: 'Play list generica',
    img:  '',        // 🖼️  ej: 'img/playlist1.jpg'
    g: ['#18002a','#6a00b3','#0d0020'],
  },
  {
    name: 'Play list generica',
    img:  '',        // 🖼️  ej: 'img/playlist2.jpg'
    g: ['#001a0c','#006638','#001813'],
  },
  {
    name: 'Play list generica',
    img:  '',        // 🖼️  ej: 'img/playlist3.jpg'
    g: ['#1a1a00','#757500','#282800'],
  },
  {
    name: 'Play list generica',
    img:  '',        // 🖼️  ej: 'img/playlist4.jpg'
    g: ['#1a0000','#8a0000','#1e0000'],
  },
];

/* ════════════════════════════════════════════════
   TRENDING VIDEOS  —  img: miniatura  |  src: video/audio
════════════════════════════════════════════════ */
const TRENDING = [
  {
    name: 'Through the Fire and Flames', artist: 'DragonForce',
    img:  '',        // 🖼️  ej: 'img/fire-flames.jpg'
    src:  '',        // 🎵  ej: 'music/fire-flames.mp3'
    g: ['#0d0800','#3c1800','#1a0500','#002000'],
  },
  {
    name: 'In The End', artist: 'Linkin Park',
    img:  '',        // 🖼️  ej: 'img/in-the-end.jpg'
    src:  '',        // 🎵  ej: 'music/in-the-end.mp3'
    g: ['#000c1a','#001242','#0a0a1a','#001a30'],
  },

  {
    name: 'In The End', artist: 'Linkin Park',
    img:  '',        // 🖼️  ej: 'img/in-the-end.jpg'
    src:  '',        // 🎵  ej: 'music/in-the-end.mp3'
    g: ['#000c1a','#001242','#0a0a1a','#001a30'],
  },
];

/* ════════════════════════════════════════════════
   MUSIC HITS  —  img: portada del álbum
════════════════════════════════════════════════ */
const HITS = [
  {
    name: "Wolf In Sheep's Clothing",
    img:  '',        // 🖼️  ej: 'img/wolf.jpg'
    g: ['#0a0a0a','#1e1e1e','#080808'],
  },
  {
    name: 'Clint Eastwood',
    img:  '',        // 🖼️  ej: 'img/clint-eastwood.jpg'
    g: ['#060e06','#0c2000','#091009'],
  },
  {
    name: 'Feed The Machine',
    img:  '',        // 🖼️  ej: 'img/feed-machine.jpg'
    g: ['#0a0a06','#1a1a08','#121200'],
  },
  {
    name: 'Killing In The Name',
    img:  '',        // 🖼️  ej: 'img/killing.jpg'
    g: ['#100000','#280000','#0a0000'],
  },
];

/* ════════════════════════════════════════════════
   STATS
════════════════════════════════════════════════ */
const WEEKLY     = [38, 62, 52, 88, 100, 72, 42];
const BAR_COLORS = ['#00d4ff','#7c3aed','#00d4ff','#ff2d78','#00d4ff','#7c3aed','#00d4ff'];

const GENRES = [
  { name:'Rock',  pct:85, color:'#ff2d78' },
  { name:'Joop',  pct:60, color:'#7c3aed' },
  { name:'Otros', pct:35, color:'#00d4ff' },
];

/* ════════════════════════════════════════════════
   ADS
════════════════════════════════════════════════ */
const ADS = [
  { left:'Grandes rebajas en la feria del calzon y solo cucos 50% de descuento',           big:'BIG <em>SALE</em>',   sub:'LIMITED TIME OFFER',  pct:'50%', badge:'OFF' },
  { left:'No te pierdas los mejores álbumes exclusivos de la temporada disponibles',        big:'NEW <em>DROPS</em>',  sub:'EXCLUSIVE RELEASES',  pct:'30%', badge:'NEW' },
  { left:'Suscríbete al plan premium y disfruta música sin límites ni interrupciones',      big:'<em>PREMIUM</em>',   sub:'UNLIMITED ACCESS',    pct:'∞',   badge:'PRO' },
];

/* ════════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════════ */
const grad = c => `linear-gradient(135deg, ${c.join(', ')})`;

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

/* Crea un <img> que desaparece si no carga — muestra el gradiente como fondo */
function artImg(src, alt, extraCls = '') {
  if (!src) return '';
  return `<img class="art-cover ${extraCls}" src="${src}" alt="${alt}"
              onerror="this.style.display='none'"
              onload="this.style.display='block'"
              style="display:none">`;
}

/* ════════════════════════════════════════════════
   TOP 10 CAROUSEL
════════════════════════════════════════════════ */
let top10Offset = 0;
const TOP10_VIS  = 4;
const TOP10_STEP = 118;

function renderTop10() {
  const track = document.getElementById('top10Track');
  TOP10.forEach((s, i) => {
    const rc = i === 0 ? 'rank-gold' : i === 1 ? 'rank-silver' : i === 2 ? 'rank-bronze' : 'rank-plain';
    const card = el('div', 't10-card');
    card.style.animationDelay = `${i * 0.04}s`;
    card.innerHTML = `
      <div class="t10-art" style="background:${grad(s.g)}">
        ${artImg(s.img, s.name)}
        <span class="t10-rank ${rc}">TOP ${s.rank}</span>
      </div>
      <div class="t10-info">
        <div class="t10-name">${s.name}</div>
        <div class="t10-artist">${s.artist}</div>
      </div>
      <div class="t10-actions">
        <button class="${isFav(s) ? 'fav-active' : ''}" data-fav-list="top10" data-fav-idx="${i}" title="Me gusta"><i class="fas fa-heart"></i></button>
        <button title="Añadir"><i class="fas fa-list-ul"></i></button>
      </div>`;
    card.querySelector('[data-fav-idx]').addEventListener('click', e => { e.stopPropagation(); toggleFav(s); });
    card.addEventListener('click', () => { currentList = TOP10; currentTrack = i; selectSong(s); });
    track.appendChild(card);
  });
}

function updateTop10() {
  document.getElementById('top10Track').style.transform =
    `translateX(-${top10Offset * TOP10_STEP}px)`;
}

document.getElementById('top10Prev').addEventListener('click', () => {
  if (top10Offset > 0) { top10Offset--; updateTop10(); }
});
document.getElementById('top10Next').addEventListener('click', () => {
  if (top10Offset < TOP10.length - TOP10_VIS) { top10Offset++; updateTop10(); }
});

/* ════════════════════════════════════════════════
   PLAYLISTS
════════════════════════════════════════════════ */
function renderPlaylists() {
  const list = document.getElementById('playlistList');
  PLAYLISTS.forEach((p, i) => {
    const item = el('div', 'pl-item');
    item.style.animationDelay = `${i * 0.08}s`;
    item.innerHTML = `
      <div class="pl-art" style="background:${grad(p.g)}">
        ${artImg(p.img, p.name, 'art-cover-rounded')}
      </div>
      <span class="pl-name">${p.name}</span>
      <div class="pl-btns">
        <button title="Reproducir"><i class="fas fa-circle-play"></i></button>
        <button title="Ver"><i class="fas fa-bars"></i></button>
      </div>`;
    list.appendChild(item);
  });
}

/* ════════════════════════════════════════════════
   TRENDING CAROUSEL
════════════════════════════════════════════════ */
let trendIdx  = 0;
const TREND_H = 92;

function renderTrending() {
  const track = document.getElementById('trendingTrack');
  const dots  = document.getElementById('trendingDots');

  TRENDING.forEach((v, i) => {
    const item = el('div', 'tr-item');
    item.innerHTML = `
      <div class="tr-thumb" style="background:${grad(v.g)}">
        ${artImg(v.img, v.name)}
      </div>
      <div class="tr-overlay">
        <div class="play-circle"><i class="fas fa-play"></i></div>
      </div>
      <span class="tr-label">${v.name}</span>`;
    item.addEventListener('click', () => selectSong(v));
    track.appendChild(item);

    const dot = el('div', i === 0 ? 'dot active' : 'dot');
    dot.addEventListener('click', () => setTrending(i));
    dots.appendChild(dot);
  });
}

function setTrending(idx) {
  trendIdx = idx;
  document.getElementById('trendingTrack').style.transform =
    `translateY(-${trendIdx * TREND_H}px)`;
  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === idx));
}

setInterval(() => setTrending((trendIdx + 1) % TRENDING.length), 4200);

/* ════════════════════════════════════════════════
   MUSIC HITS
════════════════════════════════════════════════ */
function renderHits() {
  const grid = document.getElementById('hitsGrid');
  HITS.forEach((h, i) => {
    const card = el('div', 'hit-card');
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="hit-art" style="background:${grad(h.g)}">
        ${artImg(h.img, h.name)}
      </div>
      <div class="hit-info"><div class="hit-name">${h.name}</div></div>`;
    grid.appendChild(card);
  });
}

/* ════════════════════════════════════════════════
   STATS — BAR CHART
════════════════════════════════════════════════ */
function renderBarChart() {
  const chart = document.getElementById('barChart');
  if (!chart) return;
  chart.innerHTML = '';
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  const vals = days.map(d => weeklyMins[d] || 0);
  const maxV = Math.max(...vals, 1);
  vals.forEach((v, i) => {
    const bar = el('div', 'bc-bar');
    bar.style.height         = `${Math.max(2, (v / maxV) * 100)}%`;
    bar.style.background     = BAR_COLORS[i];
    bar.style.boxShadow      = `0 0 8px ${BAR_COLORS[i]}70`;
    bar.style.animationDelay = `${i * 0.08}s`;
    bar.title = `${v} min`;
    chart.appendChild(bar);
  });
}

/* ════════════════════════════════════════════════
   STATS — GENRES
════════════════════════════════════════════════ */
function renderGenres() {
  const list = document.getElementById('genreList');
  GENRES.forEach((g, i) => {
    const row = el('div', 'genre-row');
    row.innerHTML = `
      <div class="genre-label">${g.name}</div>
      <div class="genre-track">
        <div class="genre-fill"
             style="width:${g.pct}%; background:${g.color};
                    box-shadow:0 0 8px ${g.color}60;
                    animation-delay:${i * 0.18}s;"></div>
      </div>`;
    list.appendChild(row);
  });
}

/* ════════════════════════════════════════════════
   AD MARQUEE
════════════════════════════════════════════════ */
function renderAds() {
  const track = document.getElementById('adTrack');
  [...ADS, ...ADS].forEach(ad => {
    const item = el('div', 'ad-item');
    item.innerHTML = `
      <div class="ad-left-text">${ad.left}</div>
      <div class="ad-center">
        <div class="ad-big-title">${ad.big}</div>
        <div class="ad-sub">${ad.sub}</div>
      </div>
      <div class="ad-right">
        <div class="ad-pct">${ad.pct}</div>
        <div class="ad-badge">${ad.badge}</div>
      </div>`;
    track.appendChild(item);
  });
}

/* ════════════════════════════════════════════════
   VISUALIZADOR DE AUDIO (Web Audio API)
════════════════════════════════════════════════ */
let audioCtx = null, analyser = null, masterGain = null, fadeGain = null, eqNodes = [];

const EQ_BANDS = [
  { freq: 60,    type: 'lowshelf'  },
  { freq: 230,   type: 'peaking'   },
  { freq: 910,   type: 'peaking'   },
  { freq: 4000,  type: 'peaking'   },
  { freq: 14000, type: 'highshelf' },
];
const EQ_PRESETS = {
  flat: [ 0,  0,  0,  0,  0],
  rock: [ 4,  2, -1,  2,  4],
  pop:  [-1,  2,  4,  2, -1],
  jazz: [ 3,  2,  0,  2,  3],
  bass: [ 6,  4,  1,  0,  0],
};

let currentVolume  = parseFloat(localStorage.getItem('4you_volume') || '0.8');
let isMuted        = false;
let premuteVolume  = currentVolume;
let crossfadeEnabled   = false;
let crossfadeTriggered = false;
const CROSSFADE_TIME   = 3;

function setupVisualizer() {
  if (audioCtx) { audioCtx.resume(); return; }
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    eqNodes = EQ_BANDS.map(b => {
      const f = audioCtx.createBiquadFilter();
      f.type = b.type; f.frequency.value = b.freq; f.Q.value = 1; f.gain.value = 0;
      return f;
    });

    masterGain            = audioCtx.createGain();
    masterGain.gain.value = currentVolume;
    fadeGain              = audioCtx.createGain();
    fadeGain.gain.value   = 1;
    analyser              = audioCtx.createAnalyser();
    analyser.fftSize      = 64;
    analyser.smoothingTimeConstant = 0.8;

    // cadena: src → eq[0..4] → fadeGain → masterGain → analyser → destination
    const src = audioCtx.createMediaElementSource(audio);
    src.connect(eqNodes[0]);
    eqNodes.forEach((n, i) => { if (i < eqNodes.length - 1) n.connect(eqNodes[i + 1]); });
    eqNodes[eqNodes.length - 1].connect(fadeGain);
    fadeGain.connect(masterGain);
    masterGain.connect(analyser);
    analyser.connect(audioCtx.destination);

    // restaurar EQ guardado
    const savedEQ = JSON.parse(localStorage.getItem('4you_eq') || 'null');
    if (savedEQ) savedEQ.forEach((g, i) => { if (eqNodes[i]) eqNodes[i].gain.value = g; });
  } catch(e) { audioCtx = null; analyser = null; eqNodes = []; }
}

function setVolume(val) {
  currentVolume = Math.max(0, Math.min(1, val));
  audio.volume  = currentVolume;
  if (masterGain) masterGain.gain.value = currentVolume;
  localStorage.setItem('4you_volume', currentVolume);
  updateVolIcon();
}

function updateVolIcon() {
  const ic = document.getElementById('volIcon');
  if (!ic) return;
  if (isMuted || currentVolume === 0) ic.className = 'fas fa-volume-xmark';
  else if (currentVolume < 0.4)       ic.className = 'fas fa-volume-low';
  else if (currentVolume < 0.7)       ic.className = 'fas fa-volume';
  else                                ic.className = 'fas fa-volume-high';
}

function applyEQ(gains) {
  gains.forEach((g, i) => {
    if (eqNodes[i]) eqNodes[i].gain.value = g;
    const sl = document.getElementById(`eq${i}`);
    const db = document.getElementById(`eq${i}db`);
    if (sl) {
      sl.value = g;
      sl.style.setProperty('--eq-pct', ((g + 12) / 24 * 100).toFixed(1));
    }
    if (db) db.textContent = (g > 0 ? '+' : '') + g;
  });
  localStorage.setItem('4you_eq', JSON.stringify(gains));
}

function startVizLoop() {
  const canvas = document.getElementById('visualizerCanvas');
  if (!canvas) return;
  const BARS = 28, GAP = 1;
  const heights = new Array(BARS).fill(0); // altura actual interpolada de cada barra

  const draw = () => {
    requestAnimationFrame(draw);
    if (canvas.offsetWidth > 0 && canvas.width !== canvas.offsetWidth) {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    const ctx = canvas.getContext('2d');
    const W = canvas.width || 164, H = canvas.height || 24;
    ctx.clearRect(0, 0, W, H);
    const bw = Math.max(1, Math.floor((W - GAP * (BARS - 1)) / BARS));

    // Calcular altura objetivo de cada barra según el estado
    const targets = new Array(BARS);
    if (analyser && playing) {
      const data = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(data);
      for (let i = 0; i < BARS; i++) {
        const di = Math.floor(i * analyser.frequencyBinCount / BARS);
        targets[i] = Math.max(1, (data[di] / 255) * H);
      }
    } else if (playing) {
      // Modo fake: ondas animadas como objetivo
      const t = Date.now() / 1000;
      for (let i = 0; i < BARS; i++) {
        targets[i] = Math.max(1, H * (0.22 + 0.18 * Math.sin(t * 2.4 + i * 0.45) + 0.08 * Math.sin(t * 4 + i * 0.9)));
      }
    } else {
      // Pausado: objetivo = 0 para todas las barras
      targets.fill(0);
    }

    // Interpolar altura actual hacia el objetivo
    for (let i = 0; i < BARS; i++) {
      const diff = targets[i] - heights[i];
      if (diff > 0) {
        heights[i] += diff * 0.35;        // sube rápido
      } else {
        heights[i] += diff * 0.08;        // cae lento (efecto gravity)
      }
      if (heights[i] < 0.5) heights[i] = 0;
    }

    // Dibujar barras con la altura interpolada
    for (let i = 0; i < BARS; i++) {
      const h     = heights[i];
      const alpha = 0.18 + (h / H) * 0.82;
      ctx.fillStyle = `hsla(${185 + i * 4},100%,62%,${alpha})`;
      ctx.fillRect(i * (bw + GAP), H - h, bw, Math.max(h, 0));
    }
  };
  draw();
}

/* ════════════════════════════════════════════════
   RGB CYCLING — player card & avatar ring
════════════════════════════════════════════════ */
const RGB_COLORS = [
  { border:'#ff0066', shadow:'255,0,102'  },
  { border:'#ff6600', shadow:'255,102,0'  },
  { border:'#ffe600', shadow:'255,230,0'  },
  { border:'#00ff99', shadow:'0,255,153'  },
  { border:'#00d4ff', shadow:'0,212,255'  },
  { border:'#9900ff', shadow:'153,0,255'  },
  { border:'#ff00aa', shadow:'255,0,170'  },
];
let rgbIdx = 0;

setInterval(() => {
  rgbIdx = (rgbIdx + 1) % RGB_COLORS.length;
  const { border, shadow } = RGB_COLORS[rgbIdx];
  const card = document.getElementById('playerCard');
  if (card) {
    card.style.borderColor = border;
    card.style.boxShadow   =
      `0 0 22px rgba(${shadow},.38), 0 0 50px rgba(${shadow},.14), inset 0 0 16px rgba(${shadow},.1)`;
  }
  const ring = document.getElementById('avatarRing');
  if (ring) {
    ring.style.borderColor = border;
    ring.style.boxShadow   = `0 0 10px rgba(${shadow},.5)`;
  }
}, 650);

/* ════════════════════════════════════════════════
   AUDIO ENGINE
════════════════════════════════════════════════ */
const audio        = document.getElementById('audioPlayer');
let   usingAudio   = false;   // true cuando hay un src real cargado
let   playing      = false;
let   progress     = 0;
let   elapsed      = 0;
const FAKE_DUR     = 238;     // duración simulada en segundos (3:58)

const vinyl      = document.getElementById('vinyl');
const vinylArt   = document.getElementById('vinylArt');
const btnPlay    = document.getElementById('btnPlay');
const fillEl     = document.getElementById('progressFill');
const thumbEl    = document.getElementById('progressThumb');
const timeEl     = document.getElementById('currentTime');
const durEl      = document.getElementById('totalTime');

function fmtTime(s) {
  const t = Math.max(0, Math.floor(s));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
}

/* Actualiza la carátula circular — animación flip + color dinámico */
function updateVinylArt(imgSrc, animate = true) {
  if (imgSrc) {
    if (animate && vinylArt.src && vinylArt.style.display !== 'none') {
      // flip 3D: quitar clase, forzar reflow, añadir clase
      vinylArt.classList.remove('art-changing');
      void vinylArt.offsetWidth;
      vinylArt.classList.add('art-changing');
      setTimeout(() => { vinylArt.src = imgSrc; }, 196);
      setTimeout(() => { vinylArt.classList.remove('art-changing'); }, 570);
    } else {
      vinylArt.src = imgSrc;
    }
    extractDominantColor(imgSrc);
  } else {
    vinylArt.src = '';
    vinylArt.style.display = 'none';
    resetDynamicBg();
  }
}

/* ════════════════════════════════════════════════
   FONDO DINÁMICO — color dominante de la carátula
════════════════════════════════════════════════ */
function extractDominantColor(imgSrc) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    try {
      const cv = document.createElement('canvas');
      cv.width = cv.height = 8;
      const ctx = cv.getContext('2d');
      ctx.drawImage(img, 0, 0, 8, 8);
      const d = ctx.getImageData(0, 0, 8, 8).data;
      let r = 0, g = 0, b = 0;
      for (let i = 0; i < d.length; i += 4) { r += d[i]; g += d[i+1]; b += d[i+2]; }
      const px = d.length / 4;
      applyDynamicBg(Math.round(r / px), Math.round(g / px), Math.round(b / px));
    } catch { resetDynamicBg(); }
  };
  img.onerror = resetDynamicBg;
  img.src = imgSrc;
}

function applyDynamicBg(r, g, b) {
  const card = document.getElementById('playerCard');
  if (card) {
    card.style.background =
      `radial-gradient(ellipse at 50% 0%, rgba(${r},${g},${b},0.27) 0%, transparent 72%)`;
  }
  const mc = document.querySelector('.main-content');
  if (mc) mc.style.backgroundImage =
    `radial-gradient(ellipse at 78% 20%, rgba(${r},${g},${b},0.07) 0%, transparent 48%)`;
}

function resetDynamicBg() {
  const card = document.getElementById('playerCard');
  if (card) card.style.background = '';
  const mc = document.querySelector('.main-content');
  if (mc) mc.style.backgroundImage = '';
}

/* Selecciona una canción (objeto con name, artist, img, src) */
function selectSong(song) {
  document.querySelectorAll('.lib-item').forEach(e => e.classList.remove('lib-playing'));
  if (currentList === libraryList) {
    const active = document.querySelector(`.lib-item[data-index="${currentTrack}"]`);
    if (active) active.classList.add('lib-playing');
  }
  document.querySelector('.player-song').textContent   = song.name;
  document.querySelector('.player-artist').textContent = song.artist;

  updateVinylArt(song.img || '');

  if (song.src) addToRecent(song);

  if (song.src) {
    usingAudio     = true;
    audio.src          = song.src;
    audio.playbackRate = SPEEDS[speedIdx];
    audio.load();
    audio.play().catch(() => { /* autoplay bloqueado por navegador */ });
  } else {
    usingAudio = false;
    audio.pause();
    audio.src  = '';
    progress   = 0;
    elapsed    = 0;
    fillEl.style.width  = '0%';
    thumbEl.style.left  = '0%';
    timeEl.textContent  = '0:00';
    durEl.textContent   = '0:00';
  }

  setPlaying(true);
  crossfadeTriggered = false;
  if (crossfadeEnabled && fadeGain && audioCtx) {
    fadeGain.gain.cancelScheduledValues(audioCtx.currentTime);
    fadeGain.gain.setValueAtTime(0, audioCtx.currentTime);
    fadeGain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + CROSSFADE_TIME);
  } else if (fadeGain) {
    fadeGain.gain.cancelScheduledValues(audioCtx.currentTime);
    fadeGain.gain.value = 1;
  }
  renderQueue();
  incrementPlayCount(song);
  if (document.getElementById('lyricsTabContent')?.style.display !== 'none') fetchLyrics(song);
  syncHero();
}


/* ── Sincronización de barra de progreso ── */
setInterval(() => {
  if (!playing) return;

  if (usingAudio && audio.duration) {
    const p = (audio.currentTime / audio.duration) * 100;
    fillEl.style.width  = p + '%';
    thumbEl.style.left  = p + '%';
    timeEl.textContent  = fmtTime(audio.currentTime);
    progress = p;
    elapsed  = audio.currentTime;
  } else if (!usingAudio) {
    progress = (progress + 100 / (FAKE_DUR * 10)) % 100;
    elapsed  = Math.floor((progress / 100) * FAKE_DUR);
    fillEl.style.width  = progress + '%';
    thumbEl.style.left  = progress + '%';
    timeEl.textContent  = fmtTime(elapsed);
  }
  updateLyricHighlight();

  if (crossfadeEnabled && usingAudio && audio.duration > CROSSFADE_TIME * 2 &&
      !crossfadeTriggered && audio.currentTime >= audio.duration - CROSSFADE_TIME) {
    crossfadeTriggered = true;
    if (fadeGain && audioCtx) {
      fadeGain.gain.cancelScheduledValues(audioCtx.currentTime);
      fadeGain.gain.setValueAtTime(1, audioCtx.currentTime);
      fadeGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + CROSSFADE_TIME);
    }
  }
}, 100);

/* Muestra duración real cuando el audio carga metadatos */
audio.addEventListener('loadedmetadata', () => {
  durEl.textContent = fmtTime(audio.duration);
});

/* Avance automático al terminar la canción */
audio.addEventListener('ended', () => {
  if (repeatMode) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } else if (shuffleMode) {
    let next;
    do { next = Math.floor(Math.random() * currentList.length); }
    while (next === currentTrack && currentList.length > 1);
    currentTrack = next;
    selectSong(currentList[currentTrack]);
  } else {
    currentTrack = (currentTrack + 1) % currentList.length;
    selectSong(currentList[currentTrack]);
  }
});

/* ── Play / Pause ── */
function setPlaying(state) {
  playing = state;
  if (playing) {
    setupVisualizer();
    if (usingAudio) audio.play().catch(() => {});
    vinyl.style.animationPlayState = 'running';
    btnPlay.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    if (usingAudio) audio.pause();
    vinyl.style.animationPlayState = 'paused';
    btnPlay.innerHTML = '<i class="fas fa-play"></i>';
  }
  syncMiniPlayer();
  syncHero();
}

btnPlay.addEventListener('click', () => setPlaying(!playing));

/* ── Seek al hacer clic en la barra ── */
document.getElementById('progressTrack').addEventListener('click', function (e) {
  const rect = this.getBoundingClientRect();
  const pct  = (e.clientX - rect.left) / rect.width;
  progress   = pct * 100;
  if (usingAudio && audio.duration) {
    audio.currentTime = pct * audio.duration;
  } else {
    elapsed = Math.floor(pct * FAKE_DUR);
    timeEl.textContent = fmtTime(elapsed);
  }
  fillEl.style.width  = progress + '%';
  thumbEl.style.left  = progress + '%';
});

/* ── Prev / Next ── */
let currentTrack = 0;
let currentList  = TOP10;
let shuffleMode  = false;
let repeatMode   = false;

document.getElementById('btnNext').addEventListener('click', () => {
  if (shuffleMode) {
    let next;
    do { next = Math.floor(Math.random() * currentList.length); }
    while (next === currentTrack && currentList.length > 1);
    currentTrack = next;
  } else {
    currentTrack = (currentTrack + 1) % currentList.length;
  }
  selectSong(currentList[currentTrack]);
});
document.getElementById('btnPrev').addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + currentList.length) % currentList.length;
  selectSong(currentList[currentTrack]);
});

document.getElementById('btnShuffle').addEventListener('click', () => {
  shuffleMode = !shuffleMode;
  document.getElementById('btnShuffle').classList.toggle('ctrl-active', shuffleMode);
});
document.getElementById('btnRepeat').addEventListener('click', () => {
  repeatMode = !repeatMode;
  document.getElementById('btnRepeat').classList.toggle('ctrl-active', repeatMode);
});
document.querySelector('.vinyl-btn').addEventListener('click', e => {
  e.stopPropagation();
  shuffleMode = !shuffleMode;
  document.getElementById('btnShuffle').classList.toggle('ctrl-active', shuffleMode);
  document.querySelector('.vinyl-btn').classList.toggle('ctrl-active', shuffleMode);
});

/* ════════════════════════════════════════════════
   VELOCIDAD DE REPRODUCCIÓN
════════════════════════════════════════════════ */
const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];
let speedIdx = 2; // 1×

/* ════════════════════════════════════════════════
   SLEEP TIMER
════════════════════════════════════════════════ */
let sleepTimeout  = null;
let sleepInterval = null;
let sleepEnd      = 0;

function setSleepTimer(minutes) {
  clearTimeout(sleepTimeout);
  clearInterval(sleepInterval);
  sleepTimeout = sleepInterval = null;

  const countdown = document.getElementById('sleepCountdown');
  const timeLeft  = document.getElementById('sleepTimeLeft');
  const btnSleep  = document.getElementById('btnSleep');
  document.querySelectorAll('.sleep-popup button').forEach(b => b.classList.remove('sleep-active'));

  if (!minutes) {
    countdown.style.display = 'none';
    btnSleep.classList.remove('active');
    return;
  }

  sleepEnd = Date.now() + minutes * 60_000;
  btnSleep.classList.add('active');
  countdown.style.display = 'flex';

  const tick = () => {
    const rem = Math.max(0, sleepEnd - Date.now());
    const m = Math.floor(rem / 60000);
    const s = Math.floor((rem % 60000) / 1000);
    timeLeft.textContent = `${m}:${String(s).padStart(2, '0')}`;
  };
  tick();
  sleepInterval = setInterval(tick, 1000);

  sleepTimeout = setTimeout(() => {
    setPlaying(false);
    clearInterval(sleepInterval);
    countdown.style.display = 'none';
    btnSleep.classList.remove('active');
  }, minutes * 60_000);
}

/* ── Nav icons ── */
function switchView(view) {
  document.querySelectorAll('.home-section').forEach(s =>
    s.style.display = (view === 'home' ? '' : 'none'));
  document.getElementById('librarySection').style.display =
    (view === 'library' ? '' : 'none');
  document.getElementById('themesSection').style.display =
    (view === 'themes' ? '' : 'none');
  document.getElementById('profileSection').style.display =
    (view === 'profile' ? '' : 'none');
  if (view === 'profile') updateProfileStats();
}

document.querySelectorAll('.nav-icon').forEach(icon => {
  icon.addEventListener('click', function () {
    document.querySelectorAll('.nav-icon').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    switchView(this.dataset.view || 'home');
  });
});

/* ── Búsqueda global ── */
document.getElementById('searchInput').addEventListener('input', function () {
  const q  = this.value.toLowerCase().trim();
  const dd = document.getElementById('searchDropdown');
  if (!q) {
    dd.style.display = 'none';
    filterTop10ByGenre(currentGenreFilter);
    return;
  }
  const pool = [
    ...TOP10.map(s       => ({ ...s, _src: 'Top 10' })),
    ...libraryList.map(s => ({ ...s, _src: 'Biblioteca' })),
    ...HITS.map(s        => ({ ...s, _src: 'Hits' })),
  ];
  const hits = pool.filter(s =>
    s.name.toLowerCase().includes(q) ||
    (s.artist && s.artist.toLowerCase().includes(q))
  ).slice(0, 8);

  if (!hits.length) {
    dd.innerHTML = `<div class="sd-empty">Sin resultados para "<em>${q}</em>"</div>`;
    dd.style.display = 'block';
    return;
  }
  dd.innerHTML = hits.map((s, i) => `
    <div class="sd-item" data-idx="${i}">
      <div class="sd-art" style="background:linear-gradient(135deg,#0a0a1a,#1a1a3a)">
        ${s.img ? `<img src="${s.img}" alt="" onerror="this.style.display='none'"
                        onload="this.style.display='block'" style="display:none">` : ''}
        <i class="fas fa-music sd-icon"></i>
      </div>
      <div class="sd-info">
        <div class="sd-name">${s.name}</div>
        <div class="sd-meta">${s.artist ? s.artist + ' · ' : ''}<span class="sd-source">${s._src}</span></div>
      </div>
      <span class="sd-play-btn"><i class="fas fa-play"></i></span>
    </div>`).join('');

  dd.querySelectorAll('.sd-item').forEach((item, i) => {
    item.addEventListener('click', () => {
      selectSong(hits[i]);
      document.getElementById('searchInput').value = '';
      dd.style.display = 'none';
    });
  });
  dd.style.display = 'block';
});

document.addEventListener('click', e => {
  if (!e.target.closest('#searchBarWrap')) {
    const dd = document.getElementById('searchDropdown');
    if (dd) dd.style.display = 'none';
  }
});

/* ════════════════════════════════════════════════
   INDEXED DB — persiste el handle de carpeta
════════════════════════════════════════════════ */
const IDB = (() => {
  const DB = '4youMusic', VER = 1, STORE = 'handles';
  const open = () => new Promise((res, rej) => {
    const r = indexedDB.open(DB, VER);
    r.onupgradeneeded = e => e.target.result.createObjectStore(STORE);
    r.onsuccess = e => res(e.target.result);
    r.onerror   = e => rej(e.target.error);
  });
  return {
    async set(key, val) {
      const db = await open();
      return new Promise((res, rej) => {
        const tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).put(val, key);
        tx.oncomplete = res;
        tx.onerror    = e => rej(e.target.error);
      });
    },
    async get(key) {
      const db = await open();
      return new Promise((res, rej) => {
        const tx  = db.transaction(STORE, 'readonly');
        const req = tx.objectStore(STORE).get(key);
        req.onsuccess = e => res(e.target.result);
        req.onerror   = e => rej(e.target.error);
      });
    },
  };
})();

/* ════════════════════════════════════════════════
   BIBLIOTECA — File System Access API
════════════════════════════════════════════════ */
let libraryList = [];
let currentLibFilter = 'all';
let libSortBy = 'name';
const recentlyPlayed = [];

function addToRecent(track) {
  const idx = recentlyPlayed.findIndex(t => t.src === track.src);
  if (idx > -1) recentlyPlayed.splice(idx, 1);
  recentlyPlayed.unshift(track);
  if (recentlyPlayed.length > 20) recentlyPlayed.pop();
  renderRecentSection();
}

/* ════════════════════════════════════════════════
   FAVORITOS
════════════════════════════════════════════════ */
const FAV_KEY  = '4you_favorites';
const favorites = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));
const favKey   = t => `${t.name}|||${t.artist}`;
const isFav    = t => favorites.has(favKey(t));

function toggleFav(track) {
  const k = favKey(track);
  if (favorites.has(k)) favorites.delete(k); else favorites.add(k);
  localStorage.setItem(FAV_KEY, JSON.stringify([...favorites]));
  document.querySelectorAll('[data-fav-idx]').forEach(btn => {
    const list = btn.dataset.favList === 'top10' ? TOP10 : libraryList;
    const t = list[+btn.dataset.favIdx];
    if (t) btn.classList.toggle('fav-active', isFav(t));
  });
  if (currentLibFilter === 'favorites') renderLibrary();
}

/* ════════════════════════════════════════════════
   ESTADÍSTICAS REALES
════════════════════════════════════════════════ */
const STATS_KEY  = '4you_playstats';
const WEEKLY_KEY = '4you_weekly';
let playCounts = JSON.parse(localStorage.getItem(STATS_KEY)  || '{}');
let weeklyMins = JSON.parse(localStorage.getItem(WEEKLY_KEY) || '{}');

function incrementPlayCount(track) {
  const k = favKey(track);
  if (!playCounts[k]) playCounts[k] = { name: track.name, artist: track.artist, plays: 0 };
  playCounts[k].plays++;
  localStorage.setItem(STATS_KEY, JSON.stringify(playCounts));
  updateStatsUI();
  renderMostPlayed();
}

let listenSecs = 0;
setInterval(() => {
  if (!playing || !usingAudio) return;
  listenSecs++;
  if (listenSecs % 60 === 0) {
    const today = new Date().toISOString().slice(0, 10);
    weeklyMins[today] = (weeklyMins[today] || 0) + 1;
    localStorage.setItem(WEEKLY_KEY, JSON.stringify(weeklyMins));
    updateStatsUI();
  }
}, 1000);

function updateStatsUI() {
  const plays = Object.values(playCounts).reduce((s, v) => s + v.plays, 0);
  const mins  = Object.values(weeklyMins).reduce((s, v) => s + v, 0);
  const h = Math.floor(mins / 60), m = mins % 60;
  const p1 = document.getElementById('statTotalPlays');
  const p2 = document.getElementById('statTotalTime');
  if (p1) p1.textContent = plays.toLocaleString();
  if (p2) p2.textContent = `${h} H ${String(m).padStart(2, '0')} M`;
  renderBarChart();
  const entries = Object.values(playCounts).sort((a, b) => b.plays - a.plays);
  if (entries.length) {
    const n = document.getElementById('statMostPlayedName');
    const a = document.getElementById('statMostPlayedArtist');
    if (n) n.textContent = entries[0].name;
    if (a) a.textContent = entries[0].artist;
  }
}

/* ════════════════════════════════════════════════
   LETRAS / LYRICS
════════════════════════════════════════════════ */
let currentLyrics    = null;
let lyricsCurrentKey = '';
let lastLyricIdx     = -1;

function parseLRC(lrc) {
  return lrc.split('\n').map(line => {
    const m = line.match(/^\[(\d{1,2}):(\d{2})\.(\d{1,3})\](.*)/);
    if (!m) return null;
    const time = +m[1] * 60 + +m[2] + +m[3] / (m[3].length === 3 ? 1000 : 100);
    return { time, text: m[4].trim() };
  }).filter(Boolean);
}

async function fetchLyrics(track) {
  const key = favKey(track);
  lyricsCurrentKey = key;
  currentLyrics    = null;
  lastLyricIdx     = -1;

  const statusEl = document.getElementById('lyricsStatus');
  const linesEl  = document.getElementById('lyricsLines');
  if (!statusEl || !linesEl) return;
  linesEl.innerHTML      = '';
  statusEl.textContent   = 'Buscando letra…';
  statusEl.style.display = '';

  try {
    const name   = encodeURIComponent(track.name);
    const artist = encodeURIComponent(track.artist);
    const res  = await fetch(`https://lrclib.net/api/search?track_name=${name}&artist_name=${artist}`);
    const data = await res.json();
    if (lyricsCurrentKey !== key) return;

    if (!data.length) { statusEl.textContent = 'Letra no disponible'; return; }
    const result = data[0];
    statusEl.style.display = 'none';

    if (result.syncedLyrics) {
      currentLyrics = parseLRC(result.syncedLyrics);
      linesEl.innerHTML = currentLyrics
        .map((l, i) => `<div class="lyric-line" data-idx="${i}">${l.text || '·'}</div>`)
        .join('');
    } else if (result.plainLyrics) {
      linesEl.innerHTML = result.plainLyrics.split('\n')
        .map(l => `<div class="lyric-line">${l.trim() || '&nbsp;'}</div>`)
        .join('');
    } else {
      statusEl.textContent   = 'Letra no disponible';
      statusEl.style.display = '';
    }
  } catch {
    if (lyricsCurrentKey === key) {
      statusEl.textContent   = 'Error al cargar letra';
      statusEl.style.display = '';
    }
  }
}

function updateLyricHighlight() {
  if (!currentLyrics || !usingAudio) return;
  const t = audio.currentTime;
  let idx = 0;
  for (let i = 0; i < currentLyrics.length; i++) {
    if (currentLyrics[i].time <= t) idx = i; else break;
  }
  if (idx === lastLyricIdx) return;
  lastLyricIdx = idx;
  document.querySelectorAll('.lyric-line[data-idx]').forEach(el =>
    el.classList.remove('lyric-active'));
  const active = document.querySelector(`.lyric-line[data-idx="${idx}"]`);
  if (active) {
    active.classList.add('lyric-active');
    active.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* ════════════════════════════════════════════════
   TEMAS DE COLOR
════════════════════════════════════════════════ */
const THEME_KEY = '4you_theme';
const THEME_PRESETS = {
  cyan: {
    '--cyan':'#00d4ff','--pink':'#ff2d78','--violet':'#7c3aed',
    '--bg0':'#080b11','--bg1':'#0d1220','--bg2':'#111927',
    '--bg3':'#172035','--card':'#1a2438','--card-h':'#1f2d44',
    '--border':'#1e2d45','--border-bright':'#2a3d58',
  },
  pink: {
    '--cyan':'#ff2d78','--pink':'#7c3aed','--violet':'#ff2d78',
    '--bg0':'#110810','--bg1':'#1a0d18','--bg2':'#201320',
    '--bg3':'#2a1828','--card':'#221520','--card-h':'#2d1c2a',
    '--border':'#2e1a2a','--border-bright':'#3d2238',
  },
  green: {
    '--cyan':'#00ff99','--pink':'#00d4ff','--violet':'#00ff99',
    '--bg0':'#050e0a','--bg1':'#081510','--bg2':'#0a1c14',
    '--bg3':'#0d2418','--card':'#0f2016','--card-h':'#152c1e',
    '--border':'#132a1c','--border-bright':'#1c3c28',
  },
};

function lightenHex(hex, amt) {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (n >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((n >> 8) & 0xff) + amt));
  const b = Math.min(255, Math.max(0, (n & 0xff) + amt));
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

let currentThemeKey = 'cyan';

function applyTheme(vars, key) {
  Object.entries(vars).forEach(([k, v]) =>
    document.documentElement.style.setProperty(k, v));
  localStorage.setItem(THEME_KEY, JSON.stringify({ vars, key }));
  currentThemeKey = key || 'custom';
  document.querySelectorAll('.theme-preset-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.theme === currentThemeKey));
}

/* ════════════════════════════════════════════════
   COLA DE REPRODUCCIÓN
════════════════════════════════════════════════ */
function renderQueue() {
  const list = document.getElementById('queueList');
  if (!list) return;
  list.innerHTML = '';

  const cur = currentList[currentTrack];
  if (cur) {
    const nowLabel = el('p', 'queue-now-label', 'Reproduciendo ahora');
    list.appendChild(nowLabel);
    const curItem = el('div', 'queue-item queue-current');
    curItem.innerHTML = `
      <span class="queue-pos"><i class="fas fa-volume-up" style="color:var(--cyan);font-size:9px"></i></span>
      <div class="queue-art">${cur.img ? `<img src="${cur.img}" alt="" onerror="this.style.display='none'">` : '<i class="fas fa-music"></i>'}</div>
      <div class="queue-info">
        <div class="queue-name" style="color:var(--cyan)">${cur.name}</div>
        <div class="queue-artist">${cur.artist}</div>
      </div>
      <div></div>`;
    list.appendChild(curItem);
  }

  const total = Math.min(10, currentList.length - 1);
  if (total === 0) {
    list.appendChild(el('p', 'queue-empty', 'No hay más canciones en cola'));
    return;
  }
  list.appendChild(el('p', 'queue-next-label', 'Siguiente en la cola'));
  for (let i = 1; i <= total; i++) {
    const idx   = (currentTrack + i) % currentList.length;
    const track = currentList[idx];
    const item  = el('div', 'queue-item');
    item.innerHTML = `
      <span class="queue-pos">${i}</span>
      <div class="queue-art">${track.img ? `<img src="${track.img}" alt="" onerror="this.style.display='none'">` : '<i class="fas fa-music"></i>'}</div>
      <div class="queue-info">
        <div class="queue-name">${track.name}</div>
        <div class="queue-artist">${track.artist}</div>
      </div>
      <button class="queue-play-btn" title="Reproducir ahora"><i class="fas fa-play"></i></button>`;
    item.querySelector('.queue-play-btn').addEventListener('click', () => {
      currentTrack = idx;
      selectSong(currentList[idx]);
    });
    list.appendChild(item);
  }
}

async function connectFolder() {
  const statusEl = document.getElementById('libStatus');
  if (!window.showDirectoryPicker) {
    statusEl.textContent = 'Tu navegador no soporta esta función. Usa Chrome o Edge.';
    return;
  }
  try {
    const root = await window.showDirectoryPicker();
    try { await IDB.set('root', root); } catch { /* IDB puede fallar, no es crítico */ }
    await initFromRoot(root);
  } catch (e) {
    if (e.name === 'AbortError') return;
    if (e.name === 'SecurityError') {
      statusEl.textContent = 'Bloqueado por el navegador. En Brave: desactiva los Shields para esta página (icono del león → desactivar).';
    } else {
      statusEl.textContent = `Error (${e.name}): ${e.message}`;
    }
    console.error('[Biblioteca]', e);
  }
}

async function initFromRoot(root) {
  let musicDir, imgDir;
  try   { musicDir = await root.getDirectoryHandle('music'); }
  catch { document.getElementById('libStatus').textContent = 'No se encontró la carpeta music/'; return; }
  try   { imgDir   = await root.getDirectoryHandle('img'); }
  catch { imgDir   = null; }
  await scanLibrary(musicDir, imgDir);
}

function fuzzyFindImg(base, imgMap) {
  const key = base.toLowerCase();
  if (imgMap[key]) return imgMap[key];

  // Extrae palabras significativas (4+ letras, sin números solos)
  const words = key
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 4 && !/^\d+$/.test(w));

  for (const [imgKey, handle] of Object.entries(imgMap)) {
    if (words.some(w => imgKey.includes(w) || w.includes(imgKey))) return handle;
  }
  return null;
}

async function scanLibrary(musicDir, imgDir) {
  document.getElementById('libStatus').textContent = 'Escaneando canciones…';
  libraryList = [];

  const imgMap = {};
  if (imgDir) {
    for await (const [name, handle] of imgDir.entries()) {
      if (handle.kind === 'file' && /\.(jpe?g|png|webp|gif)$/i.test(name))
        imgMap[name.replace(/\.[^.]+$/, '').toLowerCase()] = handle;
    }
  }

  for await (const [name, handle] of musicDir.entries()) {
    if (handle.kind !== 'file' || !/\.(mp3|flac|ogg|wav|m4a|aac)$/i.test(name)) continue;
    const base   = name.replace(/\.(mp3|flac|ogg|wav|m4a|aac)$/i, '');
    const dashAt = base.indexOf(' - ');
    const artist = dashAt > 0 ? base.slice(0, dashAt).trim() : 'Desconocido';
    const title  = dashAt > 0 ? base.slice(dashAt + 3).trim() : base;

    const audioFile = await handle.getFile();
    const src       = URL.createObjectURL(audioFile);

    let img = '';
    const imgHandle = fuzzyFindImg(base, imgMap);
    if (imgHandle) {
      const imgFile = await imgHandle.getFile();
      img = URL.createObjectURL(imgFile);
    }
    libraryList.push({ name: title, artist, img, src });
  }

  libraryList.sort((a, b) => a.name.localeCompare(b.name));
  renderLibrary();

  const n = libraryList.length;
  document.getElementById('libStatus').textContent = `${n} canción${n !== 1 ? 'es' : ''}`;
  document.getElementById('libConnectState').style.display = 'none';
  document.getElementById('libSongList').style.display     = 'block';
  document.getElementById('libRefreshBtn').style.display   = 'inline-flex';
}

function renderLibItem(track) {
  const i = libraryList.indexOf(track);
  const item = el('div', 'lib-item');
  item.dataset.index = i;
  item.innerHTML = `
    <div class="lib-art" style="background:linear-gradient(135deg,#0a0a1a,#1a1a3a)">
      ${track.img
        ? `<img src="${track.img}" alt="${track.name}" onerror="this.style.display='none'">`
        : '<i class="fas fa-music"></i>'}
    </div>
    <div class="lib-info">
      <div class="lib-title">${track.name}</div>
      <div class="lib-artist">${track.artist}</div>
    </div>
    <div class="lib-item-btns">
      <button class="lib-fav-btn ${isFav(track) ? 'fav-active' : ''}" data-fav-list="lib" data-fav-idx="${i}" title="Favorito"><i class="fas fa-heart"></i></button>
      <button class="lib-play-btn" title="Reproducir"><i class="fas fa-play"></i></button>
    </div>`;
  const play = () => {
    currentList  = libraryList;
    currentTrack = i !== -1 ? i : 0;
    selectSong(track);
  };
  item.querySelector('.lib-fav-btn').addEventListener('click', e => { e.stopPropagation(); toggleFav(track); });
  item.querySelector('.lib-play-btn').addEventListener('click', e => { e.stopPropagation(); play(); });
  item.addEventListener('dblclick', play);
  if (currentList === libraryList && i === currentTrack) item.classList.add('lib-playing');
  return item;
}

function renderLibrary() {
  const list = document.getElementById('libraryList');
  list.innerHTML = '';

  if (currentLibFilter === 'favorites') {
    const favSongs = libraryList.filter(isFav);
    if (!favSongs.length) {
      list.innerHTML = '<p class="lib-empty"><i class="fas fa-heart"></i><br>No tienes favoritos aún</p>';
      return;
    }
    favSongs.forEach(track => list.appendChild(renderLibItem(track)));
    return;
  }

  if (currentLibFilter === 'recent') {
    if (!recentlyPlayed.length) {
      list.innerHTML = '<p class="lib-empty"><i class="fas fa-clock"></i><br>No has escuchado nada aún</p>';
      return;
    }
    recentlyPlayed.forEach(track => list.appendChild(renderLibItem(track)));
    return;
  }

  let songs = [...libraryList];
  if (libSortBy === 'artist') {
    songs.sort((a, b) => a.artist.localeCompare(b.artist) || a.name.localeCompare(b.name));
  }

  if (currentLibFilter === 'artists') {
    let lastArtist = '';
    songs.forEach(track => {
      if (track.artist !== lastArtist) {
        lastArtist = track.artist;
        const header = el('div', 'lib-artist-header',
          `<i class="fas fa-user-music"></i>${track.artist}`);
        list.appendChild(header);
      }
      list.appendChild(renderLibItem(track));
    });
    return;
  }

  songs.forEach(track => list.appendChild(renderLibItem(track)));
}

async function tryRestoreLibrary() {
  try {
    let root;
    try { root = await IDB.get('root'); } catch { return; }
    if (!root) return;
    const perm = await root.queryPermission({ mode: 'read' });
    if (perm === 'granted') {
      await initFromRoot(root);
    } else {
      const banner = document.getElementById('libReconnectBanner');
      banner.style.display = 'flex';
      banner.addEventListener('click', async () => {
        const p = await root.requestPermission({ mode: 'read' });
        if (p === 'granted') { banner.style.display = 'none'; await initFromRoot(root); }
      }, { once: true });
    }
  } catch { /* sin handle guardado */ }
}

/* ════════════════════════════════════════════════
   HOME PAGE — Greeting · Hero · Genre · Recent · Top
════════════════════════════════════════════════ */
function updateGreeting() {
  const h  = new Date().getHours();
  const el = document.getElementById('greetingLine');
  if (!el) return;
  if (h >= 6  && h < 12) el.textContent = '☀️ Buenos días';
  else if (h >= 12 && h < 20) el.textContent = '🌤️ Buenas tardes';
  else el.textContent = '🌙 Buenas noches';
}

function syncHero() {
  const song   = currentList[currentTrack];
  if (!song) return;
  const hImg   = document.getElementById('heroImg');
  const hBg    = document.getElementById('heroBgBlur');
  const hName  = document.getElementById('heroSongName');
  const hArt   = document.getElementById('heroSongArtist');
  const hBtn   = document.getElementById('heroBtnPlay');
  if (hImg) {
    if (song.img) {
      hImg.src = song.img;
      hImg.style.display = 'block';
      if (hImg.nextElementSibling) hImg.nextElementSibling.style.display = 'none';
    } else {
      hImg.style.display = 'none';
      if (hImg.nextElementSibling) hImg.nextElementSibling.style.display = '';
    }
  }
  if (hBg)   hBg.style.backgroundImage  = song.img ? `url(${song.img})` : '';
  if (hName) hName.textContent  = song.name;
  if (hArt)  hArt.textContent   = song.artist;
  if (hBtn)  hBtn.innerHTML = playing
    ? '<i class="fas fa-pause"></i>'
    : '<i class="fas fa-play"></i>';
}

/* Genre filter para el Top 10 */
let currentGenreFilter = 'all';
function filterTop10ByGenre(genre) {
  currentGenreFilter = genre;
  document.querySelectorAll('.t10-card').forEach((card, i) => {
    const song      = TOP10[i];
    const cardGenre = song ? (TOP10_GENRES[song.name] || 'other') : 'other';
    card.style.display = (genre === 'all' || cardGenre === genre) ? '' : 'none';
  });
}

/* Sección "Reproducido recientemente" */
function renderRecentSection() {
  const section = document.getElementById('recentSection');
  const scroll  = document.getElementById('recentScroll');
  if (!section || !scroll) return;
  if (!recentlyPlayed.length) { section.style.display = 'none'; return; }
  section.style.display = '';
  scroll.innerHTML = '';
  recentlyPlayed.slice(0, 10).forEach(song => {
    const card = el('div', 'recent-card');
    card.innerHTML = `
      <div class="recent-art" style="background:linear-gradient(135deg,#0a0a1a,#1a1a3a)">
        ${song.img
          ? `<img src="${song.img}" alt="" onerror="this.style.display='none'"
                  onload="this.style.display='block'" style="display:none">`
          : ''}
        <div class="recent-overlay"><i class="fas fa-play"></i></div>
      </div>
      <div class="recent-name">${song.name}</div>
      <div class="recent-artist">${song.artist}</div>`;
    card.addEventListener('click', () => selectSong(song));
    scroll.appendChild(card);
  });
}

/* Sección "Más escuchadas" */
function renderMostPlayed() {
  const section = document.getElementById('mostPlayedSection');
  const list    = document.getElementById('mostPlayedHome');
  if (!section || !list) return;
  const entries = Object.values(playCounts)
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 5);
  if (!entries.length) { section.style.display = 'none'; return; }
  section.style.display = '';
  list.innerHTML = '';
  const rankColors = ['#ffd700', '#c0c0c0', '#cd7f32', 'var(--cyan)', 'var(--cyan)'];
  entries.forEach((entry, i) => {
    const row = el('div', 'mp-row');
    row.innerHTML = `
      <span class="mp-rank" style="color:${rankColors[i]}">${i + 1}</span>
      <div class="mp-info">
        <div class="mp-name">${entry.name}</div>
        <div class="mp-artist">${entry.artist}</div>
      </div>
      <span class="mp-count"><i class="fas fa-headphones"></i> ${entry.plays}</span>`;
    row.addEventListener('click', () => {
      const found = [...TOP10, ...libraryList]
        .find(s => s.name === entry.name && s.artist === entry.artist);
      if (found) selectSong(found);
    });
    list.appendChild(row);
  });
}

/* ════════════════════════════════════════════════
   TANDA 3 — MINI PLAYER · TOAST · COMPARTIR
════════════════════════════════════════════════ */
function syncMiniPlayer() {
  const mp = document.getElementById('miniPlayer');
  if (!mp || mp.style.display === 'none') return;
  const song = currentList[currentTrack];
  if (!song) return;

  const mArt    = document.getElementById('miniArt');
  const mIcon   = mArt ? mArt.nextElementSibling : null;
  const mTitle  = document.getElementById('miniTitle');
  const mArtist = document.getElementById('miniArtist');
  const mBtn    = document.getElementById('miniBtnPlay');

  if (mArt) {
    if (song.img) {
      mArt.src = song.img;
      mArt.style.display = 'block';
      if (mIcon) mIcon.style.display = 'none';
    } else {
      mArt.style.display = 'none';
      if (mIcon) mIcon.style.display = '';
    }
  }
  if (mTitle)  mTitle.textContent  = song.name;
  if (mArtist) mArtist.textContent = song.artist;
  if (mBtn)    mBtn.innerHTML = playing
    ? '<i class="fas fa-pause"></i>'
    : '<i class="fas fa-play"></i>';
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  // doble rAF garantiza que el display:block ya aplicó antes de la transición
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('toast-visible')));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('toast-visible');
    setTimeout(() => { toast.style.display = 'none'; }, 280);
  }, 2800);
}

function shareSong() {
  const song = currentList[currentTrack];
  if (!song) return;
  const text = `🎵 ${song.name} — ${song.artist} | 4You Music`;
  if (navigator.share) {
    navigator.share({ title: song.name, text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text)
      .then(() => showToast('📋 Copiado al portapapeles'))
      .catch(() => showToast('⚠️ No se pudo compartir'));
  }
}

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
renderTop10();
renderPlaylists();
renderTrending();
renderHits();
renderBarChart();
renderGenres();
renderAds();
startVizLoop();
updateGreeting();
renderMostPlayed();

/* Carga la canción por defecto */
const PLAYER_DEFAULT = TOP10[0];
currentList  = TOP10;
currentTrack = 0;
document.querySelector('.player-song').textContent   = PLAYER_DEFAULT.name;
document.querySelector('.player-artist').textContent = PLAYER_DEFAULT.artist;
updateVinylArt(PLAYER_DEFAULT.img, false);
if (PLAYER_DEFAULT.src) {
  usingAudio = true;
  audio.src  = PLAYER_DEFAULT.src;
  audio.load();
}
setPlaying(false);
syncHero();

document.getElementById('libConnectBtn').addEventListener('click', connectFolder);

document.querySelectorAll('.stats-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.stats-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const v = this.dataset.tab;
    document.getElementById('statsTabContent').style.display  = v === 'stats'  ? '' : 'none';
    document.getElementById('queueTabContent').style.display  = v === 'queue'  ? '' : 'none';
    document.getElementById('lyricsTabContent').style.display = v === 'lyrics' ? '' : 'none';
    document.getElementById('eqTabContent').style.display     = v === 'eq'     ? '' : 'none';
    if (v === 'queue')  renderQueue();
    if (v === 'lyrics') fetchLyrics(currentList[currentTrack]);
  });
});

document.querySelectorAll('.lib-filter-item[data-filter]').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.lib-filter-item[data-filter]').forEach(b => b.classList.remove('lib-filter-active'));
    this.classList.add('lib-filter-active');
    currentLibFilter = this.dataset.filter;
    if (libraryList.length > 0) renderLibrary();
  });
});

document.querySelectorAll('.lib-filter-item[data-sort]').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.lib-filter-item[data-sort]').forEach(b => b.classList.remove('lib-sort-active'));
    this.classList.add('lib-sort-active');
    libSortBy = this.dataset.sort;
    if (libraryList.length > 0) renderLibrary();
  });
});
document.getElementById('libRefreshBtn').addEventListener('click', async () => {
  const root = await IDB.get('root');
  if (root) await initFromRoot(root);
});
tryRestoreLibrary();

/* ── Temas: cargar guardado ── */
try {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) { const { vars, key } = JSON.parse(saved); applyTheme(vars, key); }
} catch {}

document.querySelectorAll('.theme-preset-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTheme(THEME_PRESETS[btn.dataset.theme], btn.dataset.theme));
});

['colorAccent', 'colorSecondary', 'colorBg'].forEach(id => {
  const input = document.getElementById(id);
  const hex   = document.getElementById(id + 'Hex');
  if (input && hex) input.addEventListener('input', () => hex.textContent = input.value);
});

document.getElementById('themeApplyBtn').addEventListener('click', () => {
  const accent = document.getElementById('colorAccent').value;
  const second = document.getElementById('colorSecondary').value;
  const bg     = document.getElementById('colorBg').value;
  applyTheme({
    '--cyan': accent,  '--pink': second,  '--violet': accent,
    '--bg0':  bg,      '--bg1': lightenHex(bg, 5),  '--bg2': lightenHex(bg, 8),
    '--bg3':  lightenHex(bg, 14), '--card': lightenHex(bg, 10), '--card-h': lightenHex(bg, 16),
    '--border': lightenHex(bg, 12), '--border-bright': lightenHex(bg, 22),
  }, 'custom');
});

/* ── Stats: inicializar con datos guardados ── */
updateStatsUI();

/* ── Volumen ── */
audio.volume = currentVolume;
const volSlider = document.getElementById('volSlider');
volSlider.value = currentVolume * 100;
volSlider.style.setProperty('--vol-pct', currentVolume * 100 + '%');
updateVolIcon();

volSlider.addEventListener('input', function () {
  isMuted = false;
  setVolume(+this.value / 100);
  this.style.setProperty('--vol-pct', this.value + '%');
});

document.getElementById('btnMute').addEventListener('click', () => {
  isMuted = !isMuted;
  if (isMuted) {
    premuteVolume = currentVolume;
    setVolume(0);
    volSlider.value = 0;
    volSlider.style.setProperty('--vol-pct', '0%');
  } else {
    setVolume(premuteVolume);
    volSlider.value = premuteVolume * 100;
    volSlider.style.setProperty('--vol-pct', premuteVolume * 100 + '%');
  }
});

/* ── Crossfade ── */
document.getElementById('btnCrossfade').addEventListener('click', function () {
  crossfadeEnabled = !crossfadeEnabled;
  this.classList.toggle('active', crossfadeEnabled);
});

/* ── Ecualizador ── */
for (let i = 0; i < 5; i++) {
  const sl = document.getElementById(`eq${i}`);
  const db = document.getElementById(`eq${i}db`);
  if (!sl) continue;
  sl.style.setProperty('--eq-pct', '50');
  sl.addEventListener('input', function () {
    const g = +this.value;
    if (eqNodes[i]) eqNodes[i].gain.value = g;
    if (db) db.textContent = (g > 0 ? '+' : '') + g;
    this.style.setProperty('--eq-pct', ((g + 12) / 24 * 100).toFixed(1));
    document.querySelectorAll('.eq-preset-btn').forEach(b => b.classList.remove('active'));
    const gains = Array.from({ length: 5 }, (_, j) => +(document.getElementById(`eq${j}`)?.value || 0));
    localStorage.setItem('4you_eq', JSON.stringify(gains));
  });
}

document.querySelectorAll('.eq-preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.eq-preset-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyEQ(EQ_PRESETS[btn.dataset.preset]);
  });
});

/* restaurar preset EQ guardado en UI */
const savedEQData = JSON.parse(localStorage.getItem('4you_eq') || 'null');
if (savedEQData) {
  savedEQData.forEach((g, i) => {
    const sl = document.getElementById(`eq${i}`);
    const db = document.getElementById(`eq${i}db`);
    if (sl) { sl.value = g; sl.style.setProperty('--eq-pct', ((g + 12) / 24 * 100).toFixed(1)); }
    if (db) db.textContent = (g > 0 ? '+' : '') + g;
  });
}

/* ── Velocidad de reproducción ── */
document.getElementById('btnSpeed').addEventListener('click', () => {
  speedIdx = (speedIdx + 1) % SPEEDS.length;
  const spd = SPEEDS[speedIdx];
  audio.playbackRate = spd;
  document.getElementById('speedLabel').textContent = spd + '×';
  document.getElementById('btnSpeed').classList.toggle('active', spd !== 1);
});

/* ── Sleep timer ── */
document.getElementById('btnSleep').addEventListener('click', e => {
  e.stopPropagation();
  const popup = document.getElementById('sleepPopup');
  popup.style.display = popup.style.display === 'none' ? '' : 'none';
});

document.querySelectorAll('.sleep-popup button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const mins = +btn.dataset.mins;
    setSleepTimer(mins);
    if (mins) btn.classList.add('sleep-active');
    document.getElementById('sleepPopup').style.display = 'none';
  });
});

document.addEventListener('click', () => {
  const popup = document.getElementById('sleepPopup');
  if (popup) popup.style.display = 'none';
});

/* ── Búsqueda en biblioteca ── */
document.getElementById('libSearchInput').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  const items = document.querySelectorAll('.lib-item');
  let visible = 0;

  items.forEach(item => {
    const title  = item.querySelector('.lib-title')?.textContent.toLowerCase()  || '';
    const artist = item.querySelector('.lib-artist')?.textContent.toLowerCase() || '';
    const show   = !q || title.includes(q) || artist.includes(q);
    item.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  // Ocultar encabezados de artista si no tienen ítems visibles
  document.querySelectorAll('.lib-artist-header').forEach(header => {
    let next = header.nextElementSibling;
    let hasVisible = false;
    while (next && !next.classList.contains('lib-artist-header')) {
      if (next.style.display !== 'none') hasVisible = true;
      next = next.nextElementSibling;
    }
    header.style.display = hasVisible ? '' : 'none';
  });

  const countEl = document.getElementById('libSearchCount');
  if (countEl) countEl.textContent = q ? `${visible} resultado${visible !== 1 ? 's' : ''}` : '';
});

/* ── Mini Player flotante ── */
let miniVisible = false;

document.getElementById('btnMiniPlayer').addEventListener('click', () => {
  miniVisible = !miniVisible;
  const mp = document.getElementById('miniPlayer');
  mp.style.display = miniVisible ? 'flex' : 'none';
  document.getElementById('btnMiniPlayer').classList.toggle('active', miniVisible);
  if (miniVisible) syncMiniPlayer();
});

document.getElementById('miniBtnClose').addEventListener('click', () => {
  miniVisible = false;
  document.getElementById('miniPlayer').style.display = 'none';
  document.getElementById('btnMiniPlayer').classList.remove('active');
});

document.getElementById('miniBtnPlay').addEventListener('click', () => setPlaying(!playing));

document.getElementById('miniBtnNext').addEventListener('click', () => {
  if (shuffleMode) {
    let next;
    do { next = Math.floor(Math.random() * currentList.length); }
    while (next === currentTrack && currentList.length > 1);
    currentTrack = next;
  } else {
    currentTrack = (currentTrack + 1) % currentList.length;
  }
  selectSong(currentList[currentTrack]);
});

document.getElementById('miniBtnPrev').addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + currentList.length) % currentList.length;
  selectSong(currentList[currentTrack]);
});

/* Drag del mini player con mouse */
{
  const mp = document.getElementById('miniPlayer');
  let mdrag = false, mdx = 0, mdy = 0;
  mp.addEventListener('mousedown', e => {
    if (e.target.closest('.mini-btn')) return;
    mdrag = true;
    const r = mp.getBoundingClientRect();
    mdx = e.clientX - r.left;
    mdy = e.clientY - r.top;
    mp.classList.add('dragging');
  });
  document.addEventListener('mousemove', e => {
    if (!mdrag) return;
    const x = Math.max(0, Math.min(window.innerWidth  - mp.offsetWidth,  e.clientX - mdx));
    const y = Math.max(0, Math.min(window.innerHeight - mp.offsetHeight, e.clientY - mdy));
    mp.style.left   = x + 'px';
    mp.style.top    = y + 'px';
    mp.style.right  = 'auto';
    mp.style.bottom = 'auto';
  });
  document.addEventListener('mouseup', () => {
    mdrag = false;
    mp.classList.remove('dragging');
  });
}

/* Progreso del mini player — sincronizado con el main 100 ms interval */
setInterval(() => {
  const fill = document.getElementById('miniProgressFill');
  if (fill && usingAudio && audio.duration) {
    fill.style.width = ((audio.currentTime / audio.duration) * 100).toFixed(1) + '%';
  }
}, 100);

/* ── Compartir canción ── */
document.getElementById('btnShare').addEventListener('click', shareSong);

/* ── Hero play/pause ── */
document.getElementById('heroBtnPlay').addEventListener('click', () => setPlaying(!playing));

/* ── Genre chips ── */
document.querySelectorAll('.genre-chip').forEach(chip => {
  chip.addEventListener('click', function () {
    document.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    filterTop10ByGenre(this.dataset.genre);
  });
});

/* ════════════════════════════════════════════════
   PERFIL — foto · nombre · estadísticas
════════════════════════════════════════════════ */
const PROFILE_KEY = '4you_profile';

/** Aplica una foto (dataUrl string | null) al widget y a la sección perfil */
function applyProfilePhoto(dataUrl) {
  // Mini avatar en el widget del reproductor
  const wrap  = document.getElementById('avatarImgEl');
  const thumb = document.getElementById('avatarPhoto');
  if (thumb) {
    thumb.src          = dataUrl || '';
    thumb.style.display = dataUrl ? 'block' : 'none';
  }
  if (wrap) wrap.classList.toggle('has-photo', !!dataUrl);

  // Avatar grande en la sección perfil
  const bigPhoto    = document.getElementById('profileBigPhoto');
  const placeholder = document.getElementById('profileAvatarPlaceholder');
  if (bigPhoto) {
    bigPhoto.src           = dataUrl || '';
    bigPhoto.style.display = dataUrl ? 'block' : 'none';
  }
  if (placeholder) placeholder.style.display = dataUrl ? 'none' : '';
}

/** Lee el perfil guardado y lo aplica al arrancar */
function loadProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
    if (saved.photo) applyProfilePhoto(saved.photo);
    if (saved.name) {
      const label = document.querySelector('.username-label');
      if (label) label.textContent = saved.name;
      const input = document.getElementById('profileUsernameInput');
      if (input) input.value = saved.name;
    }
  } catch { /* si localStorage está bloqueado, ignorar */ }
}

/** Guarda nombre y muestra toast */
function saveProfile() {
  try {
    const existing = JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
    const nameInput = document.getElementById('profileUsernameInput');
    const name = (nameInput ? nameInput.value.trim() : '') || existing.name || '4You';
    const updated = { ...existing, name };
    localStorage.setItem(PROFILE_KEY, JSON.stringify(updated));
    const label = document.querySelector('.username-label');
    if (label) label.textContent = name;
    showToast('✅ Perfil guardado');
  } catch {}
}

/** Refresca las cifras en la sección perfil */
function updateProfileStats() {
  const plays    = Object.values(playCounts).reduce((s, v) => s + v.plays, 0);
  const favCount = favorites.size;
  const libCount = libraryList.length;
  const p1 = document.getElementById('pstatPlays');
  const p2 = document.getElementById('pstatFavs');
  const p3 = document.getElementById('pstatLib');
  if (p1) p1.textContent = plays.toLocaleString();
  if (p2) p2.textContent = favCount;
  if (p3) p3.textContent = libCount;
}

/* ── Click en avatar grande → abre el file picker ── */
document.getElementById('profileBigAvatar').addEventListener('click', () => {
  document.getElementById('profileFileInput').click();
});

/* ── Archivo seleccionado ── */
document.getElementById('profileFileInput').addEventListener('change', function () {
  const file = this.files[0];
  if (!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();
  reader.onload = e => {
    const dataUrl = e.target.result;
    applyProfilePhoto(dataUrl);
    try {
      const existing = JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
      existing.photo = dataUrl;
      localStorage.setItem(PROFILE_KEY, JSON.stringify(existing));
    } catch {}
    showToast('📸 Foto de perfil actualizada');
  };
  reader.readAsDataURL(file);
  this.value = ''; // permite volver a elegir el mismo archivo
});

/* ── Quitar foto ── */
document.getElementById('profileRemoveBtn').addEventListener('click', () => {
  applyProfilePhoto(null);
  try {
    const existing = JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
    delete existing.photo;
    localStorage.setItem(PROFILE_KEY, JSON.stringify(existing));
  } catch {}
  showToast('🗑️ Foto eliminada');
});

/* ── Guardar nombre ── */
document.getElementById('profileSaveBtn').addEventListener('click', saveProfile);

/* ── También guardar con Enter en el input ── */
document.getElementById('profileUsernameInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); saveProfile(); }
});

/* ── Cargar perfil al arrancar ── */
loadProfile();
