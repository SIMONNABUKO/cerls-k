import React from 'react';

function Carousel() {
  return (
    <section id='main-slider' class='no-margin'>
      <div class='carousel slide'>
        <div class='carousel-inner'>
          <div class='item active bg-img'>
            <div class='container'>
              <div class='row slide-margin'>
                <div class='col-sm-6 mt-5'>
                  <div class='carousel-content'>
                    <h2
                      style={{ textAlign: 'left' }}
                      class='animation animated-item-1'
                    >
                      <span>
                        Fleet Operations and Road Safety Management
                        Training(upcoming-26th - 27th March 2020)
                      </span>
                    </h2>
                    <p
                      class='animation animated-item-2'
                      style={{ fontSize: '20px' }}
                    >
                      Register for our next training, to reserve your seat!{' '}
                      <br />
                      <br />
                      <h6>
                        Training Cost
                        <span class='badge badge-secondary'>KES 75,000</span>
                      </h6>
                      <a
                        class='btn-slide btn btn-lg animation animated-item-3'
                        href='/training-form'
                      >
                        Register
                      </a>
                      <h4>For inquiries:</h4>
                      <span>Phone:</span>
                      <br />
                      +254 (0) 412242083/4, +254 (0) 792288661, +254(0)776849544{' '}
                      <br />
                      Email: training@cerls-k.co.ke
                    </p>
                  </div>
                </div>

                <div class='col-sm-6 hidden-xs animation animated-item-4'>
                  <div class='slider-img'>
                    <img
                      src='assets/images/slider/cerls-trainings.png'
                      alt=''
                      class='img-responsive'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.item--> */}
        </div>
        {/* <!--/.carousel-inner--> */}
      </div>
      {/* <!--/.carousel--> */}
    </section>
  );
}

export default Carousel;
