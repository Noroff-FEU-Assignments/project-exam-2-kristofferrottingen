import React from 'react';
import ProductFilter from './ProductFilter';
import Products from './Products';

function ProductMain() {
  return (
    <div className='product-page-main'>
        <ProductFilter />
        <Products />
    </div>
  )
}

export default ProductMain;