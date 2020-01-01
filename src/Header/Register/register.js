import React from 'react';
import { Divider,Input,Button, message } from 'antd';
import Axios from 'axios';
var RegisterCss = require('./register.css');

  export default class Register extends React.Component{
      constructor(props){
        super(props);
        this.state={}
      }
      changeValue=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }

      upload = () =>{
        var data = {
          "username":this.state.username,
          "password":this.state.password,
          "name":this.state.name,
          "age":this.state.age,
          "gender":this.state.gender,
        }

        //axios异步请求
        Axios.post({
            url:"/homepage/register",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("用户名已存在")
            }else if(result.state==1){
                message.info("注册成功")
            }
        })
      }
      render(){
          return(
              <div  className={RegisterCss.page}>
                  <div>
                  用户名：
                  <Input type="text" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}></Input>
                  </div>
                  <div>
                  密码：
                  <Input type="password" name="password" value={this.state.password} onChange={e=>this.changeValue(e)}></Input>
                  </div>
                  <div>
                  姓名：
                  <Input type="text" name="name" value={this.state.name} onChange={e=>this.changeValue(e)}></Input>
                  </div>
                  <div>
                  年龄：
                  <Input type="text" name="age" value={this.state.age} onChange={e=>this.changeValue(e)}></Input>
                  </div>
                  <div>
                  性别：
                  <Input type="text" name="gender" value={this.state.gender} onChange={e=>this.changeValue(e)}></Input>
                  </div>
                  <Button onClick={this.upload}>注册</Button>
              </div>
          );
      }
  }

//import React from 'react';
// import {Form,Input,Tooltip,Icon,Select,Row,Col,Checkbox,Button} from 'antd';
  
// const { Option } = Select;

// var RegisterCss = require('./register.css');
// class RegisterPage extends React.Component {
//   constructor(props){
//   super(props)
//   this.state={}
// }
// register = e=>{
//         this.props.history.push('/homepage/success')
//   }
//     state = {
//       confirmDirty: false,
//       autoCompleteResult: [],
//     };  
//     handleSubmit = e => {
//       e.preventDefault();
//       this.props.form.validateFieldsAndScroll((err, values) => {
//         if (!err) {
//           console.log('Received values of form: ', values);
//         }
//       });
//     };  
//     handleConfirmBlur = e => {
//       const { value } = e.target;
//       this.setState({ confirmDirty: this.state.confirmDirty || !!value });
//     };  
//     compareToFirstPassword = (rule, value, callback) => {
//       const { form } = this.props;
//       if (value && value !== form.getFieldValue('password')) {
//         callback('密码不一致！');
//       } else {
//         callback();
//       }
//     }; 
//     validateToNextPassword = (rule, value, callback) => {
//       const { form } = this.props;
//       if (value && this.state.confirmDirty) {
//         form.validateFields(['confirm'], { force: true });
//       }
//       callback();
//     }; 





    // checked = (rule) => {
    //   function disable() {
    //     document.getElementById("accept").disabled=true
    // }
    // function enable() {
    //   document.getElementById("accept").disabled=false
    // }
    // if(this.checked){
    //   enable()
    // }else{
    //   disable()
    // }
    // }





  //   render() {
  //     const { getFieldDecorator } = this.props.form;
  //     const formItemLayout = {
  //       labelCol: {
  //         xs: { span: 24 },
  //         sm: { span: 9 },
  //       },
  //       wrapperCol: {
  //         xs: { span: 24 },
  //         sm: { span: 7 },
  //       },
  //     };
  //     const tailFormItemLayout = {
  //       wrapperCol: {
  //         xs: {
  //           span: 24,
  //           offset: 0,
  //         },
  //         sm: {
  //           span: 9,
  //           offset: 11,
  //         },
  //       },
  //     };
  //     const prefixSelector = getFieldDecorator('prefix', {
  //       initialValue: '86',
  //     })(
  //       <Select style={{ width: 70 }}>
  //         <Option value="86">+86</Option>
  //         <Option value="87">+87</Option>
  //       </Select>,
  //     );
    
  //     return (
  //       <div className={RegisterCss.page}>
  //           <Form {...formItemLayout} onSubmit={this.handleSubmit} className={RegisterCss.box}>
  //               <Form.Item label="邮箱">
  //                   {getFieldDecorator('email', {
  //                       rules: [
  //                       {
  //                       type: 'email',
  //                       message: '请输入您的邮箱号！',
  //                       },
  //                       {
  //                       required: true,
  //                       message: '请输入您的邮箱号！',
  //                       },
  //                   ],
  //                   })(<Input />)}
  //               </Form.Item>
  //               <Form.Item label="密码" hasFeedback>
  //                   {getFieldDecorator('password', {
  //                   rules: [
  //                       {
  //                       required: true,
  //                       message: '请输入您的密码！',
  //                       },
  //                       {
  //                       validator: this.validateToNextPassword,
  //                       },
  //                   ],
  //                   })(<Input.Password />)}
  //               </Form.Item>
  //               <Form.Item label="确认密码" hasFeedback>
  //                   {getFieldDecorator('confirm', {
  //                   rules: [
  //                       {
  //                       required: true,
  //                       message: '请确认您的密码！',
  //                       },
  //                       {
  //                       validator: this.compareToFirstPassword,
  //                       },
  //                   ],
  //                   })(<Input.Password onBlur={this.handleConfirmBlur} />)}
  //               </Form.Item>
  //               <Form.Item
  //                   label={
  //                   <span>
  //                       昵称&nbsp;
  //                       <Tooltip title="What do you want others to call you?">
  //                       <Icon type="question-circle-o" />
  //                       </Tooltip>
  //                   </span>
  //                   }
  //               >
  //                   {getFieldDecorator('nickname', {
  //                   rules: [{ required: true, message: '请输入您的昵称！', whitespace: true }],
  //                   })(<Input />)}
  //               </Form.Item>
  //               <Form.Item label="手机号">
  //                   {getFieldDecorator('phone', {
  //                   rules: [{ required: true, message: '请输入您的手机号！' }],
  //                   })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
  //               </Form.Item>
  //               <Form.Item label="验证码">
  //                   <Row gutter={8}>
  //                   <Col span={12}>
  //                       {getFieldDecorator('captcha', {
  //                       rules: [{ required: true, message: '请输入验证码！' }],
  //                       })(<Input />)}
  //                   </Col>
  //                   <Col span={12}>
  //                       <Button>获取验证码</Button>
  //                   </Col>
  //                   </Row>
  //               </Form.Item>
  //               <Form.Item {...tailFormItemLayout}>
  //                   {getFieldDecorator('agreement', {
  //                   valuePropName: 'checked',
  //                   rules: [
  //                     {
  //                     required: false,
  //                     message: '请勾选协议！',
  //                     },
  //                     {
  //                     validator: this.checked,
  //                     },
  //                 ],
  //                   })(
  //                   <Checkbox value={this.state.Click}>
  //                       I have read the <a href="">agreement</a>
  //                   </Checkbox>,
  //                   )}
  //               </Form.Item>
  //               <Form.Item {...tailFormItemLayout}>
  //                   <Button type="primary" htmlType="submit" onClick={this.register}>
  //                     {/* <Link to="/success"> */}
  //                     立即注册
  //                     {/* </Link> */}
  //                   </Button>
  //               </Form.Item>
  //           </Form>
  //       </div>
  //     );
  //   }
  // }
  //export default Form.create()(RegisterPage);

  //export default Register;