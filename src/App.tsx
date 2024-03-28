import React, {useState} from 'react';
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch, Layout } from 'antd';
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

function App() {
    const [current, setCurrent] = useState('1');
    const [theme, setTheme] = useState<MenuTheme>('light');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };
    return (
    <div className="App" style={{backgroundColor: theme}}>
      <GlobalStyle />
      <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px'}} >
          <Switch
              checked={theme === 'dark'}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
          />
          <Menu onClick={onClick} selectedKeys={[current]} items={items} theme={theme} />
      </Header>

        <Main />
        <Footer />
    </div>
  );
}

export default App;
