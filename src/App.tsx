import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import {RootStateType} from './redux/state'
import { ActionType } from './redux/profile-reducer';

type AppPropsType = {
  state: RootStateType
  dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navbar/>

          <div className='app-wrapper-content'>
            <Route path="/dialogs" render={() => { return <Dialogs dialogs={props.state.dialogsPage} /> } } />
            <Route path="/profile" render={() => {return <Profile profilepage={props.state.profilePage} dispatch={props.dispatch}/> } } />
            <Route path="/news" render={() => { return  <News /> }}/>
            <Route path="/music" render={() => { return  <Music /> }}/>
            <Route path="/settings" render={() => { return <Settings /> }}/>
          </div>

        </div>
        
      </BrowserRouter>
  );


}



export default App;
