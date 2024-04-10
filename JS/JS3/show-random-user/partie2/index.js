/* 
  Récupérer depuis l'API un utilisateur généré aléatoirement
  Puis générer du HTML depuis Javascript pour afficher le nom et le prenom dans le navigateur

  NOTE : Utiliser document.createElement() pour se faire.
*/
const apiUrl = 'https://randomuser.me/api'

function welcomeUser(user) {
  let container = document.querySelector('.js-welcome-text')
  container.innerText = `Welcome ${user.name.first} ${user.name.last}, bienvenue dans le culte du JSON`
}

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
        welcomeUser(user)
      })
    } else {
      // La requete a echoué
      console.log('La requête a échoué')
      console.log(response)
    }
  })
}

fetchData()
