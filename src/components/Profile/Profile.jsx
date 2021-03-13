
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileInfo/ProfileStatus';


const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileStatus status={'хуйом тебе по лбу'}/>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />            
        </div>
    );
  }
  
  
  export default Profile;