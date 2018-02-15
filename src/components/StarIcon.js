import React from 'react';
import star from '../Assets/icons/filters/star_yellow.svg';

const StarIcon = () => (
  <img src={star} alt="star_yellow_icon" />
);

export const HandelStarIcons = ({stars}) => {
  switch(stars){
    case 5:
      return(<span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>);
    case 4:
      return(<span><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>);
    case 3:
      return(<span><StarIcon /><StarIcon /><StarIcon /></span>);
    case 2:
      return(<span><StarIcon /><StarIcon /></span>);
    default:
      return(<span><StarIcon /></span>);
  }
}