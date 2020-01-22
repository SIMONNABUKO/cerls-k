import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AddCourseForm from './AddCourseForm';

function Add(props) {
  return (
    <div>
      <Header />
      <AddCourseForm
        handleChange={props.handleChange}
        state={props.state}
        handleCourseSubmit={props.handleCourseSubmit}
      />
      <Footer />
    </div>
  );
}

export default Add;
