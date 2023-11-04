import React from "react";
import img from "../../assets/me2.jpg";
import { motion } from "framer-motion";

import "./about.css";

function About() {
  return (
    <motion.section
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5 }}
      className="about section"
    >
      <div className="about_head">
        <h2 className="section_title about_title text-cs">
          About <span className="me">Me</span>
        </h2>
        <p className="section_subtitle about_subtitle">
          My <span>Career</span>
        </p>

        <div className="container about_container">
          <div className="about_img">
            <img src={img} alt="About Me" />
            <div className="content">
              <h3>
                <span>Age:</span> 20 Years
              </h3>
              <h3>
                <span>Address:</span> Cairo, Egypt
              </h3>
              <h3>
                <span>University:</span> Ain Shams
              </h3>
              <h3>
                <span>College:</span> Computer Science
              </h3>
              <h3>
                <span>Department:</span> Information System
              </h3>
              <h3>
                <span>GPA:</span> 3.5
              </h3>
            </div>
          </div>
          <div className="about_details">
            <p>
              <h1>Hello! I am Abdullah</h1> <br /> I'm a Passionate third-year
              computer science student with a focus on frontend development with
              skills:
              <span>
                {" "}
                HTML , CSS , JS , BOOTSTRAP , REACT JS , TAILWIND , Git&GitHub ,
                Redux{" "}
              </span>
              . Skillful in creating user-friendly web interfaces and staying
              up-to-date with the latest technologies. Experienced as a frontend
              developer, delivering visually appealing designs and seamless user
              experiences.
            </p>

            <button className="btn about_btn">
              <a
                href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
                target="_blank"
              >
                Contact Me Now{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
