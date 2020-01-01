import React from 'react';
import { Divider,Input,Button, message } from 'antd';
var FavoritePageCss = require('./favorite.css');


export default class FavoritePage extends React.Component{
    constructor(props){
            super(props);
            this.state={}
        }
    upload = ()=>{
        var data = {
            "number":this.state.number
        }

   //fetch异步请求
            fetch("/homepage/favorite",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
            if(result==2){
                message.info("已经添加过收藏了哦")
            }else if(result==1){
                message.info("收藏成功")
            }
        }).catch(e=>{
            message.error(e);
        })
    }

 
    

    render(){
        return(
            <div>
                <div name="number" value={this.state.number}><a  onClick={this.upload}>收藏任务1</a>
                </div>
                <div>收藏任务2</div>
                <div>收藏任务3</div>
            </div>
        )
    }
}