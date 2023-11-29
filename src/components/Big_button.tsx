import React from 'react';

const Big_button = (props:any) => {
  return (
    <a target={props.target} onClick={props.onClick} href={props.href} className={'big_button ' + props.class} rel="noreferrer">{props.text}</a>
  );
};

export default Big_button;