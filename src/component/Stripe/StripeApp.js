import React from 'react'
import StripeNav from './StripeNav';
 import StripeSubMenu from './StripeSubMenu';
 import StripeSideBar from './StripeSideBar';
import StripeBody from './StripeBody';
import './StripeGlobal.css';
import { StripeContext } from './StripeContext';


const StripeApp = () => {
    return (
      <StripeContext>
      <div className='container'> 
      <StripeNav />
      <StripeSideBar />
      <StripeSubMenu />
      <StripeBody /> 
     
     </div>
     </StripeContext>
  )
}

export default StripeApp