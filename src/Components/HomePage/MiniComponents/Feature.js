import React from 'react';

function Feature() {
  return (
    <div class='feature'>
      <div class='container'>
        <div class='text-center'>
          <div class='col-md-3'>
            <div
              class='hi-icon-wrap hi-icon-effect wow fadeInDown'
              data-wow-duration='1000ms'
              data-wow-delay='300ms'
            >
              <i class='fa fa-book'></i>
              <h2>CeRLS Courses</h2>
              <p>
                We offer proffessional training in various facets of logistics.
                For more information about our courses, click on the button
                below
                <br />
                <a
                  class='btn-slide btn btn-lg animation animated-item-3'
                  href='/courses'
                >
                  Our Courses
                </a>
              </p>
            </div>
          </div>
          <div class='col-md-3'>
            <div
              class='hi-icon-wrap hi-icon-effect wow fadeInDown'
              data-wow-duration='1000ms'
              data-wow-delay='600ms'
            >
              <i class='fa fa-laptop'></i>
              <h2>About CeRLS</h2>
              <p>
                So you want to know more about our services, vission, mission
                and core values? Click the button bellow to navigate to about us
                section
                <br />
                <a
                  class='btn-slide btn btn-lg animation animated-item-3'
                  href='/aboutus'
                >
                  About CeRLS
                </a>
              </p>
            </div>
          </div>
          <div class='col-md-3'>
            <div
              class='hi-icon-wrap hi-icon-effect wow fadeInDown'
              data-wow-duration='1000ms'
              data-wow-delay='900ms'
            >
              <i class='fa fa-heart-o'></i>
              <h2>CeRLS Gallery</h2>
              <p>
                Want to know more about how our trainings are conducted? In our
                gallery/ CeRLS Trainins Section, we display photos of our past
                events
                <br />
                <a
                  class='btn-slide btn btn-lg animation animated-item-3'
                  href='/gallery'
                >
                  CeRLS Gallery
                </a>
              </p>
            </div>
          </div>
          <div class='col-md-3'>
            <div
              class='hi-icon-wrap hi-icon-effect wow fadeInDown'
              data-wow-duration='1000ms'
              data-wow-delay='1200ms'
            >
              <i class='fa fa-users'></i>
              <h2>CeRLS Forum</h2>
              <p>
                We provide a forum from where our students, alumni and the
                community interested in logistics share information about
                Logistics and engage in fruitful discussions
                <br />
                <a
                  class='btn-slide btn btn-lg animation animated-item-3'
                  href='/'
                >
                  CeRLS Forum
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
