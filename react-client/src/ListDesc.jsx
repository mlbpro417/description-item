import React from 'react';
import PropTypes from 'prop-types';

const ListDesc = ({ item }) => (
  <div>
    <ul>
      <li id="list-item">{item}</li>
    </ul>
  </div>
);

export default ListDesc;
