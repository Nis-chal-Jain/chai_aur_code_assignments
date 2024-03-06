import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header, Footer, Home} from './components/Index'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
       < Footer/>
    </>
  )
}

export default Layout