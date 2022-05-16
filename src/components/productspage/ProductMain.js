import React from 'react';
import { useState, useEffect } from "react";
import { productsUrl } from '../../api/Api';
import GetProducts from '../GetProducts';
import ProductFilter from './ProductFilter';


function ProductMain() { 

    const [product, setProduct] = useState([]);
    const [catFiltered, setCatFiltered] = useState([]);
    const [activeCategory, setActiveCategory] = useState(1);

    useEffect(() => {
        fetchProduct();
    }, []); 


    const fetchProduct = async () => {
        const resp = await fetch(productsUrl);
        const json = await resp.json();
        setProduct(json);
        setCatFiltered(json);
    }

    return (
        <div className='product-page-main'>
            <ProductFilter product={product} setCatFiltered={setCatFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory}  />
            <div className='products-section'>
                <div className='products-grid'>
                    {catFiltered.map((data) => {
                        const id = data.id;
                        const title = data.acf.navn;
                        const pris = data.acf.pris;
                        const image = data.acf.img1;

                        return <GetProducts key={id} id={id} img={image} title={title} pris={pris} />;
                    })}
                </div>
            </div>
        </div>
    ) 
}

export default ProductMain;