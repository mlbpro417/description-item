import React from 'react';
import PropTypes from 'prop-types';


const MainDesc = ({ dataDesc }) => (
  <div className="MainDesc">
    <div>
      <p id="brand">{dataDesc.brand}</p>
    </div>
    <div>
      <h1 id="model">{dataDesc.model}</h1>
    </div>
    <div>
      <p id="price_shipping">${dataDesc.price} & {dataDesc.shipping}</p>
    </div>
    <div>
      <h3 id="stock">{dataDesc.stock ? 'In Stock' : 'Temporarily Out of Stock'}</h3>
    </div>
  </div>
);

MainDesc.propTypes = {
  dataDesc: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.string.isRequired,
    stock: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MainDesc;
