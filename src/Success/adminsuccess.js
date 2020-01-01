import React from 'react';
import {Link} from 'react-router-dom';

var AdminSuccessPageCss = require('./adminsuccess.css')
export default class AdminSuccessPage extends React.Component{
    constructor () {
        super();
        this.state={
          seconds: 3,
        }
    }
      componentDidMount () {
        let timer = setInterval(() => {
          this.setState((preState) =>({
            seconds: preState.seconds - 1,
          }),() => {
            if(this.state.seconds == 0){
              clearInterval(timer);
            }
          });
        }, 1000)
      }
    render(){
        if (this.state.seconds === 0) {
            window.location.href='http://localhost:3000/adminhomepage/adminlogin';
        }
        return(
          <div className={AdminSuccessPageCss.page}>
            <div className={AdminSuccessPageCss.box}>
                <img src={require('./img/1.jpg')} className={AdminSuccessPageCss.img}/>
                <Link to="/adminhomepage/adminlogin" className={AdminSuccessPageCss.font}><u>页面将在<span>{this.state.seconds}</span>秒后自动跳转，也可单击此处跳转 </u></Link>
            </div>
          </div>
        )
    } 
}
