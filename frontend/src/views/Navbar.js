import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
    const {user, logoutUser} = useContext(AuthContext)
    const token = localStorage.getItem("authTokens")
    
    const handleLogout = () => {
      logoutUser()
  }

    /*if (token){
        const decoded = jwtDecode(token)
        var user_id = decoded.user_id
    }
    */

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img style={{width:"120px", padding:"6px"}} src="https://i.imgur.com/juL1aAc.png" alt="" />
    
              </a>
              <i style={{"fontSize":"30px","color":"white"}}>INVOICE SYSTEM</i>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="row">
                <div className="col-4"></div>
              <div className="collapse navbar-collapse mr-3 col-8" id="navbarNav">
                <ul className="navbar-nav ">
               
                {token === null && 
                <>
                  
                  
                  
                    
                    <li className="nav-item">
                      <Link className="nav-link" >Register</Link>
                    </li>
                  </>
                  }
    
                {token !== null && 
                  <>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            More option
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="{% url 'add-customer' %}">Add customer</a>
                            <a className="dropdown-item" href="#">add admin</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">statistic</a>

                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" href="#" onClick={handleLogout}>Logout</Link>
                        </div>
                    </li>
                  </>
                  }   
                  
                </ul>
              </div>
              </div>
            </div>
          </nav>
        </div>
      )
}
export default Navbar;