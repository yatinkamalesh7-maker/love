/* ===================================================================
   ROMANTIC WEBSITE JAVASCRIPT
   Couple memories, live love counter, interactive slideshow,
   romantic mini-games, ambient floating hearts & sound synthesizer.
   =================================================================== */

// --- Default Data & LocalStorage Keys ---
const STORAGE_KEY_PROFILE = 'romantic_couple_profile';
const STORAGE_KEY_SLIDES = 'romantic_couple_slides';
const STORAGE_KEY_TIMELINE = 'romantic_couple_timeline';

const defaultProfile = {
  partner1: "Yatin",
  partner2: "Laya",
  anniversary: "2026-01-10T00:00:00",
  quote: "In a world full of billion people. i choose you, i love youu so muchhh mwahhahahah you the best girlfriend in the entire universe!!<333",
  letterText: "I built this tiny website to keep this as our memory, and to see how far we have come all this way to where we are now.\n\nMwahhh for filling my days with joy, your laugh, your patience, and the purest love I have ever known and mwah for always being with me, udk how grateful i am to be with you, laya.\n\nNo matter how busy the world gets, this place will always be here to remind us of our love and memory of us and we will keeping cherishing each other, fighting, ragebaiting and getting pissed over small things and still flirting and laughing with each other. i want this for life, laya. i love you babygurl.",
  letterSigner: "Your Yatin❤️"
};

const defaultSlides = [
  {
    image: "photo1.jpg",
    title: "motta maadi meet 1",
    location: "motta maadi on 28 febuary",
    desc: "first time that we met and when we had our first kiss :) and you gave me hickyy and huggiess and kichesss an unforgettable moment that i spent with my cutie <3"
  },
  {
    image: "photo3.jpg",
    title: "PONGAL FAIRR PEAKK",
    location: "annai arul pee school on 10 january",
    desc: "you wore big maja earrings for me, and u looked so beautifull i was mostly searching for you. we werent a couple back then, but we know we had something for each otherr<3"
  },
  {
    image: "photo2.jpg",
    title: "motta maadi meet 2",
    location: "motta maadi on 28 march",
    desc: "motta maadi meett number 2!! we madeoutt as always you kinda slept while hugging me, we kich all over each other face and i fell on your feet before u left asking for 10 mins XD"
  },
  {
    image: "photo4.jpg",
    title: "lovely sweet giftsss",
    location: "my home on some day",
    desc: "i made you all these sweet and lovely gifts to remind you that you are relly special to me<3"
  },
  {
    image: "photo5.jpg",
    title: "random vc",
    location: "my home on september 18 2026 10:19 pm",
    desc: "we had fun talking and flirting and making each other blush and kiches<3333333"
  },
  {
    image: "photo6.png",
    title: "ONLINEE DATEE",
    location: "my home on october 25",
    desc: "we playedd doodle and many other games and we spent time togather, i love spending time with you cutie. mwahahhahha and then we took this photobooth to keep as memoryy."
  },
  {
    image: "photo7.png",
    title: "Our first vc as a couplee",
    location: "my home on 19 january",
    desc: "we talked abt things tht i don remember but i remember you always blushing apove. it was one of our first calls as a couple ra, i love you alwayss"
  },
  {
    image: "photo9.png",
    title: "turmeric face laya cutiee :)",
    location: "randomm vccc on april 26 on 9:16 pm",
    desc: "you called me after applying turmeric on your face. when you called me back in december 2025, it was our first call and you had turmeric apove looking like smiley emoji still so fucking cuteeeeeeee<3333"
  },
  {
    image: "photo10.jpg",
    title: "fav picc :o",
    location: "your hometown on 25 october",
    desc: "you sent me this pic saying dad took. it became one of my fac pics of you. looking like a baby eating ice cream you lit a baby di."
  },
  {
    image: "photo8.png",
    title: "wonderful beautiful saree queennn :O",
    location: "your home on april 2",
    desc: "you said you wanted to try a saree you were going to wear for a wedding to attend. so you wore it and showed me. and istg you looked so stunning. idk im just madly in love with you baby"
  },
  {
    image: "photo11.png",
    title: "DIWALI DOLLII",
    location: "your hometown on nov 9",
    desc: "before you went to burst crackers you called me and showed your outfit and you looked so GOOODDDD, YOU MELTING MEEEE I WANT TO SQUEEZE YOU TO DEATH."
  },
  {
    image: "photo12.png",
    title: "RANDOM VCC 33 while nap",
    location: "Home on november 14 2:55 pm",
    desc: "we talked and kiched and you were covering blanket around yourself like a baby so adorableee! and then after call we fell asleep togatherr mwahh"
  }   
];

