import React, { useRef } from "react";
import gf from "./assets/image/gf.svg";
import { HiArrowUpRight } from "react-icons/hi2";

function Scrol() {
  const scrolRef = useRef(null);

  const scrollLeft = () => {
    scrolRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrolRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div id="scrol">
      <div className="container">
        <button className="scroll-btn left" onClick={scrollLeft}>
        <span><HiArrowUpRight /></span>

        </button>
        <div className="scrol">
          <div className="scrol-title">
            <h1>Автобизнес</h1>
            <div className="scrol-link">
              <a href="">
                Смотреть все
                <span>
                  <HiArrowUpRight />
                </span>
              </a>
            </div>
          </div>

          <div className="scrol-div" ref={scrolRef}>
            <div className="scrol-block">
              <img src={gf} alt="" />
              <h4>China Lion Cars</h4>
              <p>217 объявлений</p>
            </div>
            <div className="scrol-block">
              <img src={gf} alt="" />
              <h4>China Lion Cars</h4>
              <p>217 объявлений</p>
            </div>
            <div className="scrol-block">
              <img src={gf} alt="" />
              <h4>China Lion Cars</h4>
              <p>217 объявлений</p>
            </div>
            <div className="scrol-block">
              <img src={gf} alt="" />
              <h4>China Lion Cars</h4>
              <p>217 объявлений</p>
            </div>
            <div className="scrol-block">
              <img src={gf} alt="" />
              <h4>China Lion Cars</h4>
              <p>217 объявлений</p>
            </div>
            <div className="scrol-block">
              <img src={gf} alt="" />
              <h4>China Lion Cars</h4>
              <p>217 объявлений</p>
            </div>
            <div className="scrol-block">
              <img src={gf} alt="" />
              <h4>China Lion Cars</h4>
              <p>217 объявлений</p>
            </div>
          </div>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
            <span><HiArrowUpRight /></span>
        </button>
      </div>
    </div>
  );
}

export default Scrol;
