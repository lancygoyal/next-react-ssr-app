import React from "react";
import { shallow } from "enzyme";
import Card from "@material-ui/core/Card";
import JobCard from "../../components/jobcard";
import Typography from "@material-ui/core/Typography";

describe("<JobCard />", () => {
  let mountedWrapper;

  const defaultProps = {
    data: {
      id: 1,
      title: "Frontend Developer",
      description:
        "Comfortable with modern JS stack, experience with React and Redux.",
      employment_type: "full_time",
      technologies: ["React", "Javascript"]
    },
    applyNow: true
  };

  const wrapper = (props = defaultProps) => {
    if (!mountedWrapper) {
      mountedWrapper = shallow(<JobCard {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach = () => (mountedWrapper = undefined);

  it("should render the Card", () => {
    const component = wrapper();
    expect(component.find(Card).length).toBe(1);
  });

  it("should render the Typography", () => {
    const component = wrapper({ ...defaultProps, applyNow: false });
    expect(component.find(Typography).length).toBeGreaterThanOrEqual(1);
  });
});
