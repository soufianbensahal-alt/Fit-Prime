const INTRO_LOGO = '/icons/fit-prime-logo.png';

/** Muestra la introducción y elimina su nodo al terminar para no bloquear la app. */
export function mountIntroSplash() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const splash = document.createElement('section');
  splash.className = `intro-splash${reducedMotion ? ' intro-splash--reduced' : ''}`;
  splash.setAttribute('aria-label', 'Cargando Fit Prime');
  splash.innerHTML = `
    <div class="intro-splash__aura" aria-hidden="true"></div>
    <img class="intro-splash__logo" src="${INTRO_LOGO}" alt="Fit Prime" />
  `;
  document.body.append(splash);

  const exitDelay = reducedMotion ? 520 : 1520;
  const exitDuration = reducedMotion ? 260 : 620;
  window.setTimeout(() => {
    splash.classList.add('intro-splash--exit');
    window.setTimeout(() => splash.remove(), exitDuration);
  }, exitDelay);
}
