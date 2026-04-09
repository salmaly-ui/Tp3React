import film1 from './film1.jpg';
import film2 from './film2.jpg';
import film3 from './film3.jpg';

const images = [
  { src: film1, alt: 'Affiche film 1' },
  { src: film2, alt: 'Affiche film 2' },
  { src: film3, alt: 'Affiche film 3' },
];

function Galerie() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          width="180"
          style={{ borderRadius: '8px', border: '2px solid #333' }}
        />
      ))}
    </div>
  );
}

export default Galerie;