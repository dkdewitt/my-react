import React from 'react';

import styles from './styles.scss';

export default function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} content={item} className={props.componentStyle} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
      <ul className={props.className || styles.item} >
        {content}
      </ul>
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
  className: React.PropTypes.string,
  componentStyle: React.PropTypes.string,
};