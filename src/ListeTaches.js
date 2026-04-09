function ListeTaches() {
  const films = [
    { id: 1, titre: 'Inception' },
    { id: 2, titre: 'Interstellar' },
    { id: 3, titre: 'Le Seigneur des Anneaux' },
  ];

  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>🎥 {film.titre}</li>
      ))}
    </ul>
  );
}

export default ListeTaches;

