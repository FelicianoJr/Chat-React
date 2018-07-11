import React from "react";
import { shallow, mount } from "enzyme";
import Button from "../components/Button";

describe("<Button />", () => {
  let onClick;
  let props;

  beforeEach(() => {
    onClick = jest.fn();
    props = {
      name: "Send",
      onClick: onClick
    };
  });

  it("should contain the name passed as props", () => {
    const wrapper = mount(<Button {...props} />);
    expect(wrapper.prop("name")).toEqual("Send");
  });

  it("should click and called action ", () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
