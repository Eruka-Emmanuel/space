import React from 'react';

//fontawesome start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
//fontawesome end

//react routing start
import { NavLink, Link} from 'react-router-dom';
//react routing end

//react-bootstrap start
//import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';
//react-bootstrap end

//styling start
import "./SpaceNavbar.css";
//styling end

function SpaceNavbar(props) {

  return (
    <div  className="bg-body-white mb-4 d-flex flex-column justify-content-center align-items-center sticky-top" style={{backgroundColor: '#fff', borderBottom:'1px solid rgba(182,202,214,.3)', minHeight:'75px'}}>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-9 col-lg-2'>
                <div lassName='w-100 h-100 d-flex flex-row  justify-content-center align-items-end'>
                  <Link style={{textDecoration: "none",}} to='/' replace>
                    <h1 className='text-theme-color-App px-3 px-lg-5'>Space</h1>
                  </Link>
                </div>
            </div>
    
            <div className='col-12 col-lg-8 d-none d-lg-inline'>
              <div className='w-100 h-100 flex-row d-flex justify-content-center align-items-center'>
                <div className='row h-100'>
                  <div className='d-flex flex-row flex-nowrap justify-content-center align-items-center'>
                    <div className='nav-link-non-shaded-background-App px-4'>
                      <NavLink to='/' className="nav-link-App" title='go to home'>
                        <FontAwesomeIcon icon={faHouse}/>
                      </NavLink>
                    </div>
                    <div className='smaller-font-size-App'>Note: this should be a Component</div>
                    <div className='nav-link-non-shaded-background-App px-4'>
                      <Link to='/login' className="link-App">
                        log in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            <div className='col-3 col-lg-2'>
              <div className='w-100 h-100 flex-row d-flex justify-content-center align-items-center'>
                <div className='fa-App'>
                  <FontAwesomeIcon icon={faBars} className='text-theme-color-App'/>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='w-100 d-flex flex-row flex-wrap justify-content-center d-lg-none' >
          <div className='nav-link-non-shaded-background-App px-4'>
            <NavLink to='/' className="nav-link-App" title='go to home'>
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </div>
          <p className='smaller-font-size-App'>Note: this should be a Component</p>
          <div className='nav-link-non-shaded-background-App px-4'>
            <Link to='/login' className="link-App">
              log in
            </Link>
          </div>
      </div>
    </div>
  );
}
export default SpaceNavbar;