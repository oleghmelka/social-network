import React from 'react';


const User = (props) => {

    //let someFunction1 = () => {
    //    props.changeFollow();
    //}

    //let someFunction2 = () => {
    //    props.changeUnFollow();
    //}

    return(
        <div className='s.user'>
        <div>
            <img src="" alt=""/>
           {/* <button onClick={someFunction1}>Follow</button> */}
        </div>
        <div>
            <div>
                <div>{props.name}</div>
                <div>{props.status}</div>
            </div>
            <div>
                <div>{props.country}</div>
                <div>{props.city}</div>
            </div>
        </div>
    </div>
    )

}

export default User;