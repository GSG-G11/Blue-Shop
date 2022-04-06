import './errors.css';
import {Link} from 'react-router-dom';
function ServerError() {
  return (
    <>
      <div className='cont'>
        <div class='mainBox'>
          <div class='err'>5</div>
          <div class='err'>0</div>
          <div class='err'>0</div>
        </div>
        <div class='msg'>Internal Server Error</div>
        <div  className='a'> <Link to={'/'} className='a'> Go To Home </Link></div>
      </div>
    </>
  );
}

export default ServerError;
