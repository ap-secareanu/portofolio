import React from 'react';
import BigHeading from '../components/Big_heading';
import Paragraph from '../components/Paragraph';
import Big_button from '../components/Big_button';

const Intro = (props:any) => {

  const goToSection = (e:any) => {
    e.preventDefault();
  
    const about = document.getElementById("about");
  
    if(window.innerWidth > 1199) {
      if(e.target.className.includes('about')) {
        about?.scrollIntoView({block: 'center'})
      }
    } else if(window.innerWidth <= 1199) {
      if(e.target.className.includes('about')) {
        about?.scrollIntoView({block: 'start'})
      }
    } 
  }

  return (
    <section id='intro'>
      <div className='container'>
        <div className='col-md-12'>
          <h3 className='pre_title'>Hi, my name is</h3>
          <div className='animation_container'>
            <h1 className="big_heading title_grey typed"><span>A</span>lexandru <span>S</span>ecareanu</h1>
          </div>
          <br />
          <div className='animation_container'>
            <BigHeading class="title_faded typed_delayed" text={["And I am a Full-Stack Developer"]} />
          </div>
          <div className='col-md-8'>
            <Paragraph class={'intro_text'} text={[
              `I am a highly motivated and versatile `, <span>Full-Stack Developer</span> ,` with
              a passion for crafting robust and efficient solutions. 
              With a strong foundation in both `, <span>Front-end</span> ,` and `, <span>Back-end</span> ,` technologies, 
              I thrive in dynamic environments where I can leverage my skills 
              to create innovative and user-friendly applications.
              `]} />
              <Big_button onClick={goToSection} class={'to_about'} text={'Check out some stuff about me!'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;