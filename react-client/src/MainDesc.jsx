import React from 'react';
import PropTypes from 'prop-types';
import ListDesc from './ListDesc';

const MainDesc = ({ dataDesc }) => (
  <div id="main_desc">
    <div>
      <p id="brand">{dataDesc.brand}</p>
    </div>
    <div>
      <h1 id="model">{dataDesc.model}</h1>
    </div>
    <div>
      <p id="price_shipping">Price: <span id="price"> ${dataDesc.price}</span>
        <span id="shipping"> {dataDesc.shipping === 'Prime' ?
          <img src="../prime_logo.png" alt="Amazon Prime" /> :
          <span> & {dataDesc.shipping}.</span>}
        </span>
      </p>
    </div>
    <div>
      <h3 id="stock">{dataDesc.stock ? <span id="in">In Stock.</span> : <span id="out">Temporarily Out of Stock.</span>}</h3>
    </div>
    <div id="list_desc">
      {dataDesc.description.map(x => <ListDesc item={x} key={x} />)}
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
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default MainDesc;
