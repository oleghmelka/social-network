let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you?', likesCount: 12 },
                {id: 1, message: 'I am okey, and you?', likesCount: 2 },
                {id: 2, message: 'what?', likesCount: 4 },
                {id: 3, message: 'nigga?', likesCount: 55 },
                {id: 4, message: 'i kill you', likesCount: 6 },
                {id: 5, message: 'go away', likesCount: 75 },
                {id: 6, message: 'thanks', likesCount: 377 },
                {id: 7, message: 'innocent agent', likesCount: 88 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 0, name: 'Andrew', image: 'https://i.pinimg.com/originals/60/06/36/600636cf543b2730eeffb634199db706.jpg' },
                {id: 1, name: 'Sasha', image: 'https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png' },
                {id: 2, name: 'Sveta', image: 'https://steamuserimages-a.akamaihd.net/ugc/958596576368807294/2CDA31196125EAE96EC9C65EEF847A60508D48AB/' }
            ]
        }
    
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('заглушка для вызова функции rerenderEntireTree в файле state.js');
    },
    addPostInState() {
    
        let newPost = {
            id: 8,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost); 
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMessageInState() {
   
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        };
    
        this._state.dialogsPage.messages.push(newMessage); 
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {

        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;