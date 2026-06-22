/** Video responsive para demostraciones propias alojadas en /public. */
export function exerciseVideo(exercise) {
  if (!exercise.videoUrl) return '';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const src = `${import.meta.env.BASE_URL}${exercise.videoUrl.replace(/^\//, '')}`;
  return `<section class="exercise-video"><div class="exercise-video__label"><span>DEMOSTRACIÓN DEL MOVIMIENTO</span><b>${exercise.name}</b></div><div class="exercise-video__stage"><video ${reducedMotion ? '' : 'autoplay'} muted loop playsinline preload="metadata" disablepictureinpicture controlslist="nofullscreen nodownload noremoteplayback" src="${src}" data-demo-video aria-label="Video demostrativo: ${exercise.videoAlt}">Tu navegador no puede reproducir este vídeo.</video><button class="exercise-video__toggle" data-demo-toggle aria-label="Reproducir o pausar demostración"><span data-demo-icon>${reducedMotion ? '▶' : 'Ⅱ'}</span><span data-demo-label>${reducedMotion ? 'Reproducir' : 'Pausar'}</span></button><span class="exercise-video__fallback" data-demo-fallback hidden>No se pudo cargar la demostración.</span></div><p>${reducedMotion ? 'La reproducción automática está desactivada por tu preferencia de reducción de movimiento.' : 'Baja la barra de forma controlada y empuja manteniendo el pecho estable.'}</p></section>`;
}
