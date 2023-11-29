import React from 'react';
import BigHeading from '../components/Big_heading';
import Paragraph from '../components/Paragraph';
import Big_button from '../components/Big_button';

const Contact = () => {
  return (
    <section id="contact">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='pre_title'>04. What's next?</h2>
            <BigHeading class="title_faded" text="Get in touch!" />
            <Paragraph text={['In summary, I bring a comprehensive skill set and a results-driven attitude to Full-Stack Development.', <br/>, 'My passion for creating impactful and scalable solutions, ', <br/>, 'coupled with my commitment to ongoing learning, ', <br/>, 'positions me as a valuable asset in any development team.']} />
          </div>
          <div className='row'>
            <div className='col-md-12'>
            <Big_button target="_blank" href="https://www.linkedin.com/in/secareanu-alexandru-bb97921b8" text={'Say "Hello"'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;