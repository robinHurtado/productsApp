import React from 'react';
import hotelImage from '../Assets/hotels/00650d24_b.jpg';
import star from '../Assets/icons/filters/star_yellow.svg';
import bathtub from '../Assets/icons/amenities/bathtub.svg';
import beach from '../Assets/icons/amenities/beach.svg';
import coffeMaker from '../Assets/icons/amenities/coffe-maker.svg';


const HotelCard = () => (
  <div>
    <div className="col-xs-6 col-md-8" style={{float: 'right'}}>
      <div className="card">
        <img src={hotelImage}
          alt="hotel_image"
          style={{width: '30%'}}
        />
        <div className="card-body" style={{padding: '0'}}>
          <div style={{
            zIndex: '1',
            marginTop: '-19%',
            marginLeft: '32%'
          }}>
            <h5 className="card-title">Hotel DiEstefan</h5>
            {
              [1,2,3].map((elem) => (
                <img src={star} key={elem} alt="star_yellow_icon" />
              ))
            }
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
                <h4>ARS 863</h4>
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