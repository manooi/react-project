import React from 'react';

const getYear = new Date().getFullYear();

function Footer() {
  return <footer><p>Copyright © {getYear} Sirawit Mahanin</p></footer>; 
}

export default Footer;