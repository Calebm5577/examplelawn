import React from 'react'
import './Body.scss'
import { Services } from '../Services/Services'

export const Body = () => {
    return (
        <div className="Body">
            
            <div className="Body-div1">
                <p className="Body-div1-p">Clean, professional, lawn mowing, trimming, and pruning, done in the Jacksonville NC area</p>
            </div>

            <div className="Body-div2">
                <Services />
            </div>

        </div>
    )
}
