// Récupérer des données depuis une API JSON
// avec fetch
fetch('https://catfact.ninja/fact')
 .then((response) => {
     console.log(response);
     if (response.ok) {
         //response.json().then(console.log)
         response.json().then((data) => {
             console.log(data);
             // Ici se fait le traitement de données
         })
     } else {
         // La requete a echoué
         console.log('La requête a échoué');
         console.log(response);
     }
 });
 