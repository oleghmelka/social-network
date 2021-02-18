
const ADD_MESSAGE_IN_STATE = 'ADD-MESSAGE-IN-STATE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

    dialogs: [
        {id: 0, name: 'Dymich', image: 'https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png' },
        {id: 1, name: 'Andrey', image: 'https://i.pinimg.com/originals/60/06/36/600636cf543b2730eeffb634199db706.jpg' },
        {id: 2, name: 'Sveta', image: 'https://steamuserimages-a.akamaihd.net/ugc/958596576368807294/2CDA31196125EAE96EC9C65EEF847A60508D48AB/' },
        {id: 3, name: 'Sasha', image: 'https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png' },
        {id: 4, name: 'Victor', image: 'https://i.pinimg.com/originals/9d/c9/5e/9dc95eaf0ddc72fd8a9bcbd6e572c201.png' },
        {id: 5, name: 'Valera', image: 'https://st3.depositphotos.com/1007566/13024/v/950/depositphotos_130240748-stock-illustration-young-man-avatar-character.jpg' }
    ],
    messages:[
        {id: 'first', message: 'Hi'},
        {id: 'second', message: 'How are you, nigga?'},
        {id: 'first', message: 'What are you saying white?'},
        {id: 'second', message: 'It`s a joke'},
        {id: 'first', message: 'You are died'}
    ],
    newMessageText: ''

};

const dialogsReducer = (state = initialState, action) => {

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


export const sendMessageCreator = () => {
    return {
        type: ADD_MESSAGE_IN_STATE
    }
    
}
export const updateNewMessageBodyCreator = (body) => {
    return { 
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: body
    }
    
}

export default dialogsReducer;