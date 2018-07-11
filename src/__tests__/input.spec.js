import React from "react";
import { shallow } from "enzyme";
import Input from "../components/Input";

describe("<Input />", () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it("should render type text ", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("input").prop('type')).toEqual("text");
  });
});
