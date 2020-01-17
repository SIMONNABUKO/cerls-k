import React, { Component } from 'react';
class TrainingForm extends React.Component {
  constructor(props) {
    super(props);
    this.cf = null; // <-- Conversational Form ref
  }
  componentDidMount() {
    // add Conversational Form info

    this.refs.name.setAttribute(
      'cf-questions',
      'Can you let know us your name?'
    );
    this.refs.email.setAttribute('cf-questions', 'Thank you! Your email?');
    this.refs.phone.setAttribute(
      'cf-questions',
      'Thank you! Your phone number?'
    );
    this.refs.description.setAttribute('cf-questions', 'What is description?');

    this.cf = window.cf.ConversationalForm.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById('cf-context'),
      flowStepCallback: function(dto, success, error) {
        success();
      },
      submitCallback: function() {
        // this callback could also be added to the React.createElement it self...
        alert('You made it!');
        console.log('Form submitted...');
      }
    });
  }
  render() {
    return React.createElement(
      'form',
      {
        id: 'form',
        ref: 'form',
        className: 'form'
      },

      React.createElement('input', {
        type: 'text',
        ref: 'name',
        placeholder: 'Name (required)',
        defaultValue: this.props.name
      }),
      React.createElement('input', {
        type: 'email',
        ref: 'email',
        placeholder: 'Email',
        defaultValue: this.props.email
      }),
      React.createElement('input', {
        type: 'text',
        ref: 'phone',
        placeholder: 'Phone (required)',
        defaultValue: this.props.phone
      }),
      React.createElement('textarea', {
        placeholder: 'Description',
        ref: 'description',
        defaultValue: this.props.description
      }),
      React.createElement('button', { type: 'submit' }, 'Submit')
    );
  }
}
export default TrainingForm;
