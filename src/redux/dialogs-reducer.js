let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 7,
        message: state.newMessageText
      }
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default dialogsReducer;
