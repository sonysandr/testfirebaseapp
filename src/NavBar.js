import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
        <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
        </ul>
    </nav>
  )
}
