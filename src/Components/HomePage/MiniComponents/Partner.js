import React from 'react';

function Partner() {
  return (
    <section id='partner'>
      <div class='container'>
        <div class='center wow fadeInDown'>
          <h2>Our Partners</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut <br /> et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>

        <div class='partners'>
          <ul>
            <li>
              {' '}
              <a href='#'>
                <img
                  class='partner img-responsive wow fadeInDown'
                  data-wow-duration='1000ms'
                  data-wow-delay='300ms'
                  src='assets/images/partners/KPA.png'
                />
              </a>
            </li>
            <li>
              {' '}
              <a href='#'>
                <img
                  class='img-responsive wow fadeInDown'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                  src='assets/images/partners/mkopa.png'
                />
              </a>
            </li>
            <li>
              {' '}
              <a href='#'>
                <img
                  class='partner img-responsive wow fadeInDown'
                  data-wow-duration='1000ms'
                  data-wow-delay='900ms'
                  src='assets/images/partners/MTRH.jpg'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Partner;
