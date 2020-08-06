import React, {Component} from 'react';



class Ctndate extends Component{
  
  render(){
   
    var d_day=[];
    var d,h,m,s;
    var date = this.props.date;
    var countDownDate = new Date(date).getTime(); 
    var now;
      // 오늘날짜
      now = new Date().getTime(); 
      console.log(now);
      var distance = countDownDate - now;
      console.log(distance);
      d = Math.floor(distance / (1000 * 60 * 60 * 24)); 
      h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
      m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
      s = Math.floor((distance % (1000 * 60)) / 1000); 
      
      d_day.push(d,"일");
      d_day.push(h,"시간");
      d_day.push(m,"분");
      d_day.push(s,"초 남았습니다.");

    return(
     <div>
       {d_day}
       
      </div>

    );

  }
}

export default Ctndate;
