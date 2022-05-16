import React, { useState, useEffect } from 'react'
import { Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { url } from '../../api/Api';

function Search() {
    const searchResult = document.querySelector(".search-results");
    const [searchVal, setSearchVal] = useState("");
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        fetchProduct();
    }, []); 

    const fetchProduct = async () => {
        const resp = await fetch(url);
        const json = await resp.json();

        for (let i = 0; i < json.length; i++) {
            setSearchData(json[i].acf.navn);
        }


    }

    console.log(searchData);

  return (
    <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Søk..."
            className="me-2"
            aria-label="Search"
            onChange={(event) => {
                setSearchVal(event.target.value);
            }}
        />
        <div className='search-results'>
            {/* {searchData.filter.map((value) => {
                if (searchVal === "") {
                    return searchResult.style.display = "none";
                } else if (value.acf.navn.toLowerCase().includes(searchVal.toLowerCase())) {
                    return (
                        <Link to={`/detail/${value.id}`}>{value.acf.navn}</Link>
                    )
                }
            })} */}
        </div>
    </Form>
  )
}

export default Search;