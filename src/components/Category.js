import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Category({ id, category }) {
  return (
    <Link to={`produkter/?=${id}`}>
        <p>{category}</p>
    </Link>
  );
}


Category.propTypes = {
    category: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    id: PropTypes.number,
};
export default Category