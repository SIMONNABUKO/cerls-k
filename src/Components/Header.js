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
                  <li role='presentation'>
                    <a href='services.html'>Services</a>
                  </li>
                  <li role='presentation'>
                    <a href='/gallery'>Recent Trainings</a>
                  </li>
                  <li role='presentation'>
                    <a href='blog.html'>Blog</a>
                  </li>
                  <li role='presentation'>
                    <a href='contact.html'>Contact</a>
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
