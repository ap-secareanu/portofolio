import React from 'react';

const BigHeading = (props:any) => {
  return (
    <h2 className={`big_heading ${props.class}`}>{props.text}</h2>
  );
};

export default BigHeading;