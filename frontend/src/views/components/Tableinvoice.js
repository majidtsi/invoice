import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import AuthContext from '../../context/AuthContext';
import TutorialDataService from '../../services/TutorialService';
import dayjs from 'dayjs'
import no from '../../asset/images/icon-no.svg'
import yes from '../../asset/images/icon-yes.svg'
import { Link } from 'react-router-dom';
function Tableinvoice() {
    const {allInvoice,deleteInvoice} = useContext(AuthContext)
    const [invoice,setInvoice] = useState({})
   
    useEffect(()=>{
        fetchInvoice()
      
    },[])
    const fetchInvoice = async () => {
        const data = await allInvoice()
        setInvoice(data)
        
    }

    const handleDelete = (e) => {
        e.preventDefault()
        var id = e.target.value
        deleteInvoice(id)
    }


    
    
  return (
    <>
      <Table responsive  bordered hover variant="dark" size="md" className='tabinvoice'>
        <thead>
          <tr>
            <th>#</th>
            <th>CUSTOMERS NAME</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>TYPE OF INVOICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            invoice.length > 0 ?
            invoice.map((data,index) =>
                <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.customer}</td>
                    <td>{dayjs(data.invoice_date_time).format('MMMM DD, YYYY, HH:mm')}</td>
                    <td>{data.total}</td>
                    <td>{data.paid ? <img src={yes} alt="True" /> : <img src={no} alt="False" /> } </td>
                    <td>{data.invoice_type}</td>
                    <td>
                        <Link to={'/invoice/' + data.id + "/"} class="badge text-white bg-success">View</Link>

                        <button id="btn-invoice-sup" type="button" data-toggle="modal" data-target="#supprimer"
                        class="badge text-white bg-danger" value={data.id} title="Supprimer" onClick={handleDelete}
                        >Delete
                        </button>

                        <button id="btn-invoice-mod" type="button" data-toggle="modal" title="Modifier" data-target="#modifier"
                        data-id="{{facture.pk}}" data-customer="{{facture.customer.name}}"
                        class="badge text-dark bg-warning"> Modify
                        </button>
                    </td>
                </tr>
               
): <tr><td>Nathing</td></tr>}
        </tbody>
      </Table>
      
    </>
  );
}


export default Tableinvoice;