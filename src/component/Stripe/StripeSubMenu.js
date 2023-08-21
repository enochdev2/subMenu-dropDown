import React, {useEffect, useRef} from 'react'
import { useGlobalContext } from './StripeContext';


const StripeSubMenu = () => {
  const {subMenu, closesubMenu , location, pages} = useGlobalContext();
const container = useRef(null)

  useEffect(() => {
  const sub = container.current;
  const {center, bottom } = location;
  sub.style.left = `${center}px`;
  sub.style.top = `${bottom}px`;
 }, [location])
 
 const {page, links} = pages;
 
  return (
    <div className={subMenu?'submenu':'submen'} ref={container}>
     <h3  className='sub-heading' >
      {page}
      </h3> 
      {links.map((lin,index)=>{
          const {label, icon,url} = lin;
        return <a  className='list' key={index} href={url}>
        <span className='inner-list'>
        {icon}
        </span>
          {label}</a>
      })}
      </div>
  )
}

export default StripeSubMenu