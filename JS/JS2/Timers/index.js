// Exécute la fonction au bout d'un certain temps
function updateChrono() {
      console.log('Toto');
}

let timerId = setTimeout(
  updateChrono,
  3000 // 3 sec = 3000 ms
);

console.log(timerId);
clearTimeout(timerId);

// Exécuter la fonction à chaque délai
let timer2Id = setInterval(
  updateChrono,
  3000
);

clearInterval(timer2Id);
