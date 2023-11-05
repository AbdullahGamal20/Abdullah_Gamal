import React from "react";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/ServicesLayout";
import SkillsLayout from "./Components/Layout/SkillsLayout";
import HomeLayout from "./Components/Layout/HomeLayout";
import AboutLayout from "./Components/Layout/AboutLayout";
import PreLoader from "./Components/Loader/PreLoader";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  return (
    <>
      <main className="main">
        <BrowserRouter>
          <PreLoader />
          <Cursor />
          <Header />
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/about" element={<AboutLayout />} />
            <Route path="/services" element={<Layout />} />
            <Route path="/skills" element={<SkillsLayout />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
