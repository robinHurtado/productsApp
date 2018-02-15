import React from 'react';
import { HandelStarIcons } from './StarIcon';
import bathtub from '../Assets/icons/amenities/bathtub.svg';
import beach from '../Assets/icons/amenities/beach.svg';
import coffeMaker from '../Assets/icons/amenities/coffe-maker.svg';

const HotelCard = ({name,price,stars,image,amenities}) => (
  <div>
    <div className="col-xs-6 col-md-8" style={{float: 'right'}}>
      <div className="card">
        <img src={image}
          alt="hotel_image"
          style={{width: '30%'}}
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
              [bathtub,beach,coffeMaker].map((ameniti)=>(
                <img src={ameniti} key={ameniti} alt="icons" style={{width:'20px',height:'20px'}} />
              ))
            }
            <div style={{
              borderLeftStyle:'dotted',
              zIndex: '1',
              marginTop: '-12%',
              marginLeft: '56%'
            }}>
              <center>
                <label>Precio por noche por <br /> habitación</label>
                <h4>ARS {price}</h4>
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