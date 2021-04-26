import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/non_person_image.png';
import ProfileStatus from './ProfileStatus';
import React, { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, someError}) => {
    
    let [editMode, setEditMode] = useState(false);


    if (!profile) {
        return ( <Preloader />);
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    
    return (
        <div className={s.content}>
            <div className={s.wallpaper}>
                <img src='https://media.gettyimages.com/photos/kingfisher-picture-id696916250?s=2048x2048' />
            </div>

            <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt="this is large avatar"/>
            
            { isOwner &&
                <div className={s.buttonChangePhoto} >
                    <b>Change photo: </b> <input type={"file"} onChange={onMainPhotoSelected} /> 
                </div>
            }
            
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            
            { editMode 
                    ? <ProfileDataForm  profile={profile}
                                        saveProfile={saveProfile}
                                        setEditMode={setEditMode}
                                        someError={someError}
                       /> 
                    : <ProfileData  profile={profile} 
                                    isOwner={isOwner}
                                    goToEditMode={ () => {setEditMode(true)} } 
                       /> 
            }
            
            
        </div>
    );
  }

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.social_contacts}><b>{contactTitle}: </b>{contactValue}</div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
      return   (          
                    <div className={s.descriptionBlock}> 

                        <div>
                            <b>Full name:</b> {profile.fullName}
                        </div>
                    
                        <div>
                            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
                        </div>

                        { profile.lookingForAJob && <div>
                                                        <b>My professional skills:</b> {profile.lookingForAJobDescription}
                                                    </div>
                        }

                        <div>
                            <b>About me:</b> {profile.aboutMe}
                        </div>

                        <div>
                            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                            })}
                        </div>

                        { isOwner &&
                            <div>
                                <button onClick={goToEditMode}>Edit</button>
                            </div>
                        }
                    
                </div>
            )
}




  
  
  export default ProfileInfo;