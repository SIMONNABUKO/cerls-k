import React from 'react';

function Partner() {
  return (
    <section id='partner'>
      <div class='container'>
        <div class='center wow fadeInDown'>
          <h2>Our Partners</h2>
          <p>Some of our trusted clients:</p>
        </div>

        <div class='partners'>
          <ul>
            <marquee>
              <li>
                {' '}
                <a href='#'>
                  <img
                    class='partner img-responsive  wow fadeInDown'
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
                    class=' wow img-responsive fadeInDown'
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
              <li>
                {' '}
                <a href='#'>
                  <img
                    class='partner img-responsive wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='900ms'
                    src='assets/images/partners/unigateLogistics.png'
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
                    src='assets/images/partners/deega.png'
                    height='250'
                    width='250 '
                  />
                </a>
              </li>
            </marquee>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Partner;
