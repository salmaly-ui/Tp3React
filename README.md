# 🎬 CinéReact — TP React

Projet pédagogique réalisé dans le cadre du cours React (3ème année, S6).

---

## 📋 Description

CinéReact est une application web créée avec **React**. Elle met en pratique :

- La navigation avec **React Router**
- Le **rendu conditionnel** (opérateurs ternaires et logiques)
- Les **listes dynamiques** avec `map()`
- L'intégration d'**images**, de **médias** et de **styles CSS**

---

##  Lancer le projet

### Prérequis

- [Node.js](https://nodejs.org) installé sur votre machine
- Un terminal (PowerShell, bash, etc.)

### Installation

```bash
# Cloner ou ouvrir le dossier du projet
cd tp-cinema

# Installer les dépendances
npm install

# Installer React Router
npm install react-router-dom

# Lancer le serveur de développement
npm start
```

L'application s'ouvre automatiquement sur **http://localhost:3000**

---

##  Structure du projet

```
tp-cinema/
├── public/
│   └── index.html
└── src/
    ├── index.js            → Point d'entrée, active BrowserRouter
    ├── App.js              → Routeur principal + navigation
    ├── App.css             → Styles globaux
    │
    ├── Accueil.js          → Page d'accueil (/)
    ├── Apropos.js          → Page À propos (/apropos)
    ├── Contact.js          → Page Contact (/contact)
    │
    ├── Connexion.js        → Composant bouton connecté/déconnecté
    ├── ListeTaches.js      → Liste de films avec map()
    ├── ListeCourses.js     → Liste dynamique via props
    ├── Notif.js            → Rendu conditionnel notifications
    ├── Logo.js             → Affichage d'une image importée
    ├── LecteurAudio.js     → Lecteur audio natif
    └── Galerie.js          → Galerie de 3 images
```

---

##  Pages et routes

| URL | Composant | Description |
|-----|-----------|-------------|
| `/` | `Accueil.js` | Liste de films, snacks, notifications |
| `/apropos` | `Apropos.js` | Présentation du projet |
| `/contact` | `Contact.js` | Informations de contact |

---
## Demonstaration 


https://github.com/user-attachments/assets/5f8f13b6-3b24-4216-ba5c-880d67bd3765


##  Fonctionnalités

### Navigation (React Router)
Utilisation de `<Link>`, `<Routes>` et `<Route>` pour une navigation SPA sans rechargement de page.

### Rendu conditionnel
```jsx
{connecte ? <span> Connecté</span> : <span> Déconnecté</span>}
```

### Liste dynamique avec map()
```jsx
{films.map((film) => (
  <li key={film.id}>🎥 {film.titre}</li>
))}
```

### Props
```jsx
<ListeCourses articles={['Popcorn ', 'Cola ']} />
```

---

##  Style CSS

Le fichier `App.css` utilise un style simple et lisible :
- Fond blanc, texte foncé
- Navigation bleue (`#3498db`)
- Listes avec bordure colorée à gauche
- Mise en page centrée avec largeur maximale de 600px

---

## 📚 Concepts React utilisés

| Concept | Fichier(s) |
|---------|-----------|
| `useState` | `Connexion.js` |
| `map()` | `ListeTaches.js`, `ListeCourses.js`, `Galerie.js` |
| `props` | `ListeCourses.js`, `Notif.js` |
| `import` image/audio | `Logo.js`, `LecteurAudio.js` |
| `<Link>` / `<Route>` | `App.js` |
| `className` | Tous les composants |

---

## 👤 Auteur

- **Étudiant :** SALMA LAOUY
- **Filiere :** 3ème année CLE informatique ENS MARRAKECH 
- **Date :** 2025/2026

---

## 📝 Notes

- Les vulnerabilities affichées par `npm install` sont normales avec `create-react-app` et n'affectent pas le fonctionnement du projet.
- Les fichiers `logo.png`, `audio.mp3` et `film1.jpg / film2.jpg / film3.jpg` doivent être placés manuellement dans le dossier `src/`.
