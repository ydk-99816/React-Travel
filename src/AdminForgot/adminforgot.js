import React from 'react';
import {Link} from 'react-router-dom';
import {Form,Input,Select,Row,Col,Button} from 'antd';

const { Option } = Select;

var AdminForgotPageCss = require('./adminforgot.css');
class AdminForgotPage extends React.Component{
  constructor(props){
    super(props)
}
login = e=>{   
        this.props.history.push('/adminhomepage/adminlogin')
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
    checked = (rule) => {
        function disable() {
          document.getElementById("accept").disabled=true
      }
        function enable() {
        document.getElementById("accept").disabled=false
      }
        if(this.checked){
            enable()
      }else{
        disable()
      }
      }
    render(){
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
        return(
          <div className={AdminForgotPageCss.page}>
            <div className={AdminForgotPageCss.box}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="请输入手机号">
                    {getFieldDecorator('phone', {
                    rules: [
                        {
                             required: true, 
                             message: '请输入您的手机号！' 
                        },
                        {
                        validator: this.checked,
                        },
                    ],
                    })(<Input addonBefore={prefixSelector} style={{ width: '74.5%' }} />)}
                </Form.Item>
                <Form.Item label="请输入验证码">
                    <Row gutter={8}>
                    <Col span={12}>
                        {getFieldDecorator('captcha', {
                        rules: [
                            {
                                 required: true,
                                  message: '请输入验证码！' 
                            },
                            {
                            validator: this.checked,
                            },
                        ],
                        })(<Input />)}
                    </Col>
                    <Col span={12}>
                        <Button>获取验证码</Button>
                    </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Link to="/adminhomepage/adminlogin">
                        <Button type="primary" htmlType="submit" id="accept"  disabled="true">
                            马上找回
                        </Button>
                    </Link>
                </Form.Item>
                </Form>
            </div>
          </div>
        )
    }
}
export default Form.create()(AdminForgotPage);