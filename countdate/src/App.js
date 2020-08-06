import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cntdate from './components/Ctndate'

class App extends Component{
  
  render(){
  
    return (
      <div className="APP">
        {/* 끝나는날짜 입력 */}
      <Cntdate date={"10 30, 2020 06:00:00"}></Cntdate>
      </div>
      
      );
  }
  
}

export default App;
