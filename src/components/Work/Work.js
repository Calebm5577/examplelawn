import React from 'react'
import Data from './Work.json'
import './Work.scss'

export const Work = () => {
    return (
        <div className="Work" id="Work">
            <h1>Recent work</h1>
            <div className="Work-map">
                {Data.map(work => {
                    return (
                        <div className="Work-map-div1">
                            <img src={work.img} alt="" className="Work-map-div1-img" />
                            <h3 className="Work-map-div1-h3">{work.task}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
