import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='developer-area'>
        <p>Developed By:</p>
        <p className='developer'><a href="https://github.com/userigorgithub" target='_blank'>Igor Decess</a></p>
      </div>
      <div className='school-area'>
        <p>Project By:</p>
        <p className='school'><a href="https://turing.edu/" target='_blank'>Turing School of Software and Design</a></p>
      </div>
      <div className='resources-area'>
        <p>API By:</p>
        <p className='resources'><a href="https://www.mmobomb.com/api" target='_blank'>MMOBomb</a></p>
      </div>
    </div>
  )
}

export default Footer;
