import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-scroll';
import './Navbar.css';

const Header = () => {
  return (
    <div className='Nav Nav-bar'>
      <ul className='Nav Nav-items'>
      <li className=" Nav Nav-list">
        <Link 
        activeClass='active'
        to='Home'
        spy={true}
        duration={800}>
          <i className="nav box bxs-home-alt-2"></i>
            <span className="nav nav-name">Home</span>
        </Link>
      </li>
      <li className=" Nav Nav-list">
      <Link 
        activeClass='active'
        to='About'
        spy={true}
        duration={800}>
             <i className="Nav bx bxs-user"></i>
            <span className="Nav Nav-name">About</span>          
        </Link>
      </li>
      <li className=" Nav Nav-list">
      <Link 
        activeClass='active'
        to='Skills'
        spy={true}
        duration={800}>
           <i className="Nav bx bxs-briefcase"></i>
            <span className=" Nav Nav-name">Skills</span>          
        </Link>
      </li>
      {/* <li className=" nav nav-list">
      <Link 
        activeClass='active'
        to='Projects'
        spy={true}
        duration={800}>
           <i className="nav box bxs-devices"></i>
            <span className="nav nav-name">Projects</span>          
        </Link>
      </li> */}
      <li className=" Nav Nav-list">
      <Link 
        activeClass='active'
        to='Contact'
        spy={true}
        duration={800}>
            <i className="Nav bx bxs-message-alt"></i>
            <span className="Nav Nav-name">Contact</span>          
        </Link>
      </li>
      </ul>

    </div>
  )
}

export default Header

