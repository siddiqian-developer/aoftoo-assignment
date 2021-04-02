import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { alertService } from '../../src/_services';
import { Alert } from '../_components';



function Home(props) {

  const autoClose= false
    const          keepAfterRouteChange= false

    
  return (
    <div>
      <Alert />

      <div>Home Screen</div>
      <Link to='test'>Go to test</Link>
      <div>{alertService.success('Success!!', { autoClose, keepAfterRouteChange })}</div>
      <button className="btn btn-success m-1" onClick={() => alertService.success('<h1>HIIIIII</h1>', { autoClose, keepAfterRouteChange })}>Success</button>
                <button className="btn btn-danger m-1" onClick={() => alertService.error('Error :(', { autoClose, keepAfterRouteChange })}>Error</button>
                <button className="btn btn-info m-1" onClick={() => alertService.info('Some info....', { autoClose, keepAfterRouteChange })}>Info</button>
                <button className="btn btn-warning m-1" onClick={() => alertService.warn('Warning: ...', { autoClose, keepAfterRouteChange })}>Warn</button>
    </div>
  )
}                

export default Home