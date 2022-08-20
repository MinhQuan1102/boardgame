import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import logo from '../logo.svg'
export default function Navbar() {
  const { openSubcart, closeSubcart } = useGlobalContext();
  const displayCart = (e) => {
    const tempBtn = 
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-container">
          <svg className='nav-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
