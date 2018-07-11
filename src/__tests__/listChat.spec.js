import React from "react";
import { mount } from "enzyme";
import ListChats from "../components/ListChat";

describe("<ListChats />", () => {
  let props;

  beforeEach(() => {
    props = {
      messages: [
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
        }
      ]
    };
  });

  it("should contain two Message component", () => {
    const wrapper = mount(<ListChats {...props} />);
    expect(wrapper.find("Message").length).toEqual(2);
  });
});
