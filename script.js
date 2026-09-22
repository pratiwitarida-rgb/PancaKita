/* Auto-generate helai rumput (2 lapis: back & front) */
(function generateGrass() {
  const backStrip  = document.querySelector('.grass-back');
  const frontStrip = document.querySelector('.grass-front');
  if (!backStrip || !frontStrip) return;

  function makeBlade(opts) {
    const blade = document.createElement('div');
    blade.className = 'blade';
    const h = opts.minH + Math.random() * (opts.maxH - opts.minH);
    const w = opts.minW + Math.random() * (opts.maxW - opts.minW);
    const delay = -Math.random() * 3;
    const dur = opts.minDur + Math.random() * (opts.maxDur - opts.minDur);

    blade.style.height = h + 'px';
    blade.style.width  = w + 'px';
    blade.style.animationDelay = delay + 's';
    blade.style.animationDuration = dur + 's';

    if (Math.random() > 0.6) {
      blade.style.borderRadius = '50% 50% 15% 15% / 100% 100% 0 0';
    }
    return blade;
  }

  function build() {
    backStrip.innerHTML = '';
    frontStrip.innerHTML = '';

    const backCount = Math.ceil(window.innerWidth / 16) + 20;
    const fragBack  = document.createDocumentFragment();
    for (let i = 0; i < backCount; i++) {
      fragBack.appendChild(makeBlade({
        minH: 35, maxH: 55, minW: 6, maxW: 9, minDur: 2.8, maxDur: 4
      }));
    }
    backStrip.appendChild(fragBack);

    const frontCount = Math.ceil(window.innerWidth / 10) + 25;
    const fragFront  = document.createDocumentFragment();
    for (let i = 0; i < frontCount; i++) {
      fragFront.appendChild(makeBlade({
        minH: 22, maxH: 42, minW: 7, maxW: 11, minDur: 2.2, maxDur: 3.4
      }));
    }
    frontStrip.appendChild(fragFront);
  }

  build();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 200);
  });
})();