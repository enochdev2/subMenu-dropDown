import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from'./download (1).png';
import { useGlobalContext } from './StripeContext';


const StripeNav = () => {
  const {opensubMenu, closeSubMenu , openSideBar} = useGlobalContext();

 const display = (e) => {
  const page = e.target.textContent;
  const size = e.target.getBoundingClientRect();
  const center = (size.left + size.right)/2;
  const bottom = size.bottom-3;
  console.log(bottom);
  opensubMenu(page, {center,bottom});
 }

 const  hideSubMenu = (e) =>{
    const hide = e.target.classList;
    if(!hide.contains('link-btn')){
      closeSubMenu();
    }
 }
  return (
    <div className='nav' onMouseOver={hideSubMenu}>
      <div className="nav-link">
        <img src={logo} alt="logo" className='logo' />
        <ul className="link">
          <li className='link-btn'onMouseOver={display} >products</li>
          <li className='link-btn' onMouseOver={display} >developers</li>
          <li className='link-btn' onMouseOver={display} >company</li>

        </ul>
      <button className='sign-btn' type="button">sign in</button>
      </div>
       <FaBars className='faBars' onClick={openSideBar}/>
    </div>
  )
}

export default StripeNav