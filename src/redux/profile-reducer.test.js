import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts:
        [
            {id: 1, message: 'Hi. how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first project', likesCount: 50},
            {id: 3, message: 'yohoooo', likesCount: 10},
            {id: 4, message: 'WTF', likesCount: 50}
        ]
}

test('length of posts should be incremented', () => {
    //1. start data
    let action = addPostActionCreator('hello from south korea')

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(5)
});

test('message of posts should be correct', () => {
    //1. start data
    let action = addPostActionCreator('hello from south korea')

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts[4].message).toBe('hello from south korea')
});

test('after deleting length of messages should be decremented', () => {
    //1. start data
    let action = deletePost(1)

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(3)
});

test('after deleting length of messages should not be decremented if id is incorrect', () => {
    //1. start data
    let action = deletePost(1000)

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(4)
});
