import React from 'react';
import { Link } from 'react-router-dom';


const Nav = (props) => {
  const linkStyles = {
    'color': 'white',
    'textDecoration': 'none'
  };

  return (
    <nav className="Nav">
      <h1>Fortnite Showcase</h1>
      <ul>
        <Link to="/about" style={linkStyles}>
          <li>About</li>
        </Link>

        <Link to="/store" style={linkStyles}>
          <li>Store</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;