import React, { useState } from 'react';
import { IoIosArrowDown, IoMdPin } from "react-icons/io";

function Header2() {
    const [regionOpen, setRegionOpen] = useState(false); 
    const [selectedRegion, setSelectedRegion] = useState("Любой регион");

    const toggleRegionSelect = () => {
        setRegionOpen(!regionOpen);
    };

    const selectRegion = (region) => {
        setSelectedRegion(region); 
        setRegionOpen(false);
    };

    return (
        <div id='header2'>
            <div className='container'>
                <div className='header2'>
                    <div className='header2-nav'>
                        <a href="">СРОЧНО</a>
                        <a href="">Легковые</a>
                        <a href="">Коммерческие</a>
                        <a href="">Спецтехники</a>
                        <a href="">Рекломодателям</a>
                    </div>

                    <div className='header2-reg'>
                        <div className="region-selector">
                            <div className="region-display" onClick={toggleRegionSelect}>
                                <IoMdPin className="icon" size={20} />
                                <span className="region-text">{selectedRegion}</span>
                                <IoIosArrowDown className="icon" size={16} />
                            </div>
                            {regionOpen && (
                                <div className="region-options">
                                    <p onClick={() => selectRegion("Любой регион")}>Любой регион</p>
                                    <p onClick={() => selectRegion("Бишкек")}>Бишкек</p>
                                    <p onClick={() => selectRegion("Ош")}>Ош</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header2;
