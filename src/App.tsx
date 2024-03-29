import React, {useEffect, useState} from 'react';
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch, Layout, Modal, Button, Checkbox, Form, type FormProps, Input } from 'antd';
import { Main } from "./components/main/main";
import { Footer } from "./components/layout/footer/footer";
import { GlobalStyle } from './components/GlobalStyle';

const { Header } = Layout;

const items: MenuProps['items'] = [
        {
        label: 'Sign in/Sign Up',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'Sign in',
                        key: 'setting:1',
                    },
                    {
                        label: 'Sign up',
                        key: 'setting:2',
                    },
                ],
            }
        ],
    }
];

const StorageKey = 'features-color-theme';

const supportedThemes = {
    light: 'light',
    dark: 'dark',
};

type Themes = keyof typeof supportedThemes;

const getTheme = (): Themes => {
    let theme = localStorage.getItem(StorageKey);

    if (!theme) {
        localStorage.setItem(StorageKey, 'light');
        theme = 'light';
    }

    return theme as Themes;
};

function App() {
    const [current, setCurrent] = useState('1');
    const [theme, setTheme] = useState<Themes>(getTheme);
    const [isModalInOpen, setIsModalInOpen] = useState(false);
    const [isModalUpOpen, setIsModalUpOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem(StorageKey, theme);
        console.log(localStorage.getItem(StorageKey));
        setTheme(theme);
    }, [theme]);

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
        localStorage.setItem(StorageKey, theme);
    };

    const showModalIn = () => {
        setIsModalInOpen(true);
    };
    const handleOkIn = () => {
        setIsModalInOpen(false);
    };
    const handleCancelIn = () => {
        setIsModalInOpen(false);
    };

    const showModalUp = () => {
        setIsModalUpOpen(true);
    };
    const handleOkUp = () => {
        setIsModalUpOpen(false);
    };
    const handleCancelUp = () => {
        setIsModalUpOpen(false);
    };

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        e.key === 'setting:1' ? showModalIn() : showModalUp();
        console.log(theme);
    };

    return (
    <div className="App" data-theme={theme}>
      <GlobalStyle />
      <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px'}} >
          <Switch
              checked={theme === 'dark'}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
          />
          <Menu onClick={onClick} selectedKeys={[current]} items={items} theme={theme} />

          <Modal title="Sign in" open={isModalInOpen} onOk={handleOkIn} onCancel={handleCancelIn}  footer="">
              <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
              >
                  <Form.Item<FieldType>
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                      <Input />
                  </Form.Item>

                  <Form.Item<FieldType>
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                      <Input.Password />
                  </Form.Item>

                  <Form.Item<FieldType>
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{ offset: 8, span: 16 }}
                  >
                      <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">
                          Submit
                      </Button>
                  </Form.Item>
              </Form>
          </Modal>

          <Modal title="Sign up" open={isModalUpOpen} onOk={handleOkUp} onCancel={handleCancelUp}  footer="">
              <p>Здесь мы прикрутим регу через гитхаб или гугл. И в целом сделаем один пункт "Войти"</p>
          </Modal>
      </Header>

        <Main sendTheme={theme} />
        <Footer />
    </div>
  );
}

export default App;
