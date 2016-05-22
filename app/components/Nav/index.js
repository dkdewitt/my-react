

import React, {PropTypes} from 'react';
import styles from './styles.scss';

export default function Nav(props) {

  const ComponentToRender = props.component;
  let content = (<div></div>);
  if(props.items) {
    content = props.items.map((item, index) => (
    <ComponentToRender key={`item-${index}`} item={item} />
  ));
  } else {
    content = (<ComponentToRender />);
  }

  return (
    <nav>
      {content}
    </nav>
    );
}

Nav.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};