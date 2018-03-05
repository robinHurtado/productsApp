import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Grid,
  Cell
} from 'react-md';

const ProductCard = (props) => (
  <Card className="md-cell card" style={props.style}>
    <CardTitle
      title={props.name}
      subtitle={props.brand}
      role="presentation"
    />
    <CardText className="card__text">
      <Grid>
        <Cell size={4}>
          <img src={props.photo} alt="product_photo" className="card__img" />
        </Cell>
        <Cell size={8}>
          <p>
            {props.description} <br />
            <b>Stock:</b> <label>{props.stock}</label> <br />
            <b>Price:</b> <label>${props.price}</label>
          </p>
        </Cell>
      </Grid>
    </CardText>
  </Card>
);

export default ProductCard;