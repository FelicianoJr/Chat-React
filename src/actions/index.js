import { NEW_MESSAGES, RECEIVE_MESSAGES } from "../constants";

export const sendMsg = message => dispatch => {
  dispatch(newMessage(message));
};

const newMessage = message => ({
  type: NEW_MESSAGES,
  message
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGES,
  message
});
