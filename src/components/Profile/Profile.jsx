import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';







const Profile = (props) => {
    
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} addPostInState={props.addPostInState} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />            
        </div>
    );
  }
  
  
  export default Profile;