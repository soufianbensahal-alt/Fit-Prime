export const motivationalPhrases = [
  'Todo progreso empieza con una decisión.', 'La constancia vence al talento cuando el talento no entrena.', 'Hoy construyes la fuerza que mañana agradecerás.', 'No entrenas para ser perfecto, entrenas para ser mejor.', 'Una repetición más también cuenta.', 'El cuerpo logra lo que la mente insiste.', 'La disciplina pesa menos que el arrepentimiento.', 'Cada serie te acerca a tu mejor versión.', 'No pares cuando duela, ajusta y continúa.', 'Entrenar hoy es invertir en tu futuro.',
  'La fuerza se gana un día a la vez.', 'El progreso real no hace ruido, se nota.', 'Tu único rival es tu versión de ayer.', 'No busques motivación, construye hábito.', 'El esfuerzo de hoy será tu orgullo mañana.', 'Hazlo incluso cuando no tengas ganas.', 'Cada entrenamiento suma, incluso los difíciles.', 'No se trata de suerte, se trata de constancia.', 'Los resultados llegan cuando no abandonas.', 'Tu cuerpo escucha todo lo que haces por él.',
  'La mejor rutina es la que cumples.', 'Menos excusas, más movimiento.', 'Si puedes empezar, puedes mejorar.', 'La incomodidad es parte del cambio.', 'Entrena con intención, progresa con paciencia.', 'No necesitas hacerlo perfecto, necesitas hacerlo.', 'El músculo se construye con esfuerzo y descanso.', 'La energía aparece cuando empiezas a moverte.', 'La constancia transforma lo imposible en rutina.', 'Cada gota de sudor tiene dirección.',
  'Hoy no compites, hoy mejoras.', 'La fuerza mental también se entrena.', 'Un mal día también puede tener un buen entrenamiento.', 'Sigue, aunque el progreso parezca lento.', 'Tu salud también es una meta.', 'El cambio empieza cuando dejas de negociar contigo.', 'Entrenar es una promesa contigo mismo.', 'Pequeños pasos crean grandes físicos.', 'El dolor pasa, la disciplina queda.', 'La técnica primero, el peso después.',
  'No levantes ego, levanta progreso.', 'Cada descanso también forma parte del plan.', 'La paciencia también construye músculo.', 'Tu mejor versión necesita repetición.', 'El entrenamiento empieza antes de tocar una pesa.', 'Haz que tu rutina hable por ti.', 'No estás lejos, estás en proceso.', 'La fuerza nace cuando decides no rendirte.', 'Hoy entrenas, mañana lo notas.', 'La meta no es sufrir, es superarte.'
];

export function getDailyMotivationalPhrase(date = new Date()) {
  const stamp = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const index = [...stamp].reduce((sum, character) => sum + character.charCodeAt(0), 0) % motivationalPhrases.length;
  return motivationalPhrases[index];
}
