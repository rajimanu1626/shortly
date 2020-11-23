import React from 'react'

import './card.style.scss';


const Card=({logo,content,heading})=>(
    <div className="card">
    <div className="logo">{logo}</div>
    <div className="text-container">
    <h1>{heading}</h1>
    <p>{content}</p>
    </div>
    </div>
);

export default Card;