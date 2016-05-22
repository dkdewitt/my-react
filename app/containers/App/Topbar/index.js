import React from 'react';
import _ from 'lodash';
import styles from './styles.scss';

import A from 'components/A';
import List from 'components/List';
import ListItem from 'components/ListItem';

require('font-awesome/scss/font-awesome.scss');

export default function Topbar(props) {

    const navItems = 
      [
        {route: "/", text: "Home"},
        {route: "about", text: "About"},
      ];

    let items = navItems.map((item) => {
      return (
        <A href={item.route}>{item.text}</A> 
      );
    });

    return (
      <div className="topbar">       
        <div className="topbar-title">
          <span>My-React</span>
            <a href="javascript:void(0);" onClick={()=> props.showHideSidebar()}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <div className="topbar-nav">
            <List 
              items={items} 
              component={ListItem} 
              componentStyle={"nav-link"} 
              className={"topbar-menu show"} 
            />
          </div>
      </div>
  );  
}