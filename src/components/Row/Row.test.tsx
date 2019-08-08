import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Row from "./";

beforeEach(() => {
  jest.resetModules();
});

describe("<Row />", () => {
  test("Renders properly", () => {
    const component = renderer.create(<Row rowKeyName={"rowKeyName"} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("If Row doesn't receive hideTitle and rowAlternativeTitle props it shows the keyName for title", () => {
    const wrapper = shallow(<Row rowKeyName={"rowKeyName"} />);
    const row = wrapper.find(".row > span");
    expect(row.text().includes("rowKeyName")).toBe(true);
  });
  test("If Row doesn't receive hideTitle but gets rowAlternativeTitle it shows rowAlternativeTitle for title", () => {
    const wrapper = shallow(
      <Row
        rowAlternativeTitle={"rowAlternativeTitle"}
        rowKeyName={"rowKeyName"}
      />
    );
    const row = wrapper.find(".row > span");
    expect(row.text().includes("rowAlternativeTitle")).toBe(true);
  });
  test("If Row receives hideTitle there is no title", () => {
    const wrapper = shallow(
      <Row
        rowAlternativeTitle={"rowAlternativeTitle"}
        rowKeyName={"rowKeyName"}
        hideTitle
      />
    );
    expect(wrapper.find(".row").children()).toHaveLength(0);
  });
});
