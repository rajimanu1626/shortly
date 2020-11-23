import React from 'react'

import './urlItem.style.scss';

class UrlItem extends React.Component{

copyFn(e){
    const i=e.target.id;
const copyText=document.querySelector(`.s-url${i}`).innerHTML;
// // copyText.select();
// // document.execCommand("copy")
navigator.clipboard.writeText(copyText);
const change=document.querySelector(`.copy-s-url${i}`);
change.innerHTML="Copied!";

}

render(){
    return(    
    <div className="url-item-container">
    <div className="url-link">
    <div className="long-url">{this.props.urlLong}</div>
    <div className={`short-url s-url${this.props.id}`} id={this.props.id}>{this.props.urlShort}</div>
    </div>
    <div className={`url-copy-button copy-s-url${this.props.id}`}  onClick={this.copyFn} id={this.props.id}>copy</div>
    </div>
    )
    }
};

export default UrlItem;