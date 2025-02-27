import React from "react";
import "../Styles/about.css";
import "../Styles/media.css";

const About = () => {
  return (
    <section className="about container" id="about">
      <div className="contentBx">
        <h2 className="titleText">Catch up with the trending topics</h2>
        <p className="title-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos
          consequuntur voluptate dolorum totam provident ducimus cupiditate
          dolore doloribus repellat. Saepe ad fugit similique quis quam. Odio
          suscipit incidunt distinctio.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          blanditiis libero pariatur ipsum suscipit voluptates aut, repellendus
          quos dolor autem, natus laboriosam consectetur maxime cumque, sunt
          magni optio? Veritatis, ea?
        </p>
        <a href="#" className="btn2">
          Read more
        </a>
      </div>
      <div className="imgBx">
        <img src="/about.png" alt="" className="fitBg" />
      </div>
    </section>
  );
};

export default About;
