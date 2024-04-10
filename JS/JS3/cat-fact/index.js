/* TODO : Récupérer depuis l'API le fait et l'afficher dans le paragraphe "fact"

   BONUS : une fois l'affichage effectué,
   ajouter un bouton pour récupérer et afficher un nouveau fait
*/

// Récupérer des données depuis une API JSON
// avec fetch

const apiUrl = 'https://catfact.ninja/fact'

function fetchData() {
  fetch(apiUrl).then((response) => {
    console.log(response)
    if (response.ok) {
      //response.json().then(console.log)
      response.json().then((data) => {
        console.log(data)
        // Ici se fait le traitement de données
        let paragraphe = document.querySelector('.fact')
        paragraphe.innerText = data.fact
      })
    } else {
      // La requete a echoué
      console.log('La requête a échoué')
      console.log(response)
    }
  })
}
fetchData()

let button = document.querySelector('.js-fetch-button')
button.addEventListener('click', fetchData)
