import { NavLink } from 'react-router-dom';
import s from './Message.module.css';


const Message = (props) => {
  let interlocutor = 2;
  if(props.id === 'first'){interlocutor = s.first};
  if(props.id === 'second'){interlocutor = s.second};

  return (
      <div className={`${s.speech} ${interlocutor}`}>
        <img className={s.avatarMessage} src='https://anexxdesign.com.br/site/wp-content/uploads/2015/05/765-default-avatar-300x300.png' />
        {props.message}
      </div>
  );
}


  export default Message;