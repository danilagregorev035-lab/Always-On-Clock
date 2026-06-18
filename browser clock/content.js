(() => {
  console.log('[Clock] Запущен');

  let clockVisible = true;

  function createClock() {
    if (document.getElementById('ext-alwayson-clock')) return;

    const clock = document.createElement('div');
    clock.id = 'ext-alwayson-clock';

    Object.assign(clock.style, {
      position: 'fixed',
      top: '10px',
      left: '10px',
      zIndex: '2147483647',
      color: '#fff',
      fontFamily: 'monospace',
      fontSize: '18px',
      padding: '8px 14px',
      borderRadius: '6px',
      pointerEvents: 'none',
      userSelect: 'none',
      textShadow: '0 0 6px rgba(0,0,0,0.7), 0 0 12px rgba(0,0,0,0.5)',
      background: 'none'
    });

    function updateTime() {
      if (clockVisible) {
        clock.textContent = new Date().toLocaleTimeString('ru-RU', {
          hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
      }
    }
    updateTime();
    setInterval(updateTime, 1000);

    document.body.appendChild(clock);
    console.log('[Clock] Часы на странице');
  }

  function toggleClock() {
    const clock = document.getElementById('ext-alwayson-clock');
    if (!clock) return;
    clockVisible = !clockVisible;
    clock.style.display = clockVisible ? '' : 'none';
    if (clockVisible) {
      clock.textContent = new Date().toLocaleTimeString('ru-RU', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
    }
  }

  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement?.tagName;
    const editable = document.activeElement?.isContentEditable;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || editable) return;
    if ((e.key === 'c' || e.key === 'C') && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
      toggleClock();
    }
  });

  function whenBodyReady(cb) {
    if (document.body) cb();
    else {
      const obs = new MutationObserver(() => {
        if (document.body) { obs.disconnect(); cb(); }
      });
      obs.observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  whenBodyReady(() => {
    createClock();
    const mo = new MutationObserver(() => {
      if (!document.getElementById('ext-alwayson-clock') && document.body) createClock();
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  });
})();