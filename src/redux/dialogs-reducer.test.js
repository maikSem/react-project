import dialogsReducer, {addMessage} from "./dialogs-reducer";

let state = {
  messages: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'}
  ]
};

it('the length of messages should increase', () => {
  let action = addMessage('HI HI HI');
  let newState = dialogsReducer(state, action);
  expect(newState.messages.length).toBe(3);
});
