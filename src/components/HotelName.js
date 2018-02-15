import React from 'react';

const HotelName = () => (
  <div className="panel panel-default" style={{marginBottom: '1%'}}>
    <div className="panel-body">
      <h3>Nombre de hotel</h3>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Ingrese nombre del hotel" />
        <button className="btn btn-primary" type="button">Aceptar</button>
      </div>
    </div>
  </div>
);

export default HotelName;