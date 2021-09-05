import React from 'react';

import Section from '../../../HOC/Section';

export const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Sobre </span>Vinicios
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Tempo de atuação na área de tecnologia: 2 ANOS
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i class="fas fa-user-alt"></i>
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>PERFIL</h5>
                  <p className='service-description'>
                  Meu nome é <b>Vinicios</b>, tenho 20 anos e moro em Umuarama, PR. 
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i class="fas fa-user-graduate"></i>
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>FORMAÇÃO</h5>
                  <p className='service-description'>
                  Sou formado como <b>Técnico em Informática pelo IFPR</b>, e atual dicente de <b>Sistemas para Internet
                na Faculdade UniAlfa</b>, em Umuarama PR.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i class="fas fa-briefcase"></i>
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>CARGO ATUAL</h5>
                  <p className='service-description'>
                  Atualmente ocupo o cargo de <b>Desenvolvedor Java & Angular</b> na <b>Virtual Super </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
