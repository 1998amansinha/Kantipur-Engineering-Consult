import React from "react";
import "./about.css";

const About = () => {
  // Assuming establishment year and number of projects are dynamic data
  const establishmentYear = 2005;
  const numberOfProjectsCompleted = 30; // Just an example number

  return (
    <div className="about__section section__padding" id="about">
      <div className="about__container gradient__bg section__padding">
        <h2 className="about__title h__headtext">About Us</h2>
        <div className="about__content">
          <div className="about__text">
            <p className="about__description p__para">
              Kantipur Engineering Consult, established in {establishmentYear},
              is a leading engineering firm dedicated to providing innovative
              solutions for our clients. With a team of experienced
              professionals and a commitment to excellence, we have completed
              over {numberOfProjectsCompleted} projects that exceed
              expectations and make a positive impact on communities.
            </p>
            <p className="about__description p__para">
              Our mission is to leverage our expertise in engineering and
              technology to create sustainable solutions that address the
              complex challenges of today and tomorrow. Whether it's designing
              state-of-the-art infrastructure or implementing cutting-edge
              technologies, we are driven by a passion for innovation and a
              commitment to delivering results.
            </p>
            <p className="about__description p__para">
              At Kantipur Engineering Consult, we believe in collaboration,
              integrity, and excellence in everything we do. We strive to build
              lasting relationships with our clients and partners, based on
              trust, transparency, and mutual respect. Together, we can build a
              better future for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
