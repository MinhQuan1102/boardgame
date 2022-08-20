import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import logo from '../logo.svg'
import {useGlobalContext} from "../context"

const Navbar = () => {
  const {openSidebar, amount, openSubcart, closeSubcart} = useGlobalContext()
  const displaySubcart = (e) => {
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3; 
    openSubcart({center, bottom})
    console.log(1)
  }
  const handleSubcart = (e) => {
    if (!e.target.classList.contains('subcart-btn')) {
      closeSubcart()
    }
  }
  return (
    <nav className="navbar" onMouseOver={handleSubcart}>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="boardgame logo" className="logo" />
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
      <div className="nav-container">
        <button className="subcart-btn" onMouseOver={displaySubcart}>
          <Link to="/cart">
            <svg
              className="nav-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg>
          </Link>
        </button>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
