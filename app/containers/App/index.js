/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import MainHeader from './MainHeader';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "showHideSidebarCls": classNames("sidebar",{"hide": false}),
      "mainCls": classNames("main",{ "no-sidebar": false}),
    };
      
    this.displaySideBar = true;
    this.showHideSidebar = this.showHideSidebar.bind(this);
  }


  showHideSidebar() {console.log(this.showHideSidebarCls);
    
    this.setState({
      "showHideSidebarCls": classNames("sidebar",{"hide": this.displaySideBar}),
      "mainCls": classNames("main", {"no-sidebar": this.displaySideBar})
    });
    this.displaySideBar = !this.displaySideBar;
  }

  render(){
    
  return (
    <div >
      <Topbar showHideSidebar={this.showHideSidebar} /> 
      <div className="main-container">
        <Sidebar ClassName={this.state.showHideSidebarCls} />
        <div className={this.state.mainCls}>
        <MainHeader />
        <div className="content-container">
        {this.props.children}
        </div>
        </div>
      </div>
    </div>
  );
}
}


export default App;
