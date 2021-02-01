import profileReducer, {addPost} from "./profile-reducer";

let state = {
  posts: [
    {id: 1, post: 'This is my first post!', likesCount: 12},
    {id: 2, post: 'This is my second post', likesCount: 16},
    {id: 3, post: 'This is my last post', likesCount: 10}
  ]
};

it('the length of posts should increase', () => {
  let action = addPost('This is second post');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
})
