import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import BodyText from "./";

beforeEach(() => {
  jest.resetModules();
});

describe("<BodyText />", () => {
  const wrapper = shallow(<BodyText variant="heading" titleText="Heading" />);
  describe("Receives variant and titletext props", () => {
    test("Renders paragraph element by default", () => {
      const wrapper = shallow(<BodyText titleText={"Paragraph t"} />);
    });
    test("If variant prop is heading, it renders element with variant h5", () => {
      expect(wrapper.props().variant).toEqual("h5");
    });
    test("titleText renders the word Heading", () => {
      expect(wrapper.text()).toEqual("Heading");
    });

    test("Renders properly", () => {
      const component = renderer.create(<BodyText titleText={"Paragraph t"} />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
