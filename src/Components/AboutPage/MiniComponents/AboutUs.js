import React from 'react';

function AboutUs() {
  return (
    <div>
      <div id='breadcrumb'>
        <div class='container'>
          <div class='breadcrumb'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>About Us</li>
          </div>
        </div>
      </div>

      <div class='aboutus'>
        <div class='container'>
          <h3>About CeRLS</h3>
          <hr />
          <div
            class='col-md-7 wow fadeInDown'
            data-wow-duration='1000ms'
            data-wow-delay='300ms'
          >
            <img
              src='assets/images/cerls-trainings.png'
              alt=''
              class='img-responsive'
            />
            <h4>A summary of what we do</h4>
            <p>
              CeRLS is a training and consulting institution that provides
              professional training to individuals and organizations who are
              mainly interested in pursuing a career within the field of
              logistics, transportation and supply chain Management. The
              institute prides itself in the practical methodology and skill
              training curriculum.{' '}
            </p>
            <p>
              We offer high quality and inexpensive, self-paced Professional
              Certification in Logistics and Transport; Humanitarian, Health and
              Emergency Logistics; and Reverse Logistics Management which
              enables our students to enhance their employability.
            </p>
            <h4>Our Vision</h4>
            <p>
              To provide quality learning experience to meet the increasing
              demand through technology and research.
            </p>
            <h4>Our Mision</h4>
            <p>
              Redefining logistics training and become the premier center of
              education, workforce training, partnership and economic
              development.
            </p>
            <hr />
            <h3>Why Choose Us?</h3>
            <h5>Placement Assistance</h5>
            <p>
              Through our placement assistance department we help students and
              graduates in realising their career objectives. CeRLS-K is a sure
              link between college experience and probable employment prospects
              through strengthening the indispensable skills required for the
              students to excel. CeRLS-K placement assistance department
              provides lifetime placement assistance to graduates, meaning our
              students as well as alumni are entitled to use CeRLS-K placement
              services years after completion of their education. We offer great
              relief to most of the students by helping them with a variety of
              job-related needs. We also conduct job-searching workshops, career
              fairs on campus, and one-to-one career guidance.
            </p>
            <h5>Staffing Solutions</h5>
            <p>
              We understand the uniqueness of your business and your urge for
              more. That’s why we offer you the right candidates, those who have
              been equipped with right skills, attitude and the passion for
              excellence. You need an intern, Mid-level to senior executive,
              just contact us today. No cost, No charge.
            </p>
            <h5>Online Learning</h5>
            <p>
              To those who can’t attend classes, probably due to reasons you
              cherish, we recognize your reason. CeRLS-K is providing you a
              myriad of options from weekend classes to distance learning with
              full support from a personal tutor assigned to you.
            </p>
          </div>
          <div
            class='col-md-5 wow fadeInDown'
            data-wow-duration='1000ms'
            data-wow-delay='600ms'
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
