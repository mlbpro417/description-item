import React from 'react';
import MainDesc from './MainDesc';
import sampleData from '../sampleData';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData,
    };
  }
  render() {
    return (
      <div>
        {this.state.data.map(x => <MainDesc dataDesc={x} />)}
      </div>
    );
  }
}

export default Index;
