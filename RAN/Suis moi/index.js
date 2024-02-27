// IMPORTANT : Toujours commencer par ajouter le listener sur DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // Récupérer l'élément ayant la classe js-diddle
  let diddle = document.querySelector('.js-diddle')
  // Ajouter un listener sur l'événement mousemove
  document.addEventListener('mousemove', function (event) {
    // Récupérer la position de la souris : event.clientX et event.clientY
    let mouseX = event.clientX
    let mouseY = event.clientY
    // Appliquer la position de la souris clientX sur la propriété de style left de l'élément
    diddle.style.left = `${mouseX}px`
    // Appliquer la position de la souris clientY sur la propriété de style top de l'élément
    diddle.style.top = `${mouseY}px`
  })
})
