import React from "react";

function Hero() {
    return (
        <div className="container p-5 mb-5 text-center">
            <div className="row">
                <img
                    src="/media/images/homeHero.png"
                    className="mb-5 w-60 mx-auto d-block"
                    alt="Hero"
                />
            </div>
            <h1>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="p-2 btn btn-primary fs-5 mb-5">Sign up for free</button>
        </div>
    );
}

export default Hero;
