import React from 'react';
import './Footer.css';
import Button  from './Button';
import { Link } from 'react-router-dom';

const Footer=()=> {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h6>Copyright © 2022 T-JAWs. All Rights Reserved</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;