'use strict';
(() => {
  const grid = document.querySelector('#merch-products');
  const status = document.querySelector('#merch-status');
  const more = document.querySelector('#more-merch');
  let products = [], visible = 8;
  function render() {
    grid.replaceChildren(...products.slice(0, visible).map(p => {
      const a = document.createElement('a');
      a.className = 'project-card merch-product';
      a.href = p.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', `${p.title} — ${p.product} on Redbubble`);
      const art = document.createElement('div'); art.className = 'project-art';
      const img = document.createElement('img');
      img.src = p.image; img.alt = `${p.title} — ${p.product}`;
      img.loading = 'lazy'; img.width = 480; img.height = 480;
      img.addEventListener('error', () => { img.src = './assets/logo.png'; }, {once:true});
      art.append(img);
      const title = document.createElement('h3'); title.textContent = p.title;
      const kind = document.createElement('p'); kind.textContent = `${p.product} · Redbubble ↗`;
      a.append(art, title, kind); return a;
    }));
    status.textContent = `${products.length} products · ${Math.min(visible, products.length)} on show. Options and current prices on Redbubble.`;
    more.hidden = visible >= products.length;
  }
  more.addEventListener('click', () => { visible += 8; render(); });
  fetch('./assets/merch.json', {cache:'no-cache'}).then(r => {
    if (!r.ok) throw Error('Merch catalog unavailable'); return r.json();
  }).then(data => { products = data; render(); }).catch(() => {
    status.textContent = 'Explore the latest products in our Redbubble shop.';
  });
})();
