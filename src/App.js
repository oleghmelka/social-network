import './App.css';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';




const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route exact path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route exact path='/users' render={ () => <UsersContainer /> } />
          <Route exact path='/news' render={ () => <News/> } />
          <Route exact path='/music' render={ () => <Music/> } />
          <Route exact path='/settings' render={ () => <Settings/> } />
          <Route exact path='/login' render={ () => <LoginPage/> } />
        </div>
      </div>
    
  );
}


export default App;
 