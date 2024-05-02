import './Header.css';

function Header() {
    const texte = 'Mon premier site en react';

    return (
        <header>
          <h1>Mon site</h1>
          <p className="citation">{texte}</p>
        </header>
    );
}

export default Header;
