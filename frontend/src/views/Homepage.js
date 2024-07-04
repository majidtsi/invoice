import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Tableinvoice from './components/Tableinvoice'

function Homepage() {
 
  return (
  
    <div className='container mt-3'>
      <div className="row">
        <Link to="/invoice" className="btn col-md-4 btn-primary" >
          Register a new invoice <span className="badge text-bg-secondary"></span>
        </Link>
        <Link to='#' className="col-md-4">
            <span className="badge text-bg-secondary"></span>
        </Link>

        <Link to="/customer" className="btn col-md-4 btn-primary">
            Register a new customer <span className="badge text-bg-secondary"></span>
        </Link>
       

      </div>
      
      <div className="form-group row mt-2">
        <input id="search" className="form-control" type="text" placeholder="Search...." />
      </div>
      <div className='row'>
        <Tableinvoice />
      </div>
     </div>
     
    
  )
}

export default Homepage
