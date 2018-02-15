import React from 'react';

const Stars = () => (
  <div className="panel panel-default" style={{marginBottom: '1%'}}>
    <div className="panel-body">
      <h3>Estrellas</h3>
      <div className="input-group">
        {
          ["Todas las estrellas",5,4,3,2,1].map((elem) => (
            <span key={elem}><input type="checkbox" /> {elem} <br /></span>
          ))
        }
      </div>
    </div>
  </div>
);

export default Stars;