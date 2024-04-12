/* TODO : Récupérer depuis l'API le fait et l'afficher dans le paragraphe "fact"

   BONUS : une fois l'affichage effectué,
   ajouter un bouton pour récupérer et afficher un nouveau fait
*/

// Récupérer des données depuis une API JSON
// avec fetch
function getInput() {
  console.log('entered getInput')

  let search = document.querySelector('.js-search-input')
  console.log(search)
  let searchInput = search.value
  return searchInput.toUpperCase()
}

function fetchData() {
  console.log('entered fecthData')
  let search = getInput()
  console.log(search)

  let apiUrl = 'https://api.github.com/users/' + search

  fetch(apiUrl).then((response) => {
    console.log(response)
    if (response.ok) {
      //response.json().then(console.log)
      response.json().then((data) => {
        console.log(data)
        // Ici se fait le traitement de données
        let userCard = document.querySelector('.user-card')

        let userAvatar = document.createElement('img')
        userAvatar.src = data.avatar_url
        userCard.appendChild(userAvatar)

        let userName = document.createElement('h1')
        userName.innerText = data.login
        userCard.appendChild(userName)

        let userRepos = document.createElement('p')
        userRepos.innerText = `Public repositories : ${data.public_repos}`
        userCard.appendChild(userRepos)

        let date = data.created_at.substr(0, 10)

        let userAge = document.createElement('p')
        userAge.innerText = `User since : ${date}, ${data} days ago`
        userCard.appendChild(userAge)
      })
    } else {
      // La requete a echoué
      console.log('La requête a échoué')
      console.log(response)
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  let button = document.querySelector('.js-search-button')
  button.addEventListener('click', fetchData)
})
