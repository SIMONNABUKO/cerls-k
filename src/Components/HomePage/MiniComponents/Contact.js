import React from 'react';

function Contact() {
  return (
    <section id='conatcat-info'>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-8'>
            <div
              class='media contact-info wow fadeInDown'
              data-wow-duration='1000ms'
              data-wow-delay='600ms'
            >
              <div class='pull-left'>
                <i class='fa fa-phone'></i>
              </div>
              <div class='media-body'>
                <h2>Have a question about CeRLS?</h2>
                <p>
                  We are available from 8:00am - 5:30pm week days and on
                  Saturday. Click the button below for more information on how
                  to contact us
                  <br />
                  <a
                    class='btn-slide btn btn-lg animation animated-item-3'
                    href='/contact-us'
                  >
                    CeRLS Contact Information
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
