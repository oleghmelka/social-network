import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';
 

let User = ({user, followingInProgress, follow, unfollow}) => {

        return (
            <div className={s.user} >
                <div className={s.userLeftInfo}>
                    <div>
                        <NavLink to={'/profile/' + user.id} >
                            <img className={s.userPhoto} src={user.photos.small !=null ? user.photos.small: userPhoto } alt="there are an image" />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed 
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { unfollow(user.id)} } >Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { follow(user.id)} } >Follow</button>
                        }
                    </div>
                </div>

                <div className={s.userRightInfo}>
                    <div className={s.infoLeft}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={s.infoRight}>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
            </div> 
        )
}

export default User;