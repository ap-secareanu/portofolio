import React from 'react';

const Paragraph = (props:any) => {
  return (
    <p className={props.class}>{props.text}</p>
  );
};

export default Paragraph;