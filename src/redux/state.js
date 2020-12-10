import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, post: 'This is my first post!', likesCount: 12},
      {id: 2, post: 'This is my second post', likesCount: 16},
      {id: 3, post: 'This is my last post', likesCount: 10}
    ],
    newPostText: 'SFAFSAFASFAF'
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Misha'},
      {id: 2, name: 'Alesya'},
      {id: 3, name: 'Ksenya'},
      {id: 4, name: 'Key'},
      {id: 5, name: 'Oleg'},
      {id: 6, name: 'Sergey'}
    ],
    messages: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Yahoo'},
      {id: 4, message: 'Yo!'},
      {id: 5, message: 'Wheare you?'},
      {id: 6, message: 'Yo!'}
    ],
    newMessageText: 'Введите текст'
  },
  sidebarPage: {
    friends: [
      {
        id: 1,
        name: 'Mike',
        userpic: 'https://e7.pngegg.com/pngimages/445/762/png-clipart-computer-icons-man-icon-man-library-people-recruiter-thumbnail.png'
      },
      {
        id: 2,
        name: 'Ksenya',
        userpic: 'https://w7.pngwing.com/pngs/645/581/png-transparent-computer-icons-young-man-service-logo-fictional-character.png'
      },
      {
        id: 3,
        name: 'Danil',
        userpic: 'https://e7.pngegg.com/pngimages/199/71/png-clipart-computer-icons-man-people-cartoon.png'
      }
    ]
  }
}

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 3,
    post: state.profilePage.newPostText,
    likesCount: 10
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';  // Занулили текс в textarea - my-posts
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {

  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export default state;
