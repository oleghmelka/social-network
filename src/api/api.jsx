import * as axios from 'axios';
import React from 'react';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f9cc2c2f-5c70-4919-9178-6665823f8198"
    }
});


export const usersAPI = {
    
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then (response => {
            return response.data;
        });
    },
    follow (userId = 2) {
        return instance.post(`follow/${userId}`).then (response => {
            return response.data;
        });
    },
    unfollow (userId = 2) {
        return instance.delete(`follow/${userId}`).then (response => {
            return response.data;
        });
    },
    getProfile (userId = 2) {
        console.warn('Absolete method, use profileAPI object');
        return profileAPI.getProfile(userId = 2);
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get('profile/' + userId).then( response => { 
            return response.data;
        });
    },
    getStatus (userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus (status) {
        return instance.put('profile/status', { status: status });
    }
}
 
export const authAPI = {
    me () {
        return instance.get(`auth/me`).then (response => {
            return response.data;
        });
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe} );
    },
    logout () {
        return instance.delete(`auth/login`);
    }
}




