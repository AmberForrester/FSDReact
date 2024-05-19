import React from 'react'
import { Link } from 'react-router-dom';

const Footer = (props) => {


  return (
    <footer>
      <p>
        &copy;{props.year} My Job Board. All rights reserved. | <Link to="/Contact">Contact Us</Link> | <Link to="/Terms">Terms</Link> | <Link to="/Privacy">Privacy</Link> 
      </p>
    </footer>
  );
};

export default Footer;