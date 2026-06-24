const item = (id, name, category, primaryMuscles, equipment, level = 'Intermedio') => ({
  id, name, category, primaryMuscles, secondaryMuscles: category === 'Core' ? ['Cadera'] : ['Core', 'Estabilizadores'], equipment, level,
  description: `Ejercicio de ${category.toLowerCase()} para desarrollar fuerza y control con técnica consistente.`,
  steps: ['Adopta una posición estable y activa el abdomen.', 'Ejecuta el recorrido de forma controlada.', 'Vuelve al inicio sin perder la postura.'],
  commonMistakes: ['Usar impulso en lugar de control.', 'Perder la posición neutra de la espalda.'], tips: ['Empieza con una carga que puedas dominar.', 'Prioriza el rango de movimiento cómodo.'],
  recommendedSets: '3–4', recommendedReps: category === 'Cardio y funcional' ? '30–45 s' : '8–12', recommendedRestSeconds: 90, animationDuration: 1.5
});

export const exercises = [
  item('press-banca', 'Press banca', 'Pecho', ['Pectoral mayor'], 'Barra', 'Intermedio'), item('press-inclinado', 'Press inclinado con mancuernas', 'Pecho', ['Pectoral superior'], 'Mancuernas'), item('flexiones', 'Flexiones', 'Pecho', ['Pectoral mayor'], 'Peso corporal', 'Principiante'), item('aperturas', 'Aperturas con mancuernas', 'Pecho', ['Pectoral mayor'], 'Mancuernas'), item('fondos-paralelas', 'Fondos en paralelas', 'Pecho', ['Pectoral inferior'], 'Paralelas', 'Avanzado'),
  item('dominadas', 'Dominadas', 'Espalda', ['Dorsal ancho'], 'Barra', 'Intermedio'), item('jalon-pecho', 'Jalón al pecho', 'Espalda', ['Dorsal ancho'], 'Polea'), item('remo-barra', 'Remo con barra', 'Espalda', ['Dorsal ancho'], 'Barra', 'Intermedio'), item('remo-mancuerna', 'Remo con mancuerna', 'Espalda', ['Dorsal ancho'], 'Mancuerna'), item('peso-muerto', 'Peso muerto', 'Espalda', ['Erectores espinales'], 'Barra', 'Avanzado'),
  item('sentadilla', 'Sentadilla', 'Piernas', ['Cuádriceps', 'Glúteos'], 'Barra', 'Intermedio'), item('prensa', 'Prensa de piernas', 'Piernas', ['Cuádriceps'], 'Máquina'), item('zancadas', 'Zancadas', 'Piernas', ['Cuádriceps', 'Glúteos'], 'Mancuernas'), item('rumano', 'Peso muerto rumano', 'Piernas', ['Isquiotibiales'], 'Barra'), item('extension-cuad', 'Extensión de cuádriceps', 'Piernas', ['Cuádriceps'], 'Máquina', 'Principiante'), item('curl-femoral', 'Curl femoral', 'Piernas', ['Isquiotibiales'], 'Máquina'), item('gemelos', 'Elevación de gemelos', 'Piernas', ['Gemelos'], 'Máquina', 'Principiante'),
  item('press-militar', 'Press militar', 'Hombros', ['Deltoides anterior'], 'Barra'), item('laterales', 'Elevaciones laterales', 'Hombros', ['Deltoides lateral'], 'Mancuernas', 'Principiante'), item('frontales', 'Elevaciones frontales', 'Hombros', ['Deltoides anterior'], 'Mancuernas'), item('reverse-fly', 'Pájaros / reverse fly', 'Hombros', ['Deltoides posterior'], 'Mancuernas'), item('face-pull', 'Face pull', 'Hombros', ['Deltoides posterior'], 'Polea'),
  item('curl-barra', 'Curl con barra', 'Bíceps', ['Bíceps braquial'], 'Barra'), item('curl-mancuernas', 'Curl con mancuernas', 'Bíceps', ['Bíceps braquial'], 'Mancuernas', 'Principiante'), item('martillo', 'Curl martillo', 'Bíceps', ['Braquial'], 'Mancuernas'), item('concentrado', 'Curl concentrado', 'Bíceps', ['Bíceps braquial'], 'Mancuerna'),
  item('triceps-polea', 'Extensión de tríceps en polea', 'Tríceps', ['Tríceps braquial'], 'Polea', 'Principiante'), item('frances', 'Press francés', 'Tríceps', ['Tríceps braquial'], 'Barra Z'), item('fondos-banco', 'Fondos en banco', 'Tríceps', ['Tríceps braquial'], 'Banco', 'Principiante'), item('triceps-cabeza', 'Extensión por encima de la cabeza', 'Tríceps', ['Tríceps braquial'], 'Mancuerna'),
  item('plancha', 'Plancha', 'Core', ['Recto abdominal'], 'Peso corporal', 'Principiante'), item('crunch', 'Crunch abdominal', 'Core', ['Recto abdominal'], 'Peso corporal', 'Principiante'), item('elevacion-piernas', 'Elevación de piernas', 'Core', ['Recto abdominal'], 'Peso corporal'), item('russian-twist', 'Russian twist', 'Core', ['Oblicuos'], 'Peso corporal'), item('mountain-climbers', 'Mountain climbers', 'Core', ['Core'], 'Peso corporal'),
  item('burpees', 'Burpees', 'Cardio y funcional', ['Cuerpo completo'], 'Peso corporal', 'Intermedio'), item('jumping-jacks', 'Jumping jacks', 'Cardio y funcional', ['Cuerpo completo'], 'Peso corporal', 'Principiante'), item('battle-ropes', 'Battle ropes', 'Cardio y funcional', ['Hombros', 'Core'], 'Cuerdas'), item('sentadilla-salto', 'Sentadilla con salto', 'Cardio y funcional', ['Cuádriceps', 'Glúteos'], 'Peso corporal'), item('farmer-walk', 'Farmer walk', 'Cardio y funcional', ['Antebrazos', 'Core'], 'Mancuernas')
];

Object.assign(exercises.find(exercise => exercise.id === 'press-banca'), {
  secondaryMuscles: ['Tríceps', 'Deltoides anterior'],
  description: 'Ejercicio de empuje horizontal enfocado en el pectoral mayor, con participación del tríceps y deltoides anterior.',
  steps: ['Túmbate con los pies firmes en el suelo y las escápulas retraídas.', 'Agarra la barra ligeramente más ancho que los hombros.', 'Baja de forma controlada hacia la zona media o baja del pecho.', 'Empuja arriba manteniendo pecho y espalda estables.'],
  commonMistakes: ['Rebotar la barra en el pecho.', 'Levantar los pies o perder estabilidad escapular.', 'Abrir demasiado los codos o bajar sin control.'],
  tips: ['Controla la bajada y mantén tensión en la espalda.', 'Empuja con fuerza sin bloquear los codos de forma agresiva.'],
  videoUrl: '/videos/exercises/press-banca-demo-smooth.mp4',
  videoAlt: 'Press banca en cámara lenta mostrando el recorrido de empuje horizontal'
});
