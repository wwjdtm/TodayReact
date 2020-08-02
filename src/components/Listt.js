import React, { Component } from 'react';

class Listt extends Component{
    render(){
      //this.props.data 를 가짐
      var lists = [];
      var data = this.props.data;
      var i =0;
      while(i<data.length){
        lists.push(<li key={data[i].id}><a href={"/contents/"+data[i].id}>{data[i].title}</a></li>) //콘솔에러:리스트는 key라는 props 가져야함
        i+=1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

export default Listt;
