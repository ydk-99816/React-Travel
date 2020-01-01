import React from 'react';
import { Tabs} from 'antd';
import './publicity.css';
import {Link} from 'react-router-dom';
const { TabPane } = Tabs;

var PublicityCss=require('./publicity.css');

export default class ContentPage extends React.Component{
render(){
	return(
	<div className={PublicityCss.cardcontainer}>
		<Tabs type="card">
		  <TabPane className={PublicityCss.card1} tab="当季最新" key="1">
			<p><Link to="/homepage">泸沽湖：</Link>看格桑花开遍草甸</p>
			<p><Link to="/homepage">青城山：</Link>青城天下幽</p>
			<p><Link to="/homepage">龙泉花果山：</Link>中国水蜜桃之乡</p>
			<p><Link to="/homepage">泸沽湖：</Link>看格桑花开遍草甸</p>
			<p><Link to="/homepage">泸沽湖：</Link>看格桑花开遍草甸</p>
			<p><Link to="/homepage">泸沽湖：</Link>看格桑花开遍草甸</p>
		  </TabPane>
		  <TabPane tab="当季热门" key="2">
			<p>Content of Tab Pane 2</p>
			<p>Content of Tab Pane 2</p>
			<p>Content of Tab Pane 2</p>
		  </TabPane>
		  <TabPane tab="经典分享" key="3">
			<p>Content of Tab Pane 3</p>
			<p>Content of Tab Pane 3</p>
			<p>Content of Tab Pane 3</p>
		  </TabPane>
		</Tabs>
	  </div>
	  );
	}
}

  