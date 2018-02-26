import React from 'react';
import PropTypes from 'prop-types';

const MainDesc = props => (
  <div>
    <div>
      <p>{props.dataDesc.brand}</p>
    </div>
    <div>
      <h1>{props.dataDesc.model}</h1>
    </div>
    <div>
      <p>${props.dataDesc.price} & {props.dataDesc.shipping}</p>
    </div>
    <div>
      <h3>{props.dataDesc.stock ? 'In Stock' : 'Temporarily Out of Stock'}</h3>
    </div>
  </div>
);

export default MainDesc;

MainDesc.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shipping: PropTypes.string.isRequired,
  stock: PropTypes.bool.isRequired,
};
