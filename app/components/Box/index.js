import React from 'react';
import _ from 'lodash';

import styles from './styles.scss';

export default function Box(props) {

  return (
      <div className="box">
        <div className="box-title">
          <h3>{props.title}</h3>
        </div>

        <div className="box-content">
          {props.content}
        </div>
      </div>
  );
}

Box.propTypes = {

};