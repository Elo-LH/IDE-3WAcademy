
let jour = prompt("quel est le jour de la semaine ?");
let hasAstreinte = confirm("y a-t-il une astreinte ?");

if ( (jour === 'jeudi' || jour === 'vendredi') && ! hasAstreinte ) {
  alert("Pas de MEP en fin de semaine !");
} else {
  let areTestsValid = prompt("Les tests sont-il passés avec succès ?");
  let areFoncValid = prompt("La recette est-elle passée avec succès ?");
  if (areTestsValid && areFoncValid) {
    alert("MEP Autorisée");
  } else {
    alert("Veuillez effectuer les corrections et rééssayez");
  }
}
