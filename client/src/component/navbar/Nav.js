import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightToBracket,
  faCartPlus,
  faMagnifyingGlass,
  faPlus,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

function Nav({ logged, action }) {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-box"></div>
        <Link className="logo-text" to={'/'}>
          <span className="logo-text-white">Blue</span>{' '}
          <span className="logo-text-blue">Shop</span>
        </Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          name="search"
          onChange={action}
          placeholder="search"
        />
        <div className="search-icon-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      {logged ? (
        <>
          {' '}
          <div className="navbar-actions">
            <Link to={'/product'}>
              {' '}
              <div className="navbar-icon-container">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              {/* <p className="navbar-icon-text">Add Product</p> */}
            </Link>
            <Link to={'/home'}>
              <div className="navbar-icon-container">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              {/* <p className="navbar-icon-text">Home</p> */}
            </Link>
          </div>
        </>
      ) : (
        <>
          {' '}
          <div className="navbar-actions">
            <Link to={'/login'}>
              <div className="navbar-icon-container">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </div>
              {/* <p className="navbar-icon-text">Login</p> */}
            </Link>
            <Link to={'/cart'}>
              <div className="navbar-icon-container">
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
              {/* <p className="navbar-icon-text">Cart</p> */}
            </Link>
          </div>
        </>
      )}
      {/* <ul>
        <li>
  
        </li>
        {logged ? (
          <>
            <li>
              <div className="nav-link">
                <Link to={'/product'}>Add product</Link>
              </div>
            </li>
            <li>
              <div className="nav-link">
                <Link to={'/cart'}>Home</Link>
              </div>
            </li>
          </>
        ) : (
          <>
            <li>
              <div className="nav-link">
                <Link to={'/login'}>Login</Link>
              </div>
            </li>
            <li>
              <div className="nav-link">
                <Link to={'/cart'}>cart</Link>
              </div>
            </li>
          </>
        )}
      </ul> */}
    </div>
  );
}

export default Nav;
