import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


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
                                ? <button onClick={ () => { 
                                    
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "f9cc2c2f-5c70-4919-9178-6665823f8198"
                                        }
                                  })
                                  .then( response => { 
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                   });
                                } } >Unfollow</button>
                                : <button onClick={ () => { 
                                    
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "f9cc2c2f-5c70-4919-9178-6665823f8198"
                                        }
                                  }).then( response => { 
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id) 
                                        }
                                   });
                                } } >Follow</button>
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