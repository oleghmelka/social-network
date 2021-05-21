import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';
 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  }));



let User = ({user, followingInProgress, follow, unfollow}) => {

    const classes = useStyles();
    
        return (
            <div className={s.user} >
                <div className={s.userLeftInfo}>
                    <div>
                        <NavLink to={'/profile/' + user.id} >
                            {/* <img className={s.userPhoto} src={user.photos.small !=null ? user.photos.small: userPhoto } alt="there are an image" /> */}
                            <Avatar sizes="" className={classes.large} variant="circle" src={user.photos.small !=null ? user.photos.small: userPhoto } alt="user_avatar" />
                        </NavLink>
                    </div>
                    <div>
{/*                         {user.followed 
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { unfollow(user.id)} } >Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { follow(user.id)} } >Follow</button>
                        } */}

                        {user.followed 
                            ? <Button variant="contained" color="primary" disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { unfollow(user.id)} } >Unfollow</Button>
                            : <Button variant="contained" color="primary" disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { follow(user.id)} } >Follow</Button>
                        }
                    </div>
                </div>

                <div className={s.userRightInfo}>
                    <div className={s.infoLeft}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    {/* <div className={s.infoRight}>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </div> */}
                </div>
            </div> 
        )
}

export default User;