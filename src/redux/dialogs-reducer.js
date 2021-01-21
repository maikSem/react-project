let ADD_MESSAGE = 'ADD-MESSAGE';

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: action.newMessageBody
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    default:
      return state;
  }
}

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;
