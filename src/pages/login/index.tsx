import { ProForm, ProFormText } from "@ant-design/pro-components";
import "./index.less";
import { Button } from "antd";

interface LoginFormData {
  username: string;
  password: string;
  imgVerifyCode: string;
}

const Login = () => {
  const login = async (values: LoginFormData) => {
    console.log(">>>login", values);
  };

  return (
    <div className="loginContainer">
      <div className="content">
        <img width={299} src="assets/logo.png" />
        <div className="title">变电站远程智能巡视系统</div>
        <ProForm
          requiredMark={false}
          onFinish={login}
          submitter={{
            render: () => (
              <Button type="primary" htmlType="submit" className="loginBtn">
                登录
              </Button>
            ),
          }}
        >
          <ProFormText
            label="用户名"
            name="username"
            placeholder="请输入用户名"
            rules={[{ required: true, message: "请输入用户名" }]}
          />
          <ProFormText.Password
            label="密码"
            name="password"
            placeholder="请输入密码"
            rules={[{ required: true, message: "请输入密码" }]}
          />
          <ProFormText
            label="图片验证码"
            name="imgVerifyCode"
            placeholder="请输入图片验证码"
            rules={[{ required: true, message: "请输入验证码" }]}
          />
        </ProForm>
      </div>
    </div>
  );
};

export default Login;
