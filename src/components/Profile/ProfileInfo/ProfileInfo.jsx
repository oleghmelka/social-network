import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/non_person_image.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {
    
    
    if (!profile) {
        return ( <Preloader />);
    }
    
    return (
        <div className={s.content}>
            <div className={s.wallpaper}>
                <img src='https://media.gettyimages.com/photos/kingfisher-picture-id696916250?s=2048x2048' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.contacts.facebook ? profile.photos.large : userPhoto} alt="this is large avatar"/>
                <h3>{profile.fullName}</h3>
                <p>{profile.aboutMe}</p>
                <h4>Я сейчас:<ProfileStatus status={status} updateStatus={updateStatus}/></h4>
                <div>
                    <span>Мои контакты</span>
                    <div className={s.social_contacts}>
                        {<span>Facebook: <a href="">{ profile.contacts.facebook ? profile.contacts.facebook : '-'}</a></span>}
                        <span>My Website: <a href="">{profile.contacts.website ? profile.contacts.website : '-'}</a></span>
                        <span>Vkontakte: <a href="">{profile.contacts.vkontakte ? profile.contacts.vkontakte : '-'}</a></span>
                        <span>Twitter: <a href="">{profile.contacts.twitter ? profile.contacts.twitter : '-'}</a></span>
                        <span>Instagram: <a href="">{profile.contacts.instagram ? profile.contacts.instagram : '-'}</a></span>
                        <span>Youtube: <a href="">{profile.contacts.youtube ? profile.contacts.youtube : '-'}</a></span>
                        <span>Github: <a href="">{profile.contacts.gthub ? profile.contacts.gthub : '-'}</a></span>
                        <span>MainLink: <a href="">{profile.contacts.mainLink ? profile.contacts.mainLink : '-'}</a></span>
                    </div>
                </div>
                
            </div>
        </div>
    );
  }
  
  
  export default ProfileInfo;