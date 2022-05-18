import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { messageUrl } from '../../api/Api';
import AdminNavbar from '../navbars/AdminNavbar';
import Header from '../text/Heading';
import AdminMenu from './AdminMenu';
import AdminModal from './AdminModal';

function AdminMessages() {

    const [messageInfo, setMessageInfo] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetchMessage();
    }, []); 

    const fetchMessage = async () => {
        const resp = await fetch(messageUrl);
        const json = await resp.json();
        console.log(json);
        setMessageInfo(json);
    }

    

  return (
    <>
        <AdminNavbar />
        <div className="admin-page">
            <AdminMenu />
            <div className='admin-message-page'>
                <Header title='Henvendelser' />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Navn</th>
                            <th>E-post</th>
                            <th>Melding</th>
                            <th>Se mer</th>
                        </tr>
                    </thead>
                    {messageInfo.map((data) => {
                        const id = data.id;
                        const navn = data.title.rendered;
                        const melding = data.content.rendered;
                        const epost = data.slug;


                        return (
                            <tbody key={id}>
                                <tr>
                                    <td>{id}</td>
                                    <td>{navn}</td>
                                    <td>{epost}</td>
                                    <td><p>{melding}</p></td>
                                    <td> 
                                        <button onClick={() => setShow(true)}>Se mer</button>

                                        <AdminModal open={show} onClose={() => setShow(false)}>
                                            <h3>Melding: {id}</h3>
                                            <div className='modal-info'>
                                                <p>Navn: <span>{navn}</span></p>
                                                <p>E-post: <span>{epost}</span></p>
                                            </div>
                                            <div className='modal-message'>
                                                <p>Melding:</p>
                                                <p className='message'>{melding}</p>
                                            </div>
                                        </AdminModal>
                                        
                                    </td>
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

export default AdminMessages