import React from 'react';
import star from '../Assets/icons/filters/star_yellow.svg';

const StarIcon = () => (
  <img src={star} alt="star_icon" />
);

const Stars = () => (
  <div className="card">
    <div className="card-body">
      <h4>Estrellas</h4>
      <div><input type="checkbox" />Todas las estrellas</div>
      <div><input type="checkbox" /><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
      <div><input type="checkbox" /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
      <div><input type="checkbox" /><StarIcon /><StarIcon /><StarIcon /></div>
      <div><input type="checkbox" /><StarIcon /><StarIcon /></div>
      <div><input type="checkbox" /><StarIcon /></div>
    </div>
  </div>
);

export default Stars;