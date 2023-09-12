import React from "react";

const Kanye = ({ quote }) => {
    const handleRefreshClick = () => {
        window.location.reload();
    };

    const randomNumber = Math.floor(Math.random() * 18) + 1;

    return (
        <div className="quote">
            <h4 className="quote-text">{quote.quote}</h4>
            <img src={`/images/${randomNumber}.jpg`} alt="My Image" className="img-size" />
            <button onClick={handleRefreshClick} className="blue-button circular-button">
                New Quote
            </button>
        </div>
    );
};

export default Kanye;