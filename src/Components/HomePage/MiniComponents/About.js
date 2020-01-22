import React from 'react';

function About() {
  return (
    <div class='about'>
      <div class='container'>
        <div
          class='col-md-6 wow fadeInDown'
          data-wow-duration='1000ms'
          data-wow-delay='300ms'
        >
          <h2>Who are we?</h2>
          <img src='assets/images/about.png' alt='' class='img-responsive' />
          <p>
            CeRLS is a training and consulting institution that provides
            professional training to individuals and organizations who are
            mainly interested in pursuing a career within the field of
            logistics, transportation and supply chain Management. The institute
            prides itself in the practical methodology and skill training
            curriculum.{' '}
          </p>
        </div>

        <div
          class='col-md-6 wow fadeInDown'
          data-wow-duration='1000ms'
          data-wow-delay='600ms'
        >
          <h2>Why Us?</h2>
          <p>
            We offer high quality and inexpensive, self-paced Professional
            Certification in Logistics and Transport; Humanitarian, Health and
            Emergency Logistics; and Reverse Logistics Management which enables
            our students to enhance their employability.
          </p>
          <p>
            Through our placement assistance department we help students and
            graduates in realising their career objectives. CeRLS-K is a sure
            link between college experience and probable employment prospects
            through strengthening the indispensable skills required for the
            students to excel. CeRLS-K placement assistance department provides
            lifetime placement assistance to graduates, meaning our students as
            well as alumni are entitled to use CeRLS-K placement services years
            after completion of their education. We offer great relief to most
            of the students by helping them with a variety of job-related needs.
            We also conduct job-searching workshops, career fairs on campus, and
            one-to-one career guidance.
          </p>

          <a
            class='btn-slide btn btn-lg animation animated-item-3'
            href='/aboutus'
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
