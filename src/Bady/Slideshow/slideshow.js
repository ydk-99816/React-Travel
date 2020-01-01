import React  from 'react';
import './slideshow.css';
import { Carousel } from 'antd';

var SlideshowCss=require('./slideshow.css')

export default class contentPage extends React.Component{
render(){
  return(
    <div className={SlideshowCss.frame}>
    <Carousel autoplay>
      <div>
        <img src={require('../imags/2.jpg')} width={1020} height={395}/>
      </div>
      <div>
      <img src={require('../imags/3.jpg')} width={1020} height={395}/>
      </div>
      <div>
      <img src={require('../imags/4.jpg')} width={1020} height={395}/>
      </div>
      <div>
      <img src={require('../imags/5.jpg')} width={1020} height={395}/>
      </div>
      <div>
      <img src={require('../imags/6.jpg')} width={1020} height={395}/>
      </div>
    </Carousel>
    </div>
    ); 
  }  
}
document.getElementById('container');      