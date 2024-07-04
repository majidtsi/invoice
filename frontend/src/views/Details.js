import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import no from '../asset/images/icon-no.svg'
import yes from '../asset/images/icon-yes.svg'
import dayjs from 'dayjs'
const Details = () => {
    const {id_invoice} = useParams()
    console.log(id_invoice)
    const {detailInvoice} = useContext(AuthContext)
    const [invoice,setInvoice] = useState({})
    const [articles,setArticles] = useState({})
    const [customer,setCustomer] = useState({})
    useEffect(()=>{
        fetchInvoice()

    },[])
    const fetchInvoice = async () => {
        const {invoice,articles,customer} = await detailInvoice(id_invoice)
        setInvoice(invoice)
        setArticles(articles)
        setCustomer(customer)
          
    }
    const print = () => {
       
        window.print()
    }
      
  return (
    <div className="container">
        <div classNameName="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
    			    <div className="card-body p-0">
    				    <div className="invoice-container">
                            <div className="invoice-header">
                            {/*-- Row start -- */}
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="custom-actions-btns mb-5">
                                            <Link to="/" className="btn btn-primary">
                                                <i className="icon-download"></i> Download
                                            </Link>
                                            <button onClick={print} className="btn btn-secondary">
                                                <i className="icon-printer"></i> Print
                                            </button>
                                        </div>
                                    </div>
                                </div>
    						{/*-- Fin start -- */}

                            {/*-- Row start -- */}
                                <div className="row gutters">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <a href="majid.com" className="invoice-logo">
                                            Majid Programmeur
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <address className="text-right">
                                            Majid Programmer , via asiago 2<br />
                                            Genova, Italia<br />
                                            00000 00000
                                        </address>
                                    </div>
                                </div>
    						{/*-- Fin Row start -- */}

                            {/*--  Row start -- */}
    						<div className="row gutters">
    							<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    								<div className="invoice-details">
    									<address>
    										{customer.name}<br />
    										{customer.address}, {customer.city}, Italia
    									</address>
    								</div>
    							</div>
    							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    								<div className="invoice-details">
    									<div className="invoice-num">
    										<div>{invoice.invoice_type} - #00{invoice.id}</div>
                                            <div>{dayjs(invoice.invoice_date_time).format('MMMM DD, YYYY, HH:mm')}</div>
    									</div>
    								</div>													
    							</div>
    						</div>
    						{/*-- Fin Row start -- */}
                            </div>

                            <div className="invoice-body mb-3">
                            {/*--  Row start -- */}
    						<div className="row gutters">
    							<div className="col-lg-12 col-md-12 col-sm-12">
    								<div className="table-responsive">
    									<table className="table custom-table m-0">
    										<thead>
    											<tr>
    												<th>Items</th>
													<th>Product ID</th>
													<th>Quantities</th>
													<th>Unit Price</th>
													<th>Subtotal</th>
    											</tr>
    										</thead>
    										<tbody>
                                            
                                              {articles.length > 0 ? articles.map((article,index)=>
                                                
                                                <tr key={index}>
                                                    <td>{article.name}</td>
                                                    <td>{article.id}</td>
                                                    <td>{article.quantity}</td>
                                                    <td>{article.unit_price}</td>
                                                    <td>{article.get_total}</td>
                                                </tr>
                                              ): null}  
                                              
    											
    											
    											
    											<tr>
    												<td>Comment: {invoice.comments}</td>
    												<td colspan="2">
														<p>
															Subtotal<br />
															Shipment &amp; Handling<br />
															Tax<br />
														</p>
    													<h5 className="text-success"><strong>Total</strong></h5>
    												</td>			
    												<td>
    													<p>
    														{invoice.total} EURO<br />
    														00.00 EURO<br />
    														00.00 EURO<br />
    													</p>
    													<h5 className="text-success"><strong>{invoice.total} EURO</strong></h5>
    												</td>                 
                                                    <td>PAID: {invoice.paid ? <img src={yes} alt="True" /> : <img src={no} alt="False" /> } </td>                   

                                                       
    											</tr>
    										</tbody>
    									</table>
    								</div>
    							</div>
    						</div>
    						{/*-- Fin Row start -- */}
                            </div>
                            <div className="invoice-footer">
    						Thank you for your purchase .
    					    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details
