import './errors.css';
import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <>
      <div className='cont'>
        <div class='mainBox'>
          <div class='err'>4</div>
          <div class='err'>0</div>
          <div class='err'>4</div>
        </div>
        <div class='msg'>Page Not Found</div>
        <div  className='a'> <Link to={'/'} className='a'> Go To Home </Link></div>
      </div>
    </>
  );
}

export default NotFound;
