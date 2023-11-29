import React from 'react';

let date = new Date().getFullYear();

const Footer = (props:any) => {
  return (
    <footer><a href="https://github.com/ap-secareanu" target="_blank" rel="noreferrer">{'Built by Secareanu Alexandru - © ' + date  }</a></footer>
  );
};

export default Footer