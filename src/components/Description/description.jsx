import React from 'react'
import './description.style.scss';

import workingLogo from '../../assets/images/illustration-working.svg'

const Description=()=>{
return(
    <div className="container-main">
    <div className="box-1">
    <h1>More than just</h1>
    <h1>shorter links</h1>
    <p>Build your brand's recognition and get detailed</p>
    <p>insights on how your links are performing.</p>
    </div>
    <div className="box-2">
    <img src={workingLogo}/>
    </div>
    </div>
)

};

export default Description;