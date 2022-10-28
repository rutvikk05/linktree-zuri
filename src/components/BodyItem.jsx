import React from 'react';
import '../styles/BodyItem.css';

const BodyItem = ({ url = '#', title = '', targetBlank = false }) => {
  return (
    <li>
      {targetBlank ? (
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          {title}
        </a>
      ) : (
        <a href={url} className='link'>
          {title}
        </a>
      )}
    </li>
  );
};

export default BodyItem;
