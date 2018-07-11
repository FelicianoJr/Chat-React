import React from "react";
import { shallow, mount } from "enzyme";
import Message from "../components/Message";

describe("<Message />", () => {
  let props;

  beforeEach(() => {});

  it("should contain the name class avatar-empty and send-msg", () => {
    props = {
      message: { name: "you", messages: "hi" },
      avatar: false
    };
    const wrapper = mount(<Message {...props} />);
    expect(wrapper.find(".avatar-empty").length).toEqual(0);
    expect(wrapper.find(".send-msg").length).toEqual(1);
    expect(wrapper.props().message.messages).toEqual("hi");
  });

  it("should contain the name and class avatar and receive-msg", () => {
    props = {
      message: { name: "young", messages: "hi people" },
      avatar: true
    };
    const wrapper = mount(<Message {...props} />);
    expect(wrapper.find(".avatar").length).toEqual(1);
    expect(wrapper.find(".receive-msg").length).toEqual(1);
    expect(wrapper.props().message.messages).toEqual("hi people");
  });
});