const defaultTimeline = [
  {
    date: "School days",
    title: "When Our Eyes First Met",
    desc: "i rememeber you sitting 3 or 2 seats before me in bus and i wonder 'damn, she kinda looks pretty.' but i was hesitated and we started talking as bro and sis"
  },
  {
    date: "our bond grew",
    title: "Bus days",
    desc: "we used to talk about hentai lmao, apro we talked chumma about random things, you said pick up lines i said too as bro and sis poda."
  },
  {
    date: "The Leap",
    title: "the gap",
    desc: "after a large break of not talking, you approached me in insta and we found each other again"
  },
  {
    date: "First time",
    title: "feelings",
    desc: "after my kerala trip, we both started to realise that we had feelings for each other."
  },
  {
    date: "Today & Beyond",
    title: "Loving You More Everyday",
    desc: "rn we are the best and most perfect couple there is. and i jus love you so much cutie. you always gon be my baby."
  }
];

const loveReasons = [
  "The way your eyes jus look at me, omg i will die and get lost in your eyes.",
  "How your hugs make me feel like a babyy im your babyy",
  "You only being kind only to mee yes im selfish idc abt others fuck others.",
  "The adorable way you get excited over your favorite foodss",
  "How you believe in me even when i doubt myself. i love you.",
  "Your warm hands holding mine in cold weather. I NEED.",
  "The random silly dances i gon do with you soonn while hugging youu",
  "How gorgeous you look first thing in the morning with messy hair. and those red cheeks omgg",
  "Your voice when you whisper goodnight and kich meee.",
  "How you jus forget something you were talking abt 2 seconds ago like a goldfish lmao",
  "The way you make any boring errand feel like an adventure.",
  "How deeply you care, love, and protect me from the darkness of this world.",
  "Your smile, i goon to your smile.",
  "The comfort of silence when we are together and need no words. omg i love this, doing nothing and looking at each other.",
  "Simply because you are you, and nobody in the universe can EVER BE YOU, laya my babygurl."
];

// --- Application State ---
let profile = loadStorage(STORAGE_KEY_PROFILE, defaultProfile);
let slides = loadStorage(STORAGE_KEY_SLIDES, defaultSlides);
let timeline = loadStorage(STORAGE_KEY_TIMELINE, defaultTimeline);
let currentSlideIndex = 0;
let carouselTimer = null;

