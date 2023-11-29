import React from 'react';

const Hamburger_Menu = () => {

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');

  if (hamburger!.classList.contains('is-active')) {
    hamburger!.classList.remove('is-active');
    nav!.classList.remove('is-active');
    overlay!.style.display = 'none';
    document.body.style.overflow = 'scroll';
  } else {
    hamburger!.classList.add('is-active');
    nav!.classList.add('is-active');
    overlay!.style.display = 'inline-block';
    document.body.style.overflow = 'hidden';
  };
};

export default Hamburger_Menu;