/**************************************************************/
/*                            Data                            */
/**************************************************************/

const articles = [
  'Chips',
  'Saucisson',
  'Glace',
  'Fraises',
  'Vin',
  'Sucre',
  'Bière',
  'Mouchoirs'
];

let nbArticlesDisponibles = articles.length;

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Tant qu'il reste des articles disponibles dans le tableau
// (cad qui n'ont pas été remplacés par une chaine vide '')
while (nbArticlesDisponibles > 0) {

  // Afficher la liste des articles disponibles
  console.log(articles);

  // Demander au client quel article il veut acheter
  let articleVoulu = prompt(`Quel article voulez-vous acheter ? ${articles.join(',')}`)

  // Vérifier si l'article est disponible en recherchant sa position dans la liste
  let i;
  for(i = 0; i < articles.length ; i++) {
    if(articles[i] === articleVoulu) {
      break;
    }
  }

  // Est-ce que l'article est disponible ?
  if (i < articles.length) {
    // OUI
    // Afficher "Ok"
    console.log('ok');
    // Remplacer l'article par une chaine vide '' dans le tableau
    articles[i] = '';
    // Vérifier s'il reste des articles disponibles
    nbArticlesDisponibles--;
  } else {
    // NON
    // Afficher 'Article indisponible...'
    console.log('Article indisponible...');
  }
}

console.log('Epicerie vide :/');
