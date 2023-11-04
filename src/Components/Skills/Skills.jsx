import React from "react";
import shapeOne from "../../assets/shape-1.png";
import { skills } from "../../Data";
import { motion } from "framer-motion";
import "./skills.css";

function Skills() {
  return (
    <motion.section
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="skills section "
    >
      <div className="star star1"></div>
      <div className="star star2"></div>

      <h2 className="section_title text-cs">Professional Skills </h2>
      <p className="section_subtitle">
        My <span>Talent</span>
      </p>

      <div className="skills_container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div className="skills_item" key={index}>
              <div className="skills_titles">
                <h3 className="skills_name">{name}</h3>
                <span className="skills_number">
                  {percentage} <span>%</span>
                </span>
              </div>

              <p className="skills_description">{description}</p>
              <div className="skills_bar">
                <span
                  className="skills_percentage"
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section_deco deco_left">
        <img src={shapeOne} alt="Image" className="shape" />
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">Skills </span>
      </div>
    </motion.section>
  );
}

export default Skills;
