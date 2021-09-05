import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/code.gif';
import Link from '../../UI/Link/Link';

export const Home = () => {
  return (
    <Section id='home'>

      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>BEM VINDO </h1>
            <h2 className='sub-title mb-4'>
            {/* Olá. meu nome é Vinicios, tenho 20 anos e moro em Umuarama, PR.  */}
            Conheça mais sobre mim neste portifólio
            </h2>
            <Link to={'/sobre'} classes='btn btn-primary rounded-0 mr-2'>
              Sobre
            </Link>
            <Link to={'/contato'} classes='btn btn-light text-dark rounded-0'>
              Contato
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
