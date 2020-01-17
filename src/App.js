import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/Index';
import AboutPage from './Components/AboutPage/Index';
import GalleryPage from './Components/GalleryPage/Index';
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/aboutus' component={AboutPage} />
        <Route path='/gallery' component={GalleryPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
