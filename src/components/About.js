import React from "react";
import { image } from "../data/data";

function About() {
  return <div>
    <h2>About Me</h2>
    <p>The Person Who Never Made a Mistake Never Made Anything</p>
    <img src={image} alt="I Made This" />
  </div>;
}

export default About;
