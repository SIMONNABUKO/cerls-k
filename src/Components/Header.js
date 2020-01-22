import React from 'react';
import Logo from '../logo-cerl.png';

export default function Header() {
  return (
    <header>
      <nav class='navbar navbar-default navbar-fixed-top' role='navigation'>
        <div class='navigation'>
          <div class='container'>
            <div class='navbar-header'>
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
              <div class='navbar-brand'>
                <a href='/'>
                  <h1>
                    <span>
                      <img className='cerls-logo' src={Logo} alt='' />{' '}
                    </span>
                    CeRLS
                  </h1>
                </a>
              </div>
            </div>

            <div class='navbar-collapse collapse'>
              <div class='menu'>
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
                    <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
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
                    <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
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
                    <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
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
                    <a href='/gallery'>Recent Trainings</a>
                  </li>

                  <li role='presentation'>
                    <a href='/contact-us'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
