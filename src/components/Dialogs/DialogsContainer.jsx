import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



  

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() );
    }

    let onMessageChange = (body) => {
        props.store.dispatch( updateNewMessageBodyCreator(body) );
    }

    return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
  }
  
  export default DialogsContainer;