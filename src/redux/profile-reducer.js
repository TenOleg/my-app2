import {profileAPI} from "../api/api";

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS';
let DELETE_POST = 'DELETE_POST';

let initialState = {
    posts:
        [
            {id: 1, message: 'Hi. how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first project', likesCount: 50},
            {id: 3, message: 'yohoooo', likesCount: 10},
            {id: 4, message: 'WTF', likesCount: 50}
        ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = action.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newPost, likesCount: 100}],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) =>({type: DELETE_POST, postId})

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;