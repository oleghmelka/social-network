import { NavLink } from 'react-router-dom';
import s from './Friend.module.css';

const Friend = (props) => {

    let path = "/dialogs/" + props.id;
    
    return (
        <div>
            <NavLink to={path} >
                <img className={s.image} src={props.image} />
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
  }
  
  
  export default Friend;