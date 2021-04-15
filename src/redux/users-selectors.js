import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

/* "How to write the selector that was created using Reselect Library"

    export const getSomethingDifficult = createSelector( getUsers, getIsFetching, 
        (users, isFetching) => { 
            if(isFetching){
                return users.filter(u => true);
            } else {
                return 100;
            }
        }
    ) 

*/

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

