import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';


let Users = (props) => {

        let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
        let pages = [];
        for (let index = 1; index <= pagesCount; index++) {
            pages.push(index);
        }

        return <div>
                    <h2>Users</h2>
                    <div className={s.pagination}>
                        {pages.map( p => <span onClick={ (e) => {props.onPageChanged(p)} } className={props.currentPage === p && s.selectedPage}>{p}</span>) }
                    </div>
                    {props.users.map( u => <div className={s.user} key={u.id}>
                        <div className={s.userLeftInfo}>
                            <div>
                                <NavLink to={'/profile/' + u.id} >
                                    <img className={s.userPhoto} src={u.photos.small !=null ? u.photos.small: userPhoto } alt="there are an image" />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed 
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { props.unfollow(u.id)} } >Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { props.follow(u.id)} } >Follow</button>
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
}

export default Users;