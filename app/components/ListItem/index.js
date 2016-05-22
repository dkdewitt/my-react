import React from 'react';

import styles from './styles.scss';

export default function ListItem(props) {
  return (
    <li className={props.className || styles.item}>
        {props.content}
    </li>
  );
}

ListItem.propTypes = {
  className: React.PropTypes.string,
  content: React.PropTypes.any,
};