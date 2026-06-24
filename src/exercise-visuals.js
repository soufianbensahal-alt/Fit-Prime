const patternById = {
  'press-banca': 'press', 'press-inclinado': 'press', flexiones: 'press', aperturas: 'fly', 'fondos-paralelas': 'dip', dominadas: 'pull', 'jalon-pecho': 'pull', 'remo-barra': 'row', 'remo-mancuerna': 'row', 'peso-muerto': 'hinge', sentadilla: 'squat', prensa: 'press-leg', zancadas: 'lunge', rumano: 'hinge', 'extension-cuad': 'extension', 'curl-femoral': 'curl-leg', gemelos: 'calf', 'press-militar': 'overhead', laterales: 'raise', frontales: 'raise', 'reverse-fly': 'fly', 'face-pull': 'pull', 'curl-barra': 'curl', 'curl-mancuernas': 'curl', martillo: 'curl', concentrado: 'curl', 'triceps-polea': 'extension', frances: 'extension', 'fondos-banco': 'dip', 'triceps-cabeza': 'overhead', plancha: 'plank', crunch: 'crunch', 'elevacion-piernas': 'leg-raise', 'russian-twist': 'twist', 'mountain-climbers': 'climber', burpees: 'burpee', 'jumping-jacks': 'jack', 'battle-ropes': 'ropes', 'sentadilla-salto': 'jump-squat', 'farmer-walk': 'walk'
};

function muscleClass(exercise) {
  const text = `${exercise.category} ${exercise.primaryMuscles.join(' ')}`.toLocaleLowerCase('es');
  if (text.includes('pecho') || text.includes('pectoral')) return 'chest';
  if (text.includes('espalda') || text.includes('dorsal') || text.includes('trapecio')) return 'back';
  if (text.includes('hombro') || text.includes('deltoides')) return 'shoulders';
  if (text.includes('bíceps') || text.includes('braquial')) return 'biceps';
  if (text.includes('tríceps')) return 'triceps';
  if (text.includes('cuádriceps') || text.includes('glúteos') || text.includes('femoral') || text.includes('gemelos') || exercise.category === 'Piernas') return 'legs';
  if (text.includes('core') || text.includes('abdominal') || text.includes('oblicuos')) return 'core';
  return 'full';
}

export function exerciseVisual(exercise, { animated = false, compact = false } = {}) {
  if (exercise.imageUrl) return `<span class="exercise-motion exercise-motion--image ${compact ? 'exercise-motion--compact' : ''}" aria-hidden="true"><img src="${exercise.imageUrl}" alt="" loading="lazy" /></span>`;
  const pattern = patternById[exercise.id] || 'strength';
  const motionClass = animated ? 'exercise-motion--animated' : '';
  return `<span class="exercise-motion ${motionClass} pattern-${pattern} ${compact ? 'exercise-motion--compact' : ''}" aria-hidden="true"><svg viewBox="0 0 180 120" role="presentation"><g class="motion-figure"><circle cx="90" cy="20" r="10"/><path class="motion-body" d="M90 31v33m-25-20 25 10 25-10M78 64l-12 35m36-35 12 35"/><path class="motion-bar" d="M49 40h82m-9-6v12m-64-12v12"/><path class="motion-path" d="M42 75q48 28 96 0"/></g></svg></span>`;
}

export function exerciseMuscleMap(exercise) {
  const group = muscleClass(exercise);
  return `<section class="muscle-map muscle-map--${group}" aria-label="Músculos trabajados: ${exercise.primaryMuscles.join(', ')}"><div class="muscle-map__figure"><svg viewBox="0 0 140 160" role="img"><path class="body" d="M70 13c-10 0-16 8-16 18 0 8 4 13 8 15l-4 20-22 12 7 14 19-9 2 27-13 37h13l7-30 7 30h13l-13-37 2-27 19 9 7-14-22-12-4-20c4-2 8-7 8-15 0-10-6-18-16-18Z"/><path class="zone chest" d="M51 56h38l-2 16H53Z"/><path class="zone back" d="M51 61h38l-4 27H55Z"/><path class="zone shoulders" d="M42 65l14-8 4 18-13 8Zm56-8 14 8-5 18-13-8Z"/><path class="zone biceps" d="M40 77l11-5 4 18-11 5Zm60-5 11 5-4 18-11-5Z"/><path class="zone triceps" d="M46 78l8-5 3 19-9 4Zm40-5 8 5-3 19-9-4Z"/><path class="zone core" d="M58 77h24v27H58Z"/><path class="zone legs" d="M58 106h11l-5 37H51Zm13 0h11l7 37H76Z"/></svg></div><div><span class="eyebrow">ZONAS TRABAJADAS</span><b>${exercise.primaryMuscles.join(' · ')}</b><p>Principales en lima · secundarios en verde suave</p></div></section>`;
}
