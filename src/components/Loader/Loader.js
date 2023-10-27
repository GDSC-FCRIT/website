import React from 'react';
import './Loader.css'; 

const Loader = () => {
    return (
        <div className="loader-container">
        <div className="loader">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
            <div className="dot dot4"></div>
            <div className="dot dot5"></div>
            <div className="dot dot6"></div>
            <div className="dot dot7"></div>
        </div>
        </div>
    );
};

export default Loader;
