// Working radio stations database
const radioStations = {
  "Afghanistan": [
    {
      name: "Radio Afghanistan",
      url: "http://s9.voscast.com:7364/stream",
      description: "National Radio"
    },
    {
      name: "Arman FM",
      url: "https://streams.radio.co/s4c11c0f31/listen",
      description: "Pop & News"
    },
    // Add more stations with similar structure
  ],
  "Albania": [
    {
      name: "Radio Tirana",
      url: "http://79.106.48.2:8000/radiotirana1",
      description: "Public Radio"
    },
    {
      name: "Top Albania Radio",
      url: "http://cp1.sednastream.com:8002/stream",
      description: "Top Hits"
    },
    // Add more stations with similar structure
  ],
  "Algeria": [
    {
      name: "Radio Algérienne",
      url: "https://webradio.tda.dz/Chaine1_64K.mp3",
      description: "National Radio"
    },
    {
      name: "Jil FM",
      url: "https://webradio.tda.dz/Jeunesse_64K.mp3",
      description: "Youth Radio"
    },
    // Add more stations with similar structure
  ],
  "Argentina": [
    {
      name: "Radio Nacional",
      url: "https://sa.mp3.icecast.magma.edge-access.net:7200/sc_rad1",
      description: "National Radio"
    },
    {
      name: "La 100",
      url: "https://buecrplb01.cienradios.com.ar/la100.aac",
      description: "Pop & Rock"
    },
    // Add more stations with similar structure
  ],
  "Australia": [
    {
      name: "ABC Radio National",
      url: "https://live-radio01.mediahubaustralia.com/2RNW/mp3/",
      description: "Public Radio"
    },
    {
      name: "Triple J",
      url: "https://live-radio01.mediahubaustralia.com/2TJW/mp3/",
      description: "Alternative Music"
    },
    // Add more stations with similar structure
  ],
  "Netherlands": [
    {
      name: "NPO Radio 1",
      url: "https://icecast.omroep.nl/radio1-bb-mp3",
      description: "News & Sport"
    },
    {
      name: "NPO Radio 2",
      url: "https://icecast.omroep.nl/radio2-bb-mp3",
      description: "Pop & Rock"
    },
    {
      name: "NPO 3FM",
      url: "https://icecast.omroep.nl/3fm-bb-mp3",
      description: "Alternative & Pop"
    },
    {
      name: "Radio 538",
      url: "https://21253.live.streamtheworld.com/RADIO538.mp3",
      description: "Top 40 Hits"
    },
    {
      name: "Q-Music",
      url: "https://stream.qmusic.nl/qmusic/mp3",
      description: "Contemporary Hits"
    },
    {
      name: "Sky Radio",
      url: "https://19993.live.streamtheworld.com/SKYRADIO.mp3",
      description: "Non-Stop Music"
    },
    {
      name: "Radio Veronica",
      url: "https://20853.live.streamtheworld.com/VERONICA.mp3",
      description: "Rock & Pop Classics"
    },
    {
      name: "BNR Nieuwsradio",
      url: "https://stream.bnr.nl/bnr_mp3_128_03",
      description: "News & Business"
    },
    {
      name: "Slam!",
      url: "https://stream.slam.nl/slam_mp3",
      description: "Dance & Electronic"
    },
    {
      name: "Radio 10",
      url: "https://21223.live.streamtheworld.com/RADIO10.mp3",
      description: "Classic Hits"
    }
  ],
  "Spain": [
    {
      name: "Radio Nacional de España",
      url: "https://rtvelivestream.akamaized.net/rne_r1_main.m3u8",
      description: "National Public Radio"
    },
    {
      name: "Los 40 Principales",
      url: "https://19993.live.streamtheworld.com/LOS40_SC",
      description: "Top 40 & Pop Music"
    },
    {
      name: "Cadena SER",
      url: "https://21633.live.streamtheworld.com/CADENASER.mp3",
      description: "News & Talk Radio"
    },
    {
      name: "Radio 3",
      url: "https://rtvelivestream.akamaized.net/rne_r3_main.m3u8",
      description: "Alternative & Cultural"
    },
    {
      name: "Cadena COPE",
      url: "https://flucast-m04-06.flumotion.com/cope/madrid.mp3",
      description: "News & Talk"
    },
    {
      name: "Europa FM",
      url: "https://live-audio.europafm.com/radio/europafm/master.m3u8",
      description: "Contemporary Hit Radio"
    },
    {
      name: "Radio Marca",
      url: "https://22333.live.streamtheworld.com/RADIOMARCA_NACIONAL.mp3",
      description: "Sports Radio"
    },
    {
      name: "M80 Radio",
      url: "https://19993.live.streamtheworld.com/M80RADIO_SC",
      description: "Classic Hits"
    },
    {
      name: "Radio Clásica RNE",
      url: "https://rtvelivestream.akamaized.net/rne_r2_main.m3u8",
      description: "Classical Music"
    },
    {
      name: "Kiss FM España",
      url: "https://kissfm.kissfmradio.cires21.com/kissfm.mp3",
      description: "Pop & Rock Music"
    }
  ],
  "United States": [
    {
      name: "KEXP Seattle",
      url: "https://kexp.streamguys1.com/kexp160.aac",
      description: "Alternative & Indie Music"
    },
    {
      name: "WFMU",
      url: "https://stream0.wfmu.org/freeform-128k",
      description: "Freeform Radio"
    },
    {
      name: "KCRW",
      url: "https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air",
      description: "Eclectic Music & Culture"
    },
    {
      name: "NPR",
      url: "https://nprdmp-live01-mp3.akacast.akamaistream.net/7/998/364916/v1/npr.akacast.akamaistream.net/nprdmp_live01_mp3",
      description: "National Public Radio"
    },
    {
      name: "WXPN",
      url: "https://wxpnhi.xpn.org/xpnhi",
      description: "Adult Alternative"
    },
    {
      name: "Classical KUSC",
      url: "https://stream.kusc.org/classical-mp3",
      description: "Classical Music"
    },
    {
      name: "Jazz24",
      url: "https://live.wostreaming.net/direct/ppm-jazz24aac-ibc1",
      description: "24/7 Jazz"
    },
    {
      name: "WBGO",
      url: "https://wbgo.streamguys1.com/wbgo",
      description: "Jazz Radio"
    },
    {
      name: "Radio Paradise",
      url: "https://stream.radioparadise.com/aac-320",
      description: "Eclectic Mix"
    },
    {
      name: "SomaFM Groove Salad",
      url: "https://ice1.somafm.com/groovesalad-256-mp3",
      description: "Ambient/Electronic"
    }
  ],
  "United Kingdom": [
    {
      name: "BBC Radio 1",
      url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one",
      description: "Contemporary Hit Radio"
    },
    {
      name: "BBC Radio 2",
      url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two",
      description: "Adult Contemporary"
    },
    {
      name: "BBC Radio 6 Music",
      url: "https://stream.live.vc.bbcmedia.co.uk/bbc_6music",
      description: "Alternative Music"
    },
    {
      name: "Capital FM",
      url: "https://media-ice.musicradio.com/CapitalMP3",
      description: "Pop Music"
    },
    {
      name: "Classic FM",
      url: "https://media-ice.musicradio.com/ClassicFMMP3",
      description: "Classical Music"
    },
    {
      name: "Absolute Radio",
      url: "https://live.absoluteradio.co.uk/absoluteradio.mp3",
      description: "Classic Rock"
    },
    {
      name: "Kiss FM",
      url: "https://stream.live.kissfmuk.com/kiss_uk",
      description: "Dance & Urban"
    },
    {
      name: "Jazz FM",
      url: "https://stream.live.jazz.fm/jazz",
      description: "Jazz Music"
    },
    {
      name: "Radio X",
      url: "https://media-ice.musicradio.com/RadioXUKMP3",
      description: "Alternative Rock"
    },
    {
      name: "Smooth Radio",
      url: "https://media-ice.musicradio.com/SmoothUK",
      description: "Easy Listening"
    }
  ],
  "Vietnam": [
    {
      name: "VOV1",
      url: "https://str.vov.gov.vn/vovlive/vov1.sdp_aac/playlist.m3u8",
      description: "News & Current Affairs"
    },
    {
      name: "VOV3",
      url: "https://str.vov.gov.vn/vovlive/vov3.sdp_aac/playlist.m3u8",
      description: "Music & Entertainment"
    },
    // Add more stations with similar structure
  ],
  "Zimbabwe": [
    {
      name: "Radio Zimbabwe",
      url: "http://41.220.21.70:88/broadwave.mp3",
      description: "National Radio"
    },
    {
      name: "Star FM",
      url: "http://41.220.21.70:88/stream/2/",
      description: "Contemporary Music"
    },
    // Add more stations with similar structure
  ]
};

