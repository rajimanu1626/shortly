import React from 'react'

import './cardsComp.style.scss';

import Card from '../cards/card';

import {ReactComponent as Logo1} from '../../assets/images/icon-brand-recognition.svg';
import {ReactComponent as Logo2} from '../../assets/images/icon-detailed-records.svg';
import {ReactComponent as Logo3} from '../../assets/images/icon-fully-customizable.svg';


class Cards extends React.Component{

constructor(props){
    super(props);
    this.state={
    content1:{
        heading:"Brand Recognition",
        item:"Boost your brands recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
    },
    content2:{
        heading:"Detailed Records",
        item:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    content3:{
        heading:"Fully Customizable",
        item:"Improve brand awareness and content discoverability through customisable links, supercharging audience engagement."
    }
    
}
}


    render(){
    return(
    <div className="detail-container-2">
    <div className ="card-container"><Card heading={this.state.content1.heading} content={this.state.content1.item} logo={<Logo1/>}/></div>
    <div className ="card-container"><Card heading={this.state.content2.heading} content={this.state.content2.item}logo={<Logo2/>}/></div>
    <div className ="card-container"><Card heading={this.state.content3.heading} content={this.state.content3.item} logo={<Logo3/>}/></div>
    <div className="line"></div>
    </div>
)
}
}

export default Cards;