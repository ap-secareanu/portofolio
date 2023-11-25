import React from 'react';
import Section_heading from '../components/Section_heading';
import Paragraph from '../components/Paragraph';
import Portrait from '../images/1645859570360.jpg';

const About = (props: any) => {
  return (
    <section id="about">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Section_heading text={[<span>01.</span>, 'About']} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-7'>
            <Paragraph class="" text={
              `Hello! My name is Alex and I am a passionate Full-Stack Developer with a journey that began three years ago when I delved into the captivating world of coding. Over the years, I've cultivated a deep appreciation for the art of development, and my focus has revolved around crafting dynamic and engaging web applications.`
            } />
            <Paragraph class="" text={
              `Starting from the basics, I quickly immersed myself in the intricacies of both front-end and back-end technologies. Today, I proudly identify as a Full-Stack Developer, equipped with a solid understanding of HTML, CSS, and JavaScript for building seamless user interfaces. On the server side, I've honed my skills in languages like Node.js, utilizing frameworks such as Express to bring ideas to life.`
            } />
            <Paragraph class="" text={
              `Languages and technologies I use:`
            } />
            <div className="tech_stack">
              <table>
                <tbody><tr>
                  <td><i className="bi bi-code-slash icon"></i><p>TypeScript</p></td>
                  <td><i className="bi bi-code-slash icon"></i><p>PostgreSQL</p></td>
                </tr>
                  <tr>
                    <td><i className="bi bi-code-slash icon"></i><p>ReactJS</p></td>
                    <td><i className="bi bi-code-slash icon"></i><p>ExpressJS/NodeJS</p></td>
                  </tr>
                  <tr>
                    <td><i className="bi bi-code-slash icon"></i><p>PHP</p></td>
                    <td><i className="bi bi-code-slash icon"></i><p>HTML/CSS</p></td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='image_container'>
              <img src={Portrait} alt="Secareanu Alexandru profile picture." className="portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;