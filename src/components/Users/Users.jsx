import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';


class Users extends React.Component {

    constructor(props){
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => { this.props.setUsers(response.data.items) } );
    }

    render () {
        return(
            <div>
                <h2>Users</h2>
                

                {this.props.users.map( u => <div className={s.user} key={u.id}>
                    
                    <div className={s.userLeftInfo}>
                        <div>
                            <img className={s.userPhoto} src={u.photos.small !=null ? u.photos.small: userPhoto } alt="there are an image" />
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={ () => { this.props.unfollow(u.id) } } >Unfollow</button>
                                : <button onClick={ () => { this.props.follow(u.id) } } >Follow</button>
                            }
                        </div>
                    </div>

                    <div className={s.userRightInfo}>
                        <div className={s.infoLeft}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.infoRight}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>

                </div> )}

                <button>Show more</button>
            </div>
        )
    }

}


export default Users;