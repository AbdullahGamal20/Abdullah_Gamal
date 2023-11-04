import React, { useState } from "react";
import { services } from "../../Data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import shapeTwo from "../../assets/shape-2.png";
import shapeOne from "../../assets/shape-1.png";
import "./services.css";
import Stars from "../Part/Stars";

function Services() {
  return (
    <motion.section
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className="services section"
    >
      <Stars />
      <h2 className="section_title text-cs">What I Do</h2>
      <p className="section_subtitle">
        My <span>Services</span>
      </p>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services_container container mySwiper"
      >
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide className="services_item card card_one" key={index}>
              <span className="services_subtitle text-cs">{name}</span>
              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>

              <a
                href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
                target="_blank"
                className="link"
              >
                Request Service
                <FaArrowRight className="link_icon"></FaArrowRight>
              </a>
              <img src={shapeTwo} alt="Shape" className="shape c_shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section_deco deco_right">
        <img src={shapeOne} alt="Image" className="shape" />
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">Services </span>
      </div>
    </motion.section>
  );
}

export default Services;
