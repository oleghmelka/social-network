const ADD_POST_IN_STATE = 'ADD-POST-IN-STATE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST_IN_STATE:

            let newPost = {
                id: 8,
                message: state.newPostText,
                likesCount: 0
            };
    
            state.posts.push(newPost); 
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
        
            state.newPostText = action.newText;
            return state;
    
        default:
            return state;
    }

}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST_IN_STATE
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default profileReducer;