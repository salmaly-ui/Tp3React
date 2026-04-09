import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '10px', background: '#111' }}>
      {connecte ? (
        <span style={{ color: '#98c379' }}> Connecté</span>
      ) : (
        <span style={{ color: '#e06c75' }}> Déconnecté</span>
      )}
      <button
        onClick={() => setConnecte(!connecte)}
        style={{
          marginLeft: '12px',
          padding: '4px 12px',
          background: '#61afef',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          color: '#000',
          fontWeight: 'bold',
        }}
      >
        Changer l'état
      </button>
    </div>
  );
}

export default Connexion;