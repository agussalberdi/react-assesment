import React, { Component } from 'react';

import List from './list';
import Filters from './filters';

class App extends Component{

  render() {
    return(
      <div id="app">
        <div className="wrapper">     
          <h2>Welcome to Brastlewark Hero!!</h2> 
          <Filters></Filters>
          <List></List>
        </div>
      </div>
    );
  }
}

export default App;