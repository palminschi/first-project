import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
    <div className={classes.app_wrapper}>
      <Header />
      <Navbar />
      <div className={classes.content}>
        <Route path='/profile' render={() => <Profile 
          profilePage={props.state.profilePage} 
          dispatch={props.dispatch}/>}/>
        <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;