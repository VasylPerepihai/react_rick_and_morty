import React from 'react';
import './App.css';
import { Characters } from './Component/Characters/Characters_list/Characters';
import { Episodes } from './Component/Episodes/Episodes';

class App extends React.Component {
  state = {
    selectedTab: 'Characters',
  }

  render () {
    const {selectedTab} = this.state;

    return (
      <>
        <button onClick={() => this.setState({selectedTab: 'Characters'})}>
          Characters
        </button>
        <button onClick={() => this.setState({selectedTab: 'Episodes'})}>
          Episodes
        </button>
        {selectedTab === 'Characters' ? <Characters /> : <Episodes />}
        
        </>
    );
  }
  
}

export default App;
