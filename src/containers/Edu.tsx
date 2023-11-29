import React from 'react';
import Section_heading from '../components/Section_heading';
import Item from '../components/Item';

const Edu = () => {
  return (
    <section id="edu">
      <div className='container'>
        <div className='row'>
          <Section_heading text={[<span>03.</span>, 'Education']} />
        </div>
        <div className='row'>
          <Item 
          text={[`Faculty of Informatics `, <a className='underline_animation' href="https://www.utm.ro/" target="_blank" rel="noreferrer"><span>@ Titu Maiorescu University</span></a>]}
          text_period={'Sep 2023 - Current'}
          details={`I am currently studying computer
          science at Titu Maiorescu
          University, learning Python, Java, Cybersecurity and much more.`} />
        </div>
        <div className='row'>
          <Item 
          text={[`Faculty of Foreign Languages `, <a className='underline_animation' href="https://unibuc.ro/" target="_blank" rel="noreferrer"><span>@ Univesity of Bucharest</span></a>]}
          text_period={'Sep 2018 - July 2021'}
          details={`Studied Polish and English
          languages.`} />
        </div>
      </div>
    </section>
  );
};

export default Edu;