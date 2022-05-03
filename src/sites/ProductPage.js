import React from 'react'
import ProductHero from '../components/productspage/ProductHero'
import ProductMain from '../components/productspage/ProductMain'

function ProductPage() {
  return (
    <div className='product-page'>
        <ProductHero />
        <ProductMain />
    </div>
  )
}

export default ProductPage