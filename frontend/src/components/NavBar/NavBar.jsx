import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
        <nav>
            <div className='Nav'>
                <NavLink>
                    <h2>
                        Workout Buddy
                    </h2>
                </NavLink>
            </div>
        </nav>
    </>
  )
}

export default NavBar