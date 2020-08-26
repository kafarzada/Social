import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import {Route, BrowserRouter} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

function App() {

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navbar/>

          <div className='app-wrapper-content'>
            <Route path="/dialogs" render={() => { return <DialogsContainer/>} } />
            <Route path="/profile/:userId?" render={() => {return <ProfileContainer /> } } />
            <Route path="/news" render={() => { return  <News /> }}/>
            <Route path="/music" render={() => { return  <Music /> }}/>
            <Route path="/settings" render={() => { return <Settings /> }}/>
            <Route path="/users" render={() => { return <UsersContainer />}}/>
          </div>

        </div>
        
      </BrowserRouter>
  );


}



export default App;
