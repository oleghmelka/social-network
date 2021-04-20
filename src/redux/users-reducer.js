import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case FOLLOW: 
            return {
                ...state,
                users: updateObjectInArray( state.users, action.userId, "id", {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray( state.users, action.userId, "id", {followed: false})
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { 
                ...state, 
                followingInProgress: action.fetch
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)

            }
        }

        default:
            return state;
    }

}


// ---( Action Creators)--- 

export const followSuccess = (userId) => {
    return { 
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowSuccess = (userId) => {
    return { 
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsers = (users) => {
    return { 
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPage = (currentPage) => {
    return { 
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCount = (totalCount) => {
    return { 
        type: SET_USERS_TOTAL_COUNT,
        totalCount: totalCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return { 
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const toggleFollowingProgress = (fetch, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, fetch, userId})
 


// ---С-А-Н-К-И--- (Thunks Creators)

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize); 
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    } 
}

const followUnfollwFlow = async (dispatch, userId, apiMethod, actionCreator) => {  // Общий для нескольких санок код
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollwFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    } 
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollwFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    } 
}


export default usersReducer;