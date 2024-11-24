import React, { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";


function Proda() {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('любая');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('любая');
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('от');

  const brandModels = {
    любая: [],
    Audi: ['A3', 'A4', 'A6'],
    BMW: ['X5', 'X6', '3 Series'],
    BYD: ['F3', 'Tang', 'Han'],
    Changan: ['CS35', 'CS55', 'CS75'],
    CHERY: ['Tiggo 2', 'Tiggo 4', 'Tiggo 8'],
    Chevrolet: ['Cruze', 'Malibu', 'Tahoe'],
    Daewoo: ['Lanos', 'Matiz', 'Nexia'],
  };

  const toggleBrandMenu = () => setIsBrandOpen(!isBrandOpen);
  const toggleModelMenu = () => setIsModelOpen(!isModelOpen);
  const toggleYearMenu = () => setIsYearOpen(!isYearOpen);

  const selectBrand = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel('любая');
    setIsBrandOpen(false);
  };

  const selectModel = (model) => {
    setSelectedModel(model);
    setIsModelOpen(false);
  };

  const selectYear = (year) => {
    setSelectedYear(year);
    setIsYearOpen(false);
  };

  const generateYears = (start, end) => {
    const years = [];
    for (let year = start; year <= end; year++) {
      years.push(year);
    }
    return years;
  };

  const models = brandModels[selectedBrand] || [];
  const years = generateYears(1950, 2024);

  return (
    <div id="proda">
      <div className="container">
        <h1>Продать и купить авто в Кыргызстане</h1>
        <div className="filters">
          <div className="dropdown">
            <div className="dropdown-header" onClick={toggleBrandMenu}>
              Марка: {selectedBrand} <span className="arrow"><IoChevronDown /></span>
            </div>
            {isBrandOpen && (
              <ul className="dropdown-menu">
                {Object.keys(brandModels).map((brand) => (
                  <li
                    key={brand}
                    className="dropdown-item"
                    onClick={() => selectBrand(brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="dropdown">
            <div className="dropdown-header" onClick={toggleModelMenu}>
              Модель: {selectedModel} <span className="arrow"><IoChevronDown /></span>
            </div>
            {isModelOpen && (
              <ul className="dropdown-menu">
                <li
                  key="любая"
                  className="dropdown-item"
                  onClick={() => selectModel('любая')}
                >
                  Любая
                </li>
                {models.map((model) => (
                  <li
                    key={model}
                    className="dropdown-item"
                    onClick={() => selectModel(model)}
                  >
                    {model}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="dropdown">
            <div className="dropdown-header" onClick={toggleYearMenu}>
              Год от: {selectedYear} <span className="arrow"><IoChevronDown /></span>
            </div>
            {isYearOpen && (
              <ul className="dropdown-menu">
                {years.map((year) => (
                  <li
                    key={year}
                    className="dropdown-item"
                    onClick={() => selectYear(year)}
                  >
                    {year}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="dropdown">
            <div className="dropdown-header">
              Цена от, $ <span><IoChevronDown /></span>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown-header">
              Цена до, $ <span><IoChevronDown /></span>
            </div>
          </div>
          <button className="search-button">Найти</button>
        </div>
      </div>
    </div>
  );
}

export default Proda;
