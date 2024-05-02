import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ListeCourses from './ListeCourses.jsx';

/*
- Créer un composant Footer.jsx
contenant un footer avec
un paragraphe
"Site généré par React"
- Intégrer le composant Footer.jsx dans App.jsx
RAPPEL : Tout code jsx doit être dans un wrapper racine
<React.Fragment> si pas de wrapper dans le composant
<React.Fragment>
    <p>Toto</p>
    <p>Titi</p>
</React.Fragment>
Qui peut aussi s'écrire
<>
    <p>Toto</p>
    <p>Titi</p>
</>
*/

function App() {
  return (
    <>
      <Header />
      <ListeCourses />
      <Footer />
    </>
  );
}

export default App;
