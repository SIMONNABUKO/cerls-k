import React from 'react';
import Navbrand from './Navbrand.js';

export default function Header(props) {
  return (
    <header>
      <nav class='navbar navbar-default navbar-fixed-top' role='navigation'>
        <div class='navigation'>
          <div class='container'>
            <div className='row'>
              <div class='navbar-header heading col-lg-12'>
                <button
                  type='button'
                  class='navbar-toggle collapsed'
                  data-toggle='collapse'
                  data-target='.navbar-collapse.collapse'
                >
                  <span class='sr-only'>Toggle navigation</span>
                  <span class='icon-bar'></span>
                  <span class='icon-bar'></span>
                  <span class='icon-bar'></span>
                </button>
                {/* Navbrand Component */}
                <Navbrand
                  state={props.state}
                  login={props.login}
                  logout={props.logout}
                />
              </div>

              <div class='navbar-collapse collapse '>
                <div class=' menu'>
                  <ul class='nav nav-tabs' role='tablist'>
                    <li role='presentation'>
                      <a href='/' class='active'>
                        Home
                      </a>
                    </li>
                    <li role='presentation'>
                      <a href='/aboutus'>About Us</a>
                    </li>
                    <li class='nav-item dropdown'>
                      <a
                        class='nav-link dropdown-toggle'
                        href='#'
                        id='navbarDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Services <span class='caret'></span>
                      </a>
                      <ul
                        class='dropdown-menu'
                        aria-labelledby='navbarDropdown'
                      >
                        <li role='presentation'>
                          <a class='dropdown-item' href='#'>
                            Consultancy
                          </a>
                        </li>

                        <li role='presentation'>
                          <a class='dropdown-item' href='#'>
                            Recruitment
                          </a>
                        </li>

                        <div class='dropdown-divider'></div>
                        <li role='presentation'>
                          <a class='dropdown-item' href='courses'>
                            Training
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class='nav-item dropdown'>
                      <a
                        class='nav-link dropdown-toggle'
                        href='#'
                        id='navbarDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        News <span class='caret'></span>
                      </a>
                      <ul
                        class='dropdown-menu'
                        aria-labelledby='navbarDropdown'
                      >
                        <li role='presentation'>
                          <a class='dropdown-item' href='#'>
                            Forum
                          </a>
                        </li>
                        <li role='presentation'>
                          <a class='dropdown-item' href='#'>
                            Magazine
                          </a>
                        </li>
                        <div class='dropdown-divider'></div>
                        <li role='presentation'>
                          <a class='dropdown-item' href='#'>
                            Updates
                          </a>
                        </li>
                        <li role='presentation'>
                          <a class='dropdown-item' href='/news'>
                            Logistics news
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class='nav-item dropdown'>
                      <a
                        class='nav-link dropdown-toggle'
                        href='#'
                        id='navbarDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Membership<span class='caret'></span>
                      </a>
                      <ul
                        class='dropdown-menu'
                        aria-labelledby='navbarDropdown'
                      >
                        <li role='presentation'>
                          <a class='dropdown-item' href='#'>
                            Individual Membership
                          </a>
                        </li>
                        <li role='presentation'>
                          <a class='dropdown-item' href='#'>
                            Corporate Membership
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li role='presentation'>
                      <a href='/gallery'>Gallery</a>
                    </li>

                    <li role='presentation'>
                      <a href='/contact-us'>Contact</a>
                    </li>
                    <li role='presentation'>
                      <a
                        className='btn'
                        style={{ color: '#ab0044' }}
                        href='http://54.36.168.175:2096/'
                      >
                        Staff Mail
                      </a>
                    </li>
                    {props.state.user ? (
                      <li role='presentation'>
                        <a
                          className='btn '
                          style={{ color: '#330080' }}
                          href='/dashboard'
                        >
                          Dashboard
                        </a>
                      </li>
                    ) : (
                      ''
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
