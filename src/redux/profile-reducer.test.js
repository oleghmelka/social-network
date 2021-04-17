import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"

let state = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 12 },
        {id: 1, message: 'I am okey, and you?', likesCount: 2 },
        {id: 2, message: 'what?', likesCount: 4 },
        {id: 3, message: 'nigga?', likesCount: 55 }
    ]
};

it('length of posts should be incremented', () => {

    // 1. Test data
    let action = addPostActionCreator("хочу спининг");

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(5);

});

it('message of new post should be correct', () => {

    // 1. Test data
    let action = addPostActionCreator("хочу спининг");

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[4].message).toBe("хочу спининг");

});

it('after deleting length of messages should be decrement', () => {

    // 1. Test data
    let action = deletePost(1);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(3);

});

it('after deleting length of messages shouldn`t be decrement if id is incorrect', () => {

    // 1. Test data
    let action = deletePost(8888);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(4);

});