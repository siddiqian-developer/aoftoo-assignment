import React, { Fragment, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Col, Container, Form, FormControl, InputGroup, Jumbotron, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';


function Footer () {

  return (    
    <div className="footer-bs bg-color-primary mb-0">
      <Container fluid>
        <Row>
          <Col sm={3} className="footer-brand animated fadeInLeft">
            <h2>Logo</h2>
              <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
          </Col>
          <Col sm={4} className="footer-nav animated fadeInUp">
            <h4>Menu —</h4>
            <Col sm={6}>
              <ul className="pages">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Cetegories</a></li>
                <li><a href="#">Hot Deals</a></li>
                <li><a href="#">Featured Products</a></li>
                <li><a href="#">Top Selling</a></li>
              </ul>
            </Col>
            <Col sm={6}>
              <ul className="list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Warranty Policy</a></li>
              </ul>
            </Col>
          </Col>
          <Col sm={2} className="footer-social animated fadeInDown">
           	<h4>Follow Us</h4>
            	<ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">RSS</a></li>
              </ul>
          </Col>
          <Col sm={3} className="footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
              <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
              <div>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Search for..."
                    aria-label="search-footer"
                    aria-describedby="search-footer"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-dark"><FontAwesomeIcon icon={faEnvelope} /></Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
          </Col>         
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <p className="m-auto">© 2021 SOFTOO All Rights Reserved</p>
        </Row>
      </Container>
    </div>
  )
}

export default Footer