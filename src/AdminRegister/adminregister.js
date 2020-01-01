import React from 'react';
import {Form,Input,Tooltip,Icon,Select,Row,Col,Checkbox,Button} from 'antd';
// import './register.css';
import {Link} from 'react-router-dom';
  
const { Option } = Select;

var AdminRegisterPageCss = require('./adminregister.css');
class AdminRegisterPage extends React.Component {
  constructor(props){
    super(props)
}
register = e=>{
        this.props.history.push('/adminhomepage/adminsuccess')
  }
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('密码不一致！');
      } else {
        callback();
      }
    }; 
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }; 
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
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 9 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 7 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 9,
            offset: 11,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
    
      return (
        <div className={AdminRegisterPageCss.page}>
          <div className={AdminRegisterPageCss.box}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className={AdminRegisterPageCss.box}>
                <Form.Item label="邮箱">
                    {getFieldDecorator('email', {
                        rules: [
                        {
                        type: 'email',
                        message: '请输入您的邮箱号！',
                        },
                        {
                        required: true,
                        message: '请输入您的邮箱号！',
                        },
                    ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="密码" hasFeedback>
                    {getFieldDecorator('password', {
                    rules: [
                        {
                        required: true,
                        message: '请输入您的密码！',
                        },
                        {
                        validator: this.validateToNextPassword,
                        },
                    ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback>
                    {getFieldDecorator('confirm', {
                    rules: [
                        {
                        required: true,
                        message: '请确认您的密码！',
                        },
                        {
                        validator: this.compareToFirstPassword,
                        },
                    ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item
                    label={
                    <span>
                        昵称&nbsp;
                        <Tooltip title="What do you want others to call you?">
                        <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                    }
                >
                    {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: '请输入您的昵称！', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="手机号">
                    {getFieldDecorator('phone', {
                    rules: [{ required: true, message: '请输入您的手机号！' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="验证码">
                    <Row gutter={8}>
                    <Col span={12}>
                        {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: '请输入验证码！' }],
                        })(<Input />)}
                    </Col>
                    <Col span={12}>
                        <Button>获取验证码</Button>
                    </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                    rules: [
                      {
                      required: false,
                      message: '请勾选协议！',
                      },
                      {
                      validator: this.checked,
                      },
                  ],
                    })(
                    <Checkbox value={this.state.Click}>
                        I have read the <a href="">agreement</a>
                    </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" onClick={this.register}>
                      {/* <Link to="/success"> */}
                      立即注册
                      {/* </Link> */}
                    </Button>
                </Form.Item>
            </Form>
        </div>
      </div>
      );
    }
  }
export default Form.create()(AdminRegisterPage);
// id="accept"  disabled="true"