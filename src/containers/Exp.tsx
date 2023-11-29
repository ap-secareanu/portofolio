import React from 'react';
import Section_heading from '../components/Section_heading';
import Item from '../components/Item';

const Exp = () => {
  return (
    <section id='exp'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Section_heading text={[<span>02.</span>, 'Experience']} />
          </div>
        </div>
        <div className='row'>
          <Item
            text_period={'Jan 2023 - Current'}
            text={['Web Developer ',
              <a className='underline_animation' href="https://digitalstar.ro" target="_blank" rel='noreferrer'><span>@ Digital Star</span></a>]}
            details={[`For the past two years, I've been developing and maintaining websites for `, <span>Digital Star</span>, ` handling `, <span>Front-End</span>, ` and `, <span>Back-End</span>, ` development using HTML/CSS, TypeScript and PHP, but also CSS preprocessors such as SASS.`]} />
          <Item
            text_period={'March 2021 - Current'}
            text={['Personal skill development ']}
            details={[`Since I started learning Web Development, I’ve been
          constantly learning new technologies, developing small
          projects to further develop and perfect my technical
          skills. Some of those skills are:`,
              <ul>
                <li>TypeScript</li>
                <li>Back-End development with NodeJS and ExpressJS</li>
                <li>Databases with PostgreSQL</li>
                <li>Project optimization with Webpack</li>
              </ul>]} />
          <Item
            text_period={'July 2019 - March 2021'}
            text={['Technical Support Agent ',
              <a className='underline_animation' href="https://romania.cgsinc.com/" target="_blank" rel='noreferrer'><span>@ CGS Romania</span></a>]}
            details={[`In this company, I was assisting Sprint U.S. customers
          with technical related issues such as lack of data.
          After 6 months, I was promoted to `, <span>Technical Support
                Escalations Agent</span>, `. On this related role, I was
          assisting my colleagues with clients by providing
          necessary information to solve the issue as perfect as
          possible.`]} />
          
          <Item
            text_period={'March 2018 - July 2018'}
            text={['Quality Assurance Agent ',
              <a className='underline_animation' href="https://www.ubisoft.com/en-us/company/careers/locations/bucharest" target="_blank" rel='noreferrer'><span>@ Ubisoft Romania</span></a>]}
            details={[`At this company, I was testing various builds for
          Ubisoft’s in-development games and patches for already
          launched games and reporting found bugs and issues back
          to the development team.`]} />

        </div>

      </div>
    </section>
  );
};

export default Exp;