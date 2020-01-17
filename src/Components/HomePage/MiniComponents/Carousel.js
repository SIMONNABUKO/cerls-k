import React from 'react';

function Carousel() {
  return (
    <section id='main-slider' class='no-margin'>
      <div class='carousel slide'>
        <div class='carousel-inner'>
          <div class='item active bg-img'>
            <div class='container'>
              <div class='row slide-margin'>
                <div class='col-sm-6'>
                  <div class='carousel-content'>
                    <h2 class='animation animated-item-1'>
                      <span>
                        Fleet Operations and Road Safety Management Training
                      </span>
                    </h2>
                    <p class='animation animated-item-2'>
                      Register for our next training, to reserve your seat, only
                      a few changes remaining Click the button below to register
                    </p>
                    <a
                      class='btn-slide animation animated-item-3'
                      href='/training-form'
                    >
                      Register for the Training
                    </a>
                  </div>
                </div>

                <div class='col-sm-6 hidden-xs animation animated-item-4'>
                  <div class='slider-img'>
                    <img
                      src='images/slider/img3.png'
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
