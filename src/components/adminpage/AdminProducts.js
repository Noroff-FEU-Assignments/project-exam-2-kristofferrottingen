import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { url } from '../../api/Api';
import AdminNavbar from '../navbars/AdminNavbar';
import Header from '../text/Heading';
import AdminMenu from './AdminMenu';


function AdminProducts() {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetchProduct();
    }, []); 

    const fetchProduct = async () => {
        const resp = await fetch(url);
        const json = await resp.json();
        console.log(json);
        setProductsData(json);
    }



  return (
    <>
        <AdminNavbar />
        <div className='admin-page'>
            <AdminMenu />
            <div className='admin-product-page'>
                <Header title='Produkter' />
                <button><Link to="/admin/legg-til-produkter"> Legg til product </Link></button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Bilde</th>
                            <th>Navn</th>
                            <th>Str</th>
                            <th>Pris</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    {productsData.map((data) => {
                        const id = data.id;
                        const title = data.acf.navn;
                        const pris = data.acf.pris;
                        const image = data.acf.img1;
                        const str = data.acf.str

                        return (
                            <tbody>
                                <tr>
                                    <td>{id}</td>
                                    <td><img src={image} alt={title} /></td>
                                    <td>{title}</td>
                                    <td>{str}</td>
                                    <td>{pris}</td>
                                    <td><Link to={`edit/${id}`}>Edit</Link></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        </div>  
    </>
  )
}

export default AdminProducts