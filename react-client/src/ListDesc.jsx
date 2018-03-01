import React from 'react';
import PropTypes from 'prop-types';

const ListDesc = ({ item }) => (
  <div id="list_desc">
    <ul>
      <li id="list-item">{item}</li>
    </ul>
  </div>
);

export default ListDesc;

ListDesc.propTypes = {
  item: PropTypes.string.isRequired,
};
