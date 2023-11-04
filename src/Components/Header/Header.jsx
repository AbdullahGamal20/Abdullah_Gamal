import React, { useEffect, useState } from "react";
import { links } from "../../Data";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import shapeOne from "../../assets/shape-1.png";
import { Link, animateScroll } from "react-scroll";
import logo from "../../assets/abdo_logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav_logo text-cs">
          <img src={logo} alt="LOGO" className="logo" />
          <span>Gamal</span>
        </Link>

        <div className={`${showMenu ? "nav_menu show-menu" : "nav_menu"}`}>
          <div className="nav_data">
            <ul className="nav_list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={path}
                      className="nav_link text-cs"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="header_social">
              <a
                href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
                target="_blank"
                className="header_social-link"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/AbdullahGamal20"
                className="header_social-link"
                target="_blank"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com/abdalla.gamal.7121"
                className="header_social-link"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="section_deco deco_left header_deco">
            <img src={shapeOne} alt="Image" className="shape" />
          </div>
        </div>

        <div className="nav_btns">
          <div className="theme_toggler" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsMoonStarsFill /> : <BsSunFill />}
          </div>
          <div
            className={`${
              showMenu ? "nav_toggle animate-toggle" : "nav_toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
