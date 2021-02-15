
const ADD_MESSAGE_IN_STATE = 'ADD-MESSAGE-IN-STATE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {

    switch (action.type) {

        case ADD_MESSAGE_IN_STATE:

            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
        
            state.messages.push(newMessage); 
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }

}


export const addMessageInStateActionCreator = () => {
    return {
        type: ADD_MESSAGE_IN_STATE
    }
    
}
export const updateNewMessageTextActionCreator = (text_message) => {
    return { 
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text_message
    }
    
}

export default dialogsReducer;