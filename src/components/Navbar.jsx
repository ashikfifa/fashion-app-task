import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav>
        <div>
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
          />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tshirt-logo-up">Logo</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
