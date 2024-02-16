import React from 'react'
import { NavBarMobile } from './NavBarMobile'
import { NavBarDesktop } from './NavBarDesktop'

export const NavBar = () => {
  return (
    <>
        <div className='hidden lg:block'>
            <NavBarDesktop/>
        </div>
        <div className='block lg:hidden'>
            <NavBarMobile/>
        </div>
    </>
  )
}
