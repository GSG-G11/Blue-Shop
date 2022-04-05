import React from 'react';
import { Link } from 'react-router-dom';
function Nav({ logged, action }) {
  return (
    <header>
      <nav>
        <div className='logo'>
          <Link to={'/'}>Blue Shop</Link>
        </div>
        <ul>
          <li>
            <div className='nav-link'>
              <input type='text' name='search' onChange={action} placeholder='search'  />
            </div>
          </li>
          {logged ? (
            <>
              <li>
                <div className='nav-link'>
                  <Link to={'/login'}>Add product</Link>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <Link to={'/cart'}>Home</Link>
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <div className='nav-link'>
                  <Link to={'/login'}>Login</Link>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <Link to={'/cart'}>cart</Link>
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
