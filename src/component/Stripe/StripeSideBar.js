import React from 'react'
import {stripeSubMenuData} from './StripeSubMenuData'
import { useGlobalContext } from './StripeContext';
import { FaTimes } from 'react-icons/fa';
const StripeSideBar = () => {
  const {sideBar, closeSideBar} = useGlobalContext();
  return (
    <>
    {sideBar &&  
    <div className='sidebar'>
     <div className="sidebar-container">
     <FaTimes className='close-btn' onClick={closeSideBar} />
      {stripeSubMenuData.map((link,index)=>{
       const{page,links} = link;
       return(
       <article className='article'>
       <h2 className='sub-heading' key={index}> {page}</h2>
       {links.map((lin,index)=>{
       const {label, icon,url} = lin;
       return  <a className='list' key={index} href={url}><span className='inner-list'>
        {icon}
        </span>
        {label}</a>
     })}
       </article>  
      ) 
      })}
     </div>
      </div>
    }
    </>
  )
}

export default StripeSideBar