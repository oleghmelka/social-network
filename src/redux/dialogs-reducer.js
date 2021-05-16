
const SEND_MESSAGE = 'socialNetwork/dialogs/ADD-MESSAGE-IN-STATE';
const UPDATE_NEW_MESSAGE_BODY = 'socialNetwork/dialogs/UPDATE-NEW-MESSAGE-TEXT';

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
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello! How are you?'},
        {id: 3, message: 'I am fine and you?'},
        {id: 4, message: 'I am tired very much'},
        {id: 5, message: 'Why?'}
    ]

};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody} ]
            };
        }
        default:
            return state;
    }

}


export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    }
}

export default dialogsReducer;