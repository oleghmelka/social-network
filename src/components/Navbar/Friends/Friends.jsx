import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
   
    let friendsElements = props.friends.map ( element => <Friend name={element.name}  image={element.image} id={element.id}/>);
    return (
        <div>
            <h3 className={s.title}>Friends</h3>
            <div className={s.wrapper}>
                {friendsElements}
            </div>
        </div>
    );
  }
  
  
  export default Friends;