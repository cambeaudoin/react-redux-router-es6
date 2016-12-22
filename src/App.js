import React, { PropTypes } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
          {this.props.childres}
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
