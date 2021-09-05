import React from 'react';

import { Link } from 'react-router-dom'
const link = props => {
  return (
    <Link
      className={props.classes}
      style={{ cursor: 'pointer' }}
      activeClass='active'
      to={props.to}
      spy={true}
      smooth={true}
      offset={props.offset || -45}
      duration={500}
    >
      {props.children}
    </Link>
  );
};

export default link;
