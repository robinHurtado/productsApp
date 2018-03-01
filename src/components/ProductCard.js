import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Grid,
  Cell
} from 'react-md';

const ProductCard = ({ brand,categories,description,name,photo,price,stock,style }) => (
  <Card className="md-cell card" style={style}>
    <CardTitle
      title={name}
      subtitle={brand}
      role="presentation"
    />
    <CardText>
      <Grid>
        <Cell size={4}>
          {/*<img src={photo} alt="product_photo" className="card__img" />*/}
        </Cell>
        <Cell size={8}>
          <p>
            {description} <br />
            <b>Stock:</b> <label>{stock}</label> <br />
            <b>Price:</b> <label>${price}</label>
          </p>
        </Cell>
      </Grid>
    </CardText>
  </Card>
);

export default ProductCard;