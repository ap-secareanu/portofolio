import React from 'react';

const Item = (props:any) => {
  return (
    <div className='col-md-12 item'>
      <h3 className='item_title'><i className="bi bi-caret-right-fill icon"></i>{props.text}</h3>
      <p className='period'>{props.text_period}</p>
      <p className='item_text'>{props.details}</p>
    </div>
  );
};

export default Item;