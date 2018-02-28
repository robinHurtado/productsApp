import React from 'react';
import {
  Card,
  CardText,
  CardTitle } from 'react-md';

const ProductCard = () => (
  <Card className="md-block-centered">
    <CardTitle
      title="Card Title"
      subtitle="Card Subtitle"
      role="presentation"
    />
    <CardText>
      <p>
        lorem ipsum <br />
        <b>Stock:</b> <label>1212</label> <br />
        <b>Price</b> <label>$275.00</label>
      </p>
    </CardText>
  </Card>
);

export default ProductCard;