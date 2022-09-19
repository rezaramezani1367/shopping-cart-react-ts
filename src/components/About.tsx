import React from "react";
import useComponentVisible from "../hooks/useComponentVisible";

const About = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return <div>About</div>;
};

export default About;
