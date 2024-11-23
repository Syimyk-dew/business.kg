import React, { useState } from "react";
import logo from "./assets/image/logo.svg";
import logo2 from "./assets/image/logo2.svg";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Меню абалы (ачык/жабык)
  const [selectedLanguage, setSelectedLanguage] = useState("RU"); // Тандалган тил

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Меню жабылат
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src={logo} alt="" />
            <div className="header-line"></div>
            <img src={logo2} alt="" />
          </div>
          <div className="header-nav">
            <div className="relative">
              <div className="select" onClick={toggleSelect}>
                {selectedLanguage} <IoIosArrowDown size={20} />
              </div>
              <div className={`selcts ${isOpen ? "open" : "closed"}`}>
                <p onClick={() => handleLanguageChange("RU")}>RU</p>
                <p onClick={() => handleLanguageChange("KG")}>KG</p>
                <p onClick={() => handleLanguageChange("EN")}>EN</p>
              </div>
            </div>
            <button className="header-btn">
              <a href="">Войти</a>
            </button>
            <button className="header-btns">
              <span>
                <IoAddCircleOutline />
              </span>
              <a href="">Разместить объявление</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
