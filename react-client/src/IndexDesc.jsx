import React from 'react';
import MainDesc from './MainDesc';
import fetch from '../api/fetch';

class IndexDesc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(0, (dataReceived) => {
      const dataReceivedArr = [];
      dataReceivedArr.push(dataReceived);
      this.setState({ data: dataReceivedArr });
    });
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
