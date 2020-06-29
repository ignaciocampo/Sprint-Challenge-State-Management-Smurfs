import React, { Component } from 'react';
import './App.css';
import SmurfsData from './SmurfsData';
import SmurfForm from './SmurfInput';
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
          <h1 className="App-Title">SMURFS!</h1>
          <SmurfForm />
        </header>
     
        <div className="Flex-Container">
          {this.props.gettingSmurfs ? (
            <h3>Loading Smurfs...</h3>
          ) : (
            <SmurfsData  />
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