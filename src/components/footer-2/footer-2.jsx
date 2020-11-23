import React from 'react';

import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as FB} from '../../assets/images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../../assets/images/icon-twitter.svg';
import {ReactComponent as Pintrest} from '../../assets/images/icon-pinterest.svg';
import {ReactComponent as Insta} from '../../assets/images/icon-instagram.svg';


import './footer-2.style.scss'

const Footer2=()=>(
<div className="footer-2">
<div className="branding-container"><Logo className="logo"/></div>
<div className="features">
    <div className="feature-heading">Features</div>
    <a className="link">Link Shortening</a>
    <a className="link">Branded Links</a>
    <a className="link">Analytics</a>
</div>
<div className="resources">
    <div className="feature-heading">Resources</div>
    <a className="link">Blog</a>
    <a className="link">Developers</a>
    <a className="link">Support</a>
</div>
<div className="contact">
    <div className="feature-heading">Contact</div>
    <a className="link">About</a>
    <a className="link">Our Team</a>
    <a className="link">Careers</a>
    <a className="link">Contact</a>
</div>
<div className="social">
<div className="icon"><FB/></div>
<div className="icon"><Twitter/></div>
<div className="icon"><Pintrest/></div>
<div className="icon"><Insta/></div>
</div>
<div className="contributor">Done by Rajesh Venkatesan</div>
</div>

);

export default Footer2;