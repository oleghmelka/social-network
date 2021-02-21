import React from 'react';
import s from './Users.module.css';



const Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers(
            [
                {id: 0, fullName: 'Oleg', followed: true, status: 'i am ukrainian boy', location: {country: 'Ukraine', city: 'Odessa'},
                    photoUrl: 'https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png' },
                {id: 1, fullName: 'Marta', followed: false, status: 'i am danish girl', location: {country: 'Denmark', city: 'Kopenghagen'},
                    photoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/958596576368807294/2CDA31196125EAE96EC9C65EEF847A60508D48AB/'},
                {id: 2, fullName: 'Frenk', followed: true, status: 'i am holland boy', location: {country: 'Holland', city: 'Rotterdam'},
                    photoUrl: 'https://i.pinimg.com/originals/9d/c9/5e/9dc95eaf0ddc72fd8a9bcbd6e572c201.png' },
                {id: 3, fullName: 'Jesica', followed: false, status: 'i am american girl', location: {country: 'USA', city: 'San Diego'},
                    photoUrl: 'https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png'}
            ]
        );
    }
    
    return(
        <div>
            <h2>Users</h2>
            {props.users.map( u => <div className={s.user} key={u.id}>

                <div className={s.userLeftInfo}>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} alt="there are image" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => { props.unfollow(u.id) } } >Unfollow</button>
                            : <button onClick={ () => { props.follow(u.id) } } >Follow</button>
                        }
                    </div>
                </div>
                <div className={s.userRightInfo}>
                    <div className={s.infoLeft}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.infoRight}>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            </div> )}
            <button>Show more</button>
        </div>
    )

}

export default Users;