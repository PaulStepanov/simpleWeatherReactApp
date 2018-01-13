import React from 'react';
import { hot } from 'react-hot-loader';
import Routing from '../routing/Routing'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className='App'>
      <Routing/>
      </div>
    );
  }
}

export default App;
