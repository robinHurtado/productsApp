import React from 'react';
import HotelName from './HotelName';
import Stars from './Stars';

const FilterTitle = () => (
  <div className="panel panel-default" style={{marginBottom: '1%'}}>
    <div className="panel-body">
      <strong>Filtros</strong>
    </div>
  </div>
);

const Filter = () => (
  <div className="col-sm-6 col-md-3">
    <FilterTitle />
    <HotelName />
    <Stars />
  </div>
);

export default Filter;