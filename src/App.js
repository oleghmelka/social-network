import React from 'react';
import './App.css';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//import { HashRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import { MuiThemeProvider } from '@material-ui/core';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer') );
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer') );



class App extends React.Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
    }

    componentDidMount () {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount () {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                    <Switch>
                        <Route exact path='/' render={ () => <Redirect to={'/profile'} /> } />   
                        <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) } />
                        <Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
                        <Route path='/users' render={ () => <UsersContainer /> } />
                        <Route path='/news' render={ () => <News/> } />
                        <Route path='/music' render={ () => <Music/> } />
                        <Route path='/settings' render={ () => <Settings/> } />
                        <Route path='/login' render={ () => <LoginPage/> } />
                        <Route path='*' render={ () => <div>404 Page Not Found</div> } />
                    </Switch>
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

/* In github pages we use HashRouter
 
            <HashRouter>    
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </HashRouter> 
            
    In real hosting we use BrowserRouter with basename
           <BrowserRouter basename={process.env.PUBLIC_URL}>    
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>  */


  return   <BrowserRouter basename={process.env.PUBLIC_URL}>   
                <Provider store={store}>
                    <MuiThemeProvider>
                        <AppContainer />
                    </MuiThemeProvider>
                </Provider>
            </BrowserRouter>
}

export default SocialNetworkApp;