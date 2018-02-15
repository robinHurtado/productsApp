import React from 'react';

const Stars = () => (
  <div className="card">
    <div className="card-body">
      <h3>Estrellas</h3>
      <div className="input-group">
        {
          ["Todas las estrellas",5,4,3,2,1].map((elem) => (
            <span key={elem}> <input type="checkbox" />{elem}</span>
          ))
        }
      </div>
    </div>
  </div>
);

export default Stars;