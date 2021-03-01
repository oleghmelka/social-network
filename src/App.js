import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';




const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route exact path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route exact path='/users' render={ () => <UsersContainer /> } />
          <Route exact path='/news' render={ () => <News/> } />
          <Route exact path='/music' render={ () => <Music/> } />

          <Route exact path='/settings' render={ () => <Settings/> } />
        </div>
        
      </div>
    
  );
}


export default App;
 