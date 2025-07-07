const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const memeContainer = document.getElementById('memeContainer');
const memeSound = document.getElementById('memeSound');

let fontSize = 20;

// Meme URLs that are working ✅
const memePool = [
  "https://i.imgflip.com/30b1gx.jpg",
  "https://i.imgflip.com/4/5z4i.jpg",
  "https://i.imgflip.com/1bij.jpg",
  "https://media.tenor.com/LfyhWyt9FtYAAAAC/crying-cat.gif",
  "https://media.tenor.com/Co2fI7SUg1gAAAAC/tangina-ka-meme.gif",
  "https://media.tenor.com/jNEXHKePsyAAAAAC/gigachad-eyebrow.gif",
  "https://media.tenor.com/xsAVnllqulUAAAAC/wag-kana-meme.gif",
  "https://media.tenor.com/U9vvCU6F0S0AAAAC/nagulat-cat-surprised.gif",
  "https://media.tenor.com/Bq2ZAlzJz2wAAAAd/iyak-crying.gif"
];

let currentMemes = [];

function shuffleMemes() {
  currentMemes = [...memePool];
  for (let i = currentMemes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentMemes[i], currentMemes[j]] = [currentMemes[j], currentMemes[i]];
  }
}

shuffleMemes(); // Initial shuffle

noBtn.addEventListener('click', () => {
  fontSize += 10;
  yesBtn.style.fontSize = `${fontSize}px`;

  // Get next meme
  const memeUrl = currentMemes.pop();

  const img = document.createElement('img');
  img.src = memeUrl;
  img.className = 'meme-float';
  memeContainer.appendChild(img);

  memeSound.currentTime = 0;
  memeSound.play();

  // If we used all memes, reshuffle for next round
  if (currentMemes.length === 0) {
    shuffleMemes();
  }

  createHeart(); // floating heart for extra effects
});

yesBtn.addEventListener('click', () => {
  alert("Yay! I love you 😍");
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
  }
});

// Heart animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 4000);
}
