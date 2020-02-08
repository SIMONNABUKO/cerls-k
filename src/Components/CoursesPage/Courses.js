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
          <h3 style={{ color: '#fff' }}>CeRLS Courses</h3>
          <hr />

          {props.state.courses.map(course => {
            return (
              <>
                <div key={course.id} class='col-md-6 col-md-offset-3'>
                  <h3 style={{ color: '#fff' }} class='media-heading'>
                    {course.title}
                  </h3>
                  <img
                    src='https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    alt=''
                    class='img-responsive'
                  />
                  <p style={{ color: '#fff' }}>{course.description}</p>
                  <h4
                    className='btn btn-lg'
                    style={{ color: '#a01b1b', backgroundColor: '#fff' }}
                  >
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
