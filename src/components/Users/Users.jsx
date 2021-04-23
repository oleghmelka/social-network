import React from 'react';
//import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
 

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow}) => {

        return <div>
                    <h2>Users</h2>
                    <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
                    <div>
                        {
                            users.map( u => <User   user={u}
                                                    followingInProgress={followingInProgress}
                                                    follow={follow}
                                                    unfollow={unfollow} 
                                                    key={u.id} 
                                            /> )
                        }    
                    </div> 
                </div>
}

export default Users;