import React from 'react';

import Section from '../../../HOC/Section';

import blogImage1 from '../../../assets/img/blog1.jpg';
import blogImage2 from '../../../assets/img/api-icon-api.png';
import blogImage3 from '../../../assets/img/blog3.jpg';

const Blog = () => {
  return (
    <Section id='blog'>
      <div className='container pt-2 pb-5 div'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            PROJETOS
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Projetos desenvolvidos ou em fase de desenvolvimento por mim!
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage1} className='card-img-top' alt='Blog 1' />
                <div className='card-body'>
                  <h5 className='card-title'>Hackathon!</h5>
                  <p className='card-text'>
                    Sistema para gerenciar uma concessionára de carros.
                  </p>
                  <a href='https://github.com/ViniciosG/hackathon' target="_blank" className='btn btn-sm btn-primary'>
                  <i class="far fa-eye"></i>  Visualizar
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage2} className='card-img-top' alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>API Carros</h5>
                  <p className='card-text'>
                    Web Service desenvolvido em Spring Boot, para uma fabricante de carros.

                  </p>
                  <a href='https://github.com/ViniciosG/bootcamp-api-spring' target="_blank" className='btn btn-sm btn-primary'>
                  <i class="far fa-eye"></i>  Visualizar
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage3} className='card-img-top' alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>Website Institucional Hospital</h5>
                  <p className='card-text'>
                    Website para o Instituto Nossa Senhora em Umuarama... <b>EM ANDAMENTO</b>
                  </p>
                  <a href='https://www.institutonsa.com.br' target="_blank" className='btn btn-sm btn-primary'>
                  <i class="far fa-eye"></i>  Visualizar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
