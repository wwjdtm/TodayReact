import React, { Component } from 'react';
import Subject from "./components/Subject"
import Listt from "./components/Listt"
import './App.css';

class App extends Component {
  constructor(props){ //컴포넌트 실행하는 render보다 먼저 실행되면서, 컴포넌트초기화담당
    super(props);
    this.state={//state값 초기화, 서브젝트값을 스테이트화시킴
      mode : 'read',
      first:{bigtitle:'Hello' , smalltitle:"react is very nice!!"},
      welcome:{title:'welcome', desc:'hello! react@@@!!!'},
      second:{bigtitle:'oh' , smalltitle:"i agree that!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JS', desc:'JS is for interactive'}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode ==='read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;

    }

    return (
      <div className="App">
        {/* <Subject bigtitle={this.state.first.bigtitle}
                smalltitle={this.state.first.smalltitle}></Subject> */}

        <h1><a href="/" onClick={function(e){
          console.log(e);
          e.preventDefault();
         // this.state.mode='welcome';
         this.setState({mode:'welcome'});

        }.bind(this)}> {this.state.first.bigtitle}</a> </h1>
          {this.state.first.smalltitle}
        <Listt data ={this.state.contents}></Listt>

        <Subject bigtitle={_title}
                smalltitle={_desc}></Subject>

      </div>
    );
  }
}

export default App;
