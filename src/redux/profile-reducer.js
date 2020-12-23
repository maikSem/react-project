let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, post: 'This is my first post!', likesCount: 12},
    {id: 2, post: 'This is my second post', likesCount: 16},
    {id: 3, post: 'This is my last post', likesCount: 10}
  ],
  newPostText: 'Введите текст'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        post: state.newPostText,
        likesCount: 10
      }
      return {        // редусеры тоже чистые функции, они не должны изменять данные которые в них приходят, поэтому мы копируем state который в редусер приходит!
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost] // таким образом мы добавляем новый элемент в массив, где newPost является новым элементом
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer;
