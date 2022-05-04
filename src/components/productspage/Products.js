import React from 'react';
import { useState, useEffect } from "react";
import { url } from '../../api/Api';
import GetProducts from '../GetProducts';

function Products() { 
  
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        async function fetchProduct() {
            try{
                const resp = await fetch(url);

                if(resp.ok) {
                    const json = await resp.json();
                    console.log(json);
                    setProduct(json);
                } else {
                    setError("Something in the API might be wrong!");
                }
            
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, []);

    if (loading) {
        return <div className="loader"></div>
    }

    if (error) {
        return <div>ERROR: {error}</div>
    }
  
    return (
        <div className='products-section'>
            <div className='products-grid'>
                {product.map( function (data){
                    const id = data.id;
                    const title = data.acf.navn;
                    const pris = data.acf.pris;
                    const image = data.acf.img1;

                    return <GetProducts key={id} id={id} img={image} title={title} pris={pris} />;
                })}
            </div>
        </div>
    )
}

export default Products;