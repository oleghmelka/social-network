import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  
    return (
        <header className={s.header}>
          <img src='https://c0.klipartz.com/pngpicture/513/969/sticker-png-open-logo-phoenix-emblem-logo-fictional-character-%D1%84%D0%B5%D0%BD%D0%B8%D0%BA%D1%81-fantasy.png' />
          <div className={s.loginBlock}>
              { props.isAuth 
              ?  <div>{props.login} - <button onClick={props.logout}>LogOut</button> </div>
              : <NavLink to={'/login'}>LOGIN</NavLink> }
          </div>
        </header>
    );
  }
  
  
  export default Header; 