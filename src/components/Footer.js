import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer
    className="bg-light p-3 text-center"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'end',
    }}
  >
    <FontAwesomeIcon icon="piggy-bank" size="2x" style={{margin:"10px"}} color="Dodgerblue"/>
    <p
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <FontAwesomeIcon
        icon="copyright"
        size="1x"
        style={{ marginRight: '5px' }}
      />

      <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
        2022 <span style={{ fontWeight: 'bold' }}>Ir0n Bank</span>. All Rights
        Reserved.
      </span>
    </p>
  </footer>
);

export default Footer;