// --- Helper Functions ---
function loadStorage(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

// --- DOM Initializer ---
document.addEventListener('DOMContentLoaded', () => {
  initAmbientHearts();
  initNavbar();
  renderProfile();
  initCounter();
  renderSlideshow();
  renderTimeline();
  initMemoryGame();
  initQuizGame();
  initReasonsJar();
  initEnvelope();
  initModals();
  initMusicBox();
});

/* ===================================================================
   1. AMBIENT FLOATING HEARTS CANVAS
   =================================================================== */
function initAmbientHearts() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const heartShapes = ['❤️', '💖', '✨', '🌸', '💕'];

  class FloatingParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.size = Math.random() * 14 + 10;
      this.speedY = Math.random() * 0.8 + 0.3;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.char = heartShapes[Math.floor(Math.random() * heartShapes.length)];
      this.swing = Math.random() * 2;
    }
    update() {
      this.y -= this.speedY;
      this.x += Math.sin(this.y * 0.01) * 0.5;
      if (this.y < -30) this.reset();
    }
    draw() {
      ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px serif`;
      ctx.fillText(this.char, this.x, this.y);
    }
  }

  // Create 24 gentle floating particles
  for (let i = 0; i < 24; i++) {
    const p = new FloatingParticle();
    p.y = Math.random() * height; // initial spread
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

/* ===================================================================
   2. NAVBAR & MOBILE MENU
   =================================================================== */
function initNavbar() {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ===================================================================
   3. PROFILE RENDERING & LIVE ANNIVERSARY COUNTER
   =================================================================== */
function renderProfile() {
  document.getElementById('partner1-name').textContent = profile.partner1;
  document.getElementById('partner2-name').textContent = profile.partner2;
  document.getElementById('nav-names').textContent = `${profile.partner1} & ${profile.partner2}`;

  document.querySelectorAll('.partner-name-display').forEach(el => {
    el.textContent = profile.partner2;
  });

  const quoteEl = document.getElementById('hero-quote');
  if (quoteEl) quoteEl.textContent = `"${profile.quote}"`;

  // Anniversary date display
  const annivDate = new Date(profile.anniversary);
  if (!isNaN(annivDate)) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = annivDate.toLocaleDateString(undefined, options);
    const annivTextEl = document.getElementById('anniversary-text');
    if (annivTextEl) annivTextEl.textContent = dateFormatted;

    document.querySelectorAll('.anniversary-year-display').forEach(el => {
      el.textContent = annivDate.getFullYear();
    });
  }

  // Love letter
  const letterBody = document.getElementById('letter-body');
  if (letterBody) {
    letterBody.innerHTML = profile.letterText
      .split('\n\n')
      .map(p => `<p>${p.trim()}</p>`)
      .join('');
  }
  const signerEl = document.getElementById('letter-signer');
  if (signerEl) signerEl.textContent = profile.letterSigner;
}

function initCounter() {
  function updateTimer() {
    const start = new Date(profile.anniversary).getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, now - start);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = pad(hours);
    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ===================================================================
   4. INTERACTIVE PHOTO SLIDESHOW (CAROUSEL)
   =================================================================== */
function renderSlideshow() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!track || !dotsContainer) return;

  track.innerHTML = '';
  dotsContainer.innerHTML = '';

  if (slides.length === 0) {
    track.innerHTML = `
      <div style="padding: 4rem; text-align: center; width: 100%;">
        <h3>No memories added yet!</h3>
        <p>Click "Add Our Photo" below to upload your first picture.</p>
      </div>`;
    return;
  }

  slides.forEach((slide, idx) => {
    // Create Slide
    const slideEl = document.createElement('div');
    slideEl.className = `carousel-slide ${idx === currentSlideIndex ? 'active' : ''}`;
    slideEl.innerHTML = `
      <div class="slide-img-wrapper">
        <span class="slide-badge">Memory #${idx + 1}</span>
        <img src="${slide.image}" alt="${slide.title}" loading="lazy">
      </div>
      <div class="slide-caption-box">
        <span class="slide-date">${slide.location}</span>
        <h3 class="slide-title">${slide.title}</h3>
        <p class="slide-desc">${slide.desc}</p>
        <button class="slide-delete-btn" onclick="deleteSlide(${idx})">🗑️ Delete memory</button>
      </div>
    `;
    track.appendChild(slideEl);

    // Create Dot
    const dot = document.createElement('span');
    dot.className = `dot ${idx === currentSlideIndex ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  resetCarouselAutoPlay();
}

function goToSlide(index) {
  if (slides.length === 0) return;
  currentSlideIndex = (index + slides.length) % slides.length;

  const slidesEls = document.querySelectorAll('.carousel-slide');
  const dotsEls = document.querySelectorAll('.dot');

  slidesEls.forEach((el, idx) => {
    el.classList.toggle('active', idx === currentSlideIndex);
  });
  dotsEls.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });

  resetCarouselAutoPlay();
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
}

