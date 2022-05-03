import React from 'react';
import Category from '../Category';

function ProductFilter() {
  return (
    <div className='product-page-filter'>
        <h4>HANDLE ETTER</h4>
        <div className='line-filter'></div>
        <h4>KATEGORI</h4>
        <Category id='18' category='Sykkel' />
        <Category id='2' category='Hjelm' />
        <Category id='8' category='Sykkellås' />
        <Category id='10' category='Barnesykkel' />
        <div className='line-filter'></div>
        <h4>PRIS</h4>
        <Category id='18' category='kr 0,00 - kr 500,00' />
        <Category id='2' category='kr 500,00 - kr 1500,00' />
    </div>
  )
}

export default ProductFilter