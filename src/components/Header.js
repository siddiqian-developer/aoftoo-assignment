import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';


function Header () {

  let catgories =  [
    "Category # 1",
    "Category # 2",
    "Category # 3",
    "Category # 4",
    "Category # 5",
    "Category # 6"
  ]; 

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="custom-nav-bar bg-color-primary">
        <Navbar.Brand href='/' className="vcenter-item ml-4">
          <img
            alt=""
            src="./images/logos/Logo1.png"
            width="30"
            height="30"
            className="d-inline-block"
          />
          &nbsp;<span className="brand-name">Softoo</span>
        </Navbar.Brand>   
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav className="">
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {
                catgories.map(category => 
                  <NavDropdown.Item key={category} href='#' className="disabled-main-menu-item">
                    {category}
                  </NavDropdown.Item>)                        
              }                      
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#' className="disabled-main-menu-item">Order Tracking</Nav.Link>
            <Nav.Link href='#' className="disabled-main-menu-item">Customer Care</Nav.Link>
          </Nav> 
          <Nav className="justify-content-end">
              <Nav.Link href='/bag'>
                Bag &nbsp;
                <FontAwesomeIcon icon={faShoppingBag} />
              </Nav.Link>                          
              <Nav.Link href='#' className="disabled-main-menu-item">Login</Nav.Link>                  
          </Nav>   
        </Navbar.Collapse> 
      </Navbar>  
    </>
  )
}

export default Header