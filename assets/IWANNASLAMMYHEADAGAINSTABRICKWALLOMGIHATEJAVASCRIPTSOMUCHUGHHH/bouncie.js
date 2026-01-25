const texts = [
  'I believe',
  'so strongly',
  'that tomorrow never falls awayyy',
  'Tsukibikari shita',
  'It still awaits',
  'It still carries on through',
  'its',
  'old',
  'wayys',
  'till this moment',
  'of time',
  'Ano toki Kawashita',
  'Kotoba ga narihibiite',
  'There is no more darkness',
  'no more tears in the rain',
  'no one hurt.',
  '.',
  '.',
  '.',
  'Write me an endless',
  'sooonngggg',
  '(when you let go)',
  'As Ill feel so alive~',
  'Kurikaesu',
  'Soouuuulllll',
  'phrase',
  '(Im walking on my way)',
  'Now Write me an endless song',
  '(When you let go)',
  'As Ill feel so alive',
  'Watariyuku Yami no saki',
  'eeeeeeee',
  '.',
  '.',
  '.',
  'I remember it so clearly',
  'as if it have got up today',
  'Yami ni tabishita',
  'I wont fail',
  'Ill never forget even if it hurts',
  'Until far off that day',
  'Ano yoru fureta',
  'yubisaki ni imademo',
  'nukumori dake ga',
  'There is no way to tears',
  'any more feel sorrow',
  'no longer look back',
  'Write me an endless song',
  '(When you let go)',
  'As Ill feel so alive',
  'Kikoeru yo Soul Phrase',
  '(Im walking on my way)',
  '.',
  '.',
  '.',
  'Now write me an endless song',
  '(When you let go)',
  'As Ill feel so alive',
  'Hashiridasu yami no saki e',
  'Write me an endless song',
  '(When you let go)',
  'As Ill feel so alive',
  'Kurikaesu Soul Phrase',
  '(Im walking on my way)',
  'Now write me an endless song',
  '(When you let go)',
  'As Ill feel so alive',
  'Watari yuku yami no saki e',
  'Write me an endless song',
  '(When you let go)',
  'As Ill feel so alive',
  'Kikoeru yo Soul Phrase',
  '(Im walking on my way)',
  'Now write me an endless song',
  '(When you let go)',
  'As Ill feel so alive',
  'Hashiridasu yami no saki',
  'eeee',
  'lol kek done why the silly did you do all this',
  'like man why?',
  'why did you do this????',
  'why would you ever just wait through all of this?????'
];

let currentIndex = 0;
const text = document.getElementById('text');
const container = text.parentElement;

let x = 0, y = 0;
let dx = 2, dy = 2;

function animate() {
  const nextX = x + dx;
  const nextY = y + dy;

  const maxX = container.offsetWidth - text.offsetWidth;
  const maxY = container.offsetHeight - text.offsetHeight;

  let bounced = false;

  if (nextX <= 0 || nextX >= maxX) {
    dx = -dx;
    bounced = true;
  }

  if (nextY <= 0 || nextY >= maxY) {
    dy = -dy;
    bounced = true;
  }

  if (bounced) {
    currentIndex = (currentIndex + 1) % texts.length;
    text.textContent = texts[currentIndex];
  }

  x += dx;
  y += dy;

  const newMaxX = container.offsetWidth - text.offsetWidth;
  const newMaxY = container.offsetHeight - text.offsetHeight;
  x = Math.max(0, Math.min(x, newMaxX));
  y = Math.max(0, Math.min(y, newMaxY));

  text.style.left = x + 'px';
  text.style.top = y + 'px';

  requestAnimationFrame(animate);
}

animate();