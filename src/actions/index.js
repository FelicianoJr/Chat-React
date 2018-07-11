import { NEW_MESSAGES, RECEIVE_MESSAGES } from "../constants";

export const sendMsg = message => dispatch => {
  dispatch(newMessage(message));
};

const newMessage = message => ({
  type: NEW_MESSAGES,
  message: { name: "you", messages: message, icon: "" }
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGES,
  message
});
