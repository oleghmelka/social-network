import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.wallpaper}>
                <img src='https://media.gettyimages.com/photos/kingfisher-picture-id696916250?s=2048x2048' />
            </div>
            <div className={s.descriptionBlock}>
                avatar+description
            </div>
        </div>
    );
  }
  
  
  export default ProfileInfo;