import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsList } from '../actionDispatchers/productsActions';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Ticker from 'react-ticker'

function HomeScreen() {

  const [run, setRun] = useState(false)
  const productsList = useSelector(state => state.productsList);
  const { loading, products, error } = productsList;
  const dispatcher = useDispatch()

  const [filterColor, setFilterColor] = useState(null)

  useEffect(() => {
  dispatcher(getProductsList());
    return () => {
          // cleanup
      }
  }, []);

  const filterColorHandler = (filterColor) => {
    setFilterColor(filterColor)
  }
  console.log(filterColor)

  return (
    loading 
    ? 
    <div>Loading...</div>
    :
    error 
    ? 
    <div>{ error }</div>:
    <>
      <div className="bg-dark text-white">
        <Ticker mode="smooth" speed={10} >
        {() => (
              <>
                  SOFTOO TECHNOLOGIES CELL/WHATSAPP: xxxxxxxxxxxx
              </>
          )}
        </Ticker>  
           
          <Carousel fluid>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/sliders/1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/sliders/2.png"
                alt="2nd slide"
              />
            </Carousel.Item>

          <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/sliders/4.png"
                alt="2nd slide"
              />
            </Carousel.Item>

          <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/sliders/5.png"
                alt="2nd slide"
              />
            </Carousel.Item>
          </Carousel>
        
      </div>
      <Container className="home-screen mt-4" fluid>
        <Row>
          <Col sm={3}>
            <h1 className="d-flex justify-content-center">Filter</h1>
            <h4>
              Filter By Color:
            </h4>
            <div>
              <span 
                className="filter-color black"
                onClick={_ => filterColorHandler("Black")}
              >
                Black
              </span>
              <span 
                className="filter-color stone"
                onClick={_ => filterColorHandler("Stone")}
              >
                Stone
              </span>
              <span 
                className="filter-color red"
                onClick={_ => filterColorHandler("Red")}
              >
                Red
              </span>
            </div>
          </Col>
          <Col>
        
          <h1 className="d-flex justify-content-center">Products</h1>
    
        <Row>
          {
            products.filter(product =>
              product.colour == filterColor || !filterColor).map(filteredProduct => 
                <Col xs={12} sm={12} lg={6} key={filteredProduct.id} className="p-4">
                  <ProductCard key={filteredProduct.id} product={filteredProduct} run={run} setRun={setRun} />
                </Col>
              ) 
          }
        </Row>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen