import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightToBracket,
  faCartPlus,
  faMagnifyingGlass,
  faPlus,
  faHouse,
  faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';

export default class Nav extends Component {
  render() {
    const { logged, action, loggedUser, logOut, productsLSLength } = this.props;
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
              <p className="logged-user">{loggedUser}</p>
              <Link to={'/product'}>
                {' '}
                <div className="navbar-icon-container">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </Link>
              <Link to={'/'}>
                <div className="navbar-icon-container">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
              </Link>
              <div className="navbar-icon-container">
                <FontAwesomeIcon onClick={logOut} icon={faDoorOpen} />
              </div>
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
              </Link>
              <Link to={'/cart'}>
                <div className="navbar-icon-container faCartPlus">
                  <FontAwesomeIcon icon={faCartPlus} />
                  <div className="products-number">{productsLSLength}</div>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    );
  }
}

// function Nav({ logged, action, loggedUser, logOut }) {

//   );
// }
