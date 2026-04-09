import ListeTaches from './ListeTaches';
import ListeCourses from './ListeCourses';
import Notif from './Notif';

function Accueil() {
  const snacks = ['Popcorn ', 'Cola ', 'Bonbons ', 'Nachos '];

  return (
    <div className="page">
      <h2>Page d'accueil</h2>

      <Notif notifications={3} />

      <h3 style={{ marginTop: '20px' }}>Films à voir :</h3>
      <ListeTaches />

      <h3 style={{ marginTop: '20px' }}>Snacks à acheter :</h3>
      <ListeCourses articles={snacks} />
    </div>
  );
}

export default Accueil;