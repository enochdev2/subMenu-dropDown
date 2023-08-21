import React from 'react'
import bgimg from './stripeIma.png'
import { useGlobalContext } from './StripeContext';


const StripeBody = () => {
  const {closeSubMenu } = useGlobalContext();

  return (
    <div className='background'onMouseOver={closeSubMenu}>
      <img  src={bgimg} alt="ing" />
    </div>
  )
}

export default StripeBody