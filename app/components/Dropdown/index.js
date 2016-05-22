import React from 'react';
import _ from 'lodash';

//import styles from './styles.scss';

export default function Dropdown(props) {

  let opts = _.map(props.options, (option, index) => {
      return <option key={index} value={index}>{option.label}</option>;
  });

  return (
      <select
        className={props.className || "select-default"}
        //defaultValue={this.findInitialIndex()}
        //onChange={this.handleChange}
      >
        {opts}
      </select>
  );
}

Dropdown.propTypes = {
    initialValue: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ]),
    options: React.PropTypes.array,
    onChange: React.PropTypes.func,
    className: React.PropTypes.string,
};