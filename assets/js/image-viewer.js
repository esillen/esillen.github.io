(() => {
  const links = Array.from(document.querySelectorAll(
    '.project-content a.portfolio-image-link[href], .game-content a.portfolio-image-link[href], ' +
    '.project-content a[id="single_image"][href], .game-content a[id="single_image"][href], ' +
    '.project-content .project-gallery a[href], .game-content .project-gallery a[href]'
  ));
  if (!links.length) return;

  const images = [];
  const indexByUrl = new Map();
  for (const link of links) {
    const url = link.href;
    if (indexByUrl.has(url)) continue;
    const figure = link.closest('figure');
    const caption = figure && figure.querySelector('figcaption');
    const preview = link.querySelector('img');
    indexByUrl.set(url, images.length);
    images.push({
      url,
      alt: preview ? preview.alt : '',
      caption: (caption && caption.textContent.trim()) || link.title || (preview && preview.alt) || ''
    });
  }

  const viewer = document.createElement('div');
  viewer.className = 'image-viewer';
  viewer.hidden = true;
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', 'Image viewer');
  viewer.innerHTML = `
    <div class="image-viewer__stage">
      <button class="image-viewer__nav image-viewer__nav--previous" type="button" aria-label="Previous image">&#8249;</button>
      <figure class="image-viewer__figure">
        <img class="image-viewer__image" alt="">
        <figcaption class="image-viewer__caption"></figcaption>
      </figure>
      <button class="image-viewer__nav image-viewer__nav--next" type="button" aria-label="Next image">&#8250;</button>
      <button class="image-viewer__close" type="button" aria-label="Close image viewer">&times;</button>
    </div>`;
  document.body.appendChild(viewer);

  const stage = viewer.querySelector('.image-viewer__stage');
  const figure = viewer.querySelector('.image-viewer__figure');
  const image = viewer.querySelector('.image-viewer__image');
  const caption = viewer.querySelector('.image-viewer__caption');
  const previous = viewer.querySelector('.image-viewer__nav--previous');
  const next = viewer.querySelector('.image-viewer__nav--next');
  const closeButton = viewer.querySelector('.image-viewer__close');
  previous.hidden = next.hidden = images.length < 2;

  let current = 0;
  let priorFocus = null;
  let priorOverflow = '';

  function show(index) {
    current = (index + images.length) % images.length;
    const selected = images[current];
    image.src = selected.url;
    image.alt = selected.alt;
    caption.textContent = selected.caption;
    caption.hidden = !selected.caption;
  }

  function open(index) {
    priorFocus = document.activeElement;
    priorOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    show(index);
    viewer.hidden = false;
    closeButton.focus();
  }

  function close() {
    viewer.hidden = true;
    document.documentElement.style.overflow = priorOverflow;
    image.removeAttribute('src');
    if (priorFocus && priorFocus.isConnected) priorFocus.focus();
  }

  for (const link of links) {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      open(indexByUrl.get(link.href));
    });
  }

  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  closeButton.addEventListener('click', close);
  viewer.addEventListener('click', event => {
    if (event.target === viewer || event.target === stage || event.target === figure) close();
  });
  document.addEventListener('keydown', event => {
    if (viewer.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft' && images.length > 1) show(current - 1);
    if (event.key === 'ArrowRight' && images.length > 1) show(current + 1);
  });
})();
