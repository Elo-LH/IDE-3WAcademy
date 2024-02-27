// Ce tableau contient la couleur de fond de chaque élément :
// l'élément 0 aura red, l'élément 1 aura blue, ...
let colors = [
  'red',
  'blue',
  'yellow',
  'green',
  'salmon',
  'orange',
  'purple',
  'pink',
  'navy',
  'gold',
]

// Ce tableau contient la position top/left de chaque élément :
// l'élément 0 aura top/left 1 à 1, l'élément 1 aura top/left à 2, ...
let positions = [1, 2, 9, 4, 5, 8, 3, 10, 6, 7]
/******************************** TODO  ********************************/
// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // Récupérer TOUS les éléments ayant la classe js-magic-square
  let squares = document.querySelectorAll('.js-magic-square')
  // Pour chaque élément de la liste précédente
  let count = 0
  squares.forEach((square) => {
    // Récupérer la position depuis le tableau positions
    let newPosition = positions[count]
    // Affecter à la propriété de style top : la position concaténée avec l'unité 'em'
    square.style.top = `${newPosition}em`
    // Affecter à la propriété de style left : la position concaténée avec l'unité 'em'
    square.style.left = `${newPosition}em`
    // Récupérer la couleur de fond de l'élement depuis le tableau colors
    let newColor = colors[count]
    // Affecter la couleur à la propriété de style background
    square.style.backgroundColor = newColor
    count++
  })
})
