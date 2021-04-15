import { usersAPI } from "../api/api";

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
                users: state.users.map(u => {
                    if ( u.id === action.userId ){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if ( u.id === action.userId ){
                        return {...u, followed: false}
                    }
                    return u;
                })
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
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
            usersAPI.getUsers(currentPage, pageSize).then( data => { 
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            } );
    } 
}

export const follow = (userId) => {
    
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId).then( data => { 
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    } 
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then( data => { 
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    } 
}


export default usersReducer;