import React from 'react';
import firebase from '../../Firebase';

class TrainingForm extends React.Component {
  cf = null; // <-- Conversational Form ref

  componentDidMount() {
    // add Conversational Form info

    this.refs.name.setAttribute(
      'cf-questions',
      'Can you let  us know your name?'
    );
    this.refs.email.setAttribute('cf-questions', 'Thank you! Your email?');
    this.refs.phone.setAttribute(
      'cf-questions',
      'Thank you! Your phone number?'
    );
    this.refs.description.setAttribute(
      'cf-questions',
      'Tell us more about yourself'
    );

    this.cf = window.cf.ConversationalForm.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById('cf-context'),
      flowStepCallback: function(dto, success, error) {
        success();
      },
      theme: 'purple',

      submitCallback: function() {
        // this callback could also be added to the React.createElement it self...
        // var formData = this.getFormData();
        var formDataSerialized = this.getFormData(true);
        const traineeRef = firebase.database().ref('trainees');
        const trainee = {
          traineeName: formDataSerialized['tag-0'],
          traineeEmail: formDataSerialized['tag-1'],
          traineePhone: formDataSerialized['tag-2'],
          traineeDescription: formDataSerialized['tag-3']
        };

        traineeRef.push(trainee);
        this.addRobotChatResponse(
          'You are done! Thank you for applying for our Training, we will contact you soon.'
        );
        this.addRobotChatResponse('You gave us the following details:');
        this.addRobotChatResponse(
          `Name:  ${trainee.traineeName} <br/>
          Email: ${trainee.traineeEmail} <br/>
          Phone: ${trainee.traineePhone} <br/>
          More Information: ${trainee.traineeDescription} <br/>`
        );
        console.log(trainee.trainineePhone);
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
        placeholder: 'Tell us more about yourself',
        ref: 'description',
        defaultValue: this.props.description
      }),
      React.createElement('button', { type: 'submit' }, 'Submit')
    );
  }
}
export default TrainingForm;
