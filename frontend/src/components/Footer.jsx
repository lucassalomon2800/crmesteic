import React, { useEffect, useState } from 'react';

function Footer() {
  const [footerData, setFooterData] = useState({ text: '', links: [] });

  useEffect(() => {
    fetch('/api/account')
      .then(response => response.json())
      .then(data => setFooterData(data));
  }, []);

  return (
    <footer className='footer'>
      <p>Righ reserved Acatas S.A.S</p>
      <ul>
      
      </ul>
    </footer>
  );
}

export default Footer;

