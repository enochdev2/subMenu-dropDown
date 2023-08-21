import React from 'react'
import {FaCreditCard,FaBook, FaBriefcase }  from 'react-icons/fa';

export const stripeSubMenuData = [
    {
        page: 'products',
        links: [
            {
             label:'payment',
             icon: <FaCreditCard/>,
             url: '/products'
            },
            {
             label:'terminal',
             icon: <FaCreditCard/>,
             url: '/products'
            },
            {
             label:'Connect',
             icon: <FaCreditCard/>,
             url: '/products'
            },
            {
                label:'help',
                icon: <FaBook/>,
                url: '/products'
            },
        ],
    },
    {
        page: 'developers',
        links: [
            {
             label:'plugins',
             icon: <FaBook/>,
             url: '/products'
            },
            {
             label:'labraries',
             icon: <FaBook/>,
             url: '/products'
            },
            {
             label:'billing',
             icon: <FaBook/>,
             url: '/products'
            },
        ],
    },
    {
        page: 'company',
        links: [
            {
             label:'about',
             icon: <FaBriefcase/>,
             url: '/products'
            },
            {
             label:'customer',
             icon: <FaBriefcase/>,
             url: '/products'
            },       
        ],
    },
                                   
] 
 