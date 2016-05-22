/**
* React component for anchor
**/

import React, { PropTypes } from 'react';
import styles from './styles.scss';

export default function A(props) {
  return (
    <a
      className={ props.className || styles.link }
      { ...props }
    />
  );
}

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