function resetCarouselAutoPlay() {
  if (carouselTimer) clearInterval(carouselTimer);
  carouselTimer = setInterval(nextSlide, 5000);
}

// Global slide delete handler
window.deleteSlide = function(idx) {
  if (confirm("Remove this memory slide?")) {
    slides.splice(idx, 1);
    saveStorage(STORAGE_KEY_SLIDES, slides);
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = Math.max(0, slides.length - 1);
    }
    renderSlideshow();
  }
};

// Event listeners for carousel arrows & touch swipe
document.getElementById('carousel-prev')?.addEventListener('click', prevSlide);
document.getElementById('carousel-next')?.addEventListener('click', nextSlide);

// Touch Swipe Support for Phones (iPhone & Android)
const carouselEl = document.getElementById('carousel-track');
if (carouselEl) {
  let touchStartX = 0;
  let touchEndX = 0;

  carouselEl.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselEl.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleTouchSwipe();
  }, { passive: true });

  function handleTouchSwipe() {
    const swipeThreshold = 45; // minimum swipe distance in px
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide(); // swiped left
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide(); // swiped right
    }
  }
}

document.getElementById('reset-slides-btn')?.addEventListener('click', () => {
  if (confirm("Reset to default sample memories?")) {
    slides = [...defaultSlides];
    saveStorage(STORAGE_KEY_SLIDES, slides);
    currentSlideIndex = 0;
    renderSlideshow();
  }
});

/* ===================================================================
   5. TIMELINE MILESTONES
   =================================================================== */
function renderTimeline() {
  const list = document.getElementById('timeline-list');
  if (!list) return;

  list.innerHTML = '';
  timeline.forEach((item, idx) => {
    const isLeft = idx % 2 === 0;
    const itemEl = document.createElement('div');
    itemEl.className = `timeline-item ${isLeft ? 'left' : 'right'}`;
    itemEl.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-date">${item.date}</span>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    list.appendChild(itemEl);
  });
}

/* ===================================================================
   6. COUPLE GAMES
   =================================================================== */

// Game Navigation Tabs
document.querySelectorAll('.game-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.game-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const targetId = `game-${btn.dataset.game}`;
    document.getElementById(targetId)?.classList.add('active');
  });
});

/* --- GAME 1: MEMORY MATCH --- */
const coupleIcons = ['💍', '🌹', '💌', '🍫', '🧸', '✈️', '🥂', '🍓'];
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let canFlip = true;

function initMemoryGame() {
  const grid = document.getElementById('memory-grid');
  if (!grid) return;

  grid.innerHTML = '';
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  canFlip = true;

  document.getElementById('moves-count').textContent = '0';
  document.getElementById('matches-count').textContent = '0';

  // Duplicate and shuffle
  memoryCards = [...coupleIcons, ...coupleIcons].sort(() => 0.5 - Math.random());

  memoryCards.forEach((icon, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.icon = icon;
    card.dataset.index = index;
    card.innerHTML = `<span style="opacity: 0;">${icon}</span>`;

    card.addEventListener('click', () => handleCardFlip(card, icon));
    grid.appendChild(card);
  });
}

