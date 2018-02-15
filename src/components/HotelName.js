import React from 'react';

const HotelName = () => (
  <div className="card" style={{marginBottom: '1%'}}>
    <div className="card-body">
      <h6>Nombre de hotel</h6>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Ingrese nombre del hotel" />
        <button className="btn btn-primary" type="button">Aceptar</button>
      </div>
    </div>
  </div>
);

export default HotelName;