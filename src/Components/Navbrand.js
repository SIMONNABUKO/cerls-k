import React from 'react';
import Logo from '../logo-cerl.png';
function Navbrand(props) {
  return (
    <div class='navbar-brand'>
      <a href='/'>
        <div className='navbrand'>
          <h1 className='lg'>
            <span>
              <img className='cerls-logo' src={Logo} alt='' />{' '}
            </span>
            Centre for Reverse Logistics and Supply Chain Studies(CeRLS)
          </h1>

          <span className='navbrand-span '>
            {props.state.user ? (
              <>
                <span>
                  <img
                    className='cerls-logo lg img img-circle'
                    height='30'
                    width='30'
                    src={props.state.currentUser.image}
                    alt=''
                  />{' '}
                </span>
                <button className='btn btn-danger lg' onClick={props.logout}>
                  <i className='fa fa-sign-out'></i> Log Out{' '}
                </button>
              </>
            ) : (
              <button className='btn btn-success lg' onClick={props.login}>
                Log In <i className='fa fa-sign-in'></i>
              </button>
            )}
          </span>
        </div>

        <h1 className='sm'>
          <span>
            <img className='cerls-logo' src={Logo} alt='' />{' '}
          </span>
          CeRLS &nbsp;
          <span className='navbrand-span '>
            {props.state.user ? (
              <>
                <button className='btn btn-sm' onClick={props.logout}>
                  <i className='fa fa-sign-out'></i> Log Out &nbsp;&nbsp;&nbsp;
                  <span>
                    <i className='fa fa-user'></i>
                  </span>
                </button>
              </>
            ) : (
              <>
                <button className='btn btn-sm' onClick={props.login}>
                  Log In <i className='fa fa-sign-in'></i>
                </button>
              </>
            )}
          </span>
        </h1>
      </a>
    </div>
  );
}

export default Navbrand;
