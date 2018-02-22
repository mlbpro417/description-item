import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div></div>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
