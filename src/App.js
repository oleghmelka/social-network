import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
//import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer') );
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer') );



class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp();
  }

  render () {

      if (!this.props.initialized) {
          return <Preloader />
      }
      

      return (
          <div className='app-wrapper'>
            <HeaderContainer />
            <NavbarContainer />
            <div className='app-wrapper-content'>
              <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) } />
              <Route exact path='/dialogs' render={ withSuspense(DialogsContainer) } />
              <Route exact path='/users' render={ () => <UsersContainer /> } />
              <Route exact path='/news' render={ () => <News/> } />
              <Route exact path='/music' render={ () => <Music/> } />
              <Route exact path='/settings' render={ () => <Settings/> } />
              <Route exact path='/login' render={ () => <LoginPage/> } />
            </div>
          </div>
      );
  }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose (
    withRouter,
    connect (mapStateToProps, { initializeApp })
) (App);

const SocialNetworkApp = () => {

/*    <BrowserRouter basename={process.env.PUBLIC_URL}> In a real hosting we use BrowserRouter with basename
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter> */
  
// in github pages we use HashRouter
  return   <HashRouter>    
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </HashRouter>
}

export default SocialNetworkApp;