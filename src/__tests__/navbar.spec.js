import React from "react";
import { shallow } from "enzyme";
import NavBar from "../components/NavBar";

describe("<NavBar />", () => {
  it("should contain one <nav> and one <a>", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("nav").length).toEqual(1);
    expect(wrapper.find("span").length).toEqual(2);
  });
});
