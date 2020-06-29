import React, { Component } from 'react';
import './App.css';
import Smurfs from './SmurfsData';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">SMURFS! 2.0 W/ Redux</h1>
          <SmurfForm />
        </header>
     
        <div className="Flex-Container">
          {this.props.gettingSmurfs ? (
            <h3>Loading Smurfs...</h3>
          ) : (
            <Smurfs  />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return {
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    gettingSmurfs: smurfsReducer.gettingSmurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);