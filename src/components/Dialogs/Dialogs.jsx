import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import React from 'react';
import { Redirect } from 'react-router';


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map ( dia => <DialogItem name={dia.name}  id={dia.id} image={dia.image} /> );
    let messagesElements = state.messages.map ( mes => <Message message={mes.message} id={mes.id} /> );

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={ onMessageChange } value={props.dialogsPage.newMessageBody} />
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Send</button>
                </div>
            </div>
            
        </div>
    );
  }
  
  export default Dialogs;