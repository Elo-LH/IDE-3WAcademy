/* 
  Récupérer depuis l'API un utilisateur généré aléatoirement
  Puis afficher les informations récupérées dans la console
*/
const apiUrl = 'https://randomuser.me/api'

function fetchData() {
  fetch(apiUrl).then((response) => {
    console.log(response)
    if (response.ok) {
      //response.json().then(console.log)
      response.json().then((data) => {
        console.log(data)
        // Ici se fait le traitement de données
        let user = data.results[0]
        console.log(user)
      })
    } else {
      // La requete a echoué
      console.log('La requête a échoué')
      console.log(response)
    }
  })
}
fetchData()
