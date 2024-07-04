import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './App.css';
import Navbar from './views/Navbar';
import Homepage from './views/Homepage'
import PrivateRoute from './utils/PrivateRoute';
import Loginpage from './views/Loginpage';
import Footerpage from './views/pages/Footerpage';
import Details from './views/Details';
import RegisterCustomer from './views/RegisterCustomer';
import RegisterInvoice from './views/RegisterInvoice';

function App() {
  return (
    
    <Router>
      <AuthProvider>     
        <Navbar />          
          <Routes>         
            <Route exact element={<PrivateRoute  />}>
              <Route exact path="/" element={<Homepage />} />  
              <Route element={<Details />} path="/invoice/:id_invoice/" />   
              <Route element={<RegisterCustomer />} path="/customer" />
              <Route element={<RegisterInvoice />} path="/invoice" />   
            </Route>
            <Route element={<Loginpage />} path="/login" />
            
          </Routes>
          <Footerpage />
      </AuthProvider>
    </Router>


    
    
  );
}

export default App;
