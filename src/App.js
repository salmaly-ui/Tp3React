import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import Connexion from './Connexion';

function App() {
  return (
    <div>
      <h1 className="titre">🎬 CinéReact</h1>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Connexion />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;