import React from 'react';

function Courses(props) {
  return (
    <div>
      <div id='breadcrumb'>
        <div class='container'>
          <div class='breadcrumb'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>Courses</li>
          </div>
        </div>
      </div>

      <div class='services'>
        <div class='container'>
          <h3>CeRLS Courses</h3>
          <hr />

          {props.state.courses.map(course => {
            return (
              <>
                <div key={course.id} class='col-md-6 col-md-offset-3'>
                  <h3 style={{ color: '#330080' }} class='media-heading'>
                    {course.title}
                  </h3>
                  <img
                    src='assets/images/4.jpg'
                    alt=''
                    class='img-responsive'
                  />
                  <p>{course.description}</p>
                  <h4 className='btn btn-lg' style={{ color: '#a01b1b' }}>
                    Kshs.{course.fees}/=
                  </h4>
                  <hr />
                  <br />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
