import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaRegCopyright,
  FaAddressCard,
} from "react-icons/fa";
import { BsTelephonePlusFill } from "react-icons/bs";
import logo from "../../assets/abdo_logo.png";
import "./footer.css";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="footer_container container grid">
        <div className="first">
          <div>
            <Link to="/" className="nav_logo text-cs">
              <img src={logo} alt="LOGO" className="logo" />
              <span>Gamal</span>
            </Link>
          </div>

          <div className="footer_social">
            <a
              href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
              target="_blank"
              className="footer_social-link"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/AbdullahGamal20"
              className="footer_social-link"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/abdalla.gamal.7121"
              className="footer_social-link"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="second2">
          <div>
            <span>
              <BsTelephonePlusFill /> Phone:
            </span>
            <span> +20 01123347691</span>
          </div>

          <div>
            <span>
              <FaAddressCard /> Address:
            </span>
            <span> Cairo , Egypt</span>
          </div>

          <div>
            <div className="search_box">
              <input type="text" placeholder="Search Now" />
              <button className="search_btn">Search</button>
            </div>
          </div>
        </div>

        <div className="third">
          <p>
            Passionate third-year computer science student with a focus on
            frontend development. Skillful in creating user-friendly web
            interfaces and staying up-to-date with the latest technologies.
            Experienced as a frontend developer, delivering visually appealing
            designs and seamless user experiences.
          </p>
          <button className="search_btn">
            <a
              href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
              target="_blank"
            >
              Contact Me Now
            </a>
          </button>
        </div>
      </div>
      <div className="second">
        <FaRegCopyright />

        <span>2023 Copyright: Abdullah Gamal </span>
      </div>
    </footer>
  );
}

export default Footer;
