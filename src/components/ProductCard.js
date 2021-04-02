import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { addToBag } from '../actionDispatchers/bagActions'
import { Button, Card, Container, Form, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import selectorOptionsQty from '../functions/selectorOptionsQty';
import { useDispatch, useSelector } from 'react-redux';
import { alertService } from '../external dependencies/_services';
import { Alert } from '../external dependencies/_components';
import { errorDisplayContent } from '../notifs/error';
import SweetAlert from 'react-bootstrap-sweetalert';



// import {addItem, updateItem, removeItem} from './bagHelpers';

function ProductCard ({product}) {
  const [showAddToBagSuccessModalFlag, setShowAddToBagSuccessModalFlag] = useState(false)
  const [qty, setQty] = useState(0);
  const [availableQty, setAvailableQty] = useState(product.availableQty)
  const dispatcher = useDispatch()
  const history = useHistory();
  const errorAddToBag = useSelector(state => {
    try{
      if(state.errors.errorAddToBag.errorID == product.id)
        return state.errors.errorAddToBag
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (errorAddToBag)
      alertService.error(errorDisplayContent(errorAddToBag), { autoClose: true, keepAfterRouteChange: false})
    return () => {
      // cleanup
    }
  }, [errorAddToBag])


  const showAddToBagSuccessModal = () => {
    return (
      <SweetAlert
        success 
        onCancel={() =>{ 
          setShowAddToBagSuccessModalFlag(false)
          }
        }
        customButtons={
          <React.Fragment>
            <Button 
              variant="success" 
              onClick = {() => {
                setShowAddToBagSuccessModalFlag(false)
                setAvailableQty(availableQty-qty)
                }
              }>
                Continue Shopping
            </Button>
            <Button 
              variant="outline-warning"
              onClick = {() => 
                {history.push('/bag')}
              }>
                View Bag
            </Button>
          </React.Fragment>
      }
    >
      Sucessfully Added to Bag
    </SweetAlert>
    )
  } 

  const addToBagHandler = () => {

    dispatcher(addToBag(product, qty?qty:1));

    setShowAddToBagSuccessModalFlag(true)

  };

  const showAddToBag = () => {
    return (
      (
        <InputGroup className="mb-3">
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="qty"
            /* value={qty} */
            onChange={(e) => setQty(e.target.value)}           
            custom
          >
            <option value="0">Qty...</option>
            {
              selectorOptionsQty(100)
            }
          </Form.Control>
          <InputGroup.Append>
            <Button 
              key={product._id}
              variant="outline-success" 
              onClick={addToBagHandler}
            >
              Add to Bag
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )
      )
    };



  return(
    <Fragment key={product._id}>
      {showAddToBagSuccessModalFlag && showAddToBagSuccessModal()}
      <Card key={product.id} >
        <Card.Header 
          className="d-flex flex-column justify-content-center align-items-center text-center bg-color-primary custom-card-header"
        >
            <h4 className="pt-2">{product.name}</h4>
        </Card.Header>
        <div className="border-bottom border-light border-2 responsive-image-box">
          <div className="image-content">
            <Card.Img src={product.img}/>
          </div>
        </div>
          <Card.Body className="card-body">
            <Card.Title>Description</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <h4>
                  ${product.price}
                </h4>
              </ListGroupItem>
            </ListGroup>
            <br/>
            <Container fluid className="d-flex justify-content-center flex-wrap">
              {showAddToBag()}
            </Container>
            {errorAddToBag && <Alert /> }    
        </Card.Body>
      </Card>
    </Fragment>          
  )
}
export default ProductCard