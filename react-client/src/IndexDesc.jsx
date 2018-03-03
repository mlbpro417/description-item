import React from 'react';
import MainDesc from './MainDesc';
import sampleData from '../sampleData';
import fetch from '../api/fetch'

class IndexDesc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData,
    };
  }

componentDidMount() {
}

  render() {
    return (
      <div id="main_app">
        {this.state.data.map(x => <MainDesc dataDesc={x} key={x.id} />)}
      </div>
    );
  }
}

export default IndexDesc;
