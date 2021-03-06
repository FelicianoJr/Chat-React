import messages from "./messages";
import { receiveMessage } from "../actions";
import { NEW_MESSAGES } from "../constants";

describe("reducer messages", () => {
  let message;
  let list;
  beforeEach(() => {
    message = {
      name: "Evline",
      messages: "Hello",
      icon: "icons8-female-user.svg"
    };

    list = [
      {
        name: "Evline",
        messages:
          "I need some help to sort the issue on my website Right now my website is down:(",
        icon: "icons8-female-user.svg"
      },
      {
        name: "you",
        messages: "Hi Evline"
      }
    ];
  });

  it("should handle NEW MESSAGE", () => {
    expect(
      messages(list, {
        type: NEW_MESSAGES,
        message: message
      })
    ).toEqual([
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
        name: "Evline",
        messages: "Hello",
        icon: "icons8-female-user.svg"
      }
    ]);
  });

  it("should handle RECEIVE MESSAGE", () => {
    expect(messages([], receiveMessage(list))).toEqual([
      {
        name: "Evline",
        messages:
          "I need some help to sort the issue on my website Right now my website is down:(",
        icon: "icons8-female-user.svg"
      },
      {
        name: "you",
        messages: "Hi Evline"
      }
    ]);
  });
});
