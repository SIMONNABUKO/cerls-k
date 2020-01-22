import React from 'react';
import cf from 'conversational-form';

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.formFields = [
      {
        tag: 'input',
        type: 'text',
        name: 'firstname',
        'cf-questions': 'What is your firstname?'
      },
      {
        tag: 'input',
        type: 'text',
        name: 'lastname',
        'cf-questions': 'What is your lastname?'
      }
    ];

    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    //       var myForm = document.querySelector('#my-form');
    // var c = new cf.startTheConversation({formEl: myForm})
    this.cf = new cf.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: false
        // loadExternalStyleSheet: false
      },
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log('Formdata, obj:', formDataSerialized);
    this.cf.addRobotChatResponse(
      'You are done. Check the dev console for form data output.'
    );
  }

  render() {
    return (
      <div>
        <div ref={ref => (this.elem = ref)} />
      </div>
    );
  }
}
