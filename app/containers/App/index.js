/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styles from './styles.scss';
import Topbar from './Topbar';

function App(props) {
  return (
    <div >
      <Topbar />
      
    </div>
  );
}



export default App;
