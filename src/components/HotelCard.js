import React from 'react';
import { HandelStarIcons } from './StarIcon';

const HotelCard = ({name,price,stars,image,amenities}) => (
  <div>
    <div
      className="col-xs-6 col-md-8"
      style={{
        float: 'right',
        marginBottom: '1%'
      }}
    >
      <div className="card">
        <img src={image}
          alt="hotel_image"
          style={{width: '30%',height:'214px'}}
        />
        <div className="card-body" style={{padding: '0'}}>
          <div style={{
            zIndex: '1',
            marginTop: '-19%',
            marginLeft: '32%'
          }}>
            <h5 className="card-title">{name}</h5>
            <HandelStarIcons stars={stars} />
            <br />
            {
              amenities.map((ameniti)=>(
                <img src={`${ameniti}.svg`} key={ameniti}
                  alt="icons" style={{width:'20px',height:'20px'}} />
              ))
            }
            <div style={{
              borderLeftStyle:'dotted',
              zIndex: '1',
              marginTop: '-16%',
              marginLeft: '60%'
            }}>
              <center>
                <label>Precio por noche por <br /> habitación</label>
                <h4 style={{color: '#e88834'}}>ARS {' '}
                  <span style={{color: '#e37412',fontSize: '27px'}}>
                    {price}
                  </span>
                </h4>
                <button className="btn btn-primary" type="button">Ver hotel</button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HotelCard;