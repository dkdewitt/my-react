import React from 'react';
import _ from 'lodash';
import styles from './styles.scss';
import { connect } from 'react-redux';
import A from 'components/A';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Dropdown from 'components/Dropdown';
import Box from 'components/Box';
import { bindActionCreators } from 'redux'
import  SampleActions  from './actions';

class Sample extends React.Component {

  componentDidMount()
  {
    this.props.dispatch(this.props.actions.fetchAllItems());
  }
  render() {
    const { items, actions } = this.props;

    return(
      <div>
        Sample Stub
          <div>
            <input type="text" id="new" />
            <a href="javascript: void 0;" onClick={actions.fetchAllItems} >New</a>
            </div>
            <div>
            {items}
          </div>
      </div>
    );
  }
}

export default connect(state => ({items: state.sample.items, actions: SampleActions})) (Sample)