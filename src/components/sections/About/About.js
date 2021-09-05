import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpeg';

export const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            INÍCIO
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img className='image' src={aboutImage} alt='Eu' />
              </div>
            </div>
           
            <div className='col-md-12 col-lg-6'>
             
              <div className='sobre-p' >
            
                <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Vinicios </span>Santana
          </h3>
          <h2 className=' mr-auto ml-auto'>
          Atualmente <b>Desenvolvedor Java & Angular</b> na <b>Virtual Super </b>
          </h2>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
