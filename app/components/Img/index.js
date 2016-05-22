import React, { PropTypes } from 'react';

export default function Img(props) {
  return (
    <img className={props.className} src={props.src} alt={props.alt} />
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
