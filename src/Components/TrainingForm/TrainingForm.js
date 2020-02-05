import React from 'react';
import firebase from '../../Firebase';

class TrainingForm extends React.Component {
  cf = null; // <-- Conversational Form ref

  componentDidMount() {
    // add Conversational Form info

    this.refs.firstName.setAttribute(
      'cf-questions',
      'Can you let  us know your first name?'
    );
    this.refs.email.setAttribute('cf-questions', 'Thank you! Your email?');
    this.refs.phone.setAttribute(
      'cf-questions',
      'Thank you! Your phone number?'
    );

    this.refs.description.setAttribute(
      'cf-questions',
      'Your location? eg Nairobi-Kenya.'
    );

    this.cf = window.cf.ConversationalForm.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById('cf-context'),
      flowStepCallback: function(dto, success, error) {
        success();
      },
      theme: 'purple',
      showProgressBar: true,

      submitCallback: function() {
        // this callback could also be added to the React.createElement it self...
        // var formData = this.getFormData();
        var formDataSerialized = this.getFormData(true);
        console.log(formDataSerialized);
        const traineeRef = firebase.database().ref('trainees');
        const trainee = {
          traineeFirstName: formDataSerialized['tag-0'],
          traineeLastName: formDataSerialized['tag-1'],
          traineeEmail: formDataSerialized['tag-2'],
          traineePhone: formDataSerialized['tag-3'],
          trainingType: formDataSerialized['training'][0],
          traineeDescription: formDataSerialized['tag-5']
        };

        traineeRef.push(trainee);
        this.addRobotChatResponse(
          'You are done! Thank you for applying for our Training, we will contact you soon.'
        );
        this.addRobotChatResponse('You gave us the following details:');
        this.addRobotChatResponse(
          `Name:  ${trainee.traineeFirstName} ${trainee.traineeLastName} <br/>
          Email: ${trainee.traineeEmail} <br/>
          Phone: ${trainee.traineePhone} <br/>
          Training Applied For: ${trainee.trainingType}<br/>
          Your Location: ${trainee.traineeDescription} <br/>`
        );
        console.log(trainee);
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
        ref: 'firstName',
        placeholder: 'First Name (required)',
        defaultValue: this.props.firstName
      }),
      React.createElement('input', {
        type: 'text',
        ref: 'lastName',
        'cf-questions': 'Please enter your last name',
        placeholder: 'Last Name (required)',
        defaultValue: this.props.lastName
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
        defaultValue: this.props.phone
      }),

      React.createElement('input', {
        type: 'radio',
        ref: 'safety',
        'cf-questions': 'Which training are you applying for?',
        placeholder: 'Phone (required)',
        defaultValue: this.props.safety,
        name: 'training',
        'cf-label': '26th - 27th March 2020',
        'cf-image':
          'https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        tabindex: '1',
        value:
          'Fleet Operations and Road Safety Management Training(26th - 27th March 2020)'
      }),
      React.createElement('input', {
        type: 'radio',
        ref: 'training',

        'cf-image':
          'https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        defaultValue: this.props.training,
        'cf-label': '21th-22th May 2020',
        name: 'training',
        tabindex: '2',
        value:
          'Impact of Logistics in manufacturing Industry Training(21th-22th May 2020) '
      }),

      React.createElement('input', {
        type: 'radio',
        ref: 'retail',
        placeholder: 'Phone (required)',
        defaultValue: this.props.retail,
        name: 'training',
        'cf-label': '24 July 2020',
        'cf-image':
          'https://images.unsplash.com/photo-1569062980724-23e1063d8790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        tabindex: '1',
        value: 'Retail Logistics(24 July 2020)'
      }),

      React.createElement('input', {
        type: 'radio',
        ref: 'cost',
        placeholder: 'Phone (required)',
        defaultValue: this.props.cost,
        name: 'training',
        'cf-label': '24th - 25th Sep 2020',
        'cf-image':
          'https://images.unsplash.com/photo-1561464382-349a0d78a9b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        tabindex: '1',
        value:
          'Cost Reduction in Warehousing, Inventory, MNGT and Distribution(24th - 25th Sep 2020)'
      }),

      React.createElement('input', {
        type: 'radio',
        ref: 'summit',
        placeholder: 'Phone (required)',
        defaultValue: this.props.summit,
        name: 'training',
        'cf-label': 'Summit and Expo 2020',
        'cf-image':
          'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        tabindex: '1',
        value: 'Kenya Logistics Summit and Expo 2020'
      }),

      React.createElement('textarea', {
        placeholder: 'Your location? eg Nairobi-Kenya.',
        ref: 'description',
        defaultValue: this.props.description
      }),
      React.createElement('button', { type: 'submit' }, 'Submit')
    );
  }
}
export default TrainingForm;
