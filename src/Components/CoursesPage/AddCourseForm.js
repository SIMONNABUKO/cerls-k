import React from 'react';

function AddCourseForm(props) {
  return (
    <div>
      <div
        style={{ marginTop: '100px' }}
        class='col-md-6 col-md-offset-3 col-sm-12'
      >
        <form onSubmit={props.handleCourseSubmit}>
          <div class='form-group'>
            <select
              name='category'
              className='form-control'
              onChange={props.handleChange}
              value={props.state.category}
            >
              <option value='Reverse logistics management'>
                Reverse logistics management
              </option>
              <option value='Humanitarian and Emergency logistics'>
                Humanitarian and Emergency logistics
              </option>
              <option value='Logistics and Transport'>
                Logistics and Transport
              </option>
            </select>
            <div class='validation'></div>
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              name='title'
              placeholder='Enter Course Title'
              onChange={props.handleChange}
              value={props.state.title}
            />
          </div>

          <div class='form-group'>
            <input
              type='number'
              class='form-control'
              name='fees'
              placeholder='Total Fees'
              onChange={props.handleChange}
              value={props.state.fees}
            />
            <div class='validation'></div>
          </div>
          <div class='form-group'>
            <textarea
              class='form-control'
              name='description'
              onChange={props.handleChange}
              value={props.state.description}
              placeholder='Course description'
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
    </div>
  );
}

export default AddCourseForm;
