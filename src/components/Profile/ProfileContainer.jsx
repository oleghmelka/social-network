import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { Redirect } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {
  
    componentDidMount(){
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render () {

        return (
            <Profile {...this.props} profile={this.props.profile}/>           
         );
    }

  }

 let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
  }); 
  


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile} ) (WithUrlDataContainerComponent);

