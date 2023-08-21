import React, { createContext, useContext, useState } from 'react'
import {stripeSubMenuData} from './StripeSubMenuData'

export const AppContext = createContext();


const StripeContext = ({children}) => {
 const [sideBar, setSideBar] = useState(false)
 const [subMenu, setSubMenu] = useState(false)
 const [location, setLocation] = useState({})
const [ pages, setPages ] = useState({page:'',links:[]})

function openSideBar () {
    setSideBar(true)
}
function closeSideBar () {
    setSideBar(false)
}
function opensubMenu (text,locate) {
  const pag = stripeSubMenuData.find((nice) => nice.page === text)
  setPages(pag)
  setLocation(locate)
    setSubMenu(true)
}
function closeSubMenu () {
    setSubMenu(false)
}


  return (
    <AppContext.Provider value={{sideBar,
     subMenu,
      openSideBar,
     closeSideBar,
     opensubMenu,
     closeSubMenu,
     location,
     pages,
     }}>
      {children}
    </AppContext.Provider>
  );
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}
export  {StripeContext}