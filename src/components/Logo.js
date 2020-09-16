import React from 'react';
import LogoImage from './Logo.svg';
import './Logo.css';

function Logo(){
  return(
  <>
    <a href="mailto:hi@ronny.digital" target="_blank" rel="noopener noreferrer"><img src={LogoImage} alt="Ronny" className="logo" />
    </a>
  </>
  );
}

export default Logo;
