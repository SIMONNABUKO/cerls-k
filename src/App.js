import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ls from 'local-storage';
import firebase, { auth, provider, storage } from './Firebase';
import HomePage from './Components/HomePage/Index';
import AboutPage from './Components/AboutPage/Index';
import GalleryPage from './Components/GalleryPage/Index';
import TrainingForm from './Components/TrainingForm/Index';
import ContactPage from './Components/ContactPage/Index';
import DashboardPage from './Components/DashboardPage/Index';
import CoursesPage from './Components/CoursesPage/Index';
import Add from './Components/CoursesPage/Add';
import FirebaseUI from './Components/FirebaseUI/Index';

// import ConversationalForm from './Components/ConversationalForm/Index';
import './App.css';

// const itemRef = firebase.database.ref('userDetails');

export class App extends Component {
  constructor() {
    super();
    this.state = {
      // This is for messages
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      messages: [],
      //This is for course
      category: '',
      title: '',
      fees: '',
      description: '',
      courses: [],
      // Trainee details
      traineeName: '',
      traineeEmail: '',
      trainineePhone: '',
      traineeDescription: '',
      trainees: [],
      isSignedIn: false,
      user: null,
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCourseSubmit = this.handleCourseSubmit.bind(this);
    this.handleRetrieveMessages = this.handleRetrieveMessages.bind(this);
    this.getTrainingFormData = this.getTrainingFormData.bind(this);
    this.handleTraineeForm = this.handleTraineeForm.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(e) {
    e.preventDefault();
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      const filteredUser = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        isVerified: user.emailVerified,
        phone: user.phoneNumber
      };
      console.log(filteredUser);
      const usersRef = firebase.database().ref('users');
      // usersRef.push(filteredUser);
      usersRef.on('value', snapshot => {
        let users = snapshot.val();
        let usersFromDB = [];
        for (let user in users) {
          usersFromDB.push({
            id: user,
            name: users[user].name,
            email: users[user].email,
            phone: users[user].phone,
            image: users[user].image,
            isVerified: users.isVerified
          });
          ls.set('users', usersFromDB);

          console.log(usersFromDB);
          console.log(usersFromDB['email']);
          console.log(filteredUser['email']);
        }
        this.setState({
          users: usersFromDB
        });
      });
      this.setState({
        user: [ls.get('users')]
      });
    });
  }
  logout(e) {
    e.preventDefault();
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const messageRef = firebase.database().ref('messages');
    const message = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message
    };

    messageRef.push(message);
    this.setState({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  }
  handleTraineeForm(e) {
    e.preventDefault();
    const traineeRef = firebase.database().ref('trainees');
    const trainee = {
      traineeName: this.state.traineeName,
      traineeEmail: this.state.traineeEmail,
      trainineePhone: this.state.trainineePhone,
      traineeDescription: this.state.traineeDescription
    };

    traineeRef.push(trainee);
    this.setState({
      traineeName: '',
      traineeEmail: '',
      trainineePhone: '',
      traineeDescription: ''
    });
  }
  handleCourseSubmit(e) {
    e.preventDefault();
    const courseRef = firebase.database().ref('courses');
    const course = {
      category: this.state.category,
      title: this.state.title,
      fees: this.state.fees,
      description: this.state.description
    };
    courseRef.push(course);
    this.setState({
      category: '',
      title: '',
      fees: '',
      description: ''
    });
  }

  handleRetrieveMessages() {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', snapshot => {
      let messages = snapshot.val();
      let newState = [];
      for (let message in messages) {
        newState.push({
          id: message,
          name: messages[message].name,
          email: messages[message].email,
          phone: messages[message].phone,
          subject: messages[message].subject,
          description: messages[message].description
        });
      }
      this.setState({
        messages: newState
      });
    });
  }

  handleRetrieveCourses() {
    const coursesRef = firebase.database().ref('courses');
    coursesRef.on('value', snapshot => {
      let courses = snapshot.val();
      let newState = [];
      for (let course in courses) {
        newState.push({
          id: course,
          category: courses[course].category,
          title: courses[course].title,
          fees: courses[course].fees,
          description: courses[course].description
        });
      }
      this.setState({
        courses: newState
      });
    });
  }
  getTrainingFormData(formDataSerialized) {
    this.setState({
      trainees: formDataSerialized
    });
  }
  componentDidMount() {
    // let api = '';
    this.handleRetrieveMessages();
    this.handleRetrieveCourses();
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      const filteredUser = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        isVerified: user.emailVerified,
        phone: user.phoneNumber
      };
      this.setState({ isSignedIn: !!user, user: filteredUser });
    });
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <HomePage
                  {...props}
                  state={this.state}
                  login={this.login}
                  logout={this.logout}
                />
              )}
            />
            <Route
              path='/aboutus'
              render={props => (
                <AboutPage
                  {...props}
                  state={this.state}
                  login={this.login}
                  logout={this.logout}
                />
              )}
            />
            <Route
              path='/gallery'
              render={props => (
                <GalleryPage
                  {...props}
                  state={this.state}
                  login={this.login}
                  logout={this.logout}
                />
              )}
            />
            <Route
              path='/training-form'
              render={props => (
                <TrainingForm
                  {...props}
                  handleChange={this.handleChange}
                  state={this.state}
                  handleTraineeForm={this.handleTraineeForm}
                />
              )}
            />

            <Route
              path='/contact-us'
              render={props => (
                <ContactPage
                  {...props}
                  handleChange={this.handleChange}
                  state={this.state}
                  handleSubmit={this.handleSubmit}
                  login={this.login}
                  logout={this.logout}
                />
              )}
            />

            <Route
              path='/courses'
              render={props => (
                <CoursesPage
                  {...props}
                  handleChange={this.handleChange}
                  state={this.state}
                  login={this.login}
                  logout={this.logout}
                />
              )}
            />
            <Route
              path='/signin'
              render={props => (
                <FirebaseUI
                  {...props}
                  handleChange={this.handleChange}
                  state={this.state}
                  login={this.login}
                  logout={this.logout}
                  uiConfig={this.uiConfig}
                />
              )}
            />

            <Route
              path='/add-course'
              render={props => (
                <Add
                  {...props}
                  handleChange={this.handleChange}
                  state={this.state}
                  handleCourseSubmit={this.handleCourseSubmit}
                />
              )}
            />

            <Route
              path='/dashboard'
              render={props => (
                <DashboardPage
                  {...props}
                  isAuthed={true}
                  name='Simon'
                  state={this.state}
                  logout={this.logout}
                  login={this.login}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
