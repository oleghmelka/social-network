import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST-IN-STATE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 12 },
        {id: 1, message: 'I am okey, and you?', likesCount: 2 },
        {id: 2, message: 'what?', likesCount: 4 },
        {id: 3, message: 'nigga?', likesCount: 55 }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 8,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}

// ---( Action Creators)--- 

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })




// ---С-А-Н-К-И--- (Thunks Creators)

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then( data => { 
            dispatch(setUserProfile(data));
        } );
    } 
}




export default profileReducer;