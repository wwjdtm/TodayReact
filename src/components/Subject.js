import React, { Component } from 'react';

class Subject extends Component{ 
    render(){
      return(
        <header>
          <h1>{this.props.bigtitle}</h1>
          {this.props.smalltitle}
        </header>
      );
    }
  }

export default Subject;