import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <div className={classes.app_wrapper}>
      <Header />
      <Navbar />
      <div className={classes.content}>
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;