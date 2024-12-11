import React from 'react';
import './ArtPiece.css';

const ArtPiece = ({ title, imageUrl }) => {
  return (
    <div className="art-piece">
      <img src={imageUrl} alt={title} className="art-image" />
      <div className="art-title">{title}</div>
    </div>
  );
};

export default ArtPiece;
