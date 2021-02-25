import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';


class Users extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => { 
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        } );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( response => { 
            this.props.setUsers(response.data.items);
        } );
    }

    render () {

       
        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );
        let pages = [];
        for (let index = 1; index <= pagesCount; index++) {
            pages.push(index);
        }

        return(
            <div>
                <h2>Users</h2>
            
                <div className={s.pagination}>
                    {pages.map( p => <span onClick={ (e) => {this.onPageChanged(p)} } className={this.props.currentPage === p && s.selectedPage}>{p}</span>) }
                </div>


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