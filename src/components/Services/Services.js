import React from 'react'
import './Services.scss'
import mower from '../../images/icons/lawn-mower.png'
import trimmer from '../../images/icons/string-trimmer.png'
import shears from '../../images/icons/shears.png'

export const Services = () => {
    return (
        <div>
            <h1 className="ServicesTitle">Services</h1>
        <div className="Services" id="Services">
            <div className="Services-div">
                <h3 className="Services-div-h3">Mowing</h3>
                <p className="Services-div-p">Classic, clean cut Lawn Mowing.</p>
                <img src={mower} alt="mower" className="Services-div-img"/>
            </div>
            <div className="Services-div" >
                <h3 className="Services-div-h3">Trimming</h3>
                <p className="Services-div-p"> Weedwacking and Edging. </p>
                <img src={trimmer} alt="trimmer" className="Services-div-img"/>
            </div>
            <div className="Services-div">
                <h3 className="Services-div-h3">Pruning</h3>
                <p className="Services-div-p"> Trimming Trees and Bushes.  </p>
                <img src={shears} alt="shears" className="Services-div-img"/>
            </div>
        </div>
        </div>
    )
}
