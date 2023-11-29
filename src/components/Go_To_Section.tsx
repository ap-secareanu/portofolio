import React from 'react';

const Go_To_Section = (e: any) => {
  e.preventDefault();

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');

  if (hamburger?.classList.contains('is-active')) {
    hamburger.classList.remove('is-active');
    nav!.classList.remove('is-active');
    overlay!.style.display = 'none';
    document.body.style.overflow = 'scroll';
  }

  const about = document.getElementById("about");
  const exp = document.getElementById("exp");
  const edu = document.getElementById("edu");
  const contact = document.getElementById("contact");

  if (window.innerWidth > 1199) {
    if (e.target.className.includes('about')) {
      about?.scrollIntoView({ block: 'center' })
    } else if (e.target.className.includes('exp')) {
      exp?.scrollIntoView({ block: 'start' })
    } else if (e.target.className.includes('edu')) {
      edu?.scrollIntoView({ block: 'center' })
    } else if (e.target.className.includes('contact')) {
      contact?.scrollIntoView({ block: 'center' })
    }
  } else if (window.innerWidth <= 1199) {
    if (e.target.className.includes('about')) {
      about?.scrollIntoView({ block: 'start' })
    } else if (e.target.className.includes('exp')) {
      exp?.scrollIntoView({ block: 'start' })
    } else if (e.target.className.includes('edu')) {
      edu?.scrollIntoView({ block: 'start' })
    } else if (e.target.className.includes('contact')) {
      contact?.scrollIntoView({ block: 'start' })
    }
  }
}

export default Go_To_Section;