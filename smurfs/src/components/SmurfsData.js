import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


class SmurfsCreator extends Component {
  consoler = () =>{
    console.log(this.props)
  }
  render() {
    return (
      <div className="Smurf-Container">
        
          {this.props.smurfs.map(smurf => {
            return (
              <p>
                Name: {smurf.name} <br/>
                Age: {smurf.age} <br/>
                Height: {smurf.height}
              </p>
            );
          })}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfsReducer.smurfs,
  };
};

export default connect(mapStateToProps,  {})
(SmurfsCreator);