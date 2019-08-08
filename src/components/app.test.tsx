import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./app";

describe("<App />", () => {
  test("Renders properly", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
