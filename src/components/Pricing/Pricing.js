import React from 'react';
import './Pricing.scss';
import mower from '../../images/icons/lawn-mower.png'
import trimmer from '../../images/icons/string-trimmer.png'
import shears from '../../images/icons/shears.png'

export const Pricing = () => {
    return (
        <div className="Pricing-wrapper">
            <h1>Pricing</h1>
            <div className="Pricing" id="Pricing">
                
                <div className="Pricing-div">
                    <h3>Basic</h3>
                    <h1>$50</h1>
                    <span className="Pricing-div-span">
                        <img src={mower} alt="mower"/>
                    </span>
                    <p> Regular lawn mowing for $50.</p>
                </div>
                <div className="Pricing-div">
                    <h3>Classic</h3>
                    <h1>$75</h1>
                    <span className="Pricing-div-span">
                        <img src={mower} alt="mower"/>
                        <img src={trimmer} alt="trimmer"/>
                    </span>
                    <p> Lawn mowing with trimming for $75.</p>
                </div>
                <div className="Pricing-div">
                    <h3>Deluxe</h3>
                    <h1>$100</h1>
                    <span className="Pricing-div-span">
                        <img src={mower} alt="mower"/>
                        <img src={trimmer} alt="trimmer"/>
                        <img src={shears} alt="shears"/>
                    </span>
                    <p> Lawn mowing, trimming, and pruning for $100.</p>
                </div>
            </div>
        </div>
    )
}
