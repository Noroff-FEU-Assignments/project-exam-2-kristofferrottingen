import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { url } from '../api/Api';

function DetailsPage() {
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const { id } = useParams();

    if(!id) {
        navigate("/produkter");
    }

    const detailUrl = url + id;

   
    useEffect( function() {
        async function fetchInfo() {
            try{
                const resp = await fetch(detailUrl);

                if (resp.ok) {
                    const data = await resp.json();
                    console.log(data);
                    setInfo(data);
                } else {
                    setError("Some issue has been detected");
                }
            
            } catch (error) {
                setError(error.toString());
            } finally{
                setLoading(false);
            }
        }fetchInfo();

    }, [detailUrl]);

    if (loading) {
        return <div className="loader"></div>
    }

    if (error) {
        return <div>ERROR: {error}</div>
    }


  return (
    <div className='details-page-section'>
        <div className='details-page-left'>
            <img src={info.acf.img1} alt={info.acf.navn}/>
            <div className='details-line'></div>
            <h4>Produkter du og vil like</h4>
        </div>
        <div className='details-page-right'>
            <h1>{info.acf.navn}</h1>
            <p>{info.acf.pb}</p>
            <div className='details-price-sku'>
                <div className='details-price'>
                    <p>kr <span>{info.acf.pris}</span></p>
                </div>
                <div className='details-sku'>
                    <span>PÅ LAGER</span>
                    <p>SKU#: {info.acf.sku}</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default DetailsPage;