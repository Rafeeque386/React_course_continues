import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import Menu from './Components/MenuComponent';


function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand></div>
      </Navbar>
    <Menu/>
    </div>
  );
}

export default App;