const languages = {
  en: {
    selectCountry: "Select Country",
    selectLanguage: "Select Language",
    login: "Login",
    createAccount: "Create Account",
    english: "English",
    spanish: "Spanish",
    dutch: "Dutch",
    arabic: "Arabic",
    french: "French",
    radioStations: "Radio Stations",
    madeWith: "Made by Mohamed Nassereddine Hamouda",
    copyright: " 2025 Hmaida Radio",
    globalGroove: "Hmaida Radio",
    error: "Error playing station",
    unableToPlay: "Unable to play station"
  },
  es: {
    selectCountry: "Seleccionar País",
    selectLanguage: "Seleccionar Idioma",
    login: "Iniciar Sesión",
    createAccount: "Crear Cuenta",
    english: "Inglés",
    spanish: "Español",
    dutch: "Holandés",
    arabic: "Árabe",
    french: "Francés",
    radioStations: "Emisoras de Radio",
    madeWith: "Hecho por Mohamed Nassereddine Hamouda",
    copyright: " 2025 Radio Hmaida",
    globalGroove: "Radio Hmaida",
    error: "Error al reproducir la emisora",
    unableToPlay: "No se puede reproducir la emisora"
  },
  nl: {
    selectCountry: "Land Selecteren",
    selectLanguage: "Taal Selecteren",
    login: "Inloggen",
    createAccount: "Account Aanmaken",
    english: "Engels",
    spanish: "Spaans",
    dutch: "Nederlands",
    arabic: "Arabisch",
    french: "Frans",
    radioStations: "Radiozenders",
    madeWith: "Gemaakt door Mohamed Nassereddine Hamouda",
    copyright: " 2025 Hmaida Radio",
    globalGroove: "Hmaida Radio",
    error: "Fout bij het afspelen van zender",
    unableToPlay: "Kan zender niet afspelen"
  },
  ar: {
    selectCountry: "اختر الدولة",
    selectLanguage: "اختر اللغة",
    login: "تسجيل الدخول",
    createAccount: "إنشاء حساب",
    english: "الإنجليزية",
    spanish: "الإسبانية",
    dutch: "الهولندية",
    arabic: "العربية",
    french: "الفرنسية",
    radioStations: "محطات الراديو",
    madeWith: "من صنع محمد ناصر الدين حمودة",
    copyright: " 2025 راديو حميدة",
    globalGroove: "راديو حميدة",
    error: "خطأ في تشغيل المحطة",
    unableToPlay: "لا يمكن تشغيل المحطة"
  },
  fr: {
    selectCountry: "Sélectionner le Pays",
    selectLanguage: "Sélectionner la Langue",
    login: "Connexion",
    createAccount: "Créer un Compte",
    english: "Anglais",
    spanish: "Espagnol",
    dutch: "Néerlandais",
    arabic: "Arabe",
    french: "Français",
    radioStations: "Stations de Radio",
    madeWith: "Créé par Mohamed Nassereddine Hamouda",
    copyright: " 2025 Radio Hmaida",
    globalGroove: "Radio Hmaida",
    error: "Erreur de lecture de la station",
    unableToPlay: "Impossible de lire la station"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('country-select');
  const audioPlayer = document.getElementById('audio-player');
  const stationList = document.getElementById('station-list');
  const trackTitle = document.getElementById('track-title');
  const customControls = document.getElementById('custom-controls');
  let currentStationIndex = -1;

  // Populate country select
  Object.keys(radioStations).sort().forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  function displayStations(country) {
    stationList.innerHTML = ''; // Clear current stations
    if (!country || !radioStations[country]) return;

    radioStations[country].forEach((station, index) => {
      const card = document.createElement('div');
      card.className = 'station-card';
      card.setAttribute('data-index', index);
      
      card.innerHTML = `
        <h3>${station.name}</h3>
        <p>${station.description}</p>
      `;
      
      card.addEventListener('click', () => {
        playStation(country, index);
      });
      
      stationList.appendChild(card);
    });
  }

  function playStation(country, index) {
    if (index >= 0 && index < radioStations[country].length) {
      document.querySelectorAll('.station-card').forEach(card => {
        card.classList.remove('active');
      });
      
      const station = radioStations[country][index];
      audioPlayer.src = station.url;
      trackTitle.textContent = `${station.name} - ${station.description}`;
      audioPlayer.play()
        .catch(error => {
          console.error("Playback failed:", error);
          trackTitle.textContent = "Unable to play station";
        });
      
      document.querySelector(`[data-index="${index}"]`).classList.add('active');
      currentStationIndex = index;
      updatePlayPauseButton();
    }
  }

  // Country select event listener
  countrySelect.addEventListener('change', (e) => {
    displayStations(e.target.value);
    audioPlayer.pause();
    trackTitle.textContent = '';
    document.querySelector('.playing-animation').style.display = 'none';
  });

  function updatePlayPauseButton() {
    const playPauseBtn = document.getElementById('play-pause');
    playPauseBtn.innerHTML = audioPlayer.paused ? 
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>' :
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
  }

  // Create custom controls
  customControls.innerHTML = `
    <div class="playback-controls">
      <button id="prev" class="control-btn">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
      </button>
      <button id="play-pause" class="control-btn play-pause">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
      </button>
      <button id="next" class="control-btn">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
      </button>
    </div>
    <div class="volume-control">
      <button id="mute" class="control-btn">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
      </button>
      <input type="range" id="volume" min="0" max="1" step="0.1" value="1">
    </div>
  `;

  // Add previous/next functionality
  document.getElementById('prev').addEventListener('click', () => {
    const country = countrySelect.value;
    if (currentStationIndex > 0) {
      playStation(country, currentStationIndex - 1);
    } else {
      // Wrap to end of list
      playStation(country, radioStations[country].length - 1);
    }
  });

  document.getElementById('next').addEventListener('click', () => {
    const country = countrySelect.value;
    if (currentStationIndex < radioStations[country].length - 1) {
      playStation(country, currentStationIndex + 1);
    } else {
      // Wrap to beginning of list
      playStation(country, 0);
    }
  });

  document.getElementById('play-pause').addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
    updatePlayPauseButton();
  });

  document.getElementById('mute').addEventListener('click', () => {
    audioPlayer.muted = !audioPlayer.muted;
    document.getElementById('mute').innerHTML = audioPlayer.muted ?
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>' :
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>';
  });

  document.getElementById('volume').addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
  });

  audioPlayer.addEventListener('play', () => {
    document.querySelector('.playing-animation').style.display = 'flex';
    updatePlayPauseButton();
  });

  audioPlayer.addEventListener('pause', () => {
    document.querySelector('.playing-animation').style.display = 'none';
    updatePlayPauseButton();
  });

  audioPlayer.addEventListener('error', () => {
    trackTitle.textContent = "Error playing station";
    document.querySelector('.playing-animation').style.display = 'none';
  });

  // Get user's country
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const userCountry = data.country_name;
      if (radioStations[userCountry]) {
        countrySelect.value = userCountry;
        displayStations(userCountry);
      }
    })
    .catch(error => console.error('Error fetching country:', error));

  // Language switcher
  const languageSelect = document.getElementById('language-select');
  let currentLang = 'en';

  function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    document.getElementById('login-btn').textContent = languages[lang].login;
    document.getElementById('create-account-btn').textContent = languages[lang].createAccount;
    document.getElementById('country-select').querySelector('option[value=""]').textContent = languages[lang].selectCountry;
    document.querySelector('h1').textContent = languages[lang].globalGroove;
    document.querySelector('h2').textContent = languages[lang].radioStations;
    document.querySelector('footer p:first-child').textContent = languages[lang].madeWith;
    document.querySelector('footer p:last-child').textContent = languages[lang].copyright;
    
    // Update language select options
    const langSelect = document.getElementById('language-select');
    langSelect.querySelector('option[value="en"]').textContent = languages[lang].english;
    langSelect.querySelector('option[value="es"]').textContent = languages[lang].spanish;
    langSelect.querySelector('option[value="nl"]').textContent = languages[lang].dutch;
    langSelect.querySelector('option[value="ar"]').textContent = languages[lang].arabic;
    langSelect.querySelector('option[value="fr"]').textContent = languages[lang].french;
    
    // Update error messages
    if (trackTitle.textContent === "Error playing station") {
      trackTitle.textContent = languages[lang].error;
    } else if (trackTitle.textContent === "Unable to play station") {
      trackTitle.textContent = languages[lang].unableToPlay;
    }
  }

  languageSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
  });

  // Initialize language
  updateLanguage('en');
});