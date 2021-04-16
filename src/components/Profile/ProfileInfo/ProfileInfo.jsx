import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/non_person_image.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    
    
    if (!props.profile) {
        return ( <Preloader />);
    }
    
    return (
        <div className={s.content}>
            <div className={s.wallpaper}>
                <img src='https://media.gettyimages.com/photos/kingfisher-picture-id696916250?s=2048x2048' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.contacts.facebook ? props.profile.photos.large : userPhoto} alt="this is large avatar"/>
                <h3>{props.profile.fullName}</h3>
                <p>{props.profile.aboutMe}</p>
                <h4>Я сейчас:<ProfileStatus status={props.status} updateStatus={props.updateStatus}/></h4>
                <div>
                    <span>Мои контакты</span>
                    <div className={s.social_contacts}>
                        <span>Facebook: <a href="">{ props.profile.contacts.facebook ? props.profile.contacts.facebook : '-'}</a></span>
                        <span>My Website: <a href="">{props.profile.contacts.website ? props.profile.contacts.website : '-'}</a></span>
                        <span>Vkontakte: <a href="">{props.profile.contacts.vkontakte ? props.profile.contacts.vkontakte : '-'}</a></span>
                        <span>Twitter: <a href="">{props.profile.contacts.twitter ? props.profile.contacts.twitter : '-'}</a></span>
                        <span>Instagram: <a href="">{props.profile.contacts.instagram ? props.profile.contacts.instagram : '-'}</a></span>
                        <span>Youtube: <a href="">{props.profile.contacts.youtube ? props.profile.contacts.youtube : '-'}</a></span>
                        <span>Github: <a href="">{props.profile.contacts.gthub ? props.profile.contacts.gthub : '-'}</a></span>
                        <span>MainLink: <a href="">{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : '-'}</a></span>
                    </div>
                </div>
                
            </div>
        </div>
    );
  }
  
  
  export default ProfileInfo;