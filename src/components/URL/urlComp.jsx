import React from 'react';


import UrlItem from '../urlItem/urlItem';
import DetailComp from '../details/details';

import './urlComp.style.scss'

import random from 'random-key-generator';
var validator = require('validator');
var request = require('request');



class UrlComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:[],
            }
        
         
} 

   

    onSubmit(){
        const searchboxContainer=document.querySelector('.searchbox');
        const errorText=document.querySelector('.error-text');
        let url=searchboxContainer.value;

        if(validator.isURL(url)){
            searchboxContainer.classList.remove('error');
            errorText.classList.remove('hidden-text');
            console.log(true);
            if(!url.includes("https://"))
            {
                if(url.includes("http://"))
                    url=url.replace("http://","https://");
                else
                    url=`https://${url}`;
            }

            
            let linkRequest = {
            destination: url,
            domain: { fullName: "rebrand.ly" }
                                }
            let requestHeaders = {
                    "Content-Type": "application/json",
                    "apikey": process.env.API_KEY,} //Put your api key here

            request({
                    uri: "https://api.rebrandly.com/v1/links",
                    method: "POST",
                    body: JSON.stringify(linkRequest),
                    headers: requestHeaders}, 
                    (err, response, body) => {
                            let link = JSON.parse(body);
                             console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
                            this.setState({url:[...this.state.url,[link.destination,link.shortUrl]]});
                            // this.setState({urlShort:[...this.state.urlShort,link.shortUrl]})
                            console.log(this.state);
                            });

                            
        }
            
        else{
            console.log('error');
            searchboxContainer.classList.add('error');
            errorText.classList.add('hidden-text');
        }
    }

    
    
    render(){
        
    return(
<div>
<div className="container-2">
    <div className ="url-search-container">
        <div className="search-container">
            <div className="searchbox-container">
                <input type="input" placeholder="Shorten a link here" className="searchbox" />
            </div>
            <p className="error-text">Please add a link</p>
        <button type="submit" className="search-button" onClick={()=>this.onSubmit()}>Shorten it!</button>
        
        </div>
        
    </div>
    {
        
        this.state.url.map((element,i) => {
            return(<UrlItem urlLong={element[0]} urlShort={element[1]} key={i} id={i} />)
        }
            )
        
    }
    <DetailComp/>
</div>
</div>
    )
    }
}

export default UrlComp;
