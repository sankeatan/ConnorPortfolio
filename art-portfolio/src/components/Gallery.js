import React from 'react';
import ArtPiece from './ArtPiece';
import './Gallery.css'; // Custom styles for the gallery

const artworks = [
  { id: 1, title: 'Art 1', imageUrl: '/path/to/art1.jpg' },
  { id: 2, title: 'Art 2', imageUrl: '/path/to/art2.jpg' },
  { id: 3, title: 'Art 3', imageUrl: '/path/to/art3.jpg' },
  // Add more artwork details here
];

const Gallery = () => {
  return (
    <div className="gallery">
      {artworks.map((art) => (
        <ArtPiece key={art.id} title={art.title} imageUrl={art.imageUrl} />
      ))}
    </div>
  );
};

export default Gallery;
