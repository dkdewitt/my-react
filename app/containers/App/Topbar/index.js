import React from 'react';

import styles from './styles.scss';

export default class Topbar extends React.Component {

  render() {
    return (
<header className="centered-navigation" role="banner">
  <div className="centered-navigation-wrapper">
    <a href="javascript:void(0)" className="mobile-logo">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/49db8c0f2f8066c2c3a275781503fe3303a1a9fc/source/images/placeholder.png" alt="Logo image" />
    </a>
    <a href="javascript:void(0)" id="js-centered-navigation-mobile-menu" className="centered-navigation-mobile-menu">MENU</a>
    <nav role="navigation">
      <ul id="js-centered-navigation-menu" className="centered-navigation-menu show">
        <li className="nav-link"><a href="javascript:void(0)">Products</a></li>
        <li className="nav-link"><a href="javascript:void(0)">About Us</a></li>
        <li className="nav-link"><a href="javascript:void(0)">Contact</a></li>
        <li className="nav-link logo">
          <a href="javascript:void(0)" className="logo">
            <img src="https://raw.githubusercontent.com/thoughtbot/refills/49db8c0f2f8066c2c3a275781503fe3303a1a9fc/source/images/placeholder.png" alt="Logo image" />
          </a>
        </li>
        <li className="nav-link"><a href="javascript:void(0)">Testimonials</a></li>
        <li id="js-centered-more" className="nav-link more"><a href="javascript:void(0)">More</a>
          <ul className="submenu">
            <li><a href="javascript:void(0)">Submenu Item</a></li>
            <li><a href="javascript:void(0)">Another Item</a></li>
            <li className="more"><a href="javascript:void(0)">Item with submenu</a>
              <ul className="submenu fly-out-right">
                <li><a href="javascript:void(0)">Sub-submenu Item</a></li>
                <li><a href="javascript:void(0)">Another Item</a></li>
              </ul>
            </li>
            <li className="more"><a href="javascript:void(0)">Another submenu</a>
              <ul className="submenu fly-out-right">
                <li><a href="javascript:void(0)">Sub-submenu</a></li>
                <li><a href="javascript:void(0)">An Item</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-link"><a href="javascript:void(0)">Sign up</a></li>
      </ul>
    </nav>
  </div>
</header>
    )  
  }
}