import React from 'react';
import BigHeading from '../components/Big_heading';
import Paragraph from '../components/Paragraph';

const Intro = () => {
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;