function handleCardFlip(card, icon) {
  if (!canFlip || card.classList.contains('flipped') || card.classList.contains('matched')) return;

  card.classList.add('flipped');
  card.querySelector('span').style.opacity = '1';
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    moves++;
    document.getElementById('moves-count').textContent = moves;
    canFlip = false;

    const [first, second] = flippedCards;
    if (first.dataset.icon === second.dataset.icon) {
      // Match found
      setTimeout(() => {
        first.classList.add('matched');
        second.classList.add('matched');
        flippedCards = [];
        matchedPairs++;
        document.getElementById('matches-count').textContent = matchedPairs;
        canFlip = true;

        if (matchedPairs === coupleIcons.length) {
          triggerConfetti();
          setTimeout(() => {
            alert(`🎉 You won! A perfect match, just like us! Completed in ${moves} moves.`);
          }, 300);
        }
      }, 400);
    } else {
      // No match
      setTimeout(() => {
        first.classList.remove('flipped');
        first.querySelector('span').style.opacity = '0';
        second.classList.remove('flipped');
        second.querySelector('span').style.opacity = '0';
        flippedCards = [];
        canFlip = true;
      }, 900);
    }
  }
}

document.getElementById('restart-match-btn')?.addEventListener('click', initMemoryGame);

/* --- GAME 2: COUPLE QUIZ --- */
const quizQuestions = [
  {
    q: "Who takes longer to get ready when we go out?",
    options: ["Definitely Her! 💄", "Me (YATII) 🕶️", "It's an exact tie ⏱️", "Whoever woke up last 😴"],
    answer: 2,
    cheer: "we get ready at same time cuz we bath togather ;)"
  },
  {
    q: "Who is the master of giving the warmest, coziest cuddles?",
    options: ["Her! 🤗", "Me! 🥰", "Both of us together, locked forever 💕", "Our blankets 🛌"],
    answer: 2,
    cheer: "Cuddling with you is my absolute favorite place on earth."
  },
  {
    q: "What is our official love language?",
    options: ["Quality time & deep talks 💬", "Stealing each other's food 🍟", "Silly inside jokes & laughter 😂", "All of the above! 💖"],
    answer: 3,
    cheer: "Correct! we do everythinggg<33"
  },
  {
    q: "Who loves who more?",
    options: ["She loves me more", "I love her more to infinity and beyond!", "It's a tie", "It's an endless competition"],
    answer: 1,
    cheer: "I will never lose this competition, I love you more than words can say❤️"
  },
  {
    q: "What is our plan for the future?",
    options: ["Travel the world together ✈️", "Build our dream home 🏡", "Grow old and silly together 👴👵", "All these and infinite love ✨"],
    answer: 3,
    cheer: "To forever and always, my love, my laya<3"
  }
];

let quizIndex = 0;
let quizScore = 0;

function initQuizGame() {
  quizIndex = 0;
  quizScore = 0;
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-body').classList.remove('hidden');
  document.getElementById('quiz-score').textContent = '0';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (quizIndex >= quizQuestions.length) {
    showQuizResult();
    return;
  }

  const qData = quizQuestions[quizIndex];
  document.getElementById('quiz-progress').textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  document.getElementById('quiz-question').textContent = qData.q;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  qData.options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = optText;
    btn.addEventListener('click', () => handleQuizAnswer(btn, optIdx, qData));
    optionsContainer.appendChild(btn);
  });
}

function handleQuizAnswer(selectedBtn, optIdx, qData) {
  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  allBtns.forEach(b => (b.disabled = true));

  if (optIdx === qData.answer) {
    selectedBtn.classList.add('correct');
    quizScore += 20;
    document.getElementById('quiz-score').textContent = quizScore;
  } else {
    selectedBtn.classList.add('wrong');
    // Highlight correct anyway
    allBtns[qData.answer].classList.add('correct');
  }

  setTimeout(() => {
    quizIndex++;
    renderQuizQuestion();
  }, 1200);
}

function showQuizResult() {
  document.getElementById('quiz-body').classList.add('hidden');
  const resultEl = document.getElementById('quiz-result');
  resultEl.classList.remove('hidden');

  triggerConfetti();
  document.getElementById('result-title').textContent = `${quizScore}% Soulmates!`;
  document.getElementById('result-message').textContent =
    `You know our love story down to every beat. I am the luckiest person in the world to have you.`;
}

document.getElementById('retry-quiz-btn')?.addEventListener('click', initQuizGame);

