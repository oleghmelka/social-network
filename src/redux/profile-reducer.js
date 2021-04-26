import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST-IN-STATE';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
//const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 12 },
        {id: 1, message: 'I am okey, and you?', likesCount: 2 },
        {id: 2, message: 'what?', likesCount: 4 },
        {id: 3, message: 'nigga?', likesCount: 55 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 8,
                message: action.description,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: { ...state.profile, photos: action.photos }}
        }
        default:
            return state;
    }

}

// ---( Action Creators)--- 

export const addPostActionCreator = (description) => {
    
    return {
        type: ADD_POST,
        description: description
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })


// ---С-А-Н-К-И--- (Thunks Creators)

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}



export const saveProfile = (profile) => async (dispatch, getState) => {

    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        //dispatch(getUserProfile(userId));
        alert(response.data.messages[0]);
    }
}

export default profileReducer;