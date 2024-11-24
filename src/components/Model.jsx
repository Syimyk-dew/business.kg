import React from "react";
import audi from "./assets/image/audi.svg";
import toyota from "./assets/image/toyota.svg";
import kia from "./assets/image/kia.svg";
import hyundai from "./assets/image/hyundai.svg";
import bmw from "./assets/image/bmw.svg";
import geely from "./assets/image/geely.svg";
import nissan from "./assets/image/nissan.svg";
import ford from "./assets/image/ford.svg";
import mersedes from "./assets/image/mersedes.svg";
import haval from "./assets/image/haval.svg";
import volkswagen from "./assets/image/volkswagen.svg";
import chevrolet from "./assets/image/chevrolet.svg";
import chery from "./assets/image/chery.svg";
import mazda from "./assets/image/mazda.svg";
import lada from "./assets/image/lada.svg";
import infiniti from "./assets/image/infiniti.svg";
import saima from "./assets/image/saima.png";


function Model() {
    return (
        <div id="model">
            <div className="container">
                <div className="model">
                    <div className="model-icon">
                        <img src={audi} alt="" />
                        <img src={toyota} alt="" />
                        <img src={kia} alt="" />
                        <img src={hyundai} alt="" />
                        <img src={bmw} alt="" />
                        <img src={geely} alt="" />
                        <img src={nissan} alt="" />
                        <img src={ford} alt="" />
                        <img src={mersedes} alt="" />
                        <img src={haval} alt="" />
                        <img src={volkswagen} alt="" />
                        <img src={chevrolet} alt="" />
                        <img src={chery} alt="" />
                        <img src={mazda} alt="" />
                        <img src={lada} alt="" />
                        <img src={infiniti} alt="" />
                    </div>
                    <div className="model-img">
                        <img src={saima} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;