/* --- GAME 3: REASONS WHY I LOVE YOU JAR --- */
let reasonIndex = 0;

function initReasonsJar() {
  const drawBtn = document.getElementById('draw-reason-btn');
  const reasonText = document.getElementById('reason-text');
  const reasonNumber = document.getElementById('reason-number');
  const box = document.getElementById('reason-box');

  if (!drawBtn || !reasonText) return;

  drawBtn.addEventListener('click', () => {
    box.classList.remove('pop');
    void box.offsetWidth; // trigger reflow
    box.classList.add('pop');

    reasonIndex = (reasonIndex + 1) % loveReasons.length;
    reasonText.textContent = `"${loveReasons[reasonIndex]}"`;
    reasonNumber.textContent = `Love Note #${reasonIndex + 1} of ${loveReasons.length}`;

    // Micro confetti on click
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 15,
        spread: 40,
        origin: { y: 0.7 }
      });
    }
  });
}

/* ===================================================================
   7. WAX SEAL & LOVE LETTER
   =================================================================== */
function initEnvelope() {
  const envelope = document.getElementById('envelope');
  const waxSeal = document.getElementById('wax-seal');

  if (envelope) {
    const toggleEnvelope = () => {
      envelope.classList.toggle('open');
      if (envelope.classList.contains('open')) {
        triggerConfetti();
      }
    };

    envelope.addEventListener('click', e => {
      // Avoid toggling if clicking the edit button inside
      if (!e.target.closest('#edit-letter-btn')) {
        toggleEnvelope();
      }
    });
  }
}

/* ===================================================================
   8. MODALS & PERSONALIZATION
   =================================================================== */
function initModals() {
  // 1. Customize Names & Anniversary Modal
  const custModal = document.getElementById('customize-modal');
  const custBtn = document.getElementById('customize-btn');
  const closeCust = document.getElementById('close-modal');
  const cancelCust = document.getElementById('cancel-modal');
  const custForm = document.getElementById('customize-form');

  custBtn?.addEventListener('click', () => {
    document.getElementById('input-partner1').value = profile.partner1;
    document.getElementById('input-partner2').value = profile.partner2;
    document.getElementById('input-date').value = profile.anniversary.slice(0, 10);
    document.getElementById('input-quote').value = profile.quote;
    custModal.classList.add('active');
  });

  const hideCustModal = () => custModal.classList.remove('active');
  closeCust?.addEventListener('click', hideCustModal);
  cancelCust?.addEventListener('click', hideCustModal);

  custForm?.addEventListener('submit', e => {
    e.preventDefault();
    profile.partner1 = document.getElementById('input-partner1').value.trim() || profile.partner1;
    profile.partner2 = document.getElementById('input-partner2').value.trim() || profile.partner2;
    const dateVal = document.getElementById('input-date').value;
    if (dateVal) {
      profile.anniversary = `${dateVal}T00:00:00`;
    }
    profile.quote = document.getElementById('input-quote').value.trim() || profile.quote;

    saveStorage(STORAGE_KEY_PROFILE, profile);
    renderProfile();
    hideCustModal();
    triggerConfetti();
  });

  // 2. Add Photo Slide Modal
  const slideModal = document.getElementById('add-slide-modal');
  const addSlideBtn = document.getElementById('add-slide-btn');
  const closeSlide = document.getElementById('close-slide-modal');
  const cancelSlide = document.getElementById('cancel-slide-modal');
  const slideForm = document.getElementById('slide-form');

  addSlideBtn?.addEventListener('click', () => {
    slideModal.classList.add('active');
  });

  const hideSlideModal = () => slideModal.classList.remove('active');
  closeSlide?.addEventListener('click', hideSlideModal);
  cancelSlide?.addEventListener('click', hideSlideModal);

  slideForm?.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('slide-title').value.trim();
    const location = document.getElementById('slide-location').value.trim();
    const desc = document.getElementById('slide-desc').value.trim();
    const fileInput = document.getElementById('slide-file');

    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        slides.unshift({
          image: event.target.result,
          title: title || "Sweet Moment",
          location: location || "Special Day",
          desc: desc || "A memory that will forever live in our hearts."
        });
        saveStorage(STORAGE_KEY_SLIDES, slides);
        currentSlideIndex = 0;
        renderSlideshow();
        hideSlideModal();
        slideForm.reset();
        triggerConfetti();
      };
      reader.readAsDataURL(file);
    }
  });

  // 3. Edit Love Letter Modal
  const letterModal = document.getElementById('edit-letter-modal');
  const editLetterBtn = document.getElementById('edit-letter-btn');
  const closeLetter = document.getElementById('close-letter-modal');
  const cancelLetter = document.getElementById('cancel-letter-modal');
  const letterForm = document.getElementById('letter-form');

  editLetterBtn?.addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('edit-letter-text').value = profile.letterText;
    document.getElementById('edit-letter-signer-input').value = profile.letterSigner;
    letterModal.classList.add('active');
  });

  const hideLetterModal = () => letterModal.classList.remove('active');
  closeLetter?.addEventListener('click', hideLetterModal);
  cancelLetter?.addEventListener('click', hideLetterModal);

  letterForm?.addEventListener('submit', e => {
    e.preventDefault();
    profile.letterText = document.getElementById('edit-letter-text').value.trim();
    profile.letterSigner = document.getElementById('edit-letter-signer-input').value.trim();
    saveStorage(STORAGE_KEY_PROFILE, profile);
    renderProfile();
    hideLetterModal();
    triggerConfetti();
  });

  // 4. Add Milestone (Quick Prompt)
  document.getElementById('add-timeline-btn')?.addEventListener('click', () => {
    const title = prompt("Enter the memory title (e.g., 'Our Stargazing Night'):");
    if (!title) return;
    const date = prompt("Enter the date or period (e.g., 'October 2025'):") || "Special Date";
    const desc = prompt("Enter a sweet description of what happened:") || "One of the best days ever.";

    timeline.push({ date, title, desc });
    saveStorage(STORAGE_KEY_TIMELINE, timeline);
    renderTimeline();
    triggerConfetti();
  });
}

