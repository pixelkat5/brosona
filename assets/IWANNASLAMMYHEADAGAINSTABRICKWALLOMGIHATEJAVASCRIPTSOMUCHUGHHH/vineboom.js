(function() {
  const ACTIVATION_CHANCE = 1 / 15;
  const TRIGGER_CHANCE = 1 / 5;
  const VOLUME = 0.25;

  const images = [
    '/assets/jpg/jummpies.png',
    '/assets/jpg/utterdisbelief!!!.png',
    '/assets/jpg/seduced.png',
    '/assets/jpg/watchyobihah.jpg',
    '/assets/jpg/whoome.jpg',
    '/assets/jpg/waltuh.png',
    '/assets/jpg/eastern_poland.png',
    '/assets/jpg/monkey.png',
    '/assets/jpg/yippee.png',
    '/assets/jpg/undress.png',
    '/assets/jpg/hmmmm.png',
    '/assets/jpg/jonkler.png',
    '/assets/jpg/finland.png',
    '/assets/jpg/belowaverage.png',
    '/assets/jpg/SLAMMIN.png',
    '/assets/jpg/watches.png',
    '/assets/jpg/tehtoucher.png',
    '/assets/jpg/FEEEDTHOU.png',
    '/assets/jpg/yoh.png',
    '/assets/jpg/COWWWWW.png',
    '/assets/jpg/DUUUUUDE.png',
    '/assets/jpg/howsoggie.png',
    '/assets/jpg/bigsoggersomgomgomg.png',
    '/assets/jpg/feels.png',
    '/assets/jpg/repostowo.png',
    '/assets/jpg/skdfkkdkdddddd-GEXXXX.png',
    '/assets/jpg/hrt.png',
    '/assets/jpg/morgoona.png',
    '/assets/jpg/uhh.png',
    '/assets/jpg/IMG_0426.webp',
    '/assets/jpg/IMG_0435.jpg',
    '/assets/jpg/IMG_0436.jpg',
    '/assets/jpg/IMG_0437.jpg',
    '/assets/jpg/IMG_0442.webp',
    '/assets/jpg/IMG_0453.png',
    '/assets/jpg/IMG_0455.webp',
    '/assets/jpg/IMG_0456.webp',
    '/assets/jpg/IMG_0457.webp',
    '/assets/jpg/IMG_0462.webp'
  ];

  let chaosMode = false;

  function showFlashbang() {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: fit;
      z-index: 999999;
      pointer-events: none;
      opacity: 1;
      transition: opacity 2s ease-out;
    `;

    document.body.appendChild(img);

    const audio = new Audio('/assets/mp3/vine.mp3');
    audio.volume = VOLUME;
    audio.play().catch(() => { });

    setTimeout(() => {
      img.style.opacity = '0';

      const fadeStart = performance.now();
      const fadeDuration = 2000;

      function fadeAudio() {
        const elapsed = performance.now() - fadeStart;
        const progress = Math.min(elapsed / fadeDuration, 1);
        audio.volume = VOLUME * (1 - progress);

        if (progress < 1) {
          requestAnimationFrame(fadeAudio);
        } else {
          audio.pause();
        }
      }

      fadeAudio();
      setTimeout(() => img.remove(), 2000);
    }, 100);
  }

  document.addEventListener('click', () => {
    if (!chaosMode) {
      if (Math.random() < ACTIVATION_CHANCE) {
        chaosMode = true;
      }
    } else {
      if (Math.random() < TRIGGER_CHANCE) {
        showFlashbang();
      }
    }
  });
})();