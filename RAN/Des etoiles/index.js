function createStar(container, size) {
  const star = document.createElement('div')
  star.className = 'shine'
  star.style.top = Math.random() * 100 + '%'
  star.style.left = Math.random() * 100 + '%'
  star.style.animationDelay = Math.random() * 20 + 's'
  star.style.mozAnimationDelay = Math.random() * 20 + 's'
  star.classList.add(size)

  container.appendChild(star)
}

// IMPORTANT : Toujours commencer par ajouter le listener sur DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // Récupérer l'élément ayant la classe js-stars-container
  let container = document.querySelector('.js-stars-container')
  // Créer 500 étoiles en appelant la fonction createStar,
  // en passant les valeurs des deux paramètres container et size
  let limit = 500
  while (limit > 0) {
    let size = 'large'
    if (limit % 2 === 0) {
      size = 'small'
    } else if (limit % 3) {
      size = 'medium'
    }
    createStar(container, size)
    limit--
  }
  // 1. container sera valorisé par l'élément js-stars-container récupéré ci-dessus
  // 2. size sera valorisé comme suit :
  // - Si i est divisible par 2, alors passer la valeur 'small'
  // - Si i est divisible par 3, alors passer la valeur 'medium'
  // - Sinon passer la valeur 'large'
})
