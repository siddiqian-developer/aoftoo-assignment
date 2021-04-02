import { faMinus, faPlus, faPlusSquare, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Col, Container, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToBag, removeFromBag } from '../actionDispatchers/bagActions';

function BagScreen(props) {
    
  const bag= useSelector(state => state.bag);
  const { bagItems } = bag;
  const dispatcher = useDispatch();

  const removeItemFromBagHandler = (id, qty) => {
      dispatcher(removeFromBag(id, qty))
  }

  return (
    (typeof bagItems !== 'undefined')
    ?
    (bagItems.length !== 0)
    ?
    <Container className="bag-screen p-4">
      <h2 className="mb-3 pt-2">Bag</h2>
      <Container className="bag-container pb-2" fluid>
        <Container className="bag-items-list">
          {
            bagItems.map(item =>              
              <Row key={item.product_id} className="pt-5 pb-5 border-top border-bottom">
                <Col sm={6} lg={3} className="d-flex flex-column justify-content-between align-items-center">
                <div className="bag-image-box">
                  <img src={item.img}/>
                </div>
                </Col>
                <Col sm={6} lg={3}>
                  <h4>
                    {item.name}
                  </h4>
                  <p>
                    Colour: {item.colour}
                  </p>
                  <p>
                    Price: ${item.price}
                  </p>
                </Col> 
                <Col sm={6} lg={3} className="d-flex flex-column justify-content-between">
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="qty-change"
                          onClick={ _ => 
                            {
                              if(item.qty>1)
                              {
                                dispatcher(addToBag(item, item.qty-1));
                              }                      
                            }
                          }
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl 
                        className="qty-input"
                        type="text"  
                        value={item.qty} 
                      />          
                      <InputGroup.Append>
                        <InputGroup.Text
                            className="qty-change"
                            onClick={ _ => 
                              {
                                if(item.qty<100)
                                {
                                  dispatcher(addToBag(item, Number(item.qty)+1));
                                }                      
                              }
                            }
                            >
                          <FontAwesomeIcon icon={faPlus} />
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  <Button 
                    variant="danger"
                    className="mt-2 mb-2"
                    onClick={() => {removeItemFromBagHandler(item.id, item.qty)}}
                    block
                  >
                    Remove From bag
                  </Button>
                </Col>
                <Col sm={6} lg={3} className="d-flex flex-column align-items-center">
                <h4 >Item Total</h4>
                <h1 className="mt-4">${item.price * item.qty}</h1>
                </Col>
              </Row>  
                          
            )            
          }                       
        </Container>                  
        <Container className="bag-action-box mt-5">
          <Row>
            <Col>
              <h1>
                Total Bill ( 
                  {
                      bagItems.reduce((acc, current) => Number(acc) + Number(current.qty), 0) + " "
                  }                    
                  items)
              </h1> 
            </Col>
            <Col>
              <h1 className="w-100 d-flex justify-content-end" >
                  $
                  {
                    bagItems.reduce((acc, current) => acc + current.price * current.qty, 0).toFixed(2)
                  }
              </h1> 
            </Col>
          </Row>
          
          <Button 
            variant="outline-success"          
            onClick = { _ => props.history.push('/')} 
            className="continue-shopping-button"
            block
          > 
            <h4>Continue Shopping</h4>
          </Button>
          <Button 
            variant="outline-warning"          
            className="proceed-to-checkout-button"
            disabled
            block
          > 
            <h4>Proceed To Checkout</h4>
          </Button>
        </Container>
      </Container>
    </Container>                
        :
        <div>The bag is Empty</div>
        :
        <div>Loading...</div>    
    )
}

export default BagScreen