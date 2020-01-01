import React from 'react';
import BasicLayout from '../AdminHomePage/adminhomepage';
import { Link } from 'react-router-dom';

var AdminCollectionPageCss = require('./admincollection.css');
export default class AdminCollectionPage extends React.Component{
    render(){
        return(
            <BasicLayout>
                <div className={AdminCollectionPageCss.page}>
                    <div className={AdminCollectionPageCss.box}>
                        这是收藏数量界面
                    </div>
                </div>
            </BasicLayout>
        
        
        )
    }
}