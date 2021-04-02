import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import BagScreen from './screens/BagScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>          
      <div id="ghost"></div>

      <Header/>
      <Router>
        <ScrollToTop />
        <Route exact path='/' component={ HomeScreen }/>
        <Route path='/bag' component={ BagScreen }/>
      </Router>
    <Footer/>
    </> 
  );
}

export default App;
