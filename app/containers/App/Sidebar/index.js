import React from 'react';
import _ from 'lodash';

import styles from './styles.scss';
import A from 'components/A';
import List from 'components/List';
import ListItem from 'components/ListItem';


function Sidebar(props) {

    let x = props.ClassName;
    const navItems = 
      [
        {route: "/sample", text: "Sample"},
      ];

    let items = navItems.map((item) => {
      return (
        <A href={item.route}>{item.text}</A> 
        );
    });

    return (
      <div className={x} >
        <div className='title'>
          <input type="text" placeholder="Search"/>
        </div>
        <div >
          <List items={items} component={ListItem} componentStyle={"sidebar-item"}  />
        </div>
      </div>
    );  
  }

Sidebar.propTypes = {
  ClassName: React.PropTypes.string.isRequired,
};

export default Sidebar;