import React from 'react';

import Section from '../../../HOC/Section';


const Blog = () => {
  return (
    <Section id='blog'>
<div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
           CONTATO
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          ficou com alguma dúvida? entre em contato comigo! será um prazer te atende-lo =D
          <br></br>
          <p>Lembrando meu Github e meu Linkedin está em links logo acima do cabeçalho ;)</p>
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Nome'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Seu email'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control rounded-0'
                    rows='5'
                    placeholder='Sua mensagem'
                  />
                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto'>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
