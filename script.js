(function() {
  const TRACKING_CODE = 'GIU28APR2026';
  const TODAY = new Date("2026-05-01"); // Simula la data attuale (formato: anno, mese - 1, giorno)
  const ENCODED_TRACKING_CHUNKS = [
    'W3siZGF0ZSI6IjIwMjYtMDQtMjgiLCJ0aXRsZSI6IlByZXNhIGluIGNhcmljbyBkYWxsYSBGcmFuY2lhIiwiZGVzY3JpcHRpb24i',
    'OiJJbCBjb3JyaWVyZSBoYSBwcmVzbyBpbiBjYXJpY28gbGEgc3BlZGl6aW9uZSBpbiBGcmFuY2lhLiBTcGVyaWFtbyBub24gbGEg',
    'Y29uZm9uZGEgY29uIHVuYSBiYWd1ZXR0ZSwgbWEgc2Vjb25kbyBpIG5vc3RyaSBwaWFuaSBkb3ZyZWJiZSBhcnJpdmFyZSBhIGRl',
    'c3RpbmF6aW9uZSBlbnRybyBpbCAzIG1hZ2dpby4iLCJ0aGVtZSI6InN2aWx1cHBhdG9yZSJ9LHsiZGF0ZSI6IjIwMjYtMDQtMjki',
    'LCJ0aXRsZSI6IlJpc3ZlZ2xpbyBvcGVyYXRpdm8gcmljaGllc3RvIiwiZGVzY3JpcHRpb24iOiJWZXJhbWVudGUgc2VpIHRvcm5h',
    'dGEgc3VsIHNpdG8gYSBjb250cm9sbGFyZT8gQ2xpY2NhIHF1aSBwZXIgc3ZlZ2xpYXJlIGkgZGlwZW5kZW50aS4gU2kgZXJhbm8g',
    'YWRkb3JtZW50YXRpIGd1YXJkYW5kbyB1bmEgbWFyYXRvbmEgZGkgdHV0b3JpYWwgc3UgY29tZSBwaWVnYXJlIHBlcmZldHRhbWVu',
    'dGUgbGUgc2NhdG9sZSBzZW56YSBzdHJvcGljY2lhcmUgaWwgbmFzdHJvIGFkZXNpdm8uIiwidGhlbWUiOiJpYSIsImFjdGlvbiI6',
    'eyJidXR0b25MYWJlbCI6IlNWRUdMSUEgSSBESVBFTkRFTlRJIiwidXBkYXRlZERlc2NyaXB0aW9uIjoiSSBkaXBlbmRlbnRpIHNp',
    'IHNvbm8gc3ZlZ2xpYXRpIGRpIHNvcHJhc3NhbHRvIGUgaGFubm8gY2FyaWNhdG8gaWwgY2FtaW9uLiBJbCBjb3JyaWVyZSDDqCBv',
    'cmEgaW4gdmlhZ2dpby4gU29ubyBzdGF0aSBzaW11bGF0aSA1IGl0aW5lcmFyaSB0cmFtaXRlIGFsZ29yaXRtaSBkaSBJQSwgc3Bl',
    'cmlhbW8gbm9uIHNjZWxnYW5vIHF1ZWxsbyBpbiBjdWkgZmluaXNjb25vIGEgZmFyZSBpbCBnaXJvIHBhbm9yYW1pY28gZGlldHJv',
    'IHVuIHRyYXR0b3JlIGxhbmNpYXRvIGEgMTIgYWxsJ29yYS4ifX0seyJkYXRlIjoiMjAyNi0wNC0zMCIsInRpdGxlIjoiRGV2aWF6',
    'aW9uZSBsZXR0ZXJhcmlhIHN1bCBsYWdvIGRpIENvbW8iLCJkZXNjcmlwdGlvbiI6IkJ1b25naW9ybm8uIE9nZ2kgaWwgY29ycmll',
    'cmUgdm9sZXZhIHRyb3ZhcmUgaXNwaXJhemlvbmUgc3VsIHJhbW8gZGVsIGxhZ28gZGkgQ29tbyBsZWdnZW5kbyBpIFByb21lc3Np',
    'IFNwb3NpLCBwb2kgaGEgdmlzdG8gZHVlIGZpZ3VyZSBsb3NjaGUgYXZ2aWNpbmFyc2kgZWQgw6ggcmlwYXJ0aXRvIGEgZ2FtYmUg',
    'bGV2YXRlLiBQc3MuLi4gc29ubyBzdGF0aSBtYW5kYXRpIGRlaSBicmF2aSBwZXIgYWNjZWxlcmFyZSBpIHRlbXBpLiIsInRoZW1l',
    'IjoicG9lc2llIn0seyJkYXRlIjoiMjAyNi0wNS0wMSIsInRpdGxlIjoiU29zdGEgdGF0dGljYSBpbiBFbWlsaWEiLCJkZXNjcmlw',
    'dGlvbiI6IklsIGNvcnJpZXJlIGVyYSBvcm1haSB0cmEgQm9sb2duYSBlIEZlcnJhcmEsIG1hIHNpIMOoIGZlcm1hdG8gY29udmlu',
    'dG8gZGkgYXZlciBiaXNvZ25vIGRpIHVuIHJpZm9ybmltZW50byBtb3JhbGUuIEhhIGRpc2N1c3NvIHZlbnRpIG1pbnV0aSBjb24g',
    'aWwgbmF2aWdhdG9yZSwgY2hlIGluc2lzdGV2YSBwZXIgdW4gcGVsbGVncmluYWdnaW8gbm9uIHJpY2hpZXN0byBzb3R0byBpIHBv',
    'cnRpY2ksIHBvaSBoYSByaXByZXNvIGxhIHN0cmFkYSBnaXVzdGEgY29uIGlsIHBhY2NvIGFuY29yYSBzYWx2byBlIGxhIGRpZ25p',
    'dMOgIGxlZ2dlcm1lbnRlIGFtbWFjY2F0YS4iLCJ0aGVtZSI6InRyYWRpemlvbmkifSx7ImRhdGUiOiIyMDI2LTA1LTAyIiwidGl0',
    'bGUiOiJOZWJiaWEsIGNhbXBhZ25hIGUgY29uc2VndWVuemUgZGVsbGEgc2FsYW1pbmEiLCJkZXNjcmlwdGlvbiI6Ikllcmkgc2Vy',
    'YSBpbCBjb3JyaWVyZSBoYSBtYW5naWF0byB1bmEgc2FsYW1pbmEgZGEgc3VnbyBpbnRlcmEuIFN0YW1hdHRpbmEgZXJhIGRpc3Ry',
    'dXR0bywgc2kgw6ggcGVyZmlubyBwZXJzbyBpbiB1bmEgbmViYmlhIHN0cmFvcmRpbmFyaWEgdHJhIGkgcGFlc2luaSBkaSBjYW1w',
    'YWduYSwgY2hpZWRlbmRvIGluZGljYXppb25pIGEgdW4gY29udGFkaW5vIGNoZSBub24gaGEgYW5jb3JhIGNhcGl0byBkb3ZlIHZv',
    'bGVzc2UgYW5kYXJlIGRhdnZlcm8uIiwidGhlbWUiOiJ2ciJ9LHsiZGF0ZSI6IjIwMjYtMDUtMDMiLCJ0aXRsZSI6IkNvbnNlZ25h',
    'IGEgRmVycmFyYSIsImRlc2NyaXB0aW9uIjoiU2UgdHUgdmllbmksIHBlciBlc2VtcGlvLCB0dXR0aSBpIHBvbWVyaWdnaSwgYWxs',
    'ZSBxdWF0dHJvIGUgbWV6emEsIGFsbGEgZ2VsYXRlcmlhIGRlaSBCYWx1YXJkaSwgZGFsbGUgcXVhdHRybyBpbyBjb21pbmNlcsOy',
    'IGFkIGVzc2VyZSBmZWxpY2UuIENvbCBwYXNzYXJlIGRlaSBtaW51dGkgY3Jlc2NlcsOgIGxhIG1pYSBhdHRlc2EsIGNvbWUgaWwg',
    'cHJvZnVtbyBkZWkgY29uaSBhcHBlbmEgcmllbXBpdGkuIFF1YW5kbyBzYXJhbm5vIGxlIHF1YXR0cm8gZSBtZXp6YSwgaW5jb21p',
    'bmNlcsOyIGFkIGFnaXRhcm1pIGUgYWQgaW5xdWlldGFybWk7IHNjZWdsaWVyw7IgaWwgZ3VzdG8gY29uIGN1cmEsIHBlcmNow6kg',
    'b2duaSBzYXBvcmUgcGFybGVyw6AgdW4gcG/igJkgZGkgbm9pLCBlIHNjb3ByaXLDsiBpbCBwcmV6em8gZGVsbGEgZmVsaWNpdMOg',
    'IGluIHVuYSBjb3BwZXR0YSBjaGUgc2kgc2Npb2dsaWUgcGlhbm8uXG5cbk1hIHNlIHR1IHZpZW5pIG5vbiBzaSBzYSBxdWFuZG8s',
    'IGlvIG5vbiBzYXByw7IgbWFpIGEgY2hlIG9yYSBwcmVwYXJhcm1pIGlsIGN1b3Jl4oCmIG7DqSBxdWFsZSBnZWxhdG8gc2NlZ2xp',
    'ZXJlIHBlciBhc3BldHRhcnRpLiIsInRoZW1lIjoiZmVycmFyYSJ9XQ=='
  ];
  const TRACKING_DATA = JSON.parse(decodePayload(ENCODED_TRACKING_CHUNKS.join('')));
  const VIDEO_MAP = {
    '2026-04-28': 'assets/Tappa 1.mp4',
    '2026-04-29': 'assets/Tappa 2 - dipendenti addormentati.mp4',
    '2026-04-30': 'assets/Tappa 3.mp4',
    '2026-05-01': 'assets/Tappa 4.mp4',
    '2026-05-02': 'assets/Tappa 5.mp4'
  };
  const ACTION_VIDEO_MAP = {
    '2026-04-29': 'assets/Dipendenti svegliati.mp4'
  };

  const STATUS_LABELS = [
    'Spedizione registrata',
    'Pacco ritirato',
    'In transito',
    'In consegna',
    'Consegnato'
  ];
  const STEPPER_LABELS = [
    'Presa in carico',
    'Attivazione',
    'Deviazione',
    'Sosta',
    'Nebbia',
    'Ferrara'
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('track-btn');
    const input = document.getElementById('track-input');
    const feedback = document.getElementById('input-feedback');
    const view = document.getElementById('tracking-view');
    const hero = document.getElementById('hero');
    const log = document.getElementById('status-log');
    const progressBar = document.getElementById('progress-bar');
    const stepper = document.getElementById('stepper');
    const badge = document.getElementById('shipment-badge');
    const displayCode = document.getElementById('display-code');
    const resetButton = document.getElementById('reset-btn');
    if (!button || !input || !feedback || !view || !hero || !log || !progressBar || !stepper || !badge || !displayCode || !resetButton) {
      return;
    }
    animateHero();

    const submit = () => {
      const code = input.value.trim().toUpperCase();

      if (!code) {
        feedback.textContent = 'Inserisci un codice di tracking.';
        input.focus();
        return;
      }

      if (code !== TRACKING_CODE) {
        feedback.textContent = 'Codice non trovato. Prova con il codice ricevuto via email.';
        input.focus();
        input.select();
        return;
      }

      feedback.textContent = '';
      renderTracking(code, {
        view,
        hero,
        log,
        progressBar,
        stepper,
        badge,
        displayCode
      });
    };

    button.addEventListener('click', submit);
    resetButton.addEventListener('click', () => {
      window.location.reload();
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        submit();
      }
    });
    input.addEventListener('input', () => {
      if (feedback.textContent) {
        feedback.textContent = '';
      }
    });
  });

  function renderTracking(code, elements) {
    const { view, hero, log, progressBar, stepper, badge, displayCode } = elements;
    const now = TODAY instanceof Date ? TODAY : new Date(TODAY);
    const visibleUpdates = TRACKING_DATA
      .filter((item) => new Date(item.date) <= now)
      .sort((first, second) => new Date(second.date) - new Date(first.date));

    hero.style.display = 'none';
    view.style.display = 'block';
    displayCode.textContent = code;
    log.innerHTML = visibleUpdates
      .map(
        (item) => `
        <article class="status-item fade-in" data-theme="${item.theme}" data-date="${item.date}">
          <div class="status-topline">
            <div class="status-date-chip">${formatDate(item.date)}</div>
          </div>
          <div class="status-main">
            <div class="status-header">
              <h3>${item.title}</h3>
            </div>
            <div class="status-content">
              <div class="status-text-column">
                <p class="status-copy" id="description-${item.date}">${item.description}</p>
                ${item.action ? `
                  <div class="status-action-wrap">
                    <p class="status-action-label">Intervento manuale richiesto</p>
                    <button class="status-action-btn" type="button" data-date="${item.date}">${item.action.buttonLabel}</button>
                  </div>
                ` : ''}
              </div>
              ${renderStatusVideo(item)}
            </div>
          </div>
        </article>
      `
      )
      .join('');

    if (!visibleUpdates.length) {
      log.innerHTML = `
        <article class="status-item fade-in">
          <div class="status-topline">
            <div class="status-date-chip">In attesa</div>
          </div>
          <div class="status-main">
            <div class="status-header">
              <h3>La spedizione non è ancora partita</h3>
            </div>
            <div class="status-content status-content--single">
              <div class="status-text-column">
                <p class="status-copy">Non ci sono ancora aggiornamenti disponibili per la data corrente. Riprova più avanti per vedere le prossime tappe del viaggio.</p>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    bindStatusActions(visibleUpdates);
    initializeStatusVideos();
    animateTrackingView();
    renderStepper(stepper, progressBar, visibleUpdates.length);

    badge.textContent = getStatusLabel(visibleUpdates.length);
    triggerConfetti();
  }

  function getStatusLabel(updateCount) {
    if (updateCount >= TRACKING_DATA.length) {
      return STATUS_LABELS[STATUS_LABELS.length - 1];
    }

    return STATUS_LABELS[Math.min(updateCount, STATUS_LABELS.length - 2)];
  }

  function formatDate(value) {
    return new Date(`${value}T12:00:00`).toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  function triggerConfetti() {
    if (typeof confetti !== 'function') {
      return;
    }

    const duration = 5000;
    const endTime = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;
    const timer = setInterval(() => {
      const timeLeft = endTime - Date.now();

      if (timeLeft <= 0) {
        clearInterval(timer);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        })
      );
    }, 250);
  }

  function bindStatusActions(items) {
    items.forEach((item) => {
      if (!item.action) {
        return;
      }

      const button = document.querySelector(`.status-action-btn[data-date="${item.date}"]`);
      const description = document.getElementById(`description-${item.date}`);

      if (!button || !description) {
        return;
      }

      button.addEventListener('click', () => {
        description.textContent = item.action.updatedDescription;
        button.disabled = true;
        button.textContent = 'DIPENDENTI SVEGLIATI';
        updateStatusVideo(item.date);
        animateDescriptionUpdate(description, button.closest('.status-item'));
      }, { once: true });
    });
  }

  function renderStatusVideo(item) {
    const defaultVideo = resolveVideoPath(item.date);
    const updatedVideo = resolveActionVideoPath(item.date);

    if (!defaultVideo && !updatedVideo) {
      return '';
    }

    return `
      <div class="status-media">
        <video
          class="status-video"
          data-video-date="${item.date}"
          ${updatedVideo ? `data-video-updated="${updatedVideo}"` : ''}
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        >
          <source src="${defaultVideo}" type="video/mp4">
        </video>
      </div>
    `;
  }

  function resolveVideoPath(date) {
    const path = VIDEO_MAP[date];
    return path ? encodeURI(path) : '';
  }

  function renderStepper(stepper, progressBar, visibleCount) {
    stepper.style.setProperty('--step-count', TRACKING_DATA.length);
    stepper.innerHTML = `
      <div id="progress-bar" class="step-progress" style="width: 0%;"></div>
      ${TRACKING_DATA.map((item, index) => `
        <div class="step">
          <div class="step-n">${index + 1}</div>
          <div class="step-text">${STEPPER_LABELS[index] || item.title}</div>
        </div>
      `).join('')}
    `;

    const steps = Array.from(stepper.querySelectorAll('.step'));
    const liveProgressBar = stepper.querySelector('.step-progress') || progressBar;
    const completedStepCount = Math.min(TRACKING_DATA.length, Math.max(1, visibleCount));
    const progressWidth = TRACKING_DATA.length > 1
      ? ((completedStepCount - 1) / (TRACKING_DATA.length - 1)) * 100
      : 100;

    liveProgressBar.style.width = `${progressWidth}%`;

    steps.forEach((step, index) => {
      step.classList.toggle('completed', index < completedStepCount);
      step.classList.toggle('active', index === completedStepCount - 1 && completedStepCount < TRACKING_DATA.length);
    });
  }

  function resolveActionVideoPath(date) {
    const path = ACTION_VIDEO_MAP[date];
    return path ? encodeURI(path) : '';
  }

  function updateStatusVideo(date) {
    const video = document.querySelector(`.status-video[data-video-date="${date}"]`);

    if (!video) {
      return;
    }

    const updatedSource = video.dataset.videoUpdated;
    const source = video.querySelector('source');

    if (!updatedSource || !source) {
      return;
    }

    source.src = updatedSource;
    video.load();
    video.classList.remove('is-ready');
    video.addEventListener('loadedmetadata', () => applyVideoAspectRatio(video), { once: true });
    video.addEventListener('loadeddata', () => video.classList.add('is-ready'), { once: true });
    const playAttempt = video.play();

    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => {});
    }
  }

  function initializeStatusVideos() {
    document.querySelectorAll('.status-video').forEach((video) => {
      if (video.dataset.aspectReady === 'true') {
        return;
      }

      const syncAspectRatio = () => applyVideoAspectRatio(video);
      const revealVideo = () => video.classList.add('is-ready');

      if (video.readyState >= 1) {
        syncAspectRatio();
      } else {
        video.addEventListener('loadedmetadata', syncAspectRatio, { once: true });
      }

      if (video.readyState >= 2) {
        revealVideo();
      } else {
        video.addEventListener('loadeddata', revealVideo, { once: true });
      }

      const playAttempt = video.play();

      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => {});
      }

      video.dataset.aspectReady = 'true';
    });
  }

  function applyVideoAspectRatio(video) {
    const container = video.closest('.status-media');

    if (!container || !video.videoWidth || !video.videoHeight) {
      return;
    }

    container.style.setProperty('--media-aspect-ratio', `${video.videoWidth} / ${video.videoHeight}`);
  }

  function animateHero() {
    if (typeof gsap !== 'function' && typeof gsap === 'undefined') {
      return;
    }

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timeline
      .from('.site-header__inner > *', { y: -18, opacity: 0, duration: 0.7, stagger: 0.08 })
      .from('#hero .hero-kicker, #hero h1, #hero .hero-body', { y: 26, opacity: 0, duration: 0.85, stagger: 0.12 }, '-=0.28')
      .from('#hero .hero-form', { y: 34, opacity: 0, duration: 0.85 }, '-=0.45')
      .from('.ambient-orb', { scale: 0.7, opacity: 0, duration: 1.2, stagger: 0.1 }, '-=0.8');
  }

  function animateTrackingView() {
    if (typeof gsap !== 'function' && typeof gsap === 'undefined') {
      decorateCards();
      return;
    }

    decorateCards();
    const cards = gsap.utils.toArray('.status-item');
    gsap.fromTo(
      '.tracking-summary, .progress-panel',
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08 }
    );
    gsap.fromTo(
      cards,
      { y: 42, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12
      }
    );
    cards.forEach((card, index) => {
      const copy = card.querySelector('.status-copy');
      gsap.fromTo(copy, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.15 + index * 0.12 });
    });
  }

  function animateDescriptionUpdate(description, card) {
    if (typeof gsap !== 'function' && typeof gsap === 'undefined') {
      if (card) {
        card.classList.add('is-animated');
        setTimeout(() => card.classList.remove('is-animated'), 1200);
      }
      return;
    }

    if (card) {
      card.classList.add('is-animated');
      setTimeout(() => card.classList.remove('is-animated'), 1200);
    }

    gsap.fromTo(
      description,
      { y: 18, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.65, ease: 'power3.out' }
    );
  }

  function decorateCards() {
    document.querySelectorAll('.status-item').forEach((card, index) => {
      card.style.setProperty('--card-index', index);
    });
  }

  function decodePayload(payload) {
    return decodeURIComponent(escape(window.atob(payload)));
  }
})();
