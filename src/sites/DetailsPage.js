import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { url } from '../api/Api';

function DetailsPage() {
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let history = useHistory();

    const { id } = useParams();

    if(!id) {
        history.push("/produkter");
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
    <div></div>
  )
}

export default DetailsPage;