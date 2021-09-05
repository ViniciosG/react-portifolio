import React from 'react';

const topBar = () => {
  return (
    
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex '>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='https://github.com/ViniciosG' target="_blank" className='text-light'>
                <i className='fab fa-github' />
                <small> Meu GitHub </small>
               
              </a>
              {/* <i class="fas fa-grip-lines-vertical"></i> */}
              <h5>||| </h5>
            </div>

            <div className='social-media d-flex align-item-center'>
              <a href='https://www.linkedin.com/in/vinicios-santana/' target="_blank" className='text-light'>
                <i className='fab fa-linkedin' />
                <small> Linkedin </small>
              </a>
            </div>
            
            </div>
     
       
   
        </div>
        
      </div>
    </div>
  );
};

export default topBar;
