import { NEW_MESSAGES, RECEIVE_MESSAGES } from "../constants";

const listMessages = [
  {
    name: "Evline",
    messages: "Hello",
    icon: "icons8-female-user.svg"
  },

  {
    name: "Evline",
    messages:
      "I need some help to sort the issue on my website Right now my website is down:(",
    icon: "icons8-female-user.svg"
  },
  {
    name: "you",
    messages: "Hi Evline"
  },
  {
    name: "you",
    messages: "could you please tell me your customer ID?"
  },
  {
    name: "Evline",
    messages: "Yes sure. This is 5328562",
    icon: "icons8-female-user.svg"
  },
  {
    name: "you",
    messages: "Ok thanks! Let me quickly lock into this"
  }
];

const messages = (state = listMessages, action) => {
  switch (action.type) {
    case NEW_MESSAGES:
    console.log(action)
      return [
        ...state,
        {
          name: action.message.name,
          messages: action.message.messages,
          icon: action.message.icon
        }
      ];
    case RECEIVE_MESSAGES:
      return [...action.message];
    default:
      return state;
  }
};

export default messages;
