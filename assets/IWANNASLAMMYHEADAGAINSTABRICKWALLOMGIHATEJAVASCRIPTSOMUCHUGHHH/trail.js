const trailLength = 8;
const path = "https://afroken.neocities.org/GRAPHICS/FAVICONS/slowpoke.gif";
const storage = Array(trailLength * 2).fill(0);

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < trailLength; i++) {
    const div = document.createElement('div');
    div.id = `obj${i}`;
    div.style.cssText = 'position:absolute;z-index:100';
    div.innerHTML = `<img src="${path}">`;
    document.body.appendChild(div);
  }

  function trail() {
    for (let i = 0; i < trailLength; i++) {
      const obj = document.getElementById(`obj${i}`);
      obj.style.top = storage[i * 2] + 'px';
      obj.style.left = storage[i * 2 + 1] + 'px';
    }

    for (let i = storage.length - 1; i >= 2; i--) {
      storage[i] = storage[i - 2];
    }

    setTimeout(trail, 10);
  }

  document.onmousemove = (e) => {
    storage[0] = e.pageY + 12;
    storage[1] = e.pageX + 12;
  };

  trail();
});