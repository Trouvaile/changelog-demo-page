import React from 'react'
import './Body.css'
import Content from './Body/Content';
import Version from './Body/Version';


function Body() {
    return (
        <div className="body-content grid-container">
            <div className="grid-item left">
                <Version />
            </div>
            
            <div className="gird-item right">
                <Content />
            </div>

        </div>
    )
}

export default Body