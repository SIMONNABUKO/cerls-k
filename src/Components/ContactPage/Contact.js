import React from 'react';

function Contact(props) {
  return (
    <div>
      <div id='breadcrumb'>
        <div class='container'>
          <div class='breadcrumb'>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>Contact</li>
          </div>
        </div>
      </div>

      <section id='contact-page'>
        <div class='container'>
          <div class='center'>
            <h3 style={{ color: '#a01b1b' }}>CeRLS Contact Details</h3>
            <p>
              Please contact CeRLS using the form below. We reply within 24
              hours. Thank you
            </p>
          </div>
          <div class='row contact-wrap'>
            <div
              class='status alert alert-success'
              style={{ display: 'none' }}
            ></div>
            <div class='col-md-6 col-sm-12'>
              <div id='sendmessage'>Your message has been sent. Thank you!</div>
              <div id='errormessage'></div>
              <form onSubmit={props.handleSubmit}>
                <div class='form-group'>
                  <input
                    type='text'
                    name='name'
                    class='form-control'
                    id='name'
                    placeholder='Your Name'
                    onChange={props.handleChange}
                    value={props.state.name}
                  />
                  <div class='validation'></div>
                </div>
                <div class='form-group'>
                  <input
                    type='email'
                    class='form-control'
                    name='email'
                    id='email'
                    placeholder='Your Email'
                    onChange={props.handleChange}
                    value={props.state.email}
                  />
                  <div class='validation'></div>
                </div>
                <div class='form-group'>
                  <input
                    type='phone'
                    class='form-control'
                    name='phone'
                    id='phone'
                    placeholder='Your Phone'
                    onChange={props.handleChange}
                    value={props.state.phone}
                  />
                  <div class='validation'></div>
                </div>
                <div class='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    onChange={props.handleChange}
                    value={props.state.subject}
                  />
                  <div class='validation'></div>
                </div>
                <div class='form-group'>
                  <textarea
                    class='form-control'
                    name='message'
                    onChange={props.handleChange}
                    value={props.state.message}
                    placeholder='Message'
                  ></textarea>
                  <div class='validation'></div>
                </div>
                <div class='text-center'>
                  <button
                    type='submit'
                    name='submit'
                    class='btn btn-primary btn-lg'
                    required='required'
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
            <div class='col-md-6 col-sm-12 '>
              <h3 style={{ color: '#330080' }}>
                You can also reach out to us using the details below:
              </h3>
              <p style={{ fontSize: '17px' }}>
                <span>Address:</span>
                <br />
                P.O. BOX 0792288661-00100,
                <br />
                Nairobi.
                <br />
                <br />
                Utalii Lane.
                <br />
                AMBANK TOWERS,12th Floor
                <br />
                <span>Phone:</span>
                <br />
                +254 (0) 412242083/4
                <br />
                +254 (0) 725023175 <br />
                +254 (0) 733360330
                <br />
                +254(0)776849544 <br />
                <span>Email:</span>{' '}
                <a href='mailto:admin@cerls-k.co.ke'>admin@cerls-k.co.ke</a>{' '}
                <br />
                <span>Website</span> <a href='/'>www.cerls-k.co.ke</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