/* ===================================================================
   9. MUSIC BOX (ROMANTIC SYNTHESIZER - NO BROKEN AUDIO FILES!)
   =================================================================== */
function initMusicBox() {
  const musicBtn = document.getElementById('music-btn');
  if (!musicBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let synthInterval = null;

  // Romantic gentle pentatonic notes (frequencies in Hz)
  // Canon / Romantic chords: D4, F#4, A4, B4, C#5, D5, E5, F#5
  const notes = [
    293.66, // D4
    369.99, // F#4
    440.00, // A4
    493.88, // B4
    554.37, // C#5
    587.33, // D5
    659.25, // E5
    739.99  // F#5
  ];

  function playGentleBell(freq) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    // Warm soft bell envelope
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.2);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 2.3);
  }

  musicBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isPlaying) {
      isPlaying = true;
      musicBtn.classList.add('playing');
      musicBtn.querySelector('.music-text').textContent = "Playing ♪";

      // Play soft music box sequence
      let step = 0;
      synthInterval = setInterval(() => {
        const chord = [notes[step % notes.length], notes[(step + 2) % notes.length]];
        playGentleBell(chord[0]);
        setTimeout(() => playGentleBell(chord[1]), 350);
        step++;
      }, 1400);

    } else {
      isPlaying = false;
      musicBtn.classList.remove('playing');
      musicBtn.querySelector('.music-text').textContent = "Music";
      if (synthInterval) clearInterval(synthInterval);
    }
  });
}

/* ===================================================================
   10. CELEBRATION CONFETTI
   =================================================================== */
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e2738a', '#f5d061', '#ffffff', '#ff8da1', '#d94b64']
    });
  }
